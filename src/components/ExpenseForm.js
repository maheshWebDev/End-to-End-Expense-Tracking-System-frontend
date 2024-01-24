// AddExpenseForm.js
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import img from "../images/img.jpg";

const ExpenseForm = ({ onAddExpense }) => {
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const isFormValid =
    expenseType.trim() !== "" &&
    amount.trim() !== "" &&
    description.trim() !== "";

  const handleExpenseFormSubmit = (e) => {
    e.preventDefault();
    const expenseFormData = {
      expenseType,
      amount,
      description,
    };
    onAddExpense(expenseFormData);

    // Clear the form fields
    setExpenseType("");
    setAmount("");
    setDescription("");
  };

  return (
    <div
      className="container-fluid position-relative mt-0 bg-dark  text-white p-4 "
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${img})`,
        backgroundSize: "cover",
      }}
    >
      {/* Encouraging text above the form */}
      <div className="text-center  p-3">
        <h3 className="display-5 ">
          Add your expenses below and manage your budget effectively.
        </h3>
      </div>

      {/* Form elements directly on the background */}
      <div className="mx-auto" style={{ maxWidth: "500px" }}>
        <form onSubmit={handleExpenseFormSubmit}>
          <div className="row mb-3">
            {/* Expense Type dropdown */}
            <div className="col-md-6">
              <label htmlFor="expenseType" className="form-label">
                Expense Type
              </label>
              <select
                className="form-select"
                id="expenseType"
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
            </div>
            {/* Amount input */}
            <div className="col-md-6">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          {/* Description textarea */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className=" continue w-100"
            disabled={!isFormValid}
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
