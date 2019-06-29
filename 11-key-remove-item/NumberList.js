class NumberList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { nums: [1, 2, 3, 4, 5] };
      this.remove = this.remove.bind(this);
    }
  
    remove(num) {
      console.log("REMOVING!");
      console.log(num);
      this.setState(st => ({
        nums: st.nums.filter(n => n !== num)
      }));
    }
  
    render() {
      let nums = this.state.nums.map(n => (
        <NumberItem key={n} value={n} remove={this.remove} />
      ));
      return (
        <div>
          <h1>Number List with Keys</h1>
          <ul>{nums}</ul>
        </div>
      );
    }
}