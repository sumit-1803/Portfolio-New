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

    

    // Nav toggle for mobile view
    const navToggle = document.querySelector('.nav-toggle');
    const navLists = document.querySelectorAll('nav ul');

    navToggle.addEventListener('click', () => {
        navLists.forEach(navList => navList.classList.toggle('nav-open'));
        document.querySelector('header').classList.toggle('show-sidebar');

        document.querySelector('.menu-icon').addEventListener('click', function() {
    document.body.classList.toggle('show-sidebar');
});
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.body.classList.toggle('show-sidebar');
});

    });

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
            serviceSection.classList.remove('fade-in'); // Remove the fade-in class when the section is out of view
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


// Dark mode 
document.addEventListener("DOMContentLoaded", function() {
    const toggleCheckbox = document.getElementById('dark-mode-toggle');

    toggleCheckbox.addEventListener('change', function() {
        if (toggleCheckbox.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});
