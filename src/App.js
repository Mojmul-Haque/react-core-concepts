import logo from './logo.svg';
import './App.css';

function App() {

    const person ={
        name: 'Mojmul',
        age: 20,
        hobby: 'Proggraming',

    }

    const style ={
        color: 'red',
        background: 'lime',
        fontSize: "54px",
        fontWeight: 700,
        padding: '10px 20px'
    }
    
  

    return ( 
    <div className = "App" >
        <header className = "App-header" >
        <h2 style={{color: 'yellow', background: 'tomato'}}>Name: {person.name}</h2>
        <h3>Age: {person.age}</h3>
        <h4 style = {style}>Hobby: {person.hobby}</h4>
        <ul id="friend-list"></ul>
        </header>  
         
    </div>
    );
  
}
const frinds = ['Mojmul', 'Alamin', 'Anamul', 'Jannat','Sagor']
frinds.forEach(e => {
const li = document.createElement('li')
li.innerText = e;
document.getElementById('friend-list').appendChild(li)
});
export default App;