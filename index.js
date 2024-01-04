document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", revealInfo);
});

function revealInfo() {
  const additionalInfo = document.querySelector(".additional-info");

  // Get the position of the additional info element relative to the viewport
  const infoPosition = additionalInfo.getBoundingClientRect().top;

  // Set a threshold (you can adjust this value based on your needs)
  const threshold = window.innerHeight / 2;

  // Check if the additional info is within the viewport
  if (infoPosition < threshold) {
    additionalInfo.classList.remove("hidden");
  }
}
