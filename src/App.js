import './App.css';
import Button from './shared/components/form-component/button/Button';
import Header from './shared/components/header/Header'
import ChatPage from './chat/ChatPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const  App = () => {
  return <div>
    <Router>
    <main>
      <Routes>
        <Route path='/' exact element={<ChatPage />} />
      </Routes>
    </main>
    </Router>
  </div>
}

export default App;
