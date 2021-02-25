import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const familyMembers = ['Anamul Haque', 'Marzina Begum','Monzurul Haque', 'Rumana Akter', 'Mojmul Haque', 'Amader babu']

    return ( 
    <div className = "App" >
        <header className = "App-header">
            <h1>Our Family Members:</h1>
            <div>
            {
                familyMembers.map(memberName => <h4 key={memberName.text} style={{border: '1px solid tomato', padding: '10px'}}>{memberName}</h4>)
            }
            </div>
            <h2>MemberShip</h2>
            <div>
                {
                    products.map(pd => <Products product={pd}></Products>)
                }
            </div>
            {/* <Products product={products[0]}></Products>
            <Products product={products[1]}></Products>
            <Products product={products[2]}></Products> */}
            <Counter></Counter>
            <Users></Users>
        </header> 
    </div>
   
    )
   
}

function Counter(){

    const [count, setCount] = useState(1500)
return(
    <div><h4>Count : {count}</h4>
    <button onClick ={()=>setCount(count-1)}>Decrise</button>
    <button onClick={()=>setCount(count+1)}>Incrise</button>
    </div>
    
)
}

//  user data upload from json placeholder api


function Users(){
const [user, setUser] = useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
})

    return(
        <div>
            <h4>dynamic user : {user.length}</h4>
            <ul>
                {
                    user.map(userName => <li>{userName.address.city}</li>)
                }
            </ul>
        </div>
    )
}

const products = [
    {name: 'Adobe Photoshop', price: '$120'},
    {name: 'Illustrator', price: '$100'},
    {name: 'Adobe reader', price: '$40'},
]


function Products(props){
    const productStyle = {
        color: '#f8f8f8',
        width: '400px',
        height: '400px',
        float: 'left',
        padding: '10px',
        background: 'tomato',
        border: '2px solid white',
        borderRadius: '3px',
        margin: '10px'
    }
    // const {name, price} = props.product

return(
    <div style={productStyle}>
        <h4>{props.product.name}</h4>
        <img src="logo192.png" width="100" alt="log"/>
        <h5>{props.product.price} </h5>
        <button>Buy Now</button>
    </div>
)

}


export default App;