import React from "react";
import Auth from "../../components/auth";

export default function index() {
  const input_group = {
    username: "",
    password: "",
  };

  const input_names = [
    { name: "username", type: "text", placeholder: "Username" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  const api = "api/login/";

  const text = "Please login";

  return (
    <div>
      <Auth
        input_group={input_group}
        api={api}
        input_names={input_names}
        pic={"login"}
        text={text}
        btn_text="Login"
        push="/dashboard"
        title_text="Login to your account"
      />
    </div>
  );
}
