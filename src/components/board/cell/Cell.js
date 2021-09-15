
import './Cell.css';

function Cell(props) {
  // id={`cellPiece${props.cell}`} this is the Piece background Image according to Props Cell

  const highLightAvailableMoves = () => {
    const availableMoves = []
    // console.log(props.cell)
  }

  return (
    <div className="Cell" id={`cell${props.rowIdx}${props.colIdx}`}>
      <div 
        className="cellInnerContainer" 
        id={`cellPiece${props.cell.piece}`}
        // onClick={() => props.handleFindBoardPosition(props.rowIdx, props.colIdx, props)} 
        onClick={props.handleRoateTheView} 
      >
      </div>
    </div>
  );
}

export default Cell;
