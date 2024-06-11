document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementsByTagName("button");
  const menu = document.getElementById("menu");
  navbarToggle.addEventListener("click", function () {
    menu.classList.toggle("");
  });
});
document.addEventListener("DOMContentLoaded", (event) => {
  const dropdown1 = document.querySelector("#dropdown1");
  const dropdown2 = document.querySelector("#dropdown2");
  const dropdown3 = document.querySelector("#dropdown3");
  const dropdown4 = document.querySelector("#dropdown4");
  const button1 = dropdown1.querySelector(".dropdown-button");
  const button2 = dropdown2.querySelector(".dropdown-button");
  const button3 = dropdown3.querySelector(".dropdown-button");
  const button4 = dropdown4.querySelector(".dropdown-button");
  const icon1 = dropdown1.querySelector(".fa");
  const icon2 = dropdown2.querySelector(".fa");
  const icon3 = dropdown3.querySelector(".fa");
  const icon4 = dropdown4.querySelector(".fa");
  button1.addEventListener("click", () => {
    dropdown1.classList.toggle("show");
    if (icon1.classList.contains("fa-caret-right")) {
      icon1.classList.remove("fa-caret-right");
      icon1.classList.add("fa-caret-down");
    } else {
      icon1.classList.remove("fa-caret-down");
      icon1.classList.add("fa-caret-right");
    }
  });

  button2.addEventListener("click", () => {
    dropdown2.classList.toggle("show");
    if (icon2.classList.contains("fa-caret-right")) {
      icon2.classList.remove("fa-caret-right");
      icon2.classList.add("fa-caret-down");
    } else {
      icon2.classList.remove("fa-caret-down");
      icon2.classList.add("fa-caret-right");
    }
  });
  button3.addEventListener("click", () => {
    dropdown3.classList.toggle("show");
    if (icon3.classList.contains("fa-caret-right")) {
      icon3.classList.remove("fa-caret-right");
      icon3.classList.add("fa-caret-down");
    } else {
      icon3.classList.remove("fa-caret-down");
      icon3.classList.add("fa-caret-right");
    }
  });
  button4.addEventListener("click", () => {
    dropdown4.classList.toggle("show");
    if (icon4.classList.contains("fa-caret-right")) {
      icon4.classList.remove("fa-caret-right");
      icon4.classList.add("fa-caret-down");
    } else {
      icon4.classList.remove("fa-caret-down");
      icon4.classList.add("fa-caret-right");
    }
  });
  window.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      dropdown1.classList.remove("show");
      dropdown2.classList.remove("show");
      dropdown2.classList.remove("shifted");
    }
  });
});
