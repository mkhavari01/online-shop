import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/authAction";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    if (state.auth.token) {
      setTimeout(() => {
        navigate("/")
      }, 4000)
    }
  }, [state.auth.token])

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function onSubmit(e) {
    e.preventDefault();
    console.log(username, password);
    dispatch(signUp({
      username: username,
      password: password
    }))
  }

  return (
    <>
      <form onSubmit={onSubmit} className="border col-lg-5 col-md-auto container mt-5 p-4 rounded-3 needs-validation">
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-12 col-form-label vazir-light text-end">:نام کاربری</label>
          <div className="col-sm-12">
            <input type="text" className="form-control" id="staticEmail" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-12 col-form-label vazir-light text-end">:رمز عبور</label>
          <div className="col-sm-12">
            <input type="password" className="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="btn btn-success col-sm-12 vazir-light">
            ورود
          </button>
        </div>
      </form>
    </>
  )
}

export { Login }