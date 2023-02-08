
  // register - " baby name , DOB, and parent name"
  // login - " Childs name and a pin code"
  // Name of Baby - " a square image of baby's photo "
  // incident type - " Types will appear in a line spaced out in squares with type name "
  // --- throw up , fever , diaper change , medicine - " all will have properties like {desc}"
  // time of event
let headerElement = document.getElementById('heading');

let registerDisplay = document.getElementById('register');
let loginDisplay = document.getElementById('login');
let homeDisplay = document.getElementById('home');
let registerBttn = document.getElementById('register-bttn');

let bnameInput = document.querySelector('.baby-name');
let dobInput = document.querySelector('.dob');
let pnameInput = document.querySelector('.parent-name');
let relationInput = document.querySelector('.relation');

loginDisplay.hidden = true;
homeDisplay.hidden = true;


function registrationSubmit() {
  let babyProfile = { 
    child: bnameInput.value,
    dob: dobInput.value,
    parent: pnameInput.value,
    relation: relationInput.value
  };
  
  registerDisplay.hidden = true;
  let myPin = createPin(babyProfile.child.slice(0,2))
  headerElement.textContent = `Hello ${babyProfile.parent}! You now have Baby ${babyProfile.child} Registered. Your pin#: ${myPin}`;
  console.log('header', headerElement)

  setTimeout(()=> {
    homeDisplay.hidden = false;
    },1000);
  }

function createPin(letters) {
  let pin = letters.toUpperCase();

  let i = 0;
  while(i < 3) {
    let num = Math.floor(Math.random() * 10);
    pin = `${pin}${num}`;
    i++;
  }
  return pin;
}



registerBttn.addEventListener('click', registrationSubmit )


