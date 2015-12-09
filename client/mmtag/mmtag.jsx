MmTag = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    tag: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <tr>
        <td>
          {this.props.tag.tag}
        </td>
        <td>
          {this.props.tag.description}
        </td>
      </tr>
    );
  }
});
