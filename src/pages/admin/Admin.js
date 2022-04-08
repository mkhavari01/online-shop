import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { LoginFormAdmin } from "../../components/LoginFormAdmin";
import { Layout } from "../../layout/Layout";

const Admin = (props) => {
  const state = useSelector(state => state)

  return (
    <>
      <Layout admin={true}>
        {state.auth.token ? <Outlet /> : <LoginFormAdmin />}
      </Layout>
    </>
  )
}

export { Admin }