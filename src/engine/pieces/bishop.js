import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player, "bishop");
    }

    getAvailableMoves(board) {
        return new Array(0);
    }
}
