// declare a variable verifiedPassword and reassign it to false;
let verifiedPassword = false;

// Declare a function validatePassword that validates password
// pass the event as a parameter.
// inside the function, fetch and assign the values
// of the password and the cpassword to variables
// log the values

function validatePassword(event) {
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword");

  
  // fetch error message style display using .err-msg 
  // err_display
  let err_display = document.querySelector(".err-msg").style;
  // check if password and cpassword are identical
  // if true, reassign verifiedPassword = true;
  // if false, reassign verifiedPassword = false;

  if (password === cpassword.value) {
    verifiedPassword = true;
    // reassign err_display.display to "none"
    err_display.display = "none";
  } else {
    verifiedPassword = false;
    // send focus to cpassword
    cpassword.focus();
    // reassign err_display.display to "block"
    err_display.display = "block";
  }

}

// Declare a function using the function keyword
// pass the event as a parameter.
function getSignUpData(event) {
  // prevent form submission using the 
  event.preventDefault();
  // Invoke validatePassword function 
  validatePassword()


  // fetch and assign the values of the first_name input using 
  // document.querySelector("#id")
  // Do same for all the inputs using their ids.

  let first_name = document.querySelector("#firstname").value;
  let last_name = document.querySelector("#lastname").value;
  let user_name = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;
 
  // Store credentials only if verifiedPassword is true 
  if (verifiedPassword === true) {
    // declare user object 
    let user = {
      fname: first_name,
      lname: last_name,
      uname: user_name,
      email: email,
      password: password
    }

    // convert user object to string
    let userData = JSON.stringify(user);

    // store user object string in localstorage
      window.localStorage.setItem("comms_user", userData)
  }
}

// create a function logInSuccessful 
function logInSuccessful(params) {
  alert
}

// Create function logUserIn with event as parameter
// prevent form submission using the 

// fetch and assign the values of the user_name and password
//  input using document.querySelector("#id")
// console.log the values

function logUserIn(event) {
  event.preventDefault();

  let user_name = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  // assign comms_user from localstorage to userDataString
  // using window.localStorage.getItem("comms_user")
  let userDataString = window.localStorage.getItem("comms_user")

  // console.log typeof(userDataString) to check data type
  console.log(userDataString)

  // convert userDataString to object using 
  // JSON.parse(userDataString) and store it in userData
  let userData = JSON.parse(userDataString)
  
  // check type of userData in the console
  console.log(userData)

  // check if user_name is identical to userData.uname
  // and password is identical to userData.password
  // if both are true, invoke logInSuccesful()
  // else loginFailed()

  if (user_name === userData.uname && password === userData.password) {
   logInSucessful()
  } else {
    logInFailed()
  }

  console.log(user_name)
  console.log(password)
  
}


// onblur
// onchange
// onclick
// onfocus