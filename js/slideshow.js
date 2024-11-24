let slideIndex = 1;
let slides;
let slideInterval;

function initSlideshow() {
    slides = document.querySelectorAll('.slides img');
    if (slides.length === 0) return; // אם אין תמונות, צא מהפונקציה

    // הצג את התמונה הראשונה
    showSlides(slideIndex);

    // התחל את המצגת האוטומטית
    startSlideshow();
}

function startSlideshow() {
    // נקה טיימר קודם אם קיים
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    // הפעל מצגת אוטומטית
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}

function changeSlide(n) {
    if (!slides) return; // בדיקת הגנה
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (!slides) return; // בדיקת הגנה

    // טיפול במקרה של גלישה מעבר לגבולות
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // הסתר את כל התמונות
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // הצג את התמונה הנוכחית
    slides[slideIndex-1].style.display = "block";
}

// הפעל את המצגת כשהדף נטען
document.addEventListener('DOMContentLoaded', initSlideshow);