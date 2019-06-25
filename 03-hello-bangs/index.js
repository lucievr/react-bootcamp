class App extends React.Component {
    render() {
      return (
        <div>
          <Hello
            to="Jitka"
            from="Lucie"
            bangs={3}
          />
          <Hello
            to="Becky"
          />
  
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));