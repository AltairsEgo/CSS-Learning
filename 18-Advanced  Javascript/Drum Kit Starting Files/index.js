const handleClick = () => {
  alert("Hello");
};

const elements = document.querySelectorAll("button");

elements.forEach((elements) => {
  elements.addEventListener("click", handleClick);
});
