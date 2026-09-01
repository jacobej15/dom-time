 const helloBtn = document.querySelector('#hello-btn')
 const helloBox = document.querySelector('#hello-box')
 const userGreeting = document.querySelector('#user-greeting')
 const terminal = document.querySelector('#terminal')

 console.log('whats in the helloBox variable', helloBox)


  helloBtn.addEventListener('click', () => {
    console.log('hellobox value', helloBox.value)
    window.alert('hello!')
    userGreeting.textContent = ' hi there!' + helloBox.value;

     const line = document.createElement('p')

     line.textContent = helloBox.value;

     terminal.appendChild(line)
  })