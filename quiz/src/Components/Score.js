import React from "react";

const Score = ({ score, onNextQuestion, onRestart }) => {
    return (
        <div className="score">
            <h2>Quiz Ended!</h2>
            <p>Your score: {score}</p>
            <button className="btn btn-primary" onClick={onRestart}>
                Restart Quiz
            </button>
        </div>
    );
};

export default Score;
