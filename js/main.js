const selectElement = document.getElementById("language-filter");
const cards = document.querySelectorAll(".card");

selectElement.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
console.log(cards);
  cards.forEach((card) => {
    if (selectedLanguage === "all") {
      card.style.display = "block";
    } else {
      const cardLanguage = card.getAttribute("data-language");
      if (cardLanguage === selectedLanguage) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
});