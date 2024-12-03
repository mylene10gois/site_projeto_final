document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, 100);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const pageTitle = document.title;
    const pageDescriptions = {
        "Introdução": "Página: Introdução - Explicando conceitos básicos da Internet.",
        "O Que São Redes?": "Página: O Que São Redes? - Aprendendo sobre redes de conexão.",
        "Como os Dados Viajam": "Página: Como os Dados Viajam - Explicando como os dados são transmitidos.",
        "Segurança na Internet": "Página: Segurança na Internet - Aprendendo sobre segurança online.",
        "Engenheiros de Redes": "Página: Engenheiros de Redes - Conhecendo o papel dos engenheiros.",
        "Conclusão": "Página: Conclusão - Finalizando o aprendizado."
    };

    for (const key in pageDescriptions) {
        if (pageTitle.includes(key)) {
            console.log(pageDescriptions[key]);
            break;
        }
    }
});

document.querySelectorAll(".interactive-element").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.transform = "scale(1.1)";
        element.style.transition = "transform 0.2s ease-in-out";
    });
    element.addEventListener("mouseout", () => {
        element.style.transform = "scale(1)";
    });
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitQuiz();
});

function submitQuiz() {
    const form = document.getElementById('quizForm');
    if (!form) {
        console.error('Formulário de quiz não encontrado!');
        return;
    }

    const answers = {
        q1: 'b', 
        q2: 'c', 
        q3: 'b', 
        q4: 'b', 
        q5: 'b',
    };

    let score = 0;
    const totalQuestions = 5;

    for (let i = 1; i <= totalQuestions; i++) {
        const question = form[`q${i}`];
        let selectedAnswer = null;
        
        if (question) {
            for (let j = 0; j < question.length; j++) {
                if (question[j].checked) {
                    selectedAnswer = question[j].value;
                    break;
                }
            }
        }

        const feedbackElement = document.getElementById(`feedback-q${i}`);
        if (feedbackElement) {
            if (selectedAnswer === answers[`q${i}`]) {
                score++;
                feedbackElement.innerHTML = `<span class="correct">Correto!</span>`;
            } else {
                feedbackElement.innerHTML = `<span class="incorrect">Errado! A resposta correta é: ${answers[`q${i}`]}</span>`;
            }
        }
    }

    const resultDiv = document.getElementById('quizResult');
    if (resultDiv) {
        resultDiv.textContent = `Você acertou ${score} de ${totalQuestions} perguntas.`;
    }
}
