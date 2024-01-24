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

// moves diagonally up and left

        for (let i = 1; i <= Math.min(7-row, col); i++) 
        {
            if (board.getPiece(Square.at(row + i, col - i)) !== undefined)
            {
                if (board.getPiece(Square.at(row + i, col - i)).player !== this.player)
                {
                    if (board.getPiece(Square.at(row + i, col - i)).type === "king")
                    {
                        break;
                    } else {
                        moves.push(Square.at(row + i, col - i));
                        break;
                    }
                } else {
                     break;
                } 
            } else {
                moves.push(Square.at(row + i, col - i))
            }  
        }

// moves diagonally up and right

        for (let i = 1; i <= Math.min(7-row, 7-col); i++) 
        {
            if (board.getPiece(Square.at(row + i, col + i)) !== undefined)
            {
                if (board.getPiece(Square.at(row + i, col + i)).player !== this.player)
                {
                    if (board.getPiece(Square.at(row + i, col + i)).type === "king")
                    {
                        break;
                    } else {
                        moves.push(Square.at(row + i, col + i));
                        break;
                    }
                } else {
                    break;
                } 
             } else {
                moves.push(Square.at(row + i, col + i))
            }           
        }

// moves diagonally down and left
        for (let i = 1; i <= Math.min(row, col); i++)
        {
            if (board.getPiece(Square.at(row - i, col - i)) !== undefined)
            {
                if (board.getPiece(Square.at(row - i, col - i)).player !== this.player)
                {
                    if (board.getPiece(Square.at(row - i, col - i)).type === "king")
                    {
                        break;
                    } else {
                        moves.push(Square.at(row - i, col - i));
                        break;
                    }
                } else {
                    break;
                } 
            } else {
                moves.push(Square.at(row - i, col - i))
            }        
        }

// moves diagonally down and right
        for (let i = 1; i <= Math.min(row, 7-col); i++)
        {
            if (board.getPiece(Square.at(row - i, col + i)) !== undefined)
            {
                if (board.getPiece(Square.at(row - i, col + i)).player !== this.player)
                {
                    if (board.getPiece(Square.at(row - i, col + i)).type === "king")
                    {
                        break;
                    } else {
                        moves.push(Square.at(row - i, col + i));
                        break;
                    }
                } else {
                    break;
                } 
            } else {
                moves.push(Square.at(row - i, col + i))
            }  
        }
    
        return moves;
    }
}
