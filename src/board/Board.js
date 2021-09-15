import {useState} from 'react'

import Bishop from '../components/pieces/Bishop'
import Pawn from '../components/pieces/Pawn'
import Rook from '../components/pieces/Rook'
import Knight from '../components/pieces/Knight'
import King from '../components/pieces/King'
import Queen from '../components/pieces/Queen'

import Cell from '../components/board/cell/Cell';
import './Board.css';

function Board() {

  const initialBoard = [
    ['R', "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ["r", 'n', 'b', 'q', 'k', 'b', 'n', 'r']
  ]

  const [currentBoard, setCurrentBoard] = useState([
    ['R', "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ["r", 'n', 'b', 'q', 'k', 'b', 'n', 'r']
  ])

  var currentTurn = true;

  const handlePlayersTurn = () => {
    currentTurn = !currentTurn
  }

  const handleRoateTheView = () => {
    let current;
    for(let i = 0; i < 8; i++){
      current = currentBoard.splice(0, 1)
      setCurrentBoard(...currentBoard, ...current)
    }
  }

  const handleFindBoardPosition = (rowIdx, colIdx, propsObj) => {
    console.log(rowIdx, colIdx, propsObj)
    // highLightAvailableMoves(rowIdx, colIdx, propsObj)
  }

  const handlePlayerMove = () => {

  }


  const initialiseChessBoard = () => {
    for(let i = 0; i < initialBoard.length; i++){
      for(let k = 0; k < 8; k++){
        if(initialBoard[i][k] === 'R'){
          currentBoard[i][k] = new Rook(1)
        }
        if(initialBoard[i][k] === 'N'){
          currentBoard[i][k] = new Knight(1)
        }
        if(initialBoard[i][k] === 'B'){
          currentBoard[i][k] = new Bishop(1)
        }
        if(initialBoard[i][k] === 'Q'){
          currentBoard[i][k] = new Queen(1)
        }
        if(initialBoard[i][k] === 'K'){
          currentBoard[i][k] = new King(1)
        }
        if(initialBoard[i][k] === 'P'){
          currentBoard[i][k] = new Pawn(1)
        }

        if(initialBoard[i][k] === 'r'){
          currentBoard[i][k] = new Rook(2)
        }
        if(initialBoard[i][k] === 'n'){
          currentBoard[i][k] = new Knight(2)
        }
        if(initialBoard[i][k] === 'b'){
          currentBoard[i][k] = new Bishop(2)
        }
        if(initialBoard[i][k] === 'q'){
          currentBoard[i][k] = new Queen(2)
        }
        if(initialBoard[i][k] === 'k'){
          currentBoard[i][k] = new King(2)
        }
        if(initialBoard[i][k] === 'p'){
          currentBoard[i][k] = new Pawn(2)
        } 
      }
    }
    console.log(currentBoard)
  }

  initialiseChessBoard()

  return (
    <div className="board">
      <div className="boardInnerContainer">
        {currentBoard.map( (row, rowIdx) => {
          return row.map( (cell, colIdx) => {
            return <Cell 
                      cell={cell} 
                      colIdx={colIdx} 
                      rowIdx={rowIdx}
                      handleFindBoardPosition={handleFindBoardPosition}
                      handleRoateTheView={handleRoateTheView}
                    />
          })
        })}
      </div>
    </div>
  );
}

export default Board;
