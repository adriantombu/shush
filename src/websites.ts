export const staticSites = [
  { url: 'facebook.com', selector: '[id^="hyperfeed_story_id"]' },
  { url: 'lemonde.fr', selector: '.article, .article--top, .teaser, .New' },
  { url: 'linkedin.com', selector: '.feed-shared-update-v2' },
]

export const dynamicSites = [
  { url: 'twitter.com', selector: 'article' },
  { url: 'facebook.com', selector: '[id^="hyperfeed_story_id"]' },
  { url: 'linkedin.com', selector: '.feed-shared-update-v2' },
]
