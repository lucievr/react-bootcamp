class Random extends React.Component {
	constructor(props) {
		super(props);
		this.state = { num: 0, color: 'purple' };
		this.makeTimer();
	}
	makeTimer() {
		setInterval(() => {
			let rand = Math.floor(Math.random() * this.props.maxNum);
			this.setState({ num: rand });
		}, 1000);
	}
	render() {
		return <h1>{this.state.num}</h1>;
	}
}