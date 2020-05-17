const youtubeSelectors = [
  'ytd-video-renderer #dismissable',
  'ytd-rich-grid-video-renderer #dismissable',
  'ytd-grid-video-renderer #dismissable',
  'ytd-playlist-video-renderer #content',
  'ytd-playlist-panel-video-renderer #container',
  'ytd-compact-video-renderer #dismissable',
  'ytd-compact-radio-renderer #dismissable',
  'ytd-clarification-renderer .container',
  '#primary-inner #player',
  '#primary-inner #info',
  '#primary-inner #meta',
]

export const staticSites = [
  // Social networks
  { url: 'facebook.com', selector: '[id^="hyperfeed_story_id"]' },
  { url: 'linkedin.com', selector: '.feed-shared-update-v2' },
  { url: 'youtube.com', selector: youtubeSelectors.join(',') },

  // France
  {
    url: 'lemonde.fr',
    selector: [
      '.zone--homepage .article',
      '.zone--homepage .article--top',
      '.zone--homepage .teaser',
      '.Live__center .New',
    ].join(','),
  },
  {
    url: 'liberation.fr',
    selector: ['.home-une', '.home-article', '.municipal-content', '.top100-link', '.live-content'].join(','),
  },
  { url: 'lesechos.fr', selector: ['[class^="ArticleItemstyle"]', '[class^="particles__Li"]'].join(',') },
  {
    url: 'lci.fr',
    selector: [
      'section[class^="article-xl-blk"]',
      'article[class^="article-xl-blk"]',
      '.grid-blk__item',
      '.xl-thematic-blk__list',
      '.topic-3col-item-blk',
      '.timeline-item-blk',
      '.follow-up-blk__list-item',
    ].join(','),
  },
  { url: 'lopinion.fr', selector: ['.bloc-une', '.article-snippet', '.billet-snippet'].join(',') },
  {
    url: 'lefigaro.fr',
    selector: [
      '.home-event > div:nth-child(2)',
      '.home-event li',
      '.css-1m9vvlb',
      'figaro-video-loop',
      ' .css-oyko9t',
      '.css-fb9bp6',
      '.css-1ebnygn',
    ].join(','),
  },
  { url: '20minutes.fr', selector: ['.preview', '.block-list-item', '.gallery-item'].join(',') },
  { url: 'leparisien.fr', selector: ['.story-preview', 'a.relative'].join(',') },
  {
    url: 'humanite.fr',
    selector: [
      '.panel-pane[class*="pane-rubrique"]',
      '.views-row',
      '.panel_home .node-article',
      '[class^="home-selection"]',
      '[class*="node-rubrique"]',
    ].join(','),
  },
  {
    url: 'latribune.fr',
    selector: [
      '.main-article',
      '.secondary-article',
      '.article-wrapper',
      '.daily-article-title',
      '[class^="section-article"]',
      '.overlaid-media-wrapper',
      '#bloc-toparticle-view li',
      '.img-links-wrapper li',
    ].join(','),
  },
  { url: 'francesoir.fr', selector: ['.carousel-inner .item', '.view-content .views-row'].join(',') },
  { url: 'lequipe.fr', selector: ['.Home__widget', '.Chrono__item'].join(',') },
  { url: 'eurosport.fr', selector: ['.storylist-container', '.storylist-container-latest'].join(',') },
  { url: 'rugbyrama.fr', selector: ['.storylist-container', '.storylist-container-latest'].join(',') },

  // Belgium
  { url: 'dhnet.be', selector: ['.teaser', '.listing_item_link'].join(',') },
  { url: 'lalibre.be', selector: ['.teaser', '.listing_item_link'].join(',') },

  // USA
  {
    url: 'nytimes.com',
    selector: ['.eqveam63 > div', '.css-dh19r0 .css-tub26b', '.css-18cmw3s', '.css-9ikre1'].join(','),
  },
]

export const dynamicSites = [
  // Social networks
  { url: 'twitter.com', selector: 'article' },
  { url: 'facebook.com', selector: '[id^="hyperfeed_story_id"]' },
  { url: 'linkedin.com', selector: '.feed-shared-update-v2' },
  { url: 'youtube.com', selector: youtubeSelectors.join(',') },

  // France
  { url: 'lemonde.fr', selector: '.Live__center .New' },
  { url: 'liberation.fr', selector: '.live-content' },
  { url: 'lequipe.fr', selector: ['.Home__widget', '.Chrono__item'].join(',') },

  // USA
  { url: 'nytimes.com', selector: ['article:not(#story)', '.css-798wq2', '.css-18cmw3s', '.css-9ikre1'].join(',') },
]
