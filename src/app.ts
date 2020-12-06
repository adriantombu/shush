import { storageGet } from './storage'
import { staticSites, dynamicSites } from './websites'

let option: string
let muteList: string[] = []
const init = async () => {
  option = await storageGet('option', 'blurred')
  const words = await storageGet('words', [])
  for (const word of words) {
    muteList.push(word)
  }

  main()
}

const blur = (post: Element) => {
  if (muteList.some(word => post.textContent?.toLowerCase().includes(word))) {
    post.setAttribute('data-shush', option)
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
