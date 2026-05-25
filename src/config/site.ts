export const siteConfig = {
  name: 'mnml',
  tagline: 'Minimal web UI',
  description:
    'Hide distracting UI on Gmail, YouTube, and more. A Chrome extension with a side panel to toggle what you hide—local-only, no analytics.',
  chromeStoreUrl:
    import.meta.env.PUBLIC_CHROME_STORE_URL ?? '#',
  githubUrl: import.meta.env.PUBLIC_GITHUB_URL,
} as const;

export const comingSoonPlatforms = [
  'Calendar',
  'X',
  'Facebook',
] as const;
