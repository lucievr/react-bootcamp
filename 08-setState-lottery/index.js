class App extends React.Component {
    render() {
        return (
          <div className='App'>
            <Lottery />
            <Lottery title="Mini daily" numBalls={4} maxNum={15} />
          </div>
        );
      }
}
  
ReactDOM.render(<App />, document.getElementById('root'))