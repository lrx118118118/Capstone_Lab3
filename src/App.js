import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Community from './pages/Community';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import TodoList from './pages/TodoList'; // ✅ 移动到顶部一起导入

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todo" element={<TodoList />} /> {/* ✅ 添加在 Routes 内部 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

