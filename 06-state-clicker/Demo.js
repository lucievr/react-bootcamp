class Demo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { color: 'cyan' };
	}
	render() {
		return <h1>{this.state.color}</h1>;
	}
}