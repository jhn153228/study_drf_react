import React, { useState, useEffect } from "react";
import { Alert } from "antd";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function Signup() {
  const history = useHistory();

  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formDisabled, setFormDisabled] = useState(true);

  /**리액트에서 권장하는 이벤트 값 받고 사용하는 방법
   * <from /> 태그에서 onSubmit 으로 임의지정함수(onsubmit) 함수에 정보들을 보내줌
   * 정보들을 e로 받아서 해당 값들을 핸들링
   * preventDefault : a태그, submit 태그 등 누를 시 href를 통해 이동하거나 창이 새로고침 하는데
   * 이를 방지하기 위함
   */

  const onSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setErrors({});

    Axios.post("http://localhost:8000/accounts/signup/", inputs)
      .then((response) => {
        history.push("/accounts/login");
      })
      .catch((error) => {
        console.log("error :", error);
        if (error.response) {
          setErrors({
            username: (error.response.data.username || []).join(" "),
            password: (error.response.data.password || []).join(" "),
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const isEnabled = Object.values(inputs).every((s) => s.length > 0);
    setFormDisabled(!isEnabled);
  }, [inputs]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="username" onChange={onChange} />
          {errors.username && <Alert type="error" message={errors.username} />}
        </div>
        <div>
          <input type="password" name="password" onChange={onChange} />
          {errors.password && <Alert type="error" message={errors.password} />}
        </div>
        <input
          type="submit"
          value="회원가입"
          disabled={loading || formDisabled}
        />
      </form>
    </div>
  );
}
