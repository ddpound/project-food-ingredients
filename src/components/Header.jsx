import { Link } from "react-router-dom";
import axios from "axios";

export default function Header(){
    return (
        <header>
            <div>
                <section className="mainLogo">
                    <Link to="/">Home</Link>
                </section>
                <section className="searchSection">
                    <input id="searchInput" onKeyPress={handleKeyPress} type="text"></input>
                </section>
                <section>
                    <Link to="/about">About</Link>
                    <Link to="/profile">Profile</Link>
                </section>
                
            </div>
            
        </header>
    );
    
    
}

const handleKeyPress = e => {
    if(e.key === 'Enter') {
        test()
    }
  }

function test(){
    axios.get('http://localhost:5000/test1').then(function (respone){
        console.log(respone.data)
    })
    
}