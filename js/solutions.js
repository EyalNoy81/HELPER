const solutionsData = {
    "email": {
        "title": "דואר אלקטרוני (אימייל)",
        "solutions": [
            {
                "id": "email1",
                "question": "איך פותחים תיבת דואר אלקטרוני חדשה?",
                "steps": [
                    "היכנס/י לאתר Gmail (gmail.com)",
                    "לחץ/י על 'צור חשבון'",
                    "מלא/י את הפרטים האישיים הנדרשים",
                    "בחר/י שם משתמש וסיסמה",
                    "אשר/י את תנאי השימוש",
                    "לחץ/י על 'צור חשבון'"
                ]
            },
            {
                "id": "email2",
                "question": "שכחתי את הסיסמה שלי לאימייל",
                "steps": [
                    "לחץ/י על 'שכחתי סיסמה' בדף ההתחברות",
                    "הזן/י את כתובת האימייל שלך",
                    "בחר/י באפשרות שחזור (SMS או אימייל חלופי)",
                    "עקוב/י אחר ההוראות לאיפוס הסיסמה",
                    "הגדר/י סיסמה חדשה"
                ]
            },
            {
                "id": "email3",
                "question": "איך מצרפים קובץ לאימייל?",
                "steps": [
                    "פתח/י חלון של הודעה חדשה",
                    "לחץ/י על סמל האטב (📎)",
                    "בחר/י את הקובץ מהמחשב שלך",
                    "המתן/י לסיום ההעלאה",
                    "המשך/י לכתוב את ההודעה ושלח/י"
                ]
            }
        ]
    },
    "whatsapp": {
        "title": "וואטסאפ (WhatsApp)",
        "solutions": [
            {
                "id": "whatsapp1",
                "question": "איך מתקינים וואטסאפ בפעם הראשונה?",
                "steps": [
                    "היכנס/י לחנות האפליקציות (App Store או Google Play)",
                    "חפש/י 'WhatsApp'",
                    "לחץ/י על 'התקן'",
                    "פתח/י את האפליקציה",
                    "הזן/י את מספר הטלפון שלך",
                    "הזן/י את קוד האימות שקיבלת ב-SMS"
                ]
            },
            {
                "id": "whatsapp2",
                "question": "איך משתמשים בוואטסאפ ווב במחשב?",
                "steps": [
                    "פתח/י את הדפדפן במחשב",
                    "היכנס/י ל-web.whatsapp.com",
                    "פתח/י את וואטסאפ בטלפון",
                    "לחץ/י על שלוש הנקודות ובחר/י 'וואטסאפ ווב'",
                    "סרוק/י את הקוד QR שמופיע במסך המחשב"
                ]
            },
            {
                "id": "whatsapp3",
                "question": "איך מגבים את ההודעות בוואטסאפ?",
                "steps": [
                    "פתח/י את הגדרות וואטסאפ",
                    "לחץ/י על 'צ'אטים'",
                    "בחר/י 'גיבוי צ'אטים'",
                    "בחר/י תדירות גיבוי",
                    "לחץ/י על 'גבה עכשיו'"
                ]
            }
        ]
    },
    "facebook": {
        "title": "פייסבוק (Facebook)",
        "solutions": [
            {
                "id": "facebook1",
                "question": "איך יוצרים חשבון פייסבוק חדש?",
                "steps": [
                    "היכנס/י ל-facebook.com",
                    "לחץ/י על 'צור חשבון חדש'",
                    "הזן/י את פרטיך האישיים",
                    "בחר/י סיסמה חזקה",
                    "העלה/י תמונת פרופיל",
                    "אשר/י את כתובת האימייל שלך"
                ]
            },
            {
                "id": "facebook2",
                "question": "איך משנים הגדרות פרטיות בפייסבוק?",
                "steps": [
                    "לחץ/י על החץ למטה בפינה העליונה",
                    "בחר/י 'הגדרות ופרטיות'",
                    "לחץ/י על 'הגדרות פרטיות'",
                    "עבור/י על כל קטגוריה",
                    "התאם/י את ההגדרות לפי רצונך"
                ]
            },
            {
                "id": "facebook3",
                "question": "איך חוסמים אדם בפייסבוק?",
                "steps": [
                    "היכנס/י לפרופיל של האדם",
                    "לחץ/י על שלוש הנקודות",
                    "בחר/י 'חסום'",
                    "אשר/י את החסימה",
                    "האדם לא יוכל לראות את הפרופיל שלך או ליצור איתך קשר"
                ]
            }
        ]
    }
};


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

function renderSolutions(data) {
    Object.keys(data).forEach(category => {
        const categoryData = data[category];
        const categoryElement = document.getElementById(category);
        
        if (categoryElement) {
            let html = `<h2>${categoryData.title}</h2>`;
            
            categoryData.solutions.forEach(solution => {
                html += `
                    <div class="problem" onclick="toggleSolution('${solution.id}')">
                        ${solution.question}
                    </div>
                    <div id="${solution.id}" class="solution">
                        ${solution.steps.map(step => `${step}<br>`).join('')}
                    </div>
                `;
            });
            
            categoryElement.innerHTML = html;
        }
    });
}