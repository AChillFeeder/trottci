import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Admin/Login'

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Login />} />
                    {/* <Route path="*" element={} /> */}
                </Routes>

            </div>
	    </Router>
    )
}
 
export default App;
