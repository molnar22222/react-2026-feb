
export default function GameOver({winner, onRestart}) {
	console.log('GameOver', winner);
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			{winner && <p>{winner} won!</p>}
			<p><button onClick={onRestart}>Rematch!</button></p>
		</div>
	)
}
