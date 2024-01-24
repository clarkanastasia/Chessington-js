import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player, "pawn");
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

        if(this.player === Player.WHITE && location.row !== 7){
            let oneSquareInFront = Square.at(location.row +1, location.col);
            let twoSquaresInFront = Square.at(location.row +2, location.col);
            let diagonalLeft = Square.at(location.row +1, location.col -1);
            let diagonalRight = Square.at(location.row +1, location.col +1);

                if(board.getPiece(oneSquareInFront) === undefined){
                    moves.push(oneSquareInFront)
                    if(this.firstMove == true && board.getPiece(twoSquaresInFront) === undefined){
                        moves.push(twoSquaresInFront)
                    }
                }
               
                if (board.getPiece(diagonalLeft) !== undefined && board.getPiece(diagonalLeft).player !== this.player && board.getPiece(diagonalLeft).type !== "king"){
                    moves.push(diagonalLeft);
                } 
                
                if (board.getPiece(diagonalRight) !== undefined && board.getPiece(diagonalRight).player !== this.player && board.getPiece(diagonalRight).type !== "king"){
                    moves.push(diagonalRight);
                
                }


        } else if(this.player === Player.BLACK && location.row !== 0){
            let oneSquareInFront = Square.at(location.row -1, location.col);
            let twoSquaresInFront = Square.at(location.row -2, location.col);
            let diagonalLeft = Square.at(location.row -1, location.col -1);
            let diagonalRight = Square.at(location.row -1, location.col +1);

                if(board.getPiece(oneSquareInFront) === undefined){
                    moves.push(oneSquareInFront)
                    if(this.firstMove == true && board.getPiece(twoSquaresInFront) === undefined){
                        moves.push(twoSquaresInFront)
                    }
                }  
                
                if (board.getPiece(diagonalLeft) !== undefined && board.getPiece(diagonalLeft).player !== this.player && board.getPiece(diagonalLeft).type !== "king"){
                    moves.push(diagonalLeft);

                } 
                
                if (board.getPiece(diagonalRight) !== undefined && board.getPiece(diagonalRight).player !== this.player && board.getPiece(diagonalRight).type !== "king"){
                    moves.push(diagonalRight);

                }
        } else moves = [];
    console.log(`Available moves: ${moves}`)
    return moves;
    }
}
