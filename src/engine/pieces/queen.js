import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player, "queen");
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
    
// moves up 
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
    
// moves down 
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

// moves to the right
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

// moves to the left
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
