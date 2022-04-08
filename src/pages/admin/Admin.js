import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { LoginFormAdmin } from "../../components/LoginFormAdmin";

const Admin = (props) => {
  const navigate = useNavigate();
  const state = useSelector(state => state)

  useEffect(() => {
    if (state.auth.token) {
      navigate("/admin/orders")
    }
  }, [state.auth.token])

  return (
    <>
      {state.auth.token ? <Outlet /> : <LoginFormAdmin />}
    </>
  )
}

export { Admin }