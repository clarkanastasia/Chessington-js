import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player, "king");
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let moves = [];

        // declare the 8 squares
        let front = Square.at(row + 1, col);
        let back = Square.at(row -1 , col);
        let left = Square.at(row, col - 1);
        let right = Square.at(row, col +1);
        let frontLeft = Square.at(row + 1, col - 1);
        let frontRight = Square.at(row + 1, col +1);
        let backLeft = Square.at(row - 1, col -1);
        let backRight = Square.at(row -1 , col + 1);

        moves = [front, back, left, right, frontLeft, frontRight, backLeft, backRight];
        // not pass the boundray
        moves = moves.filter((square) => square.row <= 7 && square.row >= 0 && square.col <= 7 && square.col >= 0 );

        // avoid friendly pieces, take opposing pieces(except king)
        moves = moves.filter((square) => board.getPiece(square) === undefined || board.getPiece(square).player !== this.player && board.getPiece(square).type !== "king");

        // console.log(`Moves array: ${moves}`);
        return moves;
    }
}
