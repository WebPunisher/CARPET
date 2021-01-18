import React,{useState,useEffect} from 'react';
import firebase from '../../firebase/firebase.utils';
import Question from '../question/question.component';
import TQuestion from '../question/tQuestion.component';
import Spinner from '../UI/Spinner/spinner.component';
import './exam.styles.scss';



const Exam = (props) => {
    
    const [fetching,setFetching] = useState(true)
    const [seconds,setSeconds] = useState(100)
    const [examName,setExamName] = useState('')
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [score,setScore] = useState(0)
    const [maxScore,setMaxScore] = useState(100)
    const [questions,setQuestions] = useState([
        // {
        //     type:"MultipleChoice",
        //     points:15,
        //     imageURL: "https://avatars2.githubusercontent.com/u/54589572?s=460&u=b663e9b613864114600790beb68d7d1d45b9cbde&v=4",
        //     questionText:"What is my name ?",
        //     answerOptions : [
        //         { answerText: 'Talha', isCorrect: true},
        //         { answerText: 'Tayfur', isCorrect: false},
        //         { answerText: 'Sarp', isCorrect: false},
        //         { answerText: 'Kuzey', isCorrect: false},
        //     ]
            
        // },
        // {
        //     type:"TrueFalse",
        //     points:10,
        //     // imageURL: "https://avatars2.githubusercontent.com/u/54589572?s=460&u=b663e9b613864114600790beb68d7d1d45b9cbde&v=4",
        //     questionText:"Am I a soldier ?",
        //     isCorrect:false
        // }
    ])
    
    const shuffleSingleQuestionsOptions = (question) =>{
        question.answerOptions.sort( () => Math.random() - 0.5);
        return question
    }
    const shuffleQuestionsOptions = (arr) =>{
        let temp = [...arr]
        let result =temp.map(question => {
            if(question.type === "MultipleChoice"){
                return shuffleSingleQuestionsOptions(question)
            } else {
                return question
            }
        })
        return result
    }
    const shuffleExam = (arr) => {
        let temp = [...arr]
        temp.sort( () => Math.random() - 0.5);
        return temp
    }
    const examId=props.location.pathname.slice(6);
    useEffect(  () =>{
        const fetchExam = async () =>{
            let db =firebase.firestore();
            let example=db.collection("Exams").doc(examId).get()
            let exam= (await example).data()
            console.log(exam)
            let questionsWithShuffledOptions = await shuffleQuestionsOptions(exam.questions)
            let shuffledQuestions = await  shuffleExam(questionsWithShuffledOptions)
            setQuestions(shuffledQuestions)
            setMaxScore(exam.points)
            setExamName(exam.examName)
            setFetching(false)
        }
        fetchExam()
    },[examId])

    useEffect(()=>{
        if(seconds>0){
            let timer =setTimeout(() => setSeconds(seconds-1),1000);
            return () => clearTimeout(timer);
        } else {
            alert("time is up")
        }
    },[seconds])

    

    const approve = (correct,point) => {
        setCurrentQuestion(currentQuestion+1)
        if (correct) {
            setScore(score+point)
        }
        if(currentQuestion+1 === questions.length){
            let db =firebase.firestore();
            db.collection("examResults").add({
                examId:examId,
                examName:examName,
                score:score
            })
            setSeconds(0)
            console.log("end of exam")
        }
    }
    return (
        <div className='exampage'>
            <header className="Header">
            <div>{props.location.pathname.slice(6)}</div>
            <div className="timer">
                <div className="timer_text">Time Left</div>
                <div className="timer_sec">{seconds}</div>
            </div>
            </header>
            <div className="examName"> {examName}</div>
            {fetching ? <Spinner/>
            :
            questions.length > currentQuestion ? 
                
                questions[currentQuestion].type === "MultipleChoice"?
                    <Question question={questions[currentQuestion]} questionNumber={currentQuestion+1} approve = {(correct,point)=>approve(correct,point)} key={questions[currentQuestion].id}/>
                :
                    <TQuestion question={questions[currentQuestion]} questionNumber={currentQuestion+1} approve = {(correct,point)=>approve(correct,point)} key={questions[currentQuestion].id}/>
                : 
            
                <div className="examResults">
                    <h1>END OF EXAM</h1>
                    <div> You have scored <span className="score">{score}</span> out of {maxScore}</div>
                    <div>Y</div>
                </div>
            }
            
        </div>
    )
    
}

export default Exam;