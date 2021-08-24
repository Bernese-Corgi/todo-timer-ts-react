export const ADD_TODO = 'todos/addTodo' as const;
export const TOGGLE_TODO = 'todos/toggleTodo' as const;
export const EDIT_TODO = 'todos/editTodo' as const;
export const DELETE_TODO = 'todos/removeTodo' as const;

let nextId = 1;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const editTodo = (id: number, text: string) => ({
  type: EDIT_TODO,
  payload: {
    id,
    text,
  },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: { id },
});

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof editTodo>
  | ReturnType<typeof deleteTodo>;

export type TodoState = Todo[];

const initialState: TodoState = [];

function todoReducer(
  state: TodoState = initialState,
  action: TodosAction
): TodoState {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: todo.text } : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export default todoReducer;
