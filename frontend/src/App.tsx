import { BrowserRouter, Routes, Route} from "react-router-dom";
import Tasks from './components/task/Tasks';
import AddTask from "./components/task/AddTask";
import { ErrorBoundary } from "react-error-boundary"
import Login from "./components/auth/Login";
import PrivateRouteWrapper from "./components/auth/PrivateRouteWrapper";


function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <div className="min-h-screen flex justify-center items-center bg-background">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRouteWrapper children={<Tasks />} />} />
            <Route path="/add/:id?" element={<PrivateRouteWrapper children={<AddTask />} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  )
}

export default App
