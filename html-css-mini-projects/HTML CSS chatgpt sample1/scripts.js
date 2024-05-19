function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function toggleLogin() {
    const loginLogout = document.getElementById('login-logout');
    if (loginLogout.textContent.trim() === 'Login') {
        loginLogout.innerHTML = '<a href="javascript:void(0)" onclick="toggleLogin()">Logout</a>';
    } else {
        loginLogout.innerHTML = '<a href="javascript:void(0)" onclick="toggleLogin()">Login</a>';
    }
}
