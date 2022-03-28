import React from "react";
import Auth from "../../components/auth";

export default function Index() {
  const input_group = {
    email: "",
    mobile: "",
    name: "",
    password: "",
    password2: "",
  };

  const input_names = [
    { name: "email", type: "email", placeholder: "Enter email" },
    { name: "mobile", type: "text", placeholder: "Enter mobile number" },
    { name: "name", type: "text", placeholder: "Name" },
    { name: "password", type: "password", placeholder: "Password" },
    { name: "password2", type: "password", placeholder: "Confirm Password" },
  ];

  const api = "api/register/";

  const text = "Create an account";

  return (
    <div>
      <Auth
        input_group={input_group}
        api={api}
        input_names={input_names}
        pic={"register"}
        text={text}
        btn_text="Sign Up"
        push="/login"
        title_text="Create new account"
      />
    </div>
  );
}
