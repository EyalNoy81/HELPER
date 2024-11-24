document.addEventListener('DOMContentLoaded', () => {
    renderSolutions(solutionsData);
});

function showCategory(categoryId) {
    // מסתיר את כל הקטגוריות
    document.querySelectorAll('.category').forEach(cat => {
        cat.style.display = 'none';
    });
    
    // מציג את הקטגוריה שנבחרה
    const category = document.getElementById(categoryId);
    if (category) {
        category.style.display = 'block';
        // גלילה חלקה לאזור הפתרונות
        category.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleSolution(solutionId) {
    const solution = document.getElementById(solutionId);
    if (solution) {
        const isVisible = solution.style.display === 'block';
        solution.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            // גלילה חלקה לפתרון
            solution.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}