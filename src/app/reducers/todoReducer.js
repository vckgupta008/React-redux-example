const initialState = {
    todoList: [
        {
            "id": 1,
            "task": 'Complete Redux',
            "status": false
        }, {
            "id": 2,
            "task": 'Eat chocolate',
            "status": true
        }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            state = {
                ...state,
                todoList: [...state.todoList, {
                    "id": state.todoList.length + 1,
                    "task": action.payload,
                    "status": false
                }]
            };
            break;
        case 'TOGGLE_TASK':
            break;
    }
    return state;
}

export default todoReducer;
