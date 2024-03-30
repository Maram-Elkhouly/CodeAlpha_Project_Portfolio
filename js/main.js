// Download cv pdf from download button
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // Path to the PDF file
    var pdfPath =
      "https://drive.google.com/file/d/1ek4j4kvWZJSRj8NF9cj0XQHbpypzVFxR/view?usp=drive_link";

    // Create a link element
    var link = document.createElement("a");
    link.href = pdfPath;

    // Set the download attribute with the desired file name
    link.download = "Maram_cv.pdf";

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  });

/* javascript of responsive navigation menu */
const menuBtn = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
});

/*scroll section active link */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        // Corrected usage of forEach
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });
  /*sticky navbar*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  //   /*Remove Toggle*/
  menuBtn.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/*Scroll Reveal*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content , heading", { origin: "top" });
ScrollReveal().reveal(
  ".services-container , home-img , .portfolio-box , .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1 , .about img", { origin: "left" });
ScrollReveal().reveal(".home-contact p , .about-content", { origin: "right" });

/*Typed js*/
const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Frontend Developer", "Web Designer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
