import Piece from './piece';
import Square from '../../../src/engine/square';



export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        for (let i = 0; i < 8; i++) {
            if (i === location.row) {continue;}
                moves.push(Square.at(i, location.col))
                  
        }
        for (let i = 0; i < 8; i++) {
            if (i === location.col) {continue;}
                moves.push(Square.at(location.row, i))         
        }
        //moves = moves.filter(item => item !== Square.at(location.row, location.col))
        console.log(moves);
        return moves;
    }
}
