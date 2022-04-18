import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {AuthProvider} from './Context/auth'
import Post from './pages/Post'
import SinglePost from './pages/SinglePost'
import User from './pages/User'
import Search from './pages/Search'
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/post' element={<Post/>}/>
          <Route exact path='/posts/:postId' element={<SinglePost/>}/>
          <Route exact path='/user' element={<User/>}/>
          <Route exact path='/search' element={<Search/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
