import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h3>
        404 - Not Found <code>{pathname}</code>
      </h3>
    </div>
  );
};

export default NotFound;
