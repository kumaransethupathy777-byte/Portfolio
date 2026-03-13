import { render } from '../src/entry-server';

const BOT_AGENTS = [
  'googlebot',
  'bingbot',
  'yandexbot',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest/0.',
  'developers.google.com/+/web/snippet',
  'slackbot',
  'vkshare',
  'w3c_validator',
  'redditbot',
  'applebot',
  'whatsapp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'skypeuripreview',
  'nuzzel',
  'discordbot',
  'google pageadviser',
  'qwantify',
  'pinterestbot',
  'bitrix link preview',
  'xing-content-uiviewer',
  'chrome-lighthouse',
  'telegrambot',
  'google-inspectiontool'
];

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const userAgent = context.request.headers.get('user-agent')?.toLowerCase() || '';

  // Only intercept HTML requests
  const isHtml = context.request.headers.get('accept')?.includes('text/html') || url.pathname.endsWith('.html') || !url.pathname.includes('.');
  
  if (!isHtml) {
    return context.next();
  }

  const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot));

  if (isBot) {
    console.log(`Bot detected: ${userAgent}. Performing SSR.`);
    
    // Get the original response (index.html)
    const response = await context.next();
    const template = await response.text();
    
    try {
      // Render the app to string
      const appHtml = render();
      
      // Inject the rendered app into the template
      // We look for the root div and inject the content
      const ssrHtml = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );
      
      return new Response(ssrHtml, {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      });
    } catch (error) {
      console.error('SSR Rendering error:', error);
      // Fallback to original response if SSR fails
      return new Response(template, {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      });
    }
  }

  // Not a bot, proceed as usual (CSR)
  return context.next();
};
