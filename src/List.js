import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ lists, editItems, removeSingleItem }) => {
  return (
    <>
      <div className="row">
        {lists.map((c) => {
          const { id, title } = c;
          return (
            <>
              <article key={id} className="col-lg-4 mb-4">
                <div className="card text-left">
                  <div className="card-body ">
                    <p className="card-title lead">{title}</p>
                    <button
                      type="submit"
                      className="btn btn-lg btn-block bg-warning m-2"
                      onClick={() => editItems(id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      type="submit"
                      className="btn btn-lg btn-block bg-danger m-2"
                      onClick={() => removeSingleItem(id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </article>
            </>
          );
        })}
      </div>
    </>
  );
};

export default List;
