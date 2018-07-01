export function addList(list) {
    return {
        type: "ADD_TODO",
        payload: list
    };
}