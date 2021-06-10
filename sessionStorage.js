import CryptoJS from 'crypto-js';

const KEY = 'gXd4%04@2!5nsd#d0';
const getEncryptedStr = (str, key) => CryptoJS.AES.encrypt(str, key).toString();
const getDecryptedStr = (str, key) => CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8);

export default class session {
  static set = (key, object) => {
    if (typeof object === 'undefined') {
      return;
    }
    const str = JSON.stringify(object);

    sessionStorage.setItem(key, getEncryptedStr(str, KEY));
  };

  static get = (key) => {
    try {
      const object = sessionStorage.getItem(key);
      if (typeof object === 'undefined') {
        return undefined;
      }
      return JSON.parse(getDecryptedStr(object, KEY));
    } catch {
      return undefined;
    }
  };

  static remove = (key) => {
    sessionStorage.removeItem(key);
  };
  
  static clear = () => {
    sessionStorage.clear();
  };

}
