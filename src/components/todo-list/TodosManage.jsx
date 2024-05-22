import { memo, useMemo } from "react";
import "./TodosManage.scss";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const TodosManage = ({ data, deleteTodos, updateValus }) => {
    console.log(data);

    let total = useMemo(() => {
        return data.length;
    }, []);

    let todosItems = data?.map((el) => (
        <tr key={el.id}>
            <td>{el.title}</td>
            <td>{el.text}</td>
            <td>{el.status}</td>
            <td>{el.time}</td>
            <td className="table__btn">
                <button onClick={() => updateValus(el)}>
                    <FiEdit />
                </button>
            </td>
            <td className="table__btn">
                <button onClick={() => deleteTodos(el.id)}>
                    <MdDelete />
                </button>
            </td>
        </tr>
    ));
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Status</th>
                        <th>Time</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{todosItems}</tbody>
            </table>
        </div>
    );
};

export default memo(TodosManage);
