class AIHelper {
    constructor() {
        this.apiKey = ''; // אם נשתמש ב-API חיצוני
        this.endpoint = ''; // נקודת הקצה של ה-API
    }

    async processQuestion(question) {
        // בדיקת תקינות הקלט
        if (!question.trim()) {
            throw new Error('נא להזין שאלה');
        }

        // כאן נוכל להוסיף לוגיקה לעיבוד השאלה
        const processedQuestion = this.preprocessQuestion(question);

        try {
            // בשלב זה נדמה תשובה, אבל בעתיד נוכל להתחבר ל-API אמיתי
            const response = await this.mockAIResponse(processedQuestion);
            return response;
        } catch (error) {
            console.error('AI Processing Error:', error);
            throw new Error('אירעה שגיאה בעיבוד השאלה');
        }
    }

    preprocessQuestion(question) {
        // כאן נוכל להוסיף לוגיקה לניקוי וסידור השאלה
        return question.trim();
    }

    async mockAIResponse(question) {
        // מדמה תשובה מה-AI
        return new Promise((resolve) => {
            setTimeout(() => {
                // כאן נוכל להוסיף לוגיקה חכמה יותר לבחירת תשובה מתאימה
                const commonResponses = [
                    "תודה על שאלתך. מומחה יצור איתך קשר בקרוב.",
                    "אנחנו מעבדים את בקשתך ונחזור אליך בהקדם.",
                    "השאלה שלך התקבלה. צוות התמיכה שלנו יטפל בה בהקדם האפשרי."
                ];
                
                const randomResponse = commonResponses[Math.floor(Math.random() * commonResponses.length)];
                resolve(randomResponse);
            }, 1500);
        });
    }

    // בעתיד נוכל להוסיף פונקציות נוספות כמו:
    async connectToExternalAI() {
        // התחברות ל-API חיצוני
    }

    analyzeUserIntent(question) {
        // ניתוח כוונת המשתמש
    }

    generateCustomResponse(intent) {
        // יצירת תשובה מותאמת אישית
    }
}

// יצירת מופע יחיד של המחלקה (Singleton)
const aiHelper = new AIHelper();

// פונקציה שתקרא מה-HTML
function getAIHelp() {
    const userQuestion = document.getElementById('userQuestion').value;
    const aiResponse = document.getElementById('aiResponse');
    
    if (!userQuestion.trim()) {
        alert('אנא הכנס/י שאלה או תיאור הבעיה');
        return;
    }

    try {
        aiResponse.innerHTML = "מעבד את השאלה שלך...";
        
        setTimeout(() => {
            aiResponse.innerHTML = "תודה על שאלתך. מומחה אנושי יצור איתך קשר בקרוב.";
        }, 1500);

    } catch (error) {
        aiResponse.innerHTML = "מצטערים, אירעה שגיאה. אנא נסה/י שוב מאוחר יותר.";
        console.error('Error:', error);
    }
}