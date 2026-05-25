export type Feature = {
  label: string;
  description: string;
};

export const gmailFeatures: Feature[] = [
  {
    label: 'Limit main content width',
    description:
      'Choose small, medium, large, or full width for the inbox and reading pane. Full uses Gmail’s default layout.',
  },
  {
    label: 'Hide Gmail logo',
    description: 'Hide the Gmail logo link in the header.',
  },
  {
    label: 'Hide left sidebar menus until hover',
    description:
      'Hide Inbox, labels, and other items in the left sidebar. The main menu button stays subdued until you hover or focus it. Sidebar items appear when you hover the sidebar, the main menu button, or move focus into either. Compose stays visible unless floating Compose is on.',
  },
  {
    label: 'Move Compose to floating button',
    description:
      'Move Compose to a floating icon button in the bottom-right corner and hide it in the left sidebar.',
  },
  {
    label: 'Hide list toolbar until hover',
    description:
      'Hide the Select, Refresh, and action bar above your messages. It appears when you hover that area or tab into it.',
  },
  {
    label: 'Hide side panel (Add-on)',
    description: 'Hide the right add-on side panel and its toggle.',
  },
  {
    label: 'Hide search bar',
    description: 'Hide the mail search field in the header.',
  },
  {
    label: 'Show minimal search bar',
    description:
      'Show a compact centered search field that stays subdued until you hover or focus it. Expands to reveal the options icon and placeholder.',
  },
  {
    label: 'Hide top-right menu icons',
    description:
      'Collapse Support, Settings, Gemini, Google apps, and your account avatar. The chevron stays subdued until you hover or focus it.',
  },
  {
    label: 'Hide footer links',
    description: 'Hide Gmail footer links and promos.',
  },
];

export const youtubeFeatures: Feature[] = [
  {
    label: 'Hide left sidebar until hover',
    description:
      'Collapse the mini guide and reclaim horizontal space. Hover the left edge or Guide (hamburger) button to reveal navigation. A pinned full guide still opens normally.',
  },
  {
    label: 'Hide Create button',
    description: 'Hide the Create upload button in the top bar.',
  },
  {
    label: 'Hide notifications button',
    description: 'Hide the notifications bell in the top bar.',
  },
  {
    label: 'Hide voice search button',
    description: 'Hide the microphone button next to the search field.',
  },
  {
    label: 'Hide YouTube / Premium logo',
    description: 'Hide the YouTube or YouTube Premium logo in the header.',
  },
  {
    label: 'Hide search chips',
    description:
      'Hide the category filter chips below the search bar on the home feed.',
  },
  {
    label: 'Hide Shorts',
    description: 'Hide Shorts shelves and navigation entries.',
  },
  {
    label: 'Hide comments',
    description: 'Hide the comment section on watch pages.',
  },
  {
    label: 'Hide related videos',
    description: 'Hide the right-hand suggestions column.',
  },
  {
    label: 'Hide end screens',
    description: 'Hide end-screen overlays and cards in the player.',
  },
];

export const howItWorksSteps = [
  {
    step: '1',
    title: 'Install mnml',
    description: 'Add the extension from the Chrome Web Store.',
  },
  {
    step: '2',
    title: 'Open the side panel',
    description: 'Click the mnml icon in your toolbar to configure hides.',
  },
  {
    step: '3',
    title: 'Toggle what you hide',
    description:
      'Choose Gmail and YouTube options. Changes apply immediately—no reload when possible.',
  },
] as const;
