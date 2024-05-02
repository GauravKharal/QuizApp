import { useContext } from "react";
import { QuizContext } from "../helpers/Context";
import { Questions } from "../helpers/QuestionBank";
import "../App.css";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1> Quiz Finished !</h1>
      <h3>
        <em>Score: </em>{score}/{Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
