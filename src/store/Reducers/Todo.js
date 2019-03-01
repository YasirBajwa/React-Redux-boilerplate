import TodoAction from "../Actions/actionTodo";

function Todo(state = { name: "Yasir" }, action) {
  switch (action.type) {
    case TodoAction.GET_TODO:
      return {
        ...state,
        text: "GET_TODO"
      };
    case TodoAction.GET_TODO_SUCCESSFULL:
      return {
        ...state,
        text: "GET_TODO_SUCCESSFULL"
      };
    case TodoAction.GET_TODOD_FAILED:
      return {
        ...state,
        text: "GET_TODO_FAILED"
      };
    default:
      return state;
      break;
  }
}
export default Todo;
