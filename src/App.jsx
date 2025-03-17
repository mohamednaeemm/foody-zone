
import './App.css'
import Header from './components/Header'
import Dish from './components/Dish'

function App() {

  return (
    <div className="container">
        <Header />
        <div className="container-body">
            <Dish image={'/assets/burger.png'} name={'Burger'} description={'Burger is a delicious food, it is made of bread, vegetables.'} price={'$10.00'} />
            <Dish image={'/assets/cake.png'} name={'Cake'} description={'A delicious cake, perfect for dessert.'} price={'$25.00'} />
            <Dish image={'/assets/chicken.png'} name={'Grilled Chicken'} description={'Juicy grilled chicken, seasoned to perfection.'} price={'$45.00'} />
            <Dish image={'/assets/egg.png'} name={'Boiled Eggs'} description={'A simple yet delightful boiled egg. we love this dish a lot'} price={'$5.00'} />
            <Dish image={'/assets/ramen.png'} name={'Ramen'} description={'A bowl of hot and savory ramen noodles.'} price={'$15.00'} />  
            <Dish image={'/assets/pancake.png'} name={'Pancake'} description={'A refreshing Pancake, perfect for a healthy meal.'} price={'$10.00'} />
        </div>
    </div>
  )
}

export default App
