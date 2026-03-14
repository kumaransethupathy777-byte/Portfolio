// @ts-ignore
import { render } from '../dist-ssr/entry-server.js';

interface PagesFunction {
  (context: any): Promise<Response> | Response;
}

const BOT_AGENTS = [
  /googlebot/i,
  /bingbot/i,
  /yandexbot/i,
  /baiduspider/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /rogerbot/i,
  /linkedinbot/i,
  /embedly/i,
  /quora link preview/i,
  /showyoubot/i,
  /outbrain/i,
  /pinterest/i,
  /slackbot/i,
  /vkshare/i,
  /w3c_validator/i,
  /redditbot/i,
  /applebot/i,
  /whatsapp/i,
  /flipboard/i,
  /tumblr/i,
  /bitlybot/i,
  /skypeuripreview/i,
  /nuzzel/i,
  /discordbot/i,
  /qwantify/i,
  /bitrix link preview/i,
  /xing-content-uiviewer/i,
  /telegrambot/i,
  /google-inspectiontool/i
];

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const userAgent = context.request.headers.get('user-agent') || '';

  // Only intercept HTML requests for the root or pages
  const isHtml = context.request.headers.get('accept')?.includes('text/html') || 
                 url.pathname.endsWith('.html') || 
                 !url.pathname.includes('.');
  
  const isBot = BOT_AGENTS.some(regex => regex.test(userAgent));

  if (isBot && isHtml) {
    const response = await context.next();
    const template = await response.text();
    
    try {
      const appHtml = render();
      
      // Use regex to find the root div, handling potential whitespace/attributes
      const ssrHtml = template.replace(
        /(<div\s+id="root"[^>]*>)\s*(<\/div>)/i,
        `$1${appHtml}$2`
      );
      
      return new Response(ssrHtml, {
        headers: {
          ...Object.fromEntries(response.headers),
          'content-type': 'text/html;charset=UTF-8',
          'X-Render-Mode': 'SSR',
          'X-Bot-Detected': 'true'
        },
      });
    } catch (error) {
      console.error('SSR error:', error);
      return new Response(template, {
        headers: {
          ...Object.fromEntries(response.headers),
          'X-Render-Mode': 'SSR-Fallback',
          'X-SSR-Error': String(error)
        }
      });
    }
  }

  const response = await context.next();
  const modifiedResponse = new Response(response.body, response);
  modifiedResponse.headers.set('X-Render-Mode', 'CSR');
  return modifiedResponse;
};
