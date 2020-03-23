const browser = require('webextension-polyfill')

export const storageSet = async (name: string, value: any): Promise<void> => {
  return await browser.storage.local.set({ [name]: value })
}

export const storageGet = async (name: string, fallback?: any): Promise<any> => {
  const values = await browser.storage.local.get(name)

  return !!values[name] ? values[name] : fallback
}
