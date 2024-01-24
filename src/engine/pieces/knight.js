import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player, "knight");
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let moves = [];

        let up2Right1 = Square.at(row + 2, col + 1);
        let up2Left1 = Square.at(row + 2, col -1);
        let left2Up1 = Square.at(row + 1, col -2);
        let left2Down1 = Square.at(row - 1, col -2);
        let right2Up1 = Square.at(row + 1, col + 2);
        let right2Down1 = Square.at(row -1, col + 2);
        let down2Left1  = Square.at(row -2, col -1);
        let down2Right1  = Square.at(row -2 , col + 1);
        
        moves = [up2Right1, up2Left1, left2Up1, left2Down1, right2Up1, right2Down1, down2Left1, down2Right1];
        moves = moves.filter((square) => square.row <= 7 && square.row >= 0 && square.col <= 7 && square.col >= 0 );
        
        return moves;
    }
}
