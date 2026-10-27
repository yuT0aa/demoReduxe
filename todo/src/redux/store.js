import { legacy_createStore as createStore } from 'redux';

const ADD_TODO='ADD_TODO';
const REMOVE_TODO='REMOVE_TODO';
const EDIT_TODO='EDIT_TODO';
const SET_FILTER='SET_FILTER';

export const addTodo=(text)=>({type:ADD_TODO,payload:{id:Date.now(),text}});
export const removeTodo=(id)=>({type:REMOVE_TODO,payload:id});
export const editTodo=(id,text)=>({type:EDIT_TODO,payload:{id,text}});
export const setFilter=(filter)=>({type:SET_FILTER,payload:filter});

const initialState={
    todos:[],
    filter:'ALL'
};

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,{...action.payload,completed:false}],
            };
        
        case REMOVE_TODO:
            return{
                ...state,
                todos:state.todos.filter((todo)=>todo.id!==action.payload),
            };

        case EDIT_TODO:
            return{
                ...state,
                todos:state.todos.map((todo)=>
                  todo.id===action.payload.id?{...todo,text:action.payload.text}:todo),
            };

        case SET_FILTER:
            return{
                ...state,
                filter:action.payload,
            };

        default:
            return state;
    }
};

export const store=createStore(todoReducer);