import React, { useEffect } from "react";

const ErrorHandling = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>something Went wrong</h1>
      <button className="hover:text-amber-600 " onClick={() => reset()}>Try Again</button>{" "}
    </div>
  );
};

export default ErrorHandling;
