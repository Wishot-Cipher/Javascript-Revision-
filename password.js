
let password2 = document.getElementById("password2");
let strength = document.getElementById("strength");
let strengthInfo = document.querySelector(".strengthInfo");

password2.addEventListener("input", () => {
  if (password2.value.length > 0) {
    strengthInfo.style.display = "block";
  }
  else{
    strengthInfo.style.display = "none";
  }
  if (password2.value.length <= 5 && password2.value.length > 0) {
    strength.innerHTML = "Weak";
    password2.style.borderColor = "#FF4B4B";
    password2.style.color = "#FF4B4B";
    strengthInfo.style.color = "#FF4B4B"
  }
  else if(password2.value.length > 5 && password2.value.length < 8) {
    strength.innerHTML = "Medium"
    password2.style.borderColor = "#FFC800";
    password2.style.color = "#FFC800";
    strengthInfo.style.color = "#FFC800"
  }
  else if(password2.value.length >= 8) {
    strength.innerHTML = "Strong"
    password2.style.borderColor = "#257F25";
    password2.style.color = "#257F25";
    strengthInfo.style.color = "#257F25"
  }
  else{
    password2.style.borderColor = "black"
  }
});