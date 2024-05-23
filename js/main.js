document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const greetings = ['Welcome', 'Bonjour', 'Hola', 'Ciao', 'こんにちは', '여보세요', 'Hallo', 'Привет'];
    let currentGreeting = 0;

    function updateGreeting() {
        greetingElement.classList.remove('fade-in');
        greetingElement.classList.add('fade-out');

        setTimeout(() => {
            if (currentGreeting >= greetings.length) {
                document.getElementById('splash-screen').classList.add('hide');
            } else {
                greetingElement.textContent = greetings[currentGreeting];
                greetingElement.classList.remove('fade-out');
                greetingElement.classList.add('fade-in');
                currentGreeting++;
            }
        }, 1000);
    }

    setInterval(updateGreeting, 150);
});

document.addEventListener('DOMContentLoaded', function() {
    // Wait for DOM content to load before executing
    const splashScreen = document.getElementById('splash-screen');
    const contentWrapper = document.getElementById('content-wrapper');

    setTimeout(function() {
        splashScreen.classList.add('hide');
        contentWrapper.style.left = '0'; // Slide content into view
    }, 3000); // Adjust timing as needed
});


document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLists = document.querySelectorAll('nav ul');

    navToggle.addEventListener('click', function() {
        navLists.forEach(navList => navList.classList.toggle('nav-open'));
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const titleWrapper = document.querySelector('.i-title-wrapper');
    const titles = ['Web Developer', 'UI-UX Designer', 'Photographer', 'Content-Creator', 'Writer'];
    let currentIndex = 0;

    function updateTitle() {
        titleWrapper.textContent = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;
    }

    setInterval(updateTitle, 1000); // Change 2000 to adjust the interval in milliseconds
});
