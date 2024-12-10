document.addEventListener('DOMContentLoaded', () => {
    // Splash Screen Greeting Animation
    const splashScreen = document.getElementById('splash-screen');
    const greetingElement = document.getElementById('greeting');
    const greetings = ['Welcome', 'Bonjour', 'Hola', 'Ciao', 'こんにちは', '여보세요', 'Hallo', 'Привет'];
    let greetingIndex = 0;

    const updateGreeting = () => {
        if (greetingIndex < greetings.length) {
            greetingElement.textContent = greetings[greetingIndex];
            greetingIndex++;
        } else {
            clearInterval(greetingInterval);
            splashScreen.classList.add('hide');
            document.querySelector('.content-wrapper').style.left = '0'; // Show content
        }
    };

    const greetingInterval = setInterval(updateGreeting, 150);

    


    // Dynamic title update
    const titleWrapper = document.querySelector('.i-title-wrapper');
    const titles = ['Web Developer', 'UI-UX Designer', 'Photographer', 'Content-Creator', 'Writer'];
    let currentIndex = 0;

    const updateTitle = () => {
        titleWrapper.textContent = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
    };

    setInterval(updateTitle, 1000); // Change 1000 to adjust the interval in milliseconds
});



function toggleSidebar() {
    const sidebar = document.getElementById('mobileSidebar');
    if (sidebar.style.transform === "translateX(-100%)") {
        sidebar.style.transform = "translateX(0)";
    } else {
        sidebar.style.transform = "translateX(-100%)";
    }
}

// Fade in for services section

document.addEventListener("DOMContentLoaded", function() {
    function fadeInOnScroll() {
        const serviceSection = document.getElementById('service');
        const sectionPosition = serviceSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            serviceSection.classList.add('fade-in');
        } else {
            serviceSection.classList.remove('fade-in');
        }
    }

    window.addEventListener('scroll', fadeInOnScroll);

    // Trigger the function once on page load
    fadeInOnScroll();
});


// fade in for contact
document.addEventListener("DOMContentLoaded", function() {
    function fadeInOnScroll() {
        const contactSection = document.getElementById('contact');
        const sectionPosition = contactSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            contactSection.querySelector('.c-top').classList.add('fade-in');
        } else {
            contactSection.querySelector('.c-top').classList.remove('fade-in'); // Remove the fade-in class when the contact section is out of view
        }
    }

    function checkContactSectionInView() {
        fadeInOnScroll();
        requestAnimationFrame(checkContactSectionInView); // Recursive call to continuously check if the contact section is in view
    }

    window.addEventListener('scroll', checkContactSectionInView);

    // Trigger the function once on page load
    checkContactSectionInView();
});



// animation for contact
document.addEventListener("DOMContentLoaded", function() {
    function fadeInOnScroll() {
        const contactSection = document.getElementById('contact');
        const sectionPosition = contactSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            contactSection.querySelector('.c-top').classList.add('fade-in');
            window.removeEventListener('scroll', fadeInOnScroll); // Remove the scroll event listener once animation starts
        }
    }

    window.addEventListener('scroll', fadeInOnScroll);
});


// dark mode for component with id as Home on change in toggle with class toggle-label add background-color as black
document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById('dark-mode-toggle');

    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navSocials = document.querySelector(".nav-socials");
    const navLinks = document.querySelectorAll(".nav-menu a");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        navSocials.classList.toggle("show");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
            navSocials.classList.remove("show");
        });
    });
});

//email js 
document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('v8wNgPKmZpEGXK_ZB'); // Replace with your EmailJS user ID

    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const serviceID = 'service_bozfmec'; // Replace with your service ID
        const templateID = 'template_o56rgfv'; // Replace with your template ID

        emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
                alert('Message sent successfully!');
            },
            (error) => {
                alert('Failed to send message. Please try again.');
            }
        );
    });
});
