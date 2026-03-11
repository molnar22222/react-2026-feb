import {useRef, useState} from "react";

export default function UserInput({userInput, handleChanges}) {
	const initialInvestment = useRef();
	
	console.log(initialInvestment.current);
	
	return (
		<section id="user-input">
			<button onClick={() => console.log(initialInvestment.current.value)}/>
			<div className="input-group">
				<p>
					<input
						type={'number'}
						required
						ref={initialInvestment}
						defaultValue={userInput.initialInvestment}
					/>
					<label>Initial Investment</label>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type={'number'}
						required
						value={userInput.annualInvestment}
						onChange={(event) => handleChanges(event.target.value, 'annualInvestment')}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input
						type={'number'}
						required
						value={userInput.expectedReturn}
						onChange={(event) => handleChanges(event.target.value, 'expectedReturn')}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type={'number'}
						required
						value={userInput.duration}
						onChange={(event) => handleChanges(event.target.value, 'duration')}
					/>
				</p>
			</div>
		</section>
	)
}
