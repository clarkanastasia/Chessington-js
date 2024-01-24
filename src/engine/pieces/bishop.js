import Piece from './piece';
import Square from '../../../src/engine/square';


export default class Bishop extends Piece {
    constructor(player) {
        super(player, "bishop");
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let moves = [];

// loop diagonally up and left
        for (let i = 1; i <= Math.min(7-row, col); i++) 
        {
            moves.push(Square.at(row + i, col - i))
        }
        
// loop diagonally up and right
        for (let i = 1; i <= Math.min(7-row, 7-col); i++) 
        {
            moves.push(Square.at(row + i, col + i))
        }

// loop diagonally down and left
        for (let i = 1; i <= Math.min(row, col); i--){
        moves.push(Square.at(row - i, col - i))
        }

// loop diagonally down and right
        for (let i = 1; i <= Math.min(row, 7-col); i--)
        {
         moves.push(Square.at(row - i, col + i))
        }
    
return moves
    }
}
