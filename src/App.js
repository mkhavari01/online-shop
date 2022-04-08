import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route} from "react-router-dom";
import { Layout } from './layout/Layout';
import { Home,Login } from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
