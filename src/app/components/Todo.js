import React from 'react';

export const Todo = (props) => {
    console.log(props.list)
    let input
    return (
        <div>
            <div className="todo-add-container">
            <form
                onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                props.addList(input.value)
                input.value = ''
                }}
            >
                <input
                ref={node => {
                    input = node
                }}
                />
                <button type="submit">
                Add Todo
                </button>
            </form>
            </div>
            <ul>
                {props.list.todoList.map(task => {
                    return <li>{task.task}</li>
                })}
            </ul>
        </div>
    );
}