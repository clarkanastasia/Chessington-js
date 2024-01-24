import Piece from './piece';
import Square from '../../../src/engine/square';



export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let moves = [];

        // start of first loop
        for (let i = row + 1; i < 8; i++)
        {
            if (board.getPiece(Square.at(i, col)) !== undefined)
            {
                if (board.getPiece(Square.at(i, col)) !== this.player)
                {
                    moves.push(Square.at(i, col));
                    break;
                } else {
                    break;
                } 
            } else {
                moves.push(Square.at(i, col))
            }     
        } 
    
        // start of second loop
        for (let i = row - 1; i >= 0; i--)
        {
            if (board.getPiece(Square.at(i, col)) !== undefined)
            {
                if (board.getPiece(Square.at(i, col)) !== this.player)
                {
                    moves.push(Square.at(i, col));
                    break;
                } else {
                    break;
                } 
            } else {
                moves.push(Square.at(i, col))
            }     
        } 

        // start of third loop
        for (let i = col + 1; i < 8; i++)
        {
            if (board.getPiece(Square.at(row, i)) !== undefined)
            {
                if (board.getPiece(Square.at(row, i)) !== this.player)
                {
                    moves.push(Square.at(row, i));
                    break;
                } else {
                    break;
                } 
            } else {
                moves.push(Square.at(row, i))
            }     
        } 

        // start of fourth loop 
        for (let i = col - 1; i >= 0; i--)
        {
            if (board.getPiece(Square.at(row, i)) !== undefined)
            {
                if (board.getPiece(Square.at(row, i)) !== this.player)
                {
                    moves.push(Square.at(row, i));
                    break;
                } else {
                    break;
                } 
            } else {
                moves.push(Square.at(row, i))
            }     
        } 
        
        return moves;
    }
}  

