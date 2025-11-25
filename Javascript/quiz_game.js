document.addEventListener("DOMContentLoaded", function(){
    const question= document.getElementById("question");
    const choices= document.getElementById("choices");
    const nextBtn= document.getElementById("nextBtn");
    const result= document.getElementById("result");
    const quizData=[
        {
            question:"which ingredient is make  food Spicy",
            choices:[ "cheese", "onion", "chily" ],
            answer:"Chily"
        },
        {
            question:"which Country is making Pizza",
            choices:[ "Cambodia", "england" ,"America" ],
            answer:"America"
        },
        {
            question:"which country is famous for making sushi",
            choices:[ "Italy", "Mexican", "Japan" ],
            answer:"Japan"
        },
    ];
    let currentQuiz= 0;
    let score=0;

    
    

    function loadQuiz(){
        //clear choices buttons
        nextBtn.classList.add("hidden");
        choices.innerHTML="";
        //rewrite question
        const currentData= quizData[currentQuiz];
        question.textContent= currentData.question;
        

        const choicesArr= currentData.choices
        choicesArr.forEach(choice=> {
            const button= document.createElement("button");
            button.textContent= choice;
            button.addEventListener("click", selectAnswer);
            choices.appendChild(button);

        });
    }
    function selectAnswer(e){
        const selectAnswer= e.target.textContent;
        const correctAnswer= quizData[currentQuiz].answer;

        if(selectAnswer=== correctAnswer) {
            e.target.style.backgroundColor="lightgreen";
            score++;
        }else{
            e.target.style.backgroundColor="salmon";
        }
        Array.from(choices.children).forEach(btn=>btn.disabled= true);

        nextBtn.classList.remove("hidden");
    }
    function showResult() {
        document.getElementById("quiz").classList.add("hidden");
        result.classList.remove("hidden");
        result.textContent= `ពិន្ទុរបស់អ្នកគឺ​​ ${score}/ ${quizData.length}!`

    }


    nextBtn.addEventListener("click", function(event) {
      currentQuiz++;
      if (currentQuiz<quizData.length) {
      loadQuiz();
    }else{
        showResult();
     }
    });
    //For the first display
    loadQuiz();
});
    
        
    