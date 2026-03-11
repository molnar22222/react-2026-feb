import logo from '../assets/investment-calculator-logo.png';

export default function Header(){
	return (
		<header id="header">
			<img src={logo} alt="React logo"/>
			<h1>Dynamic Component Types</h1>
		</header>
	)
}
