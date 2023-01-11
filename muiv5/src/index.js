import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import './index.css';
import App from './App';
import Home from "./pages/Home/Home"
import News from "./pages/News/News"
import Notes from "./pages/Notes/Notes"
import Trash from "./pages/Trash/Trash"
import Login from "./pages/Login/Login"
import { dashboardTheme } from './dashboardTheme';
// import reportWebVitals from './reportWebVitals';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dashboardTheme}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/pathHome' element={<Home />} />
            <Route path='/pathNews' element={<News />} />
            <Route path='/pathNotes' element={<Notes />} />
            <Route path='/pathTrash' element={<Trash />} />
            <Route path='/pathLogin' element={<Login />} />
          </Route>
        </Routes>

      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
