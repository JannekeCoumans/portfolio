const StorageHandler = {
  get: (item) => {
    const data = JSON.parse(localStorage.getItem(item));
    
    return data;
  },

  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove: (key) => {
    localStorage.removeItem(key);
  }
};

export default StorageHandler;