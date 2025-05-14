const localStorage = () => {
  const setLocalStorage = <T>(keys: string, value: T) => {
    chrome.storage.local.set({ [keys]: value as T })
  }

  const getLocalStorage = <T>(keys: string, callback: (value: T) => void) => {
    chrome.storage?.local?.get(keys, (data) => {
      if (data[keys]) {
        callback(data[keys] as T)
      }
    })
  }
  return {
    setLocalStorage,
    getLocalStorage
  }
}

export default localStorage