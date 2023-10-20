import discountImage from './assets/mobile-offers.jpg'

import './App.css'
import Banner from './components/Banner'
import Brands from './components/Brands'
import Upcoming from './components/Upcoming'


function App() {

  return (

    <div>
      <Banner></Banner>
      <Brands></Brands>

      <div className='mt-20'>
        <p className=' text-2xl font-bold text-center my-5'>Our Leatest Offer</p>
        <img src={discountImage} alt="" className='mx-auto' />
      </div>

      <Upcoming></Upcoming>

    </div>



  )
}

export default App
