class AuthService {
    constructor() {
        this.API_ENDPOINT = 'https://your-api-gateway.amazonaws.com/prod';
        this.currentUser = null;
        this.init();
    }

    init() {
        // נסיון לשחזר מידע משתמש מהאחסון המקומי
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('userData');
        if (token && userData) {
            try {
                this.currentUser = JSON.parse(userData);
            } catch (e) {
                this.logout();
            }
        }

        // הוספת מאזינים לטפסים רק בדף ההתחברות
        if (window.location.pathname.includes('login.html')) {
            this.initLoginForms();
        }
    }

    initLoginForms() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');

        if (loginForm) {
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                try {
                    const email = document.getElementById('loginEmail').value;
                    const password = document.getElementById('loginPassword').value;
                    await this.login(email, password);
                    window.location.href = 'index.html';
                } catch (error) {
                    alert(error.message);
                }
            });
        }

        if (registerForm) {
            registerForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                try {
                    const userData = {
                        name: document.getElementById('registerName').value,
                        email: document.getElementById('registerEmail').value,
                        password: document.getElementById('registerPassword').value,
                        passwordConfirm: document.getElementById('registerPasswordConfirm').value
                    };

                    if (userData.password !== userData.passwordConfirm) {
                        throw new Error('הסיסמאות אינן תואמות');
                    }

                    await this.register(userData);
                    alert('ההרשמה הושלמה בהצלחה! אנא התחבר');
                    switchTab('login');
                } catch (error) {
                    alert(error.message);
                }
            });
        }
    }

    async login(email, password) {
        try {
            const response = await fetch(`${this.API_ENDPOINT}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('התחברות נכשלה');
            }

            const data = await response.json();
            this.setCurrentUser(data.user);
            localStorage.setItem('token', data.token);
            return data.user;

        } catch (error) {
            console.error('Login Error:', error);
            throw error;
        }
    }

    async register(userData) {
        try {
            const response = await fetch(`${this.API_ENDPOINT}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('ההרשמה נכשלה');
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Register Error:', error);
            throw error;
        }
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('token');
        window.location.href = '/login.html';
    }

    isAuthenticated() {
        return !!localStorage.getItem('token');
    }

    setCurrentUser(user) {
        this.currentUser = user;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

// יצירת מופע יחיד של השירות
const authService = new AuthService();

// פונקציות ממשק משתמש
function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabs = document.querySelectorAll('.auth-tab');

    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.style.display = 'flex';
        registerForm.style.display = 'none';
        tabs[0].classList.add('active');
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
        tabs[1].classList.add('active');
    }
} 