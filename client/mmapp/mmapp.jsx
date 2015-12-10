MmApp = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      selectedTag: null
    };
  },
  getMeteorData() {
    return {
      tags: MmodbusUtils.collections.Tags.find({}).fetch(),
      selectedTag: new ReactiveVar(null)
    };
  },
  updateSelectedTag(event) {
    let reactID = event.dispatchMarker;
    let regEx = /\$(.*?)\./g;
    let match = regEx.exec(reactID);
    console.log(this);
    console.log(event);

    if (match !== null) {
      console.log(match[1]);
      this.data.selectedTag.set(match[1]);
    }
    //  this.data.selectedTag.set(id);
  },
  renderCalled(){
    console.log('Render Called');
  },
  render() {
    this.renderCalled();
    return (
      <div className="content pure-g">
        <div className="pure-u-1 pure-u-md-1-3">
          <h1> Tags </h1>
          <MmTagList tags={this.data.tags} onClick={this.updateSelectedTag}/>
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
