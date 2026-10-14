export const getURL = (): string => {
  const url =
    process.env?.URL && process.env.URL !== ""
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ""
        ? process.env.VERCEL_URL
        : "http://localhost:3000";
  return url.includes("http") ? url : `https://${url}`;
};

const DEFAULT_TITLE = "Hello from Afif 👋🏼";
const DEFAULT_TITLE_TEMPLATE = "Hello from Afif 👋🏼 | %s";
const DEFAULT_DESCRIPTION =
  "My Personal Website, hit the button if you like to visit me.";
const DEFAULT_CANONICAL = getURL();
const SITE_NAME = "Afif Abdillah Jusuf";
const DEFAULT_OG_IMAGE = `${DEFAULT_CANONICAL}/profile.jpg`;
const TWITTER_HANDLE = "@bungambohlah";
const TWITTER_CARD_TYPE = "summary_large_image";
const FAVICON_LINK = "/favicon.ico";

export const SEO = {
  DEFAULT_TITLE,
  DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  TWITTER_HANDLE,
  TWITTER_CARD_TYPE,
  FAVICON_LINK,
};
