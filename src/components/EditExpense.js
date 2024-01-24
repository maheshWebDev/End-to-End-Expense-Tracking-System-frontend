import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

function EditExpense({ setEditMode, expense, onUpdate }) {
  const [expenseType, setExpenseType] = useState(expense.expenseType);
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);

  const handleSaveClick = () => {
    const newUpdatedExpense = {
      expenseType,
      description,
      amount,
    };
    onUpdate(expense._id, newUpdatedExpense);
    setEditMode(false); // Optionally, you can close the edit mode here
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  return (
    <>
      <tr>
        <td>
          <select
            className="form-select"
            value={expenseType}
            onChange={(e) => setExpenseType(e.target.value)}
          >
            <option value="" disabled>
              Select Expense Type
            </option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Dining">Dining</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control "
            placeholder="Enter Expense Description"
          />
        </td>
        <td>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            placeholder="Enter Amount"
          />
        </td>
        <td>
          <button
            type="button"
            className="btn btn-success m-2"
            onClick={() => handleSaveClick()}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleCancelClick()}
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
}

export default EditExpense;
