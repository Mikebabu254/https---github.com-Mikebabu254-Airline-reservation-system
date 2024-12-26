import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path ="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
