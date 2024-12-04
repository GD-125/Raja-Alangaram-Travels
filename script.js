// Function to toggle the navbar on mobile
// Function to toggle the navbar on mobile
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburgerIcon = document.querySelector('.hamburger-icon i');
    
    navbar.classList.toggle('active'); // Toggle the navbar visibility

    // Toggle the hamburger icon to a close icon on active state
    if (navbar.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');  // Remove hamburger icon
        hamburgerIcon.classList.add('fa-times');   // Add close icon
    } else {
        hamburgerIcon.classList.remove('fa-times'); // Remove close icon
        hamburgerIcon.classList.add('fa-bars');     // Add hamburger icon
    }
}

// Contact Form Submission (just an example)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We'll get back to you shortly.");
});

// Image Hover Effect - Applying Hover Effect on Destination Cards
const destinationCards = document.querySelectorAll('.card');
destinationCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

// Slideshow Navigation (Next and Previous buttons)
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    let slides = document.querySelectorAll(".slide");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Initialize slideshow
showSlides();

// Array of text to change in the About Section
const aboutTexts = [
    "We are a travel agency with over 10 years of experience in providing unforgettable trips.",
    "We offer a variety of travel packages for solo, family, and group trips.",
    "Our expert team ensures that every trip is tailored to your preferences.",
  ];
  
  // Select the About text element
  const aboutTextElement = document.querySelector('.about-text p');
  
  let currentTextIndex = 0;
  
  // Function to change text with fade-in and fade-out animation
  function changeAboutText() {
    aboutTextElement.style.opacity = 0; // Fade out
    setTimeout(() => {
      aboutTextElement.innerText = aboutTexts[currentTextIndex]; // Change the text
      aboutTextElement.style.opacity = 1; // Fade in
      currentTextIndex = (currentTextIndex + 1) % aboutTexts.length; // Loop through the texts
    }, 500); // Wait for the fade-out effect to complete before changing text
  }
  
  // Change text every 5 seconds
  setInterval(changeAboutText, 5000);
  
  // Initialize with the first text
  changeAboutText();
  const tourPackages = [
    {
        title: "Palani - One Day Trip",
        description: "Explore the best of Palani in a single day with our exciting tour package.",
        location: "Adivaram Road, Adivaram, Palani - 624601 (Near to Bus Stand)",
        places: [
            "Thiruavinangudi",
            "Mariyamman Kovil",
            "Periya Nayaki Amman Kovil",
            "Periyaudaiyar Kovil",
            "Sakkara Sithar Kovil"
        ],
        image: "images/1.jpg",
        link: "tel:+919962824827"
    },
    {
        title: "Palani - Two Day Trip",
        description: "An extended 2-day trip to Palani with multiple destinations.",
        location: "Adivaram Road, Adivaram, Palani - 624601 (Near to Bus Stand)",
        places: [
            "Thiruavinangudi",
            "Mariyamman Kovil",
            "Periya Nayaki Amman Kovil",
            "Periyaudaiyar Kovil",
            "Sakkara Sithar Kovil"
        ],
        image: "images/2.jpg",
        link: "tel:+919962824827"
    },
    // Add more packages as needed
];

function createTourPackageCard(package) {
    const card = document.createElement('div');
    card.className = 'package-card';
    card.innerHTML = `
        <div class="flip-card">
            <div class="flip-card-inner">
                <!-- Front side: Image and title -->
                <div class="flip-card-front">
                    <img src="${package.image}" alt="${package.title}" style="width:100%; height:auto;">
                    <h3>${package.title}</h3>
                </div>
                <!-- Back side: Content (Location, Places, Call Now) -->
                <div class="flip-card-back">
                    <p><i class="fas fa-map-marker-alt"></i> ${package.location}</p>
                    <ul>
                        ${package.places.map(place => `<li>${place}</li>`).join('')}
                    </ul>
                    <button class="book-now" onclick="window.location.href='${package.link}'">
                        <i class="fas fa-phone-alt"></i> Call Now
                    </button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('packages-container').appendChild(card);
}

// Loop through the tourPackages array and generate cards for each package
tourPackages.forEach(createTourPackageCard);

function redirectToGmail(event) {
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=saravanandivya4847@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${fname} ${lname}\nEmail: ${email}\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
}

// Function to toggle the navbar on mobile
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburgerIcon = document.querySelector('.hamburger-icon i');
    
    navbar.classList.toggle('active'); // Toggle the navbar visibility

    // Toggle the hamburger icon to a close icon on active state
    if (navbar.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');  // Remove hamburger icon
        hamburgerIcon.classList.add('fa-times');   // Add close icon
    } else {
        hamburgerIcon.classList.remove('fa-times'); // Remove close icon
        hamburgerIcon.classList.add('fa-bars');     // Add hamburger icon
    }
}

  