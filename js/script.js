const githubBtn = document.getElementById('github-button')
const themeToggleBtn = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const darkIcon = document.getElementById('theme-toggle-dark-icon');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    } else {
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    }
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('dark');
}

githubBtn.addEventListener('click', () => {
    const url = 'https://github.com/cloudirector/crInfo/';
    window.open(url, '_blank').focus();
});

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

function analyzeText() {
    const text = document.getElementById('textInput').value;
    const wordsArray = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = wordsArray.length;
    const firstWords = wordsArray.slice(0, 3).join(', ');
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('firstWords').textContent = firstWords || "No words found.";
}