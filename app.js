
import React from "react";
import ReactDOM from "react-dom/client";
import logo from './logo.jpg'





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


const Rescard = () =>{
return (

<div className="res-card">  
<img className="card-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/rng/md/carousel/production/f9802f222bff4ee205fc8bf9bc842995"></img>
<h3> Meghna</h3>
 </div>

);

}

const Body = () => {

return (
    
   <div className="body">
      
 <div className = "search">
search

 </div>
  
<div className="res-container">

 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 <Rescard></Rescard>
 </div>




</div>
















);


}





const Applayout = () => {


return (
<div className ="app">
   <Header/>
   <Body></Body>
</div>
);


}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout></Applayout>);