import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import AddPost from './components/AddPost';
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NonAuthenticated from "./pages/NonAuthenticated";
import Profile from './components/Profile';
import Settings from "./components/Settings";

const App = ({isServerInfo}) => {
  
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <>
    <div className='page'>
      <div className="sideBar">
        <Navbar />
      </div>
    </div>
    {/* <div id='modal' />
    <div id='page'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/NonAuthenticated' element={<NonAuthenticated />} />
        </Routes>
      </Router>
    </div> */}
    </>
  );

}

export default App;
