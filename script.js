const submitButton = document.querySelector("#submit-btn");
const usernameInput = document.querySelector("#user-name");
const passwordInput = document.querySelector("#user-password");
const errorAlert = document.querySelector("#error-alert");
const loginAlert = document.querySelector("#login-alert");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (usernameInput.value === "" || passwordInput.value === "") {
    errorAlert.classList.remove("hidden-error");

    setTimeout(() => {
      errorAlert.classList.add("hidden-error");
    }, 3000);
    return;
  }
  // Aqui você pode adicionar a lógica de autenticação, se necessário
  loginAlert.classList.remove("hidden-success");

  setTimeout(() => {
    loginAlert.classList.add("hidden-success");
  }, 3000);
});
