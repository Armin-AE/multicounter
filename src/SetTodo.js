import React, { useEffect, useMemo, useState } from "react";
const SetTodo = () => {
  const [todo, setTodo] = useState("");
  const todosLocal = JSON.parse(localStorage.getItem("todos"));
  const [list, setList] = useState(todosLocal.length ? todosLocal : []);
  localStorage.setItem("todos", JSON.stringify(list));

  const removeTodo = (i, idx) => {
    const help = [...list];
    help.splice(idx, 1);
    setList([...help]);
  };
  const changeS = (i, idx) => {
    const help = [...list];
    help[idx].status = !help[idx].status;
    setList([...help]);
  };
  return (
    <>
      <div className="cont">
        <div className="settodo">
          <div className="todowidth">
            <input
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
            />
            <button
              className="btn"
              onClick={() => {
                setTodo("");
                todo.length && list.push({ list: todo, status: false });
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="tasktable">
        {list.map((i, idx) => (
          <div
            className="mytasks"
            style={{ backgroundColor: i?.status && "#06d6a0" }}
            key={idx}
          >
            <p className="para" style={{color: i?.status && "black"}} onClick={() => changeS(i, idx)}>
              {i?.list}
            </p>
            <button className="btn-task" onClick={() => removeTodo(i, idx)}>
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SetTodo;
