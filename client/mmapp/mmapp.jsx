MmApp = React.createClass({
  render() {
    return (
      <div>
        <h1>Test </h1>
        <div className="container">
          {this.props.content}
        </div>
      </div>
    );
  }
});
