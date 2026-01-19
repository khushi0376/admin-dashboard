function toggleTheme() {
  document.body.classList.toggle("light");

  const button = document.querySelector(".theme-btn");
  if (document.body.classList.contains("light")) {
    button.textContent = "🌞 Dark Mode";
  } else {
    button.textContent = "🌙 Light Mode";
  }
}
