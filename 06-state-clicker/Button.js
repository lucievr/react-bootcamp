class Button extends React.Component {
	render() {
		return (
			<button
				onClick={function() {
					alert('CLICKED!!');
				}}
			>
				Click Me!
			</button>
		);
	}
}