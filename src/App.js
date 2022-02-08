import { useState } from 'react';
import SwitchBar from './components/SwitchBar'

function App() {
  const [currentTheme, setcurrentTheme] = useState('light')
  const handleTheme = () => currentTheme === 'light' ? setcurrentTheme('dark') : setcurrentTheme('light')
  return (
    <div className={`${currentTheme}`}>
      <div className="h-screen flex justify-center items-center dark:bg-gray-900">
        <SwitchBar switchTheme={handleTheme}/>
      </div>
    </div>
  );
}

export default App;
