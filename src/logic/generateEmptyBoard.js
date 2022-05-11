export default function generateEmptyBoard(colNum, rowNum) {
	// create empty board according to the passed columns & rows number:
	let board = [];
	for (let r = 0; r < rowNum; r++) {
		board[r] = [];
		for (let c = 0; c < colNum; c++) {
			// define value of the empty cell
			// it can be a string or an object with properties, like:
			// board[r][c] = {
			//   body: false,
			//   food: false,
			//   head: false
			// };
			board[r][c] = {
				body: false,
				food: false,
				head: false,
			};
		}
	}
	return board;
}
