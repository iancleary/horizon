import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../../assets/icon.svg';
import './App.css';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  appearance: none;
  font-size: 1.3rem;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  transition: all ease-in 0.1s;
  cursor: pointer;
  opacity: 0.9;
`;

// const SideBar = styled.div``;

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="150" alt="icon" src={icon} />
      </div>
      <h1 className="Title">Horizon</h1>
      <Button>Hello, I&apos;m a button</Button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
