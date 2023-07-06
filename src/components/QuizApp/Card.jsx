const imageUri = process.env.PUBLIC_URL + '/images/';

export default function Card({data, quizLength, quizId, handleAnswer}){
    return(
    <div className="quiz-card">
        <p>{quizId + 1}/{quizLength}</p>
        <img src={imageUri + data[quizId].image} alt="" />
        {/* <h3>{ data[quizId].question }</h3> */}
        <ul>
            {data[quizId].options.map(
                (e, index) => {
                    return(
                    <li key={index} onClick={() => handleAnswer(e.isCorrect)}> {e.answer}</li>
                    )
                }
            )}
        </ul>
    </div>
)}