import AuthForm from "@/components/AuthForm";
import React from "react";

const Signin = () => {
  return (
    <div className="flex-center size-full max-sm:px-6">
      <AuthForm type="signin" />
    </div>
  );
};

export default Signin;
