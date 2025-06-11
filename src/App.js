import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main";
import Register from "./register";
import Profile from "./profile";
import Employer from "./employeer";
import JobSeeker from "./job_seeker";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/employer" element={<Employer />} />
              <Route path="/job_seeker" element={<JobSeeker />} />

            </Routes>
          </header>
        </div>
      </Router>
    </div>
  );
}

export default App;
