import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route} from "react-router-dom";
import { Layout } from './layout/Layout';
import { Home,Admin,Orders } from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="admin" element={<Admin />}>
          <Route path="orders" element={<Orders />} />
          {/* <Route path="account" element={<Account />} /> */}
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
