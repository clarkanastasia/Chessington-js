import Piece from './piece';
import Square from '../../../src/engine/square';

export default class Rook extends Piece {
    constructor(player) {
        super(player, "rook");
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let moves = [];

        for (let i = row + 1; i < 8; i++)
        {
            if (board.getPiece(Square.at(i, col)) !== undefined)
            {
                if (board.getPiece(Square.at(i, col)).player !== this.player)
                {
                    if (board.getPiece(Square.at(i,col)).type === "king")
                    {
                        break;
                    } else {
                        moves.push(Square.at(i, col));
                        break;
                    }
                } else {
                    break;
                } 
            } else {
                moves.push(Square.at(i, col))
            }     
        } 
    
        for (let i = row - 1; i >= 0; i--)
        {
            if (board.getPiece(Square.at(i, col)) !== undefined)
            {
                if (board.getPiece(Square.at(i, col)).player !== this.player)
                {
                    if (board.getPiece(Square.at(i,col)).type === "king")
                    {
                        break;
                    } else {
                        moves.push(Square.at(i, col));
                        break;
                    }
                } else {
                    break;
                } 
            } else {
                moves.push(Square.at(i, col))
            }    
        } 

        for (let i = col + 1; i < 8; i++)
        {
            if (board.getPiece(Square.at(row, i)) !== undefined)
            {
                if (board.getPiece(Square.at(row, i)).player !== this.player)
                {
                    if (board.getPiece(Square.at(row,i)).type === "king")
                    {
                        break;
                    } else {
                        moves.push(Square.at(row, i));
                        break;
                    }
                } else {
                    break;
                } 
            } else {
                moves.push(Square.at(row, i))
            }    
        } 

        for (let i = col - 1; i >= 0; i--)
        {
            if (board.getPiece(Square.at(row, i)) !== undefined)
            {
                if (board.getPiece(Square.at(row, i)).player !== this.player)
                {
                    if (board.getPiece(Square.at(row,i)).type === "king")
                    {
                        break;
                    } else {
                        moves.push(Square.at(row, i));
                        break;
                    }
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

