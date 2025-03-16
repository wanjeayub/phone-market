import CommonForm from "@/components/common/form";
import { RegisterFormControls } from "@/config";
import { registerUSer } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth); // Get the error from the state

  function onSubmit(ev) {
    ev.preventDefault();
    dispatch(registerUSer(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        navigate("/auth/login");
      } else if (data?.error) {
        toast.error(data?.error?.message || "Registration failed"); // Display the error message
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">Already have an account</p>
        <Link
          className="font-medium text-primary hover:underline ml-2"
          to={"/auth/login"}
        >
          Login
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* Display the error message */}
      <CommonForm
        formControls={RegisterFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        onSubmit={onSubmit}
        setFormData={setFormData}
      />
    </div>
  );
}

export default AuthRegister;
