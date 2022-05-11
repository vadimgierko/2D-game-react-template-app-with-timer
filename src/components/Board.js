export default function Board({ board, score }) {
	return (
		<table className="board">
			<tbody>
				{board.map((row, r) => (
					<tr key={"row-" + r}>
						{row.map((cell, c) => (
							<td
								className={
									cell.body
										? "body-cell"
										: cell.food
										? "food-cell"
										: cell.head
										? "head-cell"
										: ""
								}
								style={{
									// the board square cell will be sized automatically
									// according to the number of rows & columns:
									width: `${100 / row.length}%`,
									height: `${100 / board.length}%`,
								}}
								key={"col-" + c}
							>
								{cell.food && score + 1}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
