import { useState } from "react";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const loginObj = {};
    loginObj.userId = userId;
    loginObj.password = password;

    const obj = { userId: userId, password: password };
    console.log(obj);
  };
  return (
    <div>
      <input
        type="text"
        value={userId}
        placeholder="input userId"
        onChange={(e) => setUserId(e.target.value)}
      />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => login()}>로그인</button>
    </div>
  );
};

export default SignUp;
