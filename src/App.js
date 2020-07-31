import React, {useEffect} from 'react';
import logo from './logo.svg';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css';
import Layout from './Layout/Layout'

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  AOS.init();
  return (
    <div >
      <Layout/>
    </div>
  );
}

export default App;
