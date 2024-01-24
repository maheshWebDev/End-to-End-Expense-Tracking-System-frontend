import React, { useState, useEffect, useContext } from "react";
import ExpenseForm from "../components/ExpenseForm";
import Table from "./Table";
import ToolBar from "./ToolBar";
import axios from "axios";
import { json } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Dashboard = () => {
  const { authToken } = useContext(AuthContext);

  const [listOfExpense, setListOfExpense] = useState([]);

  useEffect(() => {
    getExpenses();
  }, []);

  const getExpenses = async () => {
    try {
      const response = await axios.get(
        "https://e2eexpensetracking.onrender.com/api/expenses",

        {
          headers: {
            Authorization: `${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.data);
      setListOfExpense(response.data.data);
    } catch (error) {
      console.error("Error fetching expenses:", error.message);
    }
  };

  const addExpense = async (expenseFormData) => {
    console.log("token" + authToken);
    try {
      const response = await axios.post(
        "https://e2eexpensetracking.onrender.com/api/expenses",
        expenseFormData,
        {
          headers: {
            Authorization: `${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      const newExpense = response.data.data;

      // Update the local state with the new expense
      setListOfExpense((prev) => [...prev, newExpense]);
    } catch (error) {
      console.error("Error adding expense:", error.message);
    }
  };

  const updateExpenseById = async (id, newUpdatedExpense) => {
    try {
      const response = await axios.put(
        `https://e2eexpensetracking.onrender.com/api/expenses/${id}`,
        newUpdatedExpense,
        {
          headers: {
            Authorization: `${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      const updatedExpenses = listOfExpense.map((expense) => {
        if (expense._id === id) {
          return { ...expense, ...newUpdatedExpense };
        }
        return expense;
      });

      setListOfExpense(updatedExpenses);
    } catch (error) {}
  };

  const deleteExpenseById = async (id) => {
    try {
      await axios.delete(
        `https://e2eexpensetracking.onrender.com/api/expenses/${id}`,
        {
          headers: {
            Authorization: `${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Update the local state by removing the deleted expense
      setListOfExpense((prevList) =>
        prevList.filter((expense) => expense._id !== id)
      );
    } catch (error) {
      console.error("Error deleting expense:", error.message);
    }
  };
  return (
    <div>
      <ToolBar />
      <ExpenseForm onAddExpense={addExpense} />
      <Table
        listOfExpense={listOfExpense}
        onDelete={deleteExpenseById}
        onUpdate={updateExpenseById}
      />
    </div>
  );
};

export default Dashboard;
