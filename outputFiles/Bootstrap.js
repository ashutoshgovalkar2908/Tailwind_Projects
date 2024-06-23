
// Select all elements with the .learnMore class
const learnMoreElements = document.querySelectorAll(".learnMore");

// Iterate over each .learnMore element and add event listeners
learnMoreElements.forEach(element => {
    element.addEventListener("mouseover", forwardIcon);
    element.addEventListener("mouseleave", reverseIcon);
});

// Select all elements with the .forward class
const forwardIcons = document.querySelectorAll(".forward");

// Function to move the icon forward
function forwardIcon() {
    // Find the corresponding icon within the same .learnMore element
    const icon = this.querySelector(".forward");
    if (icon) {
        icon.style.transform = "translateX(8px)";
        icon.style.transition = "transform .2s ease-in-out";
    }
}

// Function to move the icon back to its original position
function reverseIcon() {
    // Find the corresponding icon within the same .learnMore element
    const icon = this.querySelector(".forward");
    if (icon) {
        icon.style.transform = "translateX(0px)";
        icon.style.transition = "transform .2s ease-in-out";
    }
}
