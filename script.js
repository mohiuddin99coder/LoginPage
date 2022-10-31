const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

const emailMsg = document.querySelector(".email-message");
const passwordMsg = document.querySelector(".password-message");
const usernameMsg = document.querySelector(".username-message");
const create = document.querySelector(".btn-create");
const btnhomelogin = document.querySelector(".btn-home-login");
const join = document.querySelector(".btn-join");
const homeContainer = document.querySelector('.home-container');
const loginContainer = document.querySelector(".login-container");
const signupContainer = document.querySelector(".signUp-container");
const signInInstead = document.querySelector('.btn-signIn');
const createAccount = document.querySelector('.btn-signUp');

let accounts = [];

function hideMessage() {
  emailMsg.classList.add("hidden");
  passwordMsg.classList.add("hidden");
  usernameMsg.classList.add("hidden");
}
function showMessage() {
  emailMsg.classList.remove("hidden");
  passwordMsg.classList.remove("hidden");
  usernameMsg.classList.remove("hidden");
}
function showPassword() {
  let pass = document.querySelector(".password");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
function loginPage() {
  loginContainer.classList.remove("hidden");
  signupContainer.classList.add("hidden");
  homeContainer.classList.add('hidden');

}
function signupPage() {
  signupContainer.classList.remove("hidden");
  loginContainer.classList.add("hidden");
  homeContainer.classList.add('hidden');
}
const addAccount = function (ev) {
  ev.preventDefault();
  let account = {
    id: Date.now(),
    firstName: document.querySelector(".firstName").value,
    lastName: document.querySelector(".lastName").value,
    username: document.querySelector(".username").value,
    email: document.querySelector(".email").value,
    password: document.querySelector(".password").value,
    confirmPassword: document.querySelector(".confirm").value,
    sex: document.querySelector("[name ='gender']").value,
    country: document.querySelector("#country").value,
    contact: document.querySelector(".contact").value,
  };

  if (account.username.length < 8) {
    usernameMsg.textContent = "➡️ must be atleast 8-characters or above";
  }
  if (!account.email.match(mailFormat)) {
    emailMsg.textContent = "➡️ enter valid email";
  }
  if (account.password.length < 8) {
    passwordMsg.textContent = "➡️ please enter atleast 8-characters";
  }
  if ((account.password.length >= 8) && (!account.password.match(passwordFormat))){
    passwordMsg.textContent = "➡️ Password must Contains atleast one - A,a,1,#... "
  }
  if ((account.password.length >= 8) && (account.password.match(passwordFormat))) {
    if (account.password !== account.confirmPassword) {
      passwordMsg.textContent = "➡️ Passwords not match..."
    }
  }
  showMessage();
  if (account.email.match(mailFormat) && account.password.match(passwordFormat) && account.confirmPassword.match(passwordFormat) && account.password === account.confirmPassword) {
    accounts.push(account);
    document.querySelector(".signUp-form").reset();
    localStorage.setItem("AccountsList", JSON.stringify(accounts));
    hideMessage();
  }
};

create.addEventListener("click", addAccount);
btnhomelogin.addEventListener("click", loginPage);
join.addEventListener("click", signupPage);
signInInstead.addEventListener('click',loginPage);
createAccount.addEventListener('click',signupPage);