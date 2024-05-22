import { memo } from "react";
import "./TodosCreate.scss";

const TodosCreate = ({ updateTodos, formData, getValue, createTodos }) => {
    const handleCreateTodos = (e) => {
        e.preventDefault();
        if (formData.id) {
            // update
            updateTodos(formData);
        } else {
            // create
            let date = new Date();
            formData.id = date.getTime();
            formData.time = `${date.getHours()}:${date.getMinutes()}`;
            createTodos(formData);
        }
    };
    return (
        <form onSubmit={handleCreateTodos}>
            <input
                required
                value={formData.title}
                onChange={(e) => getValue({ title: e.target.value })}
                type="text"
                placeholder="Title"
            />
            <input
                required
                value={formData.text}
                onChange={(e) => getValue({ text: e.target.value })}
                type="text"
                placeholder="Text"
            />
            {/* <select
                required
                name="status"
                onChange={(e) => getValue({ status: e.target.value })}
            >
                <option value="status">Status</option>
                <option value="Important">Important</option>
                <option value="Very Important">Very Important</option>
            </select> */}
            <select
                required
                value={formData.status}
                onChange={(e) => getValue({ status: e.target.value })}
            >
                <option value="" selected disabled hidden>
                    Status
                </option>
                <option value="important">Important</option>
                <option value="average">Average</option>
                <option value="not important">Not Important</option>
            </select>
            <button>{formData.id ? "save" : "create"}</button>
        </form>
    );
};

export default memo(TodosCreate);
