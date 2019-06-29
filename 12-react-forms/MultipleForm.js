class MultipleForm extends React.Component {
  constructor(props) {
    super(props);
    (this.state = { username: "", email: "", password: "" }),
      (this.handleChange = this.handleChange.bind(this));
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(
      `Your ${
        this.state.username
      } account has been registered. We have just sent a confirmation to ${
        this.state.email
      }`
    );
    this.setState({
      username: "",
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div>
        <h1>Multiple Input Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}
