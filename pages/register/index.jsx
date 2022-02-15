import React from "react";
import Auth from "../../components/auth";

export default function index() {
  const input_group = {
    email: "",
    username: "",
    password: "",
  };

  const input_names = [
    { name: "email", type: "email", placeholder: "Enter email" },
    { name: "username", type: "text", placeholder: "Username" },
    { name: "password", type: "password", placeholder: "Password" },
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
