import CryptoJS from 'crypto-js';

const KEY = 'UNIQUE_KEY_WHAT_YOU_WANT';
const getEncryptedStr = (str: string, key: string): string => CryptoJS.AES.encrypt(str, key).toString();
const getDecryptedStr = (str: string, key: string): string =>
  CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8);

export default class local {
  static set = (key: string, object: any): void => {
    if (typeof object === 'undefined') {
      return;
    }

    const str = JSON.stringify(object);

    localStorage.setItem(key, getEncryptedStr(str, KEY));
  };

  static get = (key: string): any => {
    try {
      const object = localStorage.getItem(key)!;
      if (typeof object === 'undefined') {
        return undefined;
      }
      return JSON.parse(getDecryptedStr(object, KEY));
    } catch {
      return undefined;
    }
  };

  static remove = (key: string): void => {
    localStorage.removeItem(key);
  };

  static clear = (): void => {
    localStorage.clear();
  };
}
