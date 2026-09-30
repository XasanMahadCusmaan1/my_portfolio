const input = document.querySelector("#menu__toggle");
const body = document.querySelector("body");

// Lock page scrolling while the mobile navigation menu is open.
const hideScrollBody = function () {
  input.addEventListener("change", () => {
    if (input.checked) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "scroll";
    }
  });
};
hideScrollBody();

// Find the category buttons once so click and keyboard handlers can share them.
const projectTabs = Array.from(document.querySelectorAll('[role="tab"]'));

// Select one category and keep its button and content panel in sync.
const activateProjectTab = (selectedTab, moveFocus = false) => {
  projectTabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    // Each tab names its matching panel in the aria-controls attribute.
    const panel = document.getElementById(tab.getAttribute("aria-controls"));

    // aria-selected helps assistive technology; tabIndex creates one keyboard stop.
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    tab.classList.toggle("active__tab", isSelected);
    panel.hidden = !isSelected;
  });

  if (moveFocus) selectedTab.focus();
};

// Support mouse clicks and the standard arrow, Home, and End tab keys.
projectTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateProjectTab(tab));
  tab.addEventListener("keydown", (event) => {
    let nextIndex;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      // Modulo wraps from the last category back to the first one.
      nextIndex = (index + 1) % projectTabs.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + projectTabs.length) % projectTabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = projectTabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    activateProjectTab(projectTabs[nextIndex], true);
  });
});

// Set up each category's carousel separately so its current slide is remembered.
document.querySelectorAll(".project-panel").forEach((panel) => {
  const slides = Array.from(panel.querySelectorAll("[data-project-slide]"));
  const dotsContainer = panel.querySelector(".project-dots");
  const currentCount = panel.querySelector("[data-project-current]");
  const previousButton = panel.querySelector("[data-project-previous]");
  const nextButton = panel.querySelector("[data-project-next]");
  let currentIndex = 0;

  // Create one dot per slide; each dot selects the slide at its matching index.
  const dots = slides.map((slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "project-dot";
    dot.setAttribute(
      "aria-label",
      `Show project ${index + 1} of ${slides.length}`,
    );
    dot.addEventListener("click", () => showProject(index));
    dotsContainer.append(dot);
    return dot;
  });

  // Keep the slide, active dot, and visible counter synchronized.
  const showProject = (index) => {
    // Adding slides.length before modulo also handles moving backward from slide zero.
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isCurrent = slideIndex === currentIndex;
      slide.hidden = !isCurrent;
      dots[slideIndex].setAttribute("aria-current", String(isCurrent));
    });

    currentCount.textContent = String(currentIndex + 1);
  };

  // Both buttons reuse showProject, so wrapping and UI updates stay consistent.
  previousButton.addEventListener("click", () => showProject(currentIndex - 1));
  nextButton.addEventListener("click", () => showProject(currentIndex + 1));
  showProject(currentIndex);
});

const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");
// Add your real inbox here; the form uses it as the recipient for its email draft.
const contactEmail = "xasanfiidoow23@gmail.com";

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactEmail) {
    contactStatus.textContent =
      "The form is ready. Add your email address to contactEmail in js/app.js to receive messages.";
    return;
  }

  const formData = new FormData(contactForm);
  const subject = `Portfolio inquiry: ${formData.get("topic")}`;
  const message = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Topic: ${formData.get("topic")}`,
    "",
    formData.get("message"),
  ].join("\n");
  const gmailUrl = new URL("https://mail.google.com/mail/");
  gmailUrl.search = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: contactEmail,
    su: subject,
    body: message,
  }).toString();
  const draftLink = document.createElement("a");
  draftLink.href = gmailUrl.toString();
  draftLink.target = "_blank";
  draftLink.rel = "noreferrer";
  draftLink.textContent = "open the Gmail draft";

  // Keep a visible link available if the browser blocks the new tab.
  contactStatus.replaceChildren(
    "If Gmail did not open, ",
    draftLink,
    ". Sign in to Gmail, review the draft, then press Send.",
  );

  // Open Gmail's compose page; the visitor still reviews and sends the message.
  window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
});
