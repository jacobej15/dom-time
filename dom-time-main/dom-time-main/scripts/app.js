 // declare global variables for dom elements
 let helloBtn = " ";
 let helloBox = "";
 let userGreeting = " ";
 let terminal = " ";

 document.addEventListener("DOMContentLoaded", () => {
    //console.log("The DOM is ready!");

    initDomStuff();
    addListerners();

});


function initDomStuff() {
  // grab all dom stuff in vars
  helloBtn = document.querySelector('#hello-btn');
  helloBox = document.querySelector('#hello-box');
  userGreeting = document.querySelector('#user-greeting');
  terminal = document.querySelector('#terminal');
 console.log('dom variable initialized. godspeed. ');
}



 console.log('whats in the helloBox variable', helloBox);

function addListerners() {
  helloBtn.addEventListener('click', () => {

    sessionStorage.setItem('userName', helloBox.value);

    console.log('hellobox value', helloBox.value);
    window.alert('hello!');
    userGreeting.textContent = ' hi there!' + helloBox.value;

     const line = document.createElement('p');

     line.textContent = helloBox.value;

     terminal.appendChild(line);
  });
}