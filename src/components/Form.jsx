// Destructuring removes the need to add. props.setInputText
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    // prevents default
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        // State is logged as input
        value={inputText}
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fa fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
