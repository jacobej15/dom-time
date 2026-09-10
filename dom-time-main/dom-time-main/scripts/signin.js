
console.log('signin.js loaded');

const signinBtn = document.querySelector('#signinBtn');
const pwdBox = document.querySelector('#pwd-box');
const hardCodePwd = 'lasanga';
pwdBox.value = hardCodePwd;

const inputBoxes = document.getElementById('pwd-box');

const inputBoxesClasses = document.getElementsByClassName('pwd-class');

const inputBoxesTag = document.getElementsByTag('input');

//document.querySelector('#signinBtn').addEventListener('click', function () {});

signinBtn.addEventListener('click', function () {
    console.log('pwdBox value', pwdBox.value);
    const userPwd = pwdBox.value;

    

    console.log('userPwd value', userPwd);
    console.log('hardCodePwd value', hardCodePwd);

    if (userPwd === hardCodePwd) {
        console.log('signed in');
        sessionStorage.setItem('signedIn', 'true');
        window.location.href = 'pages/index.html';

    } else {
        console.log('NOT signed in ');
        document.querySelector('#message').textContent = 'nope, try again';
    }
});
