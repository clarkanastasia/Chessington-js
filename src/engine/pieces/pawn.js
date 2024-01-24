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

    
    // getAvailableMoves(board) {
    //     let location = board.findPiece(this);
    //     console.log(`Location of piece: ${location}`);
    //     let moves = [];

    //     if (location.row === 7 || location.row === 0){
    //         moves = []}

    //      else if (this.firstMove == true){
    //         if (this.player === Player.WHITE){
    //         moves = board.getPiece(Square.at(location.row +1, location.col)) !== undefined ? [] : [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
    //         } else {
    //         board.getPiece(Square.at(location.row -1, location. col)) !== undefined ? moves = [] : moves = [Square.at(location.row - 1, location.col), Square.at(location.row -2, location.col)]
    //         }
    //     } else  {
    //         if (this.player === Player.WHITE) {
    //             moves = [Square.at(location.row + 1, location.col)]             
    //         } else {
    //             moves = [Square.at(location.row - 1, location.col)]
    //         }
    //     }
    // moves = moves.filter((item) => board.getPiece(Square.at(item.row, item.col)) === undefined);     
        
    //     if (this.player === Player.WHITE && location.row !== 7){
    //         if (board.getPiece(Square.at(location.row + 1, location.col -1)) !== undefined && 
    //         board.getPiece(Square.at(location.row + 1, location.col -1)).player !== this.player){
    //             moves.push(Square.at(location.row + 1, location.col -1));
    //         } else if (board.getPiece(Square.at(location.row + 1, location.col +1)) !== undefined && 
    //         board.getPiece(Square.at(location.row + 1, location.col +1)).player !== this.player){
    //             moves.push(Square.at(location.row + 1, location.col +1));
    //         }

    //     } else if (this.player === Player.BLACK && location.row !==0) {
    //         if (board.getPiece(Square.at(location.row -1, location.col -1)) !== undefined && 
    //         board.getPiece(Square.at(location.row -1, location.col -1)).player !== this.player){
    //             moves.push(Square.at(location.row -1, location.col -1));
    //         } else if (board.getPiece(Square.at(location.row + 1, location.col +1)) !== undefined && 
    //         board.getPiece(Square.at(location.row -1, location.col +1)).player !== this.player){
    //             moves.push(Square.at(location.row -1, location.col +1));
    //         }

    //     }
     
    //         console.log(`Available moves: ${moves}`)
    // return moves;
    // }
}
