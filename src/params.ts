const browser = require('webextension-polyfill')

const init = () => {
  const restoreOptions = values => {
    const words: Set<string> = values.words || new Set()

    for (const word of words) {
      const buttonNode = document.createElement('input')
      buttonNode.type = 'button'
      buttonNode.value = 'x'
      buttonNode.classList.add('delete')
      buttonNode.setAttribute('data-value', word)
      const spanNode = document.createElement('span')
      spanNode.textContent = word

      const liNode = document.createElement('li')
      liNode.appendChild(buttonNode)
      liNode.appendChild(spanNode)

      document.getElementById('words')?.append(liNode)
      buttonNode.addEventListener('click', deleteListener)
    }
  }

  browser.storage.local.get().then(restoreOptions)
}

const deleteListener = async e => {
  const node = e.currentTarget as HTMLButtonElement
  const value = node?.getAttribute('data-value')
  const word = (value || '').toLowerCase().trim()

  if (word !== '') {
    await updateWords(word, 'delete')
    window.location.reload()
  }
}

const updateWords = (word: string, action: 'add' | 'delete') => {
  return new Promise(resolve => {
    const update = values => {
      let words: Set<string> = values.words || new Set()

      if (action === 'add') {
        words.add(word)
      } else {
        words.delete(word)
      }

      browser.storage.local.set({ words }).then(resolve)
    }

    browser.storage.local.get().then(update)
  })
}

const loadWords = async (url: string) => {
  try {
    const res = await fetch(url)
    const list = await res.text()
    const words = list.split(',')

    for (const word of words) {
      const clean = word.toLowerCase().trim()

      if (clean !== '') {
        await updateWords(clean, 'add')
      }
    }

    window.location.reload()
  } catch {
    console.error('Could not fetch or parse the muted list')
  }
}

document.addEventListener('DOMContentLoaded', init)
document.getElementById('add')?.addEventListener('click', async () => {
  const node = document.getElementById('add-value') as HTMLInputElement
  const value = node.value.toLowerCase().trim()
  node.value = ''

  if (value !== '') {
    await updateWords(value, 'add')
    window.location.reload()
  }
})
document.querySelectorAll('.delete').forEach(elem => {
  elem.addEventListener('click', deleteListener)
})
document.getElementById('import')?.addEventListener('click', () => {
  const node = document.getElementById('import-value') as HTMLInputElement
  const url = node.value.toLowerCase().trim()

  if (url !== '') {
    loadWords(url)
  }
})
document.getElementById('reset')?.addEventListener('click', () => {
  if (confirm('This will permanently delete all your muted words')) {
    browser.storage.local.set({ words: new Set() }).then(() => window.location.reload())
  }
})
