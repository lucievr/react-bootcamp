class Coin extends React.Component {
    render() {
      return (
        <div className='Coin'>
          <img src={this.props.info.imgSrc} alt={this.props.info.side} />
        </div>
      );
    }
}
  