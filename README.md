# String Encrpytion

Simple Template for encryption and decryption of Strings with JavaScript using Web Cryptography API

## Getting Started

1. Open the [Github Page](https://elpaisik.github.io/StringEncrypt/pages/forms.html) of this project. 
2. Choose if you want to use AES-GCM (encouraged) or AES-CBC (only use for backwards compatibility) standard for encryption.
3. Encrypt a string
    1. Fill out forms "String to encrypt" & "Password"
    2. Click Button "Create new pseudo-random vector"
    3. Click Button "Encrypt"
    3. Safe vector, password and encrypted string in a local file (the vector does not have to be kept secret according to [wikipedia](https://en.wikipedia.org/wiki/Initialization_vector) and [this stackexchange entry](https://security.stackexchange.com/questions/17044/when-using-aes-and-cbc-is-it-necessary-to-keep-the-iv-secret), but you should use a new vector for every encryption).
4. Decrypt a string
    1. Enter "Password" and "Vector", which were earlier used for encryption
    2. Click Button "Decrypt"

## References 

### Web Cryptography API
* [SubtleCrypte Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto)
* [qnimate](http://qnimate.com/)
    * [Symmetric Encryption using Web Cryptography API](http://qnimate.com/symmetric-encryption-using-web-cryptography-api/)
* [Daniel Roesler's Webrypto examples](https://github.com/diafygi/webcrypto-examples)
    * [Web Cryptography API Live Table](https://diafygi.github.io/webcrypto-examples/)
    * [AES-GCM examples](https://github.com/diafygi/webcrypto-examples/#aes-gcm)
    * [AES-CBC examples](https://github.com/diafygi/webcrypto-examples/#aes-cbc)
* [w3 WebCryptoAPI](https://www.w3.org/TR/WebCryptoAPI/)
    * [encrypt method](https://www.w3.org/TR/WebCryptoAPI/#SubtleCrypto-method-encrypt)
    * [decrypt method](https://www.w3.org/TR/WebCryptoAPI/#SubtleCrypto-method-decrypt)
    * [AES-GCM](https://www.w3.org/TR/WebCryptoAPI/#aes-gcm)
    * [AES-CBC](https://www.w3.org/TR/WebCryptoAPI/#aes-cbc)
    * [JavaScript Example Code](https://www.w3.org/TR/WebCryptoAPI/#examples-section)

### Bootstrap Theme [SB Admin 2](http://startbootstrap.com/template-overviews/sb-admin-2/)

[SB Admin 2](http://startbootstrap.com/template-overviews/sb-admin-2/) is an open source, admin dashboard template for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).

## Creator

Created and maintained by [Patrik Dreher](https://elpaisik.github.io/).

