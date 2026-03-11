import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10
	});
	
	function handleChanges(value, inputIdentifier) {
		
		setUserInput(prevState => ({
			...prevState,
			[inputIdentifier]: +Number(value)
		}));
	}
	
	return (
		<>
			<Header/>
			<UserInput userInput={userInput} handleChanges={handleChanges}/>
			<Result input={userInput}/>
		</>
	)
}

export default App
