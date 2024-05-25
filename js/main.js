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

    // Slide in content after splash screen
    setTimeout(() => {
        splashScreen.classList.add('hide');
        document.querySelector('.content-wrapper').style.left = '0'; // Show content
    }, 6000); // Adjust timing as needed

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

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('mobileSidebar').style.transform = "translateX(-100%)";
});
