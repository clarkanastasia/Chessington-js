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
        console.log(moves);
        return moves;

        for (let i= location.col +1; i < 8; i++){
            if(board.getPiece(Square.at(location.row, i)) !== undefined){
                if(board.getPiece(Square.at(location.row, i)). player === this.player){
                    break;
                } else {
                    moves.push(Square.at(location.row, i))
                    break;
                }
            }
            moves.push(Square.at(location.row, i))
        }

        for (let i= location.col -1; i < 0; i--){
            moves.push(Square.at(location.row, i))
        }

        
        for (let i= location.row +1; i < 8; i++){
            moves.push(Square.at(i, location.col))
        }

        for (let i= location.col -1; i < 0; i--){
            moves.push(Square.at(i, location.col))
        }
    }


   
}
