MmApp = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      tags: MmodbusUtils.collections.Tags.find({}).fetch()
    };
  },
  render() {
    return (
      <div className="content pure-g">
        <div className="pure-u-1 pure-u-md-1-3">
          <h1> Tags </h1>
          <MmTagList tags={this.data.tags}/>
        </div>
        <div className="pure-u-1 pure-u-md-2-3">
          <div className="container">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
});
