import { useReducer } from "react"
import { TodoState, props } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"

const INITIAL_STATE:TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Hcaer cosas',
            completed: false,
        },
        {
            id: '2',
            desc: 'Hacer mas cosas',
            completed: false,
        },
    ],
    completed: 0,
    pending: 2,
}


export const TodoProvider = ({children}: props) => {


    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id:string) =>{

        dispatch({ type: "toggleTodo", payload: {id} })

    }


  return (
    <TodoContext.Provider value={{todoState, toggleTodo}}>
        {children}
    </TodoContext.Provider>
  )
}
