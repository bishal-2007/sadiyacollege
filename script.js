const questions = [
    {
        question: "When was Sadiya College established?",
        options: ["1980", "1990", "1982", "2000"],
        answer: "1982"
    },
    {
        question: "Which university is Sadiya College affiliated with?",
        options: ["Assam University", "Dibrugarh University", "Gauhati University", "Tezpur University"],
        answer: "Dibrugarh University"
    },
    {
        question: "Which departments are part of Sadiya College?",
        options: ["Business Administration and Arts", "Arts, Science, and Commerce", "Engineering, Arts, and Science", "Medicine and Engineering"],
        answer: "Arts, Science, and Commerce"
    },
    {
        question: "What is the admission procedure for Sadiya College?",
        options: ["Postal applications", "Online registration and form filling", "Walk-in admissions only", "Direct admission without forms"],
        answer: "Online registration and form filling"
    },
    {
        question: "Where is Sadiya College located?",
        options: ["Dibrugarh, Assam", "Sadiya, Tinsukia, Assam", "Guwahati, Assam", "Jorhat, Assam"],
        answer: "Sadiya, Tinsukia, Assam"
    },
    {
        question: "What is the first step for new applicants?",
        options: ["Attend a counseling session", "Submit a hard copy application", "Register on the portal", "Pay admission fees"],
        answer: "Register on the portal"
    },
    {
        question: "Which online services does Sadiya College offer to students?",
        options: ["Only online forms", "Class notes, videos, and live discussions", "Online examinations", "None of the above"],
        answer: "Class notes, videos, and live discussions"
    },
    {
        question: "What documents are required for new applicants?",
        options: ["Only photograph and signature", "Photograph, signature, mark sheet, and identity proof", "Only mark sheet and caste certificate", "None of the above"],
        answer: "Photograph, signature, mark sheet, and identity proof"
    },
    {
        question: "What is the common method for students to receive class materials at Sadiya College?",
        options: ["Library access only", "Online portal with notes and videos", "Physical distribution in class", "Email-based delivery"],
        answer: "Online portal with notes and videos"
    },
    {
        question: "What is the requirement for applicants who have completed the admission process at Sadiya College?",
        options: ["Submit an online payment receipt", "Print the application form and visit the college for challan copy", "Wait for the interview", "Attend a pre-admission orientation"],
        answer: "Print the application form and visit the college for challan copy"
    },
    {
        question: "What is the primary goal of Sadiya College?",
        options: ["Encouraging cultural exchange", "Increasing student participation in sports", "Promoting academic excellence", "Creating a fully digital campus"],
        answer: "Promoting academic excellence"
    },
    {
        question: "In which category of education does Sadiya College excel the most?",
        options: ["Commerce", "Science", "Arts", "Engineering"],
        answer: "Arts"
    },
    {
        question: "What online feature does Sadiya College provide for students' convenience?",
        options: ["Online exams", "Interactive quizzes", "Live discussion sessions", "Video lectures only"],
        answer: "Live discussion sessions"
    },
    {
        question: "Which of these is required as a document for admission to Sadiya College?",
        options: ["Voter ID only", "Birth certificate", "Pan card", "Aadhaar card"],
        answer: "Aadhaar card"
    },
    {
        question: "What method does Sadiya College use for document submission during the application process?",
        options: ["Post submission", "Manual submission at the college", "Email-based document submission", "Online document upload"],
        answer: "Online document upload"
    },
    {
        question: "Which social media platform does Sadiya College actively use for communication?",
        options: ["Twitter", "Instagram", "LinkedIn", "Facebook"],
        answer: "Facebook"
    },
    {
        question: "Who can apply for the postgraduate courses at Sadiya College?",
        options: ["Only students from Sadiya College", "Students from other colleges with a valid transfer certificate", "Graduates from recognized universities", "Students from the Science stream only"],
        answer: "Graduates from recognized universities"
    },
    {
        question: "What are the regular working hours for students at Sadiya College?",
        options: ["9 AM to 6 PM", "8 AM to 4 PM", "9 AM to 5 PM", "10 AM to 4 PM"],
        answer: "9 AM to 5 PM"
    },
    {
        question: "How can students check their admission status at Sadiya College?",
        options: ["By calling the college office", "By visiting the campus", "By email notification", "Through the online portal"],
        answer: "Through the online portal"
    },
    {
        question: "Which extracurricular activities are offered at Sadiya College?",
        options: ["Only music and dance", "Only sports events", "Cultural programs, sports, and community service", "Only literary clubs"],
        answer: "Cultural programs, sports, and community service"
    },
    {
        question: "What is the maximum number of students allowed per department at Sadiya College?",
        options: ["100", "50", "75", "30"],
        answer: "50"
    },
    {
        question: "Does Sadiya College offer any scholarships?",
        options: ["Yes, based on academic merit", "No, scholarships are not provided", "Yes, only for sports students", "Yes, only for SC/ST students"],
        answer: "Yes, based on academic merit"
    }
];


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    const name = document.getElementById("student-name").value;
    if (name === "") {
        alert("Please enter your name to start the quiz.");
        return;
    }

    document.getElementById("name-container").style.display = "none";
    document.getElementById("quiz-game-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionObj.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    questionObj.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = function() { handleAnswer(button, option); };
        optionsDiv.appendChild(button);
    });

    // Update the question progress
    document.getElementById("current-question").textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function handleAnswer(button, selectedOption) {
    const questionObj = questions[currentQuestionIndex];

    // Highlight the selected option (hover will still work)
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');

    // Check if the answer is correct
    if (selectedOption === questionObj.answer) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }

    // Automatically move to the next question after a selection
    setTimeout(nextQuestion, 500); // Delay before showing next question
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-game-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result").textContent = "Thank you for participating!";
    document.getElementById("final-score").textContent = `${score} / ${questions.length}`;
}
