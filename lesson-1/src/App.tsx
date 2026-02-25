import './App.css'
import Header from "./components/Header.tsx";
import {CORE_CONCEPTS} from './data.ts';
import CoreConcept from "./components/CoreConcept.tsx";
function App() {

	return (
		<div>
			<Header/>
			<main>
				<h2>Time to get started!</h2>
				{CORE_CONCEPTS.map((concept) => (
					<CoreConcept image={concept.image} title={concept.title} description={concept.description} />
				))}
			</main>
		</div>
	)
}

export default App
