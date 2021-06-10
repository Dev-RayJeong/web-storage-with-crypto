
# web-storage-with-crypto
Web session storage and local storage with crypto(supported TypeScript)
You can save JavaScript objects by converting it to encrypted string using this library

This library needs crypto-js dependency

    npm install crypto-js
 

## 1. Session Storage

**Usage:** 
	
	 import session from './sessionStorage.js';
	    
You should set unique key to encrypt and decrypt your object's key

	 const KEY = 'UNIQUE_KEY_WHAT_YOU_WANT';
	
* Set object to session storage 

       session.set(key);

* Get object from session storage

       session.get(key);

* Remove object from session storage

       session.remove(key);
	
* Remove all objects from session storage

       session.clear();

**sessionStorage.js**
```
import CryptoJS from 'crypto-js';

const KEY = 'UNIQUE_KEY_WHAT_YOU_WANT';
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
```

**sessionStorage.ts**
```
import CryptoJS from 'crypto-js';

const KEY = 'UNIQUE_KEY_WHAT_YOU_WANT';
const getEncryptedStr = (str: string, key: string): string => CryptoJS.AES.encrypt(str, key).toString();
const getDecryptedStr = (str: string, key: string): string =>
  CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8);

export default class session {
  static set = (key: string, object: any): void => {
    if (typeof object === 'undefined') {
      return;
    }
    const str = JSON.stringify(object);

    sessionStorage.setItem(key, getEncryptedStr(str, KEY));
  };

  static get = (key: string): any => {
    try {
      const object = sessionStorage.getItem(key)!;
      if (typeof object === 'undefined') {
        return undefined;
      }
      return JSON.parse(getDecryptedStr(object, KEY));
    } catch {
      return undefined;
    }
  };

  static remove = (key: string): void => {
    sessionStorage.removeItem(key);
  };

  static clear = (): void => {
    sessionStorage.clear();
  };
}
```

## 2. Local Storage

 
Usage: 
	
     import local from './localStorage.js';
	    
You should set unique key to encrypt and decrypt your object's key

     const KEY = 'UNIQUE_KEY_WHAT_YOU_WANT';
	
* Set object to local storage 

       local.set(key);

* Get object from local storage

       local.get(key);

* Remove object from local storage

       local.remove(key);
	
* Remove all objects from local storage

       local.clear();

**localStorage.js**
```
import CryptoJS from 'crypto-js';

const KEY = 'UNIQUE_KEY_WHAT_YOU_WANT';
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
```

**localStorage.ts**
```
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
```
