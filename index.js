const rangeInput = document.getElementById("numberOfUsers");
const rangeValue = document.getElementById("rangeValue");
const cards = document.querySelectorAll(".width_of_card");

rangeInput.addEventListener("input", () => {
  rangeValue.textContent = rangeInput.value;

  const numberOfUsers = parseInt(rangeInput.value);
  
  if (numberOfUsers >= 0 && numberOfUsers <= 10) {
    cards.forEach((card, index) => {
      if (index === 0) {
        card.style.backgroundColor = "lightblue";
      } else {
        card.style.backgroundColor = "";
      }
    });
  } else if (numberOfUsers > 10 && numberOfUsers <= 20) {
    cards.forEach((card, index) => {
      if (index === 1) {
        card.style.backgroundColor = "lightblue";
      } else {
        card.style.backgroundColor = "";
      }
    });
  } else if (numberOfUsers > 20 && numberOfUsers <= 30) {
    cards.forEach((card, index) => {
      if (index === 2) {
        card.style.backgroundColor = "lightblue";
      } else {
        card.style.backgroundColor = "";
      }
    });
  } else {
    cards.forEach((card) => {
      card.style.backgroundColor = "";
    });
  }
});
