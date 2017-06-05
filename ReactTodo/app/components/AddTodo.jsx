var React = require("react");

var AddTodo = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = "";
      this.props.onAddTodo(todoText)
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div>
        <h1>Hello AddTodo component</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }

});

module.exports = AddTodo;