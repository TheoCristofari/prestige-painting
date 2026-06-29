const form = document.querySelector(".quote-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  if (!button) return;

  button.textContent = "Request noted";
  button.disabled = true;
  form.classList.add("is-submitted");
});
