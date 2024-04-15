const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlan = document.querySelectorAll(".plan .button");
const selectPackage = document.querySelectorAll(".mainSectionItem");
const negativeAnsware = document.querySelector(".modalActionNegative");
const toggleButton = document.querySelector(".toggleButton");
const mobileNav = document.querySelector(".mobileNav");
const ctaButton = document.querySelector(".mainNavItemCTA");

for (i = 0; i < selectPlan.length; i++) {
  selectPlan[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function () {
      backdrop.classList.add("open");
    }, 10);
  });
}

for (i = 0; i < selectPackage.length; i++) {
  selectPackage[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  this.closeModal;
});

const closeModal = () => {
  //   modal.style.display = "none";
  //   backdrop.style.display = "none";
  if (closeModal) {
    backdrop.classList.remove("open");
  }
  modal.classList.remove("open");
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 200);
};

if (backdrop) {
  backdrop.addEventListener("click", closeModal);
}

if (negativeAnsware) {
  negativeAnsware.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", function () {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

ctaButton.addEventListener("animationstart", function (event) {
  console.log("Animation started", event);
});

ctaButton.addEventListener("animationend", function (event) {
  console.log("Animation ended", event);
});

ctaButton.addEventListener("animationiteration", function (event) {
  console.log("Animation iteration", event);
});
