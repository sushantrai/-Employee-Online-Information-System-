const quizdb=[
    {
        question:"Q1 Identify the correct extension of the user-defined header file in C++.",
        a:".cpp",
        b:".hg",
        c:".h",
        d:".hf",
        ans:"ans3"
    },
    {
        question:"Q2 Identify the incorrect constructor type.",
        a:"Friend Constructor",
        b:"Default Constructor",
        c:"Parameterized Constructor",
        d:"Copy Constructor",
        ans:"ans1"
    },
    {
        question:"Q3 C++ uses which approach?.",
        a:"Right-left",
        b:"Top-Down",
        c:"Left-right",
        d:"Botton-up",
        ans:"ans4"
    },{
        question:"Q4 Which of the following data type is supported in C++ but not in C?.",
        a:"int",
        b:"bool",
        c:"double",
        d:"float",
        ans:"ans2"
    }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
let questioncount=0;
let score=0;
const loadQuestion=()=>{
    const questionList=quizdb[questioncount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
    const answers=document.querySelectorall('.answer');
    const showscore=document.querySelector('#showscore');
}
loadQuestion();
const getCheckAnswer =()=>{
    let answer;
    answer.forEach((curAnsEle)=>{
        if(curAnsEle.checked)
        {
            answer=curAnsEle.id;
        }
    });
    return answer;
};
const deselectAll=()=>{
    answers.forEach((curAnsEle)=>curAnsEle.checked=false);
}
submit.addEventListener('click',() => {
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer==quizdb[questioncount].ans)
    {
        score++;
    };
    questioncount++;
    deselectAll();
    if(questioncount<quizdb.length)
    {
        loadQuestion();
    }
    else{
        showscore.innerHTML= `<h3>Your Score is ${score}/${quizdb.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;
    }
    showscore.classList.remove('scorearea');
});