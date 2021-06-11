

# web-storage-with-crypto
Web session storage and local storage with crypto(supported TypeScript)
You can save JavaScript objects by converting it to encrypted string using this library

This library needs crypto-js dependency
```bash
npm install crypto-js
```

## 1. Session Storage

**Usage:** 
```javascript
import session from './sessionStorage.js';
```	    
You should set unique key to encrypt and decrypt your object's key
```javascript
const KEY = 'UNIQUE_KEY_WHAT_YOU_WANT';
```	
* Set object to session storage 
  ```javascript
  session.set(key);
  ```
* Get object from session storage
  ```javascript
  session.get(key);
  ```
* Remove object from session storage
  ```javascript
  session.remove(key);
  ```
* Remove all objects from session storage
  ```javascript
  session.clear();
  ```

**sessionStorage.js**
```javascript
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
```javascript
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
```javascript	
import local from './localStorage.js';
```	    
You should set unique key to encrypt and decrypt your object's key
```javascript
const KEY = 'UNIQUE_KEY_WHAT_YOU_WANT';
```	
* Set object to local storage 
  ```javascript
  local.set(key);
  ```
* Get object from local storage
  ```javascript
  local.get(key);
  ```
* Remove object from local storage
  ```javascript
  local.remove(key);
  ```
* Remove all objects from local storage
  ```javascript
  local.clear();
  ```
  
**localStorage.js**
```javascript
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
```javascript
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
