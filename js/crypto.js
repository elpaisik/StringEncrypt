// ################### global functions ##################
function createRandomVector(encType) {
    if (encType === "CBC") {
        var vector = crypto.getRandomValues(new Uint8Array(16));
        document.getElementById("vec_CBC").value = vector;
    } else if (encType === "GCM") {
        var vector = crypto.getRandomValues(new Uint8Array(12));
        document.getElementById("vec_GCM").value = vector;
    }

}

function convertStringToArrayBufferView(str) {
    var bytes = new Uint8Array(str.length);
    for (var iii = 0; iii < str.length; iii++) {
        bytes[iii] = str.charCodeAt(iii);
    }

    return bytes;
}

function convertArrayBufferViewtoString(buffer) {
    var str = "";
    for (var iii = 0; iii < buffer.byteLength; iii++) {
        str += String.fromCharCode(buffer[iii]);
    }

    return str;
}

// ################### AES-GCM ###########################
// see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt for reference
let keyGCM = null;

function encryptGCM() {
    const password = document.getElementById("pwd_GCM").value;
    // console.log(password);

    crypto.subtle.digest({
        name: "SHA-256"
    }, convertStringToArrayBufferView(password)).then(function (result) {

        window.crypto.subtle.importKey("raw", result, {
            name: "AES-GCM"
        }, false, ["encrypt", "decrypt"]).then(function (e) {
            keyGCM = e;
            encrypt_dataGCM();
        }, function (e) {
            console.log(e);
        });

    });
}

function encrypt_dataGCM() {
    const data = document.getElementById("data_GCM").value;
    // console.log(data);

    const vector = new Uint8Array(JSON.parse("[" + document.getElementById("vec_GCM").value + "]"));
    // console.log(vector);

    crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: vector
    }, keyGCM, convertStringToArrayBufferView(data)).then(
        function (result) {
            let encrypted_data = new Uint8Array(result);
            // console.log(encrypted_data);
            document.getElementById("encryptedGCM").value = convertArrayBufferViewtoString(encrypted_data)
        },
        function (e) {
            console.log(e.message);
        }
    );
}

function decryptGCM(){
    const password = document.getElementById("pwd_GCM").value;
    // console.log(password);
    document.getElementById("data_GCM").value = null;

    crypto.subtle.digest({
        name: "SHA-256"
    }, convertStringToArrayBufferView(password)).then(function (result) {

        window.crypto.subtle.importKey("raw", result, {
            name: "AES-GCM"
        }, false, ["encrypt", "decrypt"]).then(function (e) {
            keyGCM = e;
            decrypt_dataGCM();
        }, function (e) {
            console.log(e);
        });

    });
}

function decrypt_dataGCM() {
    const vector = new Uint8Array(JSON.parse("[" + document.getElementById("vec_GCM").value + "]"));
    const encrypted_data = convertStringToArrayBufferView(document.getElementById("encryptedGCM").value);
    // console.log(encrypted_data);

    crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: vector
    }, keyGCM, encrypted_data).then(
        function (result) {
            let decrypted_data = new Uint8Array(result);
            let str_decrypted = convertArrayBufferViewtoString(decrypted_data);
            // console.log(str_decrypted);
            document.getElementById("dencryptedGCM").value = str_decrypted
        },
        function (e) {
            console.log(e.message);
        }
    );
}


// ################### AES-CBC ###########################
// See http://qnimate.com/passphrase-based-encryption-using-web-cryptography-api/ for reference
let keyCBC = null;

function encryptCBC() {
    const password = document.getElementById("pwd_CBC").value;
    // console.log(password);

    crypto.subtle.digest({
        name: "SHA-256"
    }, convertStringToArrayBufferView(password)).then(function (result) {

        window.crypto.subtle.importKey("raw", result, {
            name: "AES-CBC"
        }, false, ["encrypt", "decrypt"]).then(function (e) {
            keyCBC = e;
            encrypt_dataCBC();
        }, function (e) {
            console.log(e);
        });

    });
}

function decryptCBC(){
    const password = document.getElementById("pwd_CBC").value;
    // console.log(password);
    document.getElementById("data_CBC").value = null;

    crypto.subtle.digest({
        name: "SHA-256"
    }, convertStringToArrayBufferView(password)).then(function (result) {

        window.crypto.subtle.importKey("raw", result, {
            name: "AES-CBC"
        }, false, ["encrypt", "decrypt"]).then(function (e) {
            keyCBC = e;
            decrypt_dataCBC();
        }, function (e) {
            console.log(e);
        });

    });
}

function encrypt_dataCBC() {
    const data = document.getElementById("data_CBC").value;
    // console.log(data);

    const vector = new Uint8Array(JSON.parse("[" + document.getElementById("vec_CBC").value + "]"));
    // console.log(vector);

    crypto.subtle.encrypt({
        name: "AES-CBC",
        iv: vector
    }, keyCBC, convertStringToArrayBufferView(data)).then(
        function (result) {
            let encrypted_data = new Uint8Array(result);
            // console.log(encrypted_data);
            document.getElementById("encryptedCBC").value = convertArrayBufferViewtoString(encrypted_data)
        },
        function (e) {
            console.log(e.message);
        }
    );
}

function decrypt_dataCBC() {
    const vector = new Uint8Array(JSON.parse("[" + document.getElementById("vec_CBC").value + "]"));
    const encrypted_data = convertStringToArrayBufferView(document.getElementById("encryptedCBC").value);
    // console.log(encrypted_data);

    crypto.subtle.decrypt({
        name: "AES-CBC",
        iv: vector
    }, keyCBC, encrypted_data).then(
        function (result) {
            let decrypted_data = new Uint8Array(result);
            let str_decrypted = convertArrayBufferViewtoString(decrypted_data);
            // console.log(str_decrypted);
            document.getElementById("dencryptedCBC").value = str_decrypted
        },
        function (e) {
            console.log(e.message);
        }
    );
}