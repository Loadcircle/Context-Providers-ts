export interface Todo {
    id: string;
    desc: string;
    completed: boolean;
}

export interface TodoState{
    todoCount: number,
    todos: Todo[],
    completed: number,
    pending: number,
}

export interface props {
    //puede ser 1 elemento o varios elementos
    children: JSX.Element | JSX.Element[]
}

export interface TodoContextProps{
    todoState: TodoState;
    toggleTodo: (id:string)=>void;
}

export interface TodoProps{
    todo: Todo,
}