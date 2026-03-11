
export default function Tabs({children, buttons}) {
	
	return (
		<>
			<h2>Examples</h2>
			<menu>{buttons}</menu>
			{children}
		</>
	)
}
