document.addEventListener("DOMContentLoaded", function () {
    const shareIcon = document.querySelector(".share-icon");
    const shareBubbleContainer = document.querySelector(".share-bubble-container");
  
    shareIcon.addEventListener("click", function () {
      shareBubbleContainer.classList.toggle("active");
    });
  });
  