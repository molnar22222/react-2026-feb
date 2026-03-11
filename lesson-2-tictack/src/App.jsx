import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "../winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
	X: 'Player 1',
	O: 'Player 2'
};

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];


function deriveWinner(gameBoard, players) {
	let winner;
	
	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol =
			gameBoard[combination[2].row][combination[2].column];
		
		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol];
		}
	}
	
	return winner;
}



function App() {
	const [activePlayer, setActivePlayer] = useState('X');
	const [players, setPlayers] = useState(PLAYERS);
	const [log, setLog] = useState([]);
	const [gameTurns, setGameTurns] = useState(initialGameBoard);
	
	const winner = deriveWinner(gameTurns, players);
	const hasDraw = log.length === 9 && !winner;
	
	function handleSelection(rowIndex, colIndex) {
		
		setGameTurns(prevState => {
			const updatedBoard = [...prevState.map(row => [...row])];
			updatedBoard[rowIndex][colIndex] = activePlayer;
			return updatedBoard;
		});
		
		setLog(prevState =>
			[...prevState,
				{
					player: players[activePlayer],
					square: {row: rowIndex, col: colIndex}
				}
			]
		);
		
		setActivePlayer(prevState => prevState === 'X' ? 'O' : 'X');
	}
	
	function handlePlayerNameChange(symbol, newName) {
		setPlayers(prevState => ({
			...prevState,
			[symbol]: newName
		}));
	};
	
	function handleRestart() {
		setGameTurns(initialGameBoard);
		setLog([]);
	}
	
	return (
		<main>
			<div id='game-container'>
				<ol id='players' className='highlight-player'>
					<Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'}
									onChangeName={handlePlayerNameChange}/>
					<Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'}
									onChangeName={handlePlayerNameChange}/>
				</ol>
				{(winner || hasDraw)  && (
					<GameOver winner={winner} onRestart={handleRestart}/>
				)}
				<GameBoard onSelectSquare={handleSelection} board={gameTurns}/>
			</div>
			<Log turns={log}/>
		</main>
	)
}

export default App
