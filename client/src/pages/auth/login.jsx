import CommonForm from "@/components/common/form";
import { LoginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(ev) {
    ev.preventDefault();
    dispatch(loginUser(formData))
      .then((data) => {
        if (data?.payload?.success) {
          console.log(data);
          toast.success(data?.payload?.message); // Use toast.success for success messages
        } else {
          console.log(data);
          toast.error(data?.payload?.message); // Use toast.error for error messages
        }
      })
      .catch((error) => {
        toast.error("An error occurred during login"); // Handle any unexpected errors
      });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Login to your account
        </h1>
        <p className="mt-2">Don't have an account?</p>
        <Link
          className="font-medium text-primary hover:underline ml-2"
          to={"/auth/register"}
        >
          Sign Up
        </Link>
      </div>
      <CommonForm
        formControls={LoginFormControls}
        buttonText={"Login"}
        formData={formData}
        onSubmit={onSubmit}
        setFormData={setFormData}
      />
    </div>
  );
}

export default AuthLogin;
