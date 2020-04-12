function displayGallery() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById(
      `gallery-images`
    ).innerHTML += `<div class='col-4 gallery'>
        <img class='gallery-img' src='assets/images/trainers/trainer_${i}.jpg' alt='Trainer'>
      </div>`;
  }
}

document.addEventListener(`DOMContentLoaded`, function (event) {
  displayGallery();
});
