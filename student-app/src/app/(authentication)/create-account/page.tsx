import { CreateAccountForm } from "@/features/authentication/AccountCreate/CreateAccountForm";
import OnboardingSidebar from "@/features/authentication/AccountCreate/OnboardingSidebar";
import React from "react";

const CreateAccountPage = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/3 h-full bg-orange-light">
        <OnboardingSidebar />
      </div>
      <div className="w-2/3">
        <CreateAccountForm />
      </div>
    </div>
  );
};

export default CreateAccountPage;
