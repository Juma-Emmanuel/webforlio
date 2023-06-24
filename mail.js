
const firebaseConfig = {
    apiKey: "AIzaSyCeyATBXwuySMsCGxIk-7rUV-mS3p-qyE4",
    authDomain: "contactform-fc473.firebaseapp.com",
    databaseURL: "https://contactform-fc473-default-rtdb.firebaseio.com",
    projectId: "contactform-fc473",
    storageBucket: "contactform-fc473.appspot.com",
    messagingSenderId: "1035070557982",
    appId: "1:1035070557982:web:7094306e82429d3961430f"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  saveMessages(name, email, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 1000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};