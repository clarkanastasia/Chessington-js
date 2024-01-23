import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.firstMove = true;
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.firstMove = false;
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves = [];
        if (this.firstMove == true){
            if (this.player === Player.WHITE) {
            moves = [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
         } else {
            moves = [Square.at(location.row - 1, location.col), Square.at(location.row -2, location.col)]
            }
        } else {
            if (this.player === Player.WHITE) {
                moves = [Square.at(location.row + 1, location.col)]
             } else {
                moves = [Square.at(location.row - 1, location.col)]
                }
        }
    return moves;
    }


    // getAvailableMoves(board) {
    //     let location = board.findPiece(this);
    //     let moves = [];
    //     if(this.player === Player.WHITE){
    //         if(location.row == 1){
    //             moves = [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
    //         } else moves = [Square.at(location.row + 1, location.col)]
    //     } else {
    //         if(location.row == 6){
    //             moves = [Square.at(location.row -1, location.col), Square.at(location.row -2, location.col)]
    //         } else moves = [Square.at(location.row -1, location.col)]
    //     }
    // return moves;
    // }
}
