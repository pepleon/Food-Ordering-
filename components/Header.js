import logo from '../logo.jpg'
const Header = () => {

    return (
    <div className ="header">
    <div className = "logo-contianer">
    
    <img className ="logo" src={logo}/>
     </div>
    
    
    
    <div className = "nav-items" >
    
    <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
    
    
    </ul>
    
    
    
    </div>
    
    
    
    
    
    
    
     </div>
    );
    
    
    }


export default Header;