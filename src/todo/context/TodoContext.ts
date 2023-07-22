import { createContext } from "react";
import { TodoContextProps } from "../interfaces/interfaces";

//como el context esta vacia y el type es un todocontextprops hay que decirle que eventualmente sera un objeto de ese tipo
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);