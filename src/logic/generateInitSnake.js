// define init item here:
// it must have some coords
export default function generateInitSnake() {
	const initSnake = {
		head: { x: 2, y: 0 },
		body: [
			{ x: 0, y: 0 },
			{ x: 1, y: 0 },
		],
	};
	return initSnake;
}
