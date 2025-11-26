import { useState } from "react";
import Results from "./result";



function Quiz (){

const questionBank= [

{
    question: "What is the capital of Bulgaria",
    options: ['Berlin','London','Sofia','Rome'],
    answer:'Sofia',
},


{
    question: "Who is known as the Father of Computers?",
    options: ['Charles Babbage', 'Alan Turing', 'Isaac Newton', 'Nikola Tesla'],
    answer: 'Charles Babbage',
},



{
    question: "What is the tallest mountain in the world?",
    options: ['Mount Everest', 'K2', 'Mount Kilimanjaro', 'Mount Fuji'],
    answer: 'Mount Everest',
},


];

const initialAnswers=[null,null,null];


const [userAnswrs,setUserAnswer] =useState(initialAnswers);


const [currentQusetion , setCurrentQuestion]=useState(0);


const[isQuizFinished, setIsQuizFinished ] = useState(false);

const selectedAnswer=userAnswrs[currentQusetion];

function handleSelectOption(option){

const  newUserAnswers=[...userAnswrs];
newUserAnswers[currentQusetion] = option;


setUserAnswer(newUserAnswers)

}

function goToNext(){
    if(currentQusetion===questionBank.length-1){
        setIsQuizFinished(true)
    }else{
        setCurrentQuestion(currentQusetion + 1)
    }
        



}

function goToPrev(){
    if(currentQusetion>0)
setCurrentQuestion(currentQusetion - 1)

}


    function restartQuiz(){
       setUserAnswer(initialAnswers);
       setCurrentQuestion(0);
       setIsQuizFinished(false); 
    }
 
   if(isQuizFinished)
   {
  return <Results userAnswrs={userAnswrs} questionBank={questionBank} restartQuiz={restartQuiz} />;

   }
    return <div>
        <h2>Qusetion {currentQusetion +1}</h2>
        <p className='question'>{questionBank[currentQusetion].question}</p>
      
      {questionBank[currentQusetion].options.map( (option) => ( 

    <button className={'option ' + (selectedAnswer === option ? 'selected' : '')} onClick={() => handleSelectOption(option)}> {option}</button>
      ))}

     
    
    <div className="nav-buttons">
     <button onClick={goToPrev} disabled={currentQusetion===0}>Previous </button>
    <button onClick={goToNext } disabled={!selectedAnswer }>
        
        {currentQusetion===questionBank.length-1 ? 'Finish Quiz' : 'Next'}
     
        </button>
    </div>
    
    
    </div>
}


export default Quiz;