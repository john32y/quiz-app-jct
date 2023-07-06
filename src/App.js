import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Error404 from './pages/Error404';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home />} />
    <Route path="/quiz" element={ <Quiz />} />
    <Route path="*" element={ <Error404 />} />
    </Routes>
    </BrowserRouter>
    
   
  );
}

export default App;
