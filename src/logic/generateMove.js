import generateEmptyBoard from "./generateEmptyBoard";
import generateSnakeMove from "./generateSnakeMove";
import generateFood from "./generateFood";

export default function generateMove(state, dir) {
	const colNum = state.boardSize.colNum;
	const rowNum = state.boardSize.rowNum;
	let updatedState = { ...state };

	// define your move logic here:
	// update some items:
	updatedState.snake = generateSnakeMove(state.snake, dir, state.eatenFood);
	// collisions check or constrains => is there need to end game ? go here:
	// check if snake will collide with the walls
	if (
		updatedState.snake.head.x >= colNum ||
		updatedState.snake.head.x < 0 ||
		updatedState.snake.head.y >= rowNum ||
		updatedState.snake.head.y < 0
	) {
		updatedState.pause = false;
		updatedState.start = false;
		updatedState.end = true;
	}
	// check if snake would eat itself
	updatedState.snake.body.forEach((bodyCell) => {
		if (
			updatedState.snake.head.x === bodyCell.x &&
			updatedState.snake.head.y === bodyCell.y
		) {
			updatedState.pause = false;
			updatedState.start = false;
			updatedState.end = true;
		}
	});
	// if after conditions check above game is not over:
	if (updatedState.start) {
		// check if a food will be eaten
		if (
			updatedState.snake.head.x === updatedState.food.x &&
			updatedState.snake.head.y === updatedState.food.y
		) {
			updatedState.eatenFood = updatedState.food;
			updatedState.food = generateFood(updatedState.snake, colNum, rowNum);
			updatedState.score = updatedState.score + 1;
		} else {
			updatedState.eatenFood = null;
		}
		// clear the board
		updatedState.board = generateEmptyBoard(colNum, rowNum);
		// update a board with the updated snake
		// draw head
		const head = { ...updatedState.snake.head };
		updatedState.board[head.y][head.x].head = true;
		// draw body
		const body = [...updatedState.snake.body];
		body.forEach(
			(bodyCell) => (updatedState.board[bodyCell.y][bodyCell.x].body = true)
		);
		// update board with the food
		updatedState.board[updatedState.food.y][updatedState.food.x].food = true;
		return updatedState;
	} else if (updatedState.end) {
		// if after conditions check above game is over:
		const endState = {
			...updatedState,
			board: state.board,
			snake: state.snake,
		};
		return endState;
	}
}
