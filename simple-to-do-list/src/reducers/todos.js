const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: false
        }
      ];

    case "TOGGLE_TODO":
      //Return updated state with toggle todo item
      return state;

    default:
      return state;
  }
};

export default todos;
