let myImage = document.querySelector('img');


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Why you should watch JJBA, ' + myName;
  }if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    function setUserName() {
        let myName = prompt('Please enter your name.');
        if(!myName) {
          setUserName();
        } else {
          localStorage.setItem('name', myName);
          myHeading.innerHTML = 'It is badass, ' + myName;
        }
      }
  }myButton.onclick = function() {
    setUserName();
  }
  