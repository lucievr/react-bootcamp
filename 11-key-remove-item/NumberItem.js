class NumberItem extends React.Component {
    constructor(props) {
      super(props);
      this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(event) {
      console.log("INSIDE HANDLE REMOVE");
      this.props.remove(this.props.value);
    }
    render() {
      return (
        <li>
          {this.props.value}
          <button onClick={this.handleRemove}>X</button>
        </li>
      );
    }
}