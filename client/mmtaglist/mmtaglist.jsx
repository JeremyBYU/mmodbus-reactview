// App component - represents the whole app
MmTagList = React.createClass({
  renderTags() {
    return this.props.tags.map((tag) => {
      //  return <Task key={task._id} task={task} />;
      return <MmTag key={tag._id} tag={tag} onClick={this.props.onClick}/>;
    });
  },
  render() {
    return (
      <table className="pure-table pure-table-horizontal pure-table-striped tableSection">
        <thead>
          <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTags()}
        </tbody>
      </table>
    );
  }
});
