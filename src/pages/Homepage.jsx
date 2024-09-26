import { useEffect, useRef, useState } from "react";
import { getTodos, deleteTodo, addTodo, editTodo } from "../services/Todo";

import "./HomePage.css";

export const Homepage = () => {
  let ref = useRef();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      getTodos().then((data) => setTodos(data.data.todos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    const validUserId = Math.floor(Math.random() * 100); // Assuming 1 is a valid user ID for your API

    if (newTodo.trim() !== "") {
      const newTodoItem = {
        todo: newTodo,
        completed: false,
        userId: validUserId, // Use the valid user ID required by the API
      };

      addTodo(newTodoItem)
        .then((data) => {
          setTodos([data.data, ...todos]);
        })
        .catch((error) => {
          console.error("Error karoche:", error.response.data);
        });

      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    const newTodo = prompt("Enter edit todo name:", updatedTodo.todo);
    if (newTodo) {
      const updatedTodoItem = {
        id: id,
        todo: newTodo,
        completed: updatedTodo.completed,
      };
      editTodo(updatedTodoItem);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, todo: newTodo } : todo
        )
      );
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="p-7 grow bg-gray-900">
      <h1 ref={ref} className="text-2xl text-white font-bold mb-5">
        Homepage
      </h1>

      <div className="container max-w-[1180px] ml-[20%] ">
        <div className="">
          <div className="flex items-center gap-4 justify-between px-5 py-5 bg-gray-700 xs:flex-row xs:justify-between rounded-md">
            <input
              type="text"
              className="grow px-4 py-2 text-base text-gray-100 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Add new todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              onClick={handleAddTodo}
              className="xs:mt-0 xs:ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Add Todo
            </button>
          </div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full rounded-lg shadow ">
              <table className="min-w-full leading-normal ">
                <thead>
                  <tr>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-100 uppercase bg-gray-700 border-b border-gray-600">
                      Todo
                    </th>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-100 uppercase bg-gray-700 border-b border-gray-600">
                      Completed
                    </th>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-100 uppercase bg-gray-700 border-b border-gray-600">
                      Id
                    </th>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-100 uppercase bg-gray-700 border-b border-gray-600"></th>
                  </tr>
                </thead>
                <tbody>
                  {todos.length === 0 ? (
                    <>
                      <tr>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-text"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-input"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-text"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-button"></span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-text"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-input"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-text"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-button"></span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-text"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-input"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-text"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-button"></span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-text"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-input"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-text"></span>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <span className="skeleton skeleton-button"></span>
                        </td>
                      </tr>
                    </>
                  ) : (
                    todos.map((todo) => (
                      <tr key={todo?.id}>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <p
                            className={`${
                              todo?.completed
                                ? "line-through text-gray-400"
                                : "text-gray-100"
                            } whitespace-no-wrap`}
                          >
                            {todo?.todo}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                            checked={todo?.completed}
                            onChange={() => toggleComplete(todo?.id)}
                          />
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <p className="text-gray-100 whitespace-no-wrap">
                            {todo?.id}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-gray-800 border-b border-gray-600">
                          <button
                            onClick={() => handleEditTodo(todo?.id)}
                            className="mr-2 text-blue-100 hover:text-blue-100 transition duration-300 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTodo(todo?.id)}
                            className="text-red-100 hover:text-red-100 transition duration-300 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
