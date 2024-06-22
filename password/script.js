const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strenght");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (pass.value.length < 4) {
    str.innerHTML = "weak";
    pass.style.borderColor = "#ff5925";
    msg.style.color = "#ff5925";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "medium";
    pass.style.borderColor = "#F6AD0F";
    msg.style.color = "#F6AD0F";
  } else if (pass.value.length >= 8) {
    str.innerHTML = "strong";
    pass.style.borderColor = "#189C3A";
    msg.style.color = "#189C3A";
  }
});
