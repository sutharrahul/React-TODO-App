import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useTodoStore } from "../store/store";

function Todos() {
  const [todoValue, setTodoValue] = useState("");
  const [editId, setEditId] = useState(null);

  const { todoList, addTodo, deleteTodo, editTodo } = useTodoStore();

  const handleAddNewTodo = () => {
    if (!todoValue) return;
    if (editId != null) {
      editTodo({
        id: editId,
        text: todoValue,
        done: false,
      });
    } else {
      addTodo({
        id: nanoid(),
        text: todoValue,
        done: false,
      });
    }
    setEditId(null);
    setTodoValue("");
  };
  return (
    <div className="px-10 py-10">
      <h1 className="flex justify-center text-[3rem] font-semibold">Todo</h1>
      <div className="flex justify-between items-center gap-2">
        <input
          className="input input-bordered input-primary w-full"
          id="myinput"
          placeholder="Enter Todo..."
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleAddNewTodo();
            }
          }}
        />
        <button className="btn btn-primary px-10" onClick={handleAddNewTodo}>
          Add
        </button>
      </div>

      <div>
        {todoList?.map((todo, i) => (
          <div
            key={i}
            className="flex justify-between mt-[5px] mb-[5px] border-2 border-stone-700 rounded px-[5px] py-[10px] truncate w-full "
          >
            <span className="flex overflow-auto items-center text-wrap text-white text-lg px-[5px]  ">
              {todo.text}
            </span>

            <div className="flex justify-between">
              {editId != todo.id && (
                <span>
                  <button
                    onClick={() => {
                      setTodoValue(todo.text);
                      setEditId(todo.id);
                    }}
                    className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white mr-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Edit
                  </button>
                </span>
              )}
              <button
                className="flex p-2.5 bg-red-600 rounded-xl hover:rounded-3xl hover:bg-red-700 transition-all duration-300 text-white"
                onClick={() => deleteTodo(todo.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
