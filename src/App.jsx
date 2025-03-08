import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NewPost from "./components/newPost";

function App() {
  return (
    <div className="bg-bg min-h-dvh text-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/edit/:id" element={<h1>Edit</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
