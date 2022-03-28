import React from "react";
import Auth from "../../components/auth";

export default function Index() {
  const input_group = {
    email: "",
    password: "",
  };

  const input_names = [
    { name: "email", type: "text", placeholder: "Email" },
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
