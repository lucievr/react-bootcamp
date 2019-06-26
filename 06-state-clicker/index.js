class App extends React.Component {
    render() {
        return (
          <div className='App'>
            <Game />
            <Demo />
            <Button />
            <Random maxNum={10} />
            <Clicker />
          </div>
        );
      }
}
  
ReactDOM.render(<App />, document.getElementById('root'))