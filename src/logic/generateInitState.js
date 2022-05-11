import generateInitSnake from "./generateInitSnake";
import generateFood from "./generateFood";
import generateInitBoard from "./generateInitBoard";

// this function generates initial state
export default function generateInitState(colNum, rowNum) {
	// here you can define any initItems which will be drawn into the board:
	const initSnake = generateInitSnake();
	const initFood = generateFood(initSnake, colNum, rowNum);
	// pass initItems to the function below + colNum & rowNum args:
	const initBoard = generateInitBoard(initSnake, initFood, colNum, rowNum);
	const initState = {
		boardSize: {
			colNum: colNum,
			rowNum: rowNum,
		},
		board: initBoard,
		//===> here can be any initItems which will be drawn into the board:
		snake: initSnake,
		food: initFood,
		eatenFood: null,
		//===> common basic elements of every game:
		score: 0,
		start: false,
		pause: false,
		end: false,
	};
	return initState;
}
