document.addEventListener('DOMContentLoaded', () => {
    let currentOpenCategory = null;

    // פונקציה להצגת קטגוריה
    function showCategory(categoryId) {
        const selectedCategory = document.getElementById(categoryId);
        if (!selectedCategory) return;

        // אם לוחצים על קטגוריה שכבר פתוחה
        if (currentOpenCategory === categoryId) {
            selectedCategory.style.display = 'none';
            currentOpenCategory = null;
            return;
        }

        // סגירת הקטגוריה הקודמת אם קיימת
        if (currentOpenCategory) {
            const previousCategory = document.getElementById(currentOpenCategory);
            if (previousCategory) {
                previousCategory.style.display = 'none';
            }
        }

        // פתיחת הקטגוריה החדשה
        selectedCategory.style.display = 'block';
        currentOpenCategory = categoryId;

        // גלילה חלקה לקטגוריה
        selectedCategory.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // פונקציה להצגת/הסתרת תשובה
    function toggleAnswer(question) {
        const answer = question.nextElementSibling;
        if (!answer || !answer.classList.contains('answer')) return;

        const isVisible = answer.style.display === 'block';
        
        // סגירת כל התשובות באותה קטגוריה
        const category = question.closest('.faq-category');
        if (category) {
            category.querySelectorAll('.answer').forEach(a => {
                a.style.display = 'none';
            });
        }

        // הצגה או הסתרה של התשובה הנוכחית
        answer.style.display = isVisible ? 'none' : 'block';
    }

    // הוספת מאזיני אירועים
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const categoryId = circle.dataset.category;
            showCategory(categoryId);
        });
    });

    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.addEventListener('click', () => {
            toggleAnswer(question);
        });
    });

    // הסתרת כל הקטגוריות בטעינה
    const categories = document.querySelectorAll('.faq-category');
    categories.forEach(category => {
        category.style.display = 'none';
    });
});