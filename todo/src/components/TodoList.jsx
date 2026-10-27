import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from '../redux/store';

function TodoList(){
    const [text,setText]=useState('');
    const [editingId,setEditingId]=useState(null);
    const [editText,setEditText]=useState('');

    const dispatch=useDispatch();
    const {todos,filter}=useSelector((state)=>state);

    const filteredTodos=todos.filter((todo)=>{
        if (filter==='ACTIVE')return !todo.completed;
        if (filter==='COMPLETED')return todo.completed;
        return true;
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!text.trim())return;
        dispatch(addTodo(text));
        setText('')
    };

    const handleUpdate=(id)=>{
        if (!editText.trim())return;
        dispatch(editTodo(id,editText));
        setEditingId(null);
        setEditText('')
    };

    return(
        <dib>
            <form onSubmit={handleSubmit} className="input-group mb-4">
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    placeholder="Ajouter une tache..." 
                />
                <button className="btn btn-success" type="submit">
                    Ajouter
                </button>
            </form>

            <ul className="list-group">
                {filteredTodos.length===0?(
                    <li className="list-group-item text-muted text-center">aucune tache trouvee</li>
                    ):(
                    filteredTodos.map((todo) => (
                        <li
                        key={todo.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        >
                        {editingId === todo.id ? (
                            <div className="input-group">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                            <button
                                className="btn btn-sm btn-outline-success"
                                onClick={() => handleUpdate(todo.id)}
                            >
                                Enregistrer
                            </button>
                            <button
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => setEditingId(null)}
                            >
                                Annuler
                            </button>
                            </div>
                        ) : (
                            <>
                            <span
                                className={`user-select-all ${
                                todo.completed ? 'text-decoration-line-through text-muted' : ''
                                }`}
                            >
                                {todo.text}
                            </span>
                            <div>
                                <button
                                className="btn btn-sm btn-outline-warning me-2"
                                onClick={() => {
                                    setEditingId(todo.id);
                                    setEditText(todo.text);
                                }}
                                >
                                Éditer
                                </button>
                                <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => dispatch(removeTodo(todo.id))}
                                >
                                Supprimer
                                </button>
                            </div>
                            </>
                        )}
                    </li>
                    ))
                )}
            </ul>
        </dib>
    );
} 