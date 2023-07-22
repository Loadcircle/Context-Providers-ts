import { TodoList } from "../components/TodoList"
import { TodoTitle } from "../components/TodoTitle"
import { TodoProvider } from "../context/TodoProvider"
import { useTodos } from "../hooks/useTodos"

export const Todo = () => {

  return (
    <TodoProvider>
        <TodoTitle/>
        <TodoList/>
    </TodoProvider>
  )
}
