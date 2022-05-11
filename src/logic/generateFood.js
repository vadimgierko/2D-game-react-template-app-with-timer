import generateRandomInt from "./generateRandomInt";

// define some random item here:
// it must have some random coords
export default function generateFood(snake, colNum, rowNum) {
	const eliminatedCoords = [snake.head, ...snake.body];
	// generate random coords for food piece:
	let coords = {
		x: generateRandomInt(colNum),
		y: generateRandomInt(rowNum),
	};
	// check if coords don't collide with the eliminatedCoords:
	if (eliminatedCoords && eliminatedCoords.length) {
		eliminatedCoords.forEach((element) => {
			if (element.x === coords.x && element.y === coords.y) {
				coords = generateFood(snake, colNum, rowNum);
			}
		});
	}
	return coords;
}
