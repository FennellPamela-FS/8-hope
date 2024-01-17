// React.js
// Client Side Frontend

import React, { useEffect, useState, createContext } from 'react';
import './App.css';
// import CssBaseline from '@mui/material/CssBaseline'
// import { ThemeProvider } from '@mui/material/styles'
import { Routes, Route } from 'react-router-dom';

// React Routes 
// import Main from './pages/Main';
import User from './pages/User';
import Search from './pages/Search';
import DetailPage from './pages/DetailPage';
import DogDetailPage from './pages/DogDetailPage';

// Custom Components
import NewAppBar from './components/NewAppBar';
// import RecordList from "./components/RecordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import axios from 'axios';


// needed to us with ThemeProvider
const UserContext = createContext({});

// class App extends Component { // Parent - Class Component
function App() {

  // add functions here

  const [loading, setLoading] = useState(true)
  const [userSession, setUserSession] = useState(true)

  useEffect(() => {
    // axios.get('/api/isAuth')
    //   .then(res => {
    //     setUserSession(res.data.isAuthenticated)
    //     setLoading(false)
    //   })
    //   .catch(err => {
    //     setLoading(false)
    //     console.log(err)
    //   });
    const getUserAuth = async () => {
      setLoading(true)
      return await axios.get(`http://localhost:3000/api/login/isAuth`)
        .then(res => res.json())
        .then(userAuth => {
          setUserSession(userAuth)
          setLoading(false)
        })
        .catch(err => {
          setLoading(false)
          console.log("There was an error getting auth", err)
        })


      // try {
      //   setLoading(true)
      //   const res = await fetch('/api/isAuth')
      //   if (!res.ok) return setLoading(false)

      //   setUserSession(await res.json())
      //   setLoading(false)
      // } catch (error) {
      //   setLoading(false)
      //   console.error('There was an error fetch auth', error)
      //   return
      // }
    }
    getUserAuth()
  }, [])


  // render() {

  return (
    <UserContext.Provider value={userSession}>
      {/* <ThemeProvider theme={theme}>
          <CssBaseline /> */}
      <div className='App'>
        <NewAppBar />
        <main style={styles.container}>
          <section>
            {loading ? <>loading...</> :
              <Routes>
                {UserContext.email && (
                  <>
                    <Route exact path="/" element={<>Welcome {UserContext.email}</>} />
                  </>
                )}
                {!UserContext.email && (
                  <>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/User" element={<User />} />
                    <Route path="/Search" element={<Search />} />
                    <Route path="/DetailPage" element={<DetailPage />} />
                    <Route path="/:name" element={<DogDetailPage />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/create" element={<Create />} />
                  </>
                )}
              </Routes>}
          </section>
        </main>
      </div>
      {/* </ThemeProvider> */}
    </UserContext.Provider>
  )
};

// }

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid red'
  }
}