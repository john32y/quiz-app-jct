import "/.QuizApp.css"
import Card from "./Card";
import Card from "./Card";
import Result from "./Result";
import { useState } from "react";

export default function QuizApp() {
    const [quizId, setQuizId] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, sethowResult] = useState(false);

    return(
        <>
        {
            !showResult
            ? <Card />
            : <Result />
        }
        <h3>Quiz App</h3>
        
        
        
        </>
        

        
    )
}