import React from 'react';
import logo from './logo.svg';
import person from './person.svg';
import './App.css';
 import Hello from "./Hello";
 import Wish from "./Wish";
 // import Home from "./Home";
import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import State from "./components/State";
import ClassState from "./components/ClassState";
import Hooks from "./components/Hooks";
import data from "./data/data.json";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Resume from "./components/Resume";

function App() {
 return (
     <div className="App">
   {/*<h1>APSSDC REACTJS</h1>
     <h2>Satya Sowjanya</h2>
     <Home name="APSSDC"/>
     <Hello>
        
    </Hello>
     <Wish />*/}

   {/* <Greeting name="satya" mail="satya.p@gmail.com">
     <img src={logo} style={{width:200px}}/>
      </Greeting>
      <Greeting name="devi" mail="devi.p@gmail.com">
          <p> Hello APSSDC</p>
      <p> Hello satya</p>
      </Greeting>*/}
   {/*using welcome component */}
     {/* <h1>we are creating class component & pass the props</h1>
      <Welcome name="satya" college="VIEW">
        <p>Hello student how are you</p>
      </Welcome>
      <Welcome name="nandhini" college="AU">
         <p> Hello nandini how are you</p>
      </Welcome>*/}
    {/* <State/>*/}
    {/*<ClassState></ClassState>
    <h1>using Hooks</h1>
    <Hooks />*/}

    <BrowserRouter>

    <Route exact path="/" component={Home} />
    <Route path="/resume"component={Resume} />
    </BrowserRouter>
        </div>

    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
   // </div> 

   );
 }
 let Home=()=>{
  let profile=data.profiles;
  console.log(profile);

  return(
    <div className="row justify-content-center">
    {profile.map((value,index)=>(

    <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={index}>

      <div className="card">
        <div className="card-body">
            <img src={person} alt="profile Icon" style={{width:200}}/>
            <h1>{value.basic.name}</h1>

            <Link to={{pathname:"/resume", profilesData:{i:index}}} className="btn btn-primary">Profile</Link> 
        </div>

      </div>
    </div>
    ))

  }
 </div>
  );
   
 }

 export default App;
