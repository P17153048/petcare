function toggleMenu() {
  let collapsableDiv = document.getElementById("nav-collapsed");
  collapsableDiv.style.display =
    collapsableDiv.style.display === "block" ? "none" : "block";
}

function displayGallery() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById(
      `gallery-images`
    ).innerHTML += `<div class='col-4 gallery'>
        <img class='gallery-img' src='assets/images/trainers/trainer_${i}.jpg' alt='Trainer-${i}'>
      </div>`;
  }
}

document.addEventListener(`DOMContentLoaded`, (event) => {
  displayGallery();
});

document
  .getElementById(`nav-collapsed`)
  .querySelectorAll(`a`)
  .forEach((link) => {
    link.addEventListener(`click`, (el) => {
      toggleMenu();
    });
  });

document.getElementById("contact-form").addEventListener("submit", () => {
  if (!validateForm()) {
    alert("Invalid phone number");
    return;
  }
  sendMessage();
});

function validateForm() {
  let phone = getValueById("phone");
  if (!phone) {
    return false;
  }
  if (isNaN(phone)) {
    return false;
  }
  return true;
}

const getValueById = (id) => {
  return document.getElementById(id).value;
};

const sendMessage = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      alert("Message sent successfully");
    }
  };
  xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    `fname=${getValueById("fname")}&lname=${getValueById(
      "lname"
    )}&email=${getValueById("email")}&phone=${getValueById(
      "phone"
    )}&subject=${getValueById("subject")}&message=${getValueById("message")}`
  );
};
