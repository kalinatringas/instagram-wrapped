
import './App.css'
import Title from './assets/igwrapped.svg';
import Btn from './assets/btn.svg';
function App() {
  

  return (
    <>
      <div>
          <img src={Title} className='h-80'/>
          <img src={Btn} className='h-20 flex-auto m-auto hover:scale-110'/>
      </div>

    </>
  )
}

export default App
