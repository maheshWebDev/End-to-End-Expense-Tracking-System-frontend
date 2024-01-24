import React from "react";

const AppFooter = () => {
  return (
    <footer
      className="bg-dark text-light text-center py-3 mt-auto"
      style={{ borderTop: "2px solid #17a2b8" }}
    >
      <div className="container">
        <p>&copy; {new Date().getFullYear()} SpendWise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default AppFooter;
