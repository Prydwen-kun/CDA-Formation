class Storage {
  static saveToLocalStorage(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error("Error saving to local storage", error);
    }
  }

  static getFromLocalStorage(key) {
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error("Error retrieving from local storage", error);
      return null;
    }
  }

  static removeFromLocalStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from local storage", error);
    }
  }
  static clearLocalStorage() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing local storage", error);
    }
  }
}

export default Storage;