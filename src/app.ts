const browser = require('webextension-polyfill')
import { staticSites, dynamicSites } from './websites'

let muteList: string[] = []
const init = () => {
  const restoreOptions = values => {
    const words: Set<string> = values.words || new Set()

    for (const word of words) {
      muteList.push(word)
    }

    main()
  }

  browser.storage.local.get().then(restoreOptions)
}

const blur = (post: Element) => {
  if (muteList.some(word => post.textContent?.toLowerCase().includes(word))) {
    post.classList.add('shush-blurred')
    post.addEventListener(
      'mouseover',
      () => {
        post.classList.remove('shush-blurred')
      },
      { once: true },
    )
  }
}

const main = () => {
  const url = window.location.href
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        for (let i = 0; i < mutation.addedNodes.length; i++) {
          for (const dynamicSite of dynamicSites) {
            if (url.includes(dynamicSite.url)) {
              const post = mutation.addedNodes[i].parentElement?.closest(dynamicSite.selector)
              if (post) {
                blur(post)
              }
            }
          }
        }
      }
    })
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })

  for (const staticSite of staticSites) {
    if (url.includes(staticSite.url)) {
      document.querySelectorAll(staticSite.selector).forEach(blur)
    }
  }
}

init()
