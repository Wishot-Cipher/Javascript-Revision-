const rightSide = document.getElementById("rightSide");
const leftSide = document.getElementById("leftSide");
const lists = leftSide.querySelectorAll(".list")
const bulb = document.getElementById("bulb")

let selected; // Move the declaration outside of the event listener

for (list of lists) {
  list.addEventListener("dragstart", (e) => {
    selected = e.target; // Use the variable from the outer scope

    rightSide.addEventListener("dragover", (e) => {
      e.preventDefault();
    })
    rightSide.addEventListener("drop", (e) => { 
      rightSide.appendChild(selected);
      selected = null;
    })
    leftSide.addEventListener("dragover", (e) => {
      e.preventDefault();
    })
    leftSide.addEventListener("drop", (e) => {
      leftSide.appendChild(selected);
      selected = null;
    })
  })
}

bulb.addEventListener("click", () => {
   document.body.classList.toggle("dark-theme");
   if (document.body.classList.contains("dark-theme")) {
      bulb.src = "assets/pic_bulboff.gif";
   }
   else{
      bulb.src = "assets/pic_bulbon.gif";
   }
})

// let visibility = document.getElementById("visibility")
// let password = document.getElementById("password")

// visibility.addEventListener("click", () => {
//   if (password.type == "password") {
//     password.type = "text";
//     visibility.innerText = "Hide"
//   }
//   else{
//     password.type = "password";
//     visibility.innerText = "Show"

//   }
// })


