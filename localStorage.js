import CryptoJS from 'crypto-js';

const KEY = 'gXd4%04@2!5nsd#d0';
const getEncryptedStr = (str, key) => CryptoJS.AES.encrypt(str, key).toString();
const getDecryptedStr = (str, key) => CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8);

export default class local {
  static set = (key, object) => {
    if (typeof object === 'undefined') {
      return;
    }
    const str = JSON.stringify(object);

    localStorage.setItem(key, getEncryptedStr(str, KEY));
  };

  static get = (key) => {
    try {
      const object = localStorage.getItem(key);
      if (typeof object === 'undefined') {
        return undefined;
      }
      return JSON.parse(getDecryptedStr(object, KEY));
    } catch {
      return undefined;
    }
  };
  
  static remove = (key) => {
    localStorage.removeItem(key);
  };

  static clear = () => {
    localStorage.clear();
  };
}
