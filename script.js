const ratingBox = document.querySelector(".rating_boxes");

for (let i = 0; i < 5; i++) {
  ratingBox.children[i].addEventListener("click", () => {
    // لفة تانية بتبدأ من الصفر لحد الرقم اللي إنت دوست عليه (i)

    const ratingScore = document.querySelector(".rating-score");
    ratingScore.textContent = i + 1;

    for (let j = 0; j < 5; j++) {
      const iconStar = document.querySelector(`.index${j}`);

      if (j <= i) {
        // لو رقم النجمة أصغر من أو يساوي المربع اللي دوست عليه.. نورها
        iconStar.classList.add("icon-star-state2");
      } else {
        // لو أكبر منه.. طفيها (عشان لو غير رأيه واختار رقم أقل)
        iconStar.classList.remove("icon-star-state2");
      }
    }
  });

  ratingBox.children[i].addEventListener("mouseover", () => {
    ratingBox.children[i].classList.add("rating_box_state");
  });

  ratingBox.children[i].addEventListener("mouseout", () => {
    ratingBox.children[i].classList.remove("rating_box_state");
  });
}

const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("mouseover", () => {
  submitButton.classList.add("submit-button-state");
});
submitButton.addEventListener("mouseout", () => {
  submitButton.classList.remove("submit-button-state");
});
submitButton.addEventListener("click", () => {
  const ratingState = document.querySelector(".rating-state");
  const thankState = document.querySelector(".thank-you-state");
  const ratingScore = document.querySelector(".rating-score");
  ratingState.classList.add("rating-js-state");
  thankState.classList.add("thank-you-js-state");
  setTimeout(() => {
    ratingScore.classList.add("score-animation");
  }, 50);
});
