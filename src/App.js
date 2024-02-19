import { useState } from "react";

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default function Board() {
    const [ oneSquaresState, setSquareState ] = useState( Array(9).fill(null) );
    const [ xIsNext, setXIsNext ] = useState(true);

    function handleClick(i) {
        const nextSquares = oneSquaresState.slice();
        
        if(xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquareState(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <div>
            <div className="board-row">
                <Square value={oneSquaresState[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={oneSquaresState[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={oneSquaresState[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={oneSquaresState[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={oneSquaresState[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={oneSquaresState[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={oneSquaresState[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={oneSquaresState[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={oneSquaresState[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
    )
}