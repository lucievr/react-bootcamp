function getMood() {
  const moods = ["Tired", "Hungry", "Happy", "Excited", "Sad"];
  return moods[Math.floor(Math.random() * moods.length)];
}
class Mood extends React.Component {
  render() {
    return (
      <div>
        <h1>My Current Mood is: {getMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById("root"));
