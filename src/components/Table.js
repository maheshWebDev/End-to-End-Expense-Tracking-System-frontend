import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import EditExpense from "./EditExpense";

function TableRow({ expense, onDelete, onUpdate }) {
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  return (
    <>
      {editMode ? (
        <EditExpense
          setEditMode={setEditMode}
          expense={expense}
          onUpdate={onUpdate}
        />
      ) : (
        <tr>
          <td>{expense.expenseType}</td>
          <td>{expense.description}</td>
          <td>{expense.amount}</td>
          <td>
            <button
              type="button"
              className="btn btn-primary m-1"
              onClick={() => handleEditClick()}
            >
              <FaEdit />
            </button>
            <button
              type="button"
              className="btn btn-danger m-1"
              onClick={() => onDelete(expense._id)}
            >
              <FaTrashAlt />
            </button>
          </td>
        </tr>
      )}
    </>
  );
}

const Table = ({ listOfExpense, onDelete, onUpdate }) => {
  if (listOfExpense.length === 0) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="text-muted mb-3">No Expenses Yet</h4>
            <p className="text-muted">You haven't added any expenses.</p>
            <p className="text-muted">
              The table is ready and waiting! Begin by adding your expenses.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listOfExpense.map((expense) => (
                <TableRow
                  expense={expense}
                  key={expense._id}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
