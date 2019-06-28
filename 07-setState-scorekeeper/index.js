class App extends React.Component {
    render() {
        return (
          <div className='App'>
            <ScoreKeeper />
          </div>
        );
      }
}
  
ReactDOM.render(<App />, document.getElementById('root'))