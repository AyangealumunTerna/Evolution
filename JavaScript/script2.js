const pages = document.querySelectorAll(".page");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 0;

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function updateButtons() {
  prevBtn.disabled = currentPage === 0;

  if (currentPage === pages.length - 1) {
    nextBtn.textContent = "Finish";
  } else {
    nextBtn.textContent = "Next";
  }
}

function showPage(index) {
  if (index === currentPage) return;

  const direction = index > currentPage ? "right" : "left";
  const current = pages[currentPage];
  const next = pages[index];

  // Step 1: Slide out current page
  current.classList.remove("active");
  current.classList.add(direction === "right" ? "exit-left" : "exit-right");

  // Wait for transition to finish before showing next
  setTimeout(() => {
    current.classList.remove("exit-left", "exit-right");
    current.style.opacity = "0";
    current.style.transform = `translateX(${direction === "right" ? "-100%" : "100%"})`;

    // Step 2: Prepare and slide in next page
    next.classList.add("active");
    next.style.transform = `translateX(${direction === "right" ? "100%" : "-100%"})`;

    // Trigger layout to allow transition
    next.getBoundingClientRect();
    next.style.transform = "translateX(0)";
    next.style.opacity = "1";

    currentPage = index;
    updateDots(index);
    updateButtons();
  }, 200); // Wait same time as transition (0.2s)
}


nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1, "next");
  }else {
    // Redirect to main.html when finished
    window.location.href = "../HTML/component.html";
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
});

updateDots(currentPage);
updateButtons();
