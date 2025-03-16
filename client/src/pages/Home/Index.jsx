import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <div className="flex flex-col items-start p-3">
        <Link to={"/auth/login"}>
          <button className="hover:underline">Login</button>
        </Link>
        <Link to={"/auth/register"}>
          <button className="hover:underline">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
