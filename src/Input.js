import React, { useState, useEffect } from "react";
import { RiAddFill, RiEditFill } from "react-icons/ri";
import List from "./List";

//LOCAL STORAGE
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const Input = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      alert("Please Enter Some Value");
    } else if (item && isEdit) {
      setList(
        list.map((i) => {
          if (i.id === editId) {
            return { ...i, title: item };
          }
          return i;
        })
      );

      setItem("");
      setEditId(null);
      setIsEdit(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: item };
      setList([...list, newItem]);
      setItem("");
    }
  };
  const editItems = (id) => {
    const specificItem = list.find((Ei) => Ei.id === id);
    setIsEdit(true);
    setEditId(id);
    setItem(specificItem.title);
  };

  const removeSingleItem = (id) => {
    setList(list.filter((Re) => Re.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div className="m-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              value={item}
              className="form-control input"
              placeholder="Take Your Note"
              onChange={(e) => setItem(e.target.value)}
            ></input>
            <button type="submit" className="btn btn-lg btn-block btn-warning">
              {isEdit ? <RiEditFill /> : <RiAddFill />}
            </button>
          </div>
        </form>
      </div>

      {list.length > 0 && (
        <div className="container">
          <List
            lists={list}
            editItems={editItems}
            removeSingleItem={removeSingleItem}
          />
        </div>
      )}
    </>
  );
};
export default Input;
