class App extends React.Component {
    render() {
        return (
          <div className='App'>
            <CoinContainer />
          </div>
        );
      }
}
  
ReactDOM.render(<App />, document.getElementById('root'))