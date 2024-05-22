import React, { memo, useState, useCallback, useEffect } from "react";
import TodosCreate from "./TodosCreate";
import TodosManage from "./TodosManage";

let initialState = {
    id: null,
    title: "",
    text: "",
    status: "",
    time: "",
};

const TodoApp = () => {
    const [formData, setFormData] = useState(initialState);
    const [data, setData] = useState(() => {
        const TableData = localStorage.getItem("tableData");
        return TableData ? JSON.parse(TableData) : [];
    });

    useEffect(() => {
        localStorage.setItem("tableData", JSON.stringify(data));
    }, [data]);

    let createTodos = useCallback(
        (todos) => {
            setData((prev) => [...prev, todos]);
            setFormData(initialState);
        },
        [data]
    );

    let deleteTodos = useCallback(
        (id) => {
            let filterData = data?.filter((el) => el.id !== id);
            setData(filterData);
        },
        [data]
    );

    let updateTodos = useCallback(
        (payload) => {
            console.log(payload);
            let index = data?.findIndex((el) => el.id === payload.id);
            data?.splice(index, 1, payload);
            setData([...data]);
            setFormData(initialState);
        },
        [data]
    );

    let getValue = useCallback((payload) => {
        setFormData((p) => ({ ...p, ...payload }));
    }, []);

    let updateValus = useCallback((payload) => {
        setFormData(payload);
    }, []);

    return (
        <div>
            <TodosCreate
                formData={formData}
                createTodos={createTodos}
                updateTodos={updateTodos}
                getValue={getValue}
            />
            <TodosManage
                updateValus={updateValus}
                deleteTodos={deleteTodos}
                data={data}
            />
        </div>
    );
};

export default memo(TodoApp);
