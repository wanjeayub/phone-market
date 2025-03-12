// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isAuthenticated: false,
//   isLoading: false,
//   user: null,
// };

// export const registerUSer = createAsyncThunk(
//   "/auth/register",
//   async (formatData) => {
//     const response = await axios.post(
//       "http://localhost:5000/api/auth/register",
//       formatData,
//       { withCredentials: true }
//     );
//     return response.data;
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {},
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUSer.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUSer.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//       })
//       .addCase(registerUSer.rejected, (state, action) => {
//         state.isLoading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//       });
//   },
// });

// export const { setUser } = authSlice.actions;
// export default authSlice.reducer;

// import CommonForm from "@/components/common/form";
// import { RegisterFormControls } from "@/config";
// import { registerUSer } from "@/store/auth-slice";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// const initialState = {
//   userName: "",
//   email: "",
//   password: "",
// };

// function AuthRegister() {
//   const [formData, setFormData] = useState(initialState);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   function onSubmit(ev) {
//     ev.preventDefault();
//     dispatch(registerUSer(formData)).then((data) => console.log(data));
//   }
//   // console.log(formData);
//   // navigate("/auth/login")
//   return (
//     <div className="mx-auto w-full max-w-md space-y-6">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold tracking-tight text-foreground">
//           Create new account
//         </h1>
//         <p className="mt-2">Already have an account</p>
//         <Link
//           className="font-medium text-primary hover:underline ml-2"
//           to={"/auth/login"}
//         >
//           Login
//         </Link>
//       </div>
//       <CommonForm
//         formControls={RegisterFormControls}
//         buttonText={"Sign Up"}
//         formData={formData}
//         onSubmit={onSubmit}
//         setFormData={setFormData}
//       />
//     </div>
//   );
// }

// export default AuthRegister;
