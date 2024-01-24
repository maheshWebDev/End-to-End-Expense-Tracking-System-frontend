import React, { useContext, useEffect, useState } from "react";
import { BsGem, BsFilter, BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
const ToolBar = () => {
  const { authToken, login, isPremium } = useContext(AuthContext);

  const handleDownloadExpenses = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://e2eexpensetracking.onrender.com/api/expenses/download",

        { headers: { Authorization: authToken } }
      );

      window.location.href = response.data.fileURL;
    } catch (error) {
      alert(error.message);
    }
  };

  const handleBuyPremium = async () => {
    try {
      // Make a request to your server to initiate the premium purchase
      const response = await axios.post(
        "https://e2eexpensetracking.onrender.com/api/buy-membership",
        {
          /* Any additional data needed for the purchase request */
        },
        { headers: { Authorization: authToken } }
      );

      const razorpayResponse = response.data;
      console.log(razorpayResponse);

      // Open the payment dialog with the Razorpay script from the CDN
      const options = {
        key: razorpayResponse.key_id,
        order_id: razorpayResponse.order.id,
        handler: async function (response) {
          try {
            // request to  server to update the premium status
            const updateStatusResponse = await axios.post(
              "https://e2eexpensetracking.onrender.com/api/update-membership-status",
              {
                order_id: options.order_id,
                payment_id: response.razorpay_payment_id,
              },
              { headers: { Authorization: authToken } }
            );

            if (updateStatusResponse.status === 200) {
              // setIsPremium(true);
              // Store the response data in local storage
              // localStorage.setItem(
              //   "isPremiumUser",
              //   JSON.stringify(updateStatusResponse.data.isPremiumUser)
              // );
              login(updateStatusResponse.data.token);
              alert("Congratulations! You are now a Premium user.");
            } else {
              alert("Failed to update premium status. Please contact support.");
            }
          } catch (updateError) {
            console.error(
              "Error updating premium status:",
              updateError.message
            );
            alert("Failed to update premium status. Please try again.");
          }
        },
      };

      // Check if Razorpay script is loaded
      if (window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();

        rzp1.on("payment.failed", (response) => {
          // console.log(response);
          alert("something went wrong");
        });
      } else {
        alert("Razorpay script not loaded. Please try again later.");
      }
    } catch (error) {
      console.error("Error initiating premium purchase:", error.message);
      alert("Failed to initiate premium purchase. Please try again.");
    }
  };

  return (
    <div className="toolbar-container bg-dark p-3 d-flex flex-column align-items-center">
      {!isPremium ? (
        <div className="d-flex flex-column align-items-center mb-0">
          <div className="floating-message buy-message blockquote mb-0 text-light">
            <h5 className="text-warning font-weight-bold mb-2">
              Great News! Upgrade to Premium is Free!
            </h5>
            <p className="text-light">
              Enjoy exclusive features by upgrading to Premium. Simply choose
              net banking as your payment method and click for success.
            </p>
          </div>
          <button
            className="mt-2 continue btn-responsive"
            onClick={handleBuyPremium}
          >
            <BsGem /> Buy Premium
          </button>
        </div>
      ) : (
        <div className="text-center mb-2">
          <div className="floating-message premium-message font-weight-bold text-light">
            <h5 className="text-warning font-weight-bold mb-2">
              You are now a Premium user! Enjoy downloading expenses and explore
              the Leaderboard feature.
            </h5>
          </div>
          <Link to={"/leaderboard"}>
            <button className="continue btn-responsive m-2">
              <BsFilter /> Leaderboard
            </button>
          </Link>

          <div className="btn-group">
            <button
              className="m-2 continue btn-responsive"
              onClick={handleDownloadExpenses}
            >
              <BsDownload /> Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolBar;
