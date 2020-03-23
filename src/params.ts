import { storageGet, storageSet } from './storage'

const init = async () => {
  const words: Set<string> = new Set(await storageGet('words', []))

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

const deleteListener = async e => {
  const node = e.currentTarget as HTMLButtonElement
  const value = node?.getAttribute('data-value')
  const word = (value || '').toLowerCase().trim()

  if (word !== '') {
    await updateWords(word, 'delete')
    window.location.reload()
  }
}

const updateWords = async (word: string, action: 'add' | 'delete') => {
  let words: Set<string> = new Set(await storageGet('words', []))
  if (action === 'add') {
    words.add(word)
  } else {
    words.delete(word)
  }

  await storageSet('words', Array.from(words))
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
document.getElementById('reset')?.addEventListener('click', async () => {
  if (confirm('This will permanently delete all your muted words')) {
    await storageSet('words', [])
    window.location.reload()
  }
})
