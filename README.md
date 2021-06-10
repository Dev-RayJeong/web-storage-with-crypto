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
