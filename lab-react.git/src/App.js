import logo from './logo.svg';
import './App.css';

//================================================PAGE-ONE=====================================================
const element = <h1>Say hello to <br/>ReactJS</h1>;
const para = <p>You will learn a Frontend <br/> framework from scrach, to<br/> become a Ninka Developer</p>;
const button = <button id="Awesome!">Awesome !</button>;
//==============================================================================================================


//================================================PAGE-TWO======================================================
const Declerative = <div className='BOX'>
              <img src='https://imgur.com/H2L3ohY.png' alt='icon_1'/>
              <h3>Declerative</h3>
              <p>React make it painless to create interctive UI's </p>
            </div>


//====
const Components = <div className='BOX'>
              <img src='https://imgur.com/IHW1mFB.png' alt='icon_2'/>
              <h3>Components</h3>
              <p>Build encapsulated components that manage their states. </p>
            </div>


//====
const Single = <div className='BOX'>
              <img src='https://imgur.com/LtUDB9y.png' alt='icon_3'/>
              <h3>Single-Way</h3>
              <p>A set of imutable values are passed to the component's. </p>
            </div>


//=====
const JSX = <div className='BOX'>
              <img src='https://imgur.com/agN6R4Y.png' alt='icon_4'/>
              <h3>JSX</h3>
              <p>Statically-typed, designed to run on mordern browsers. </p>
            </div>
 //=====           
const footer = <div className='ALL'>{Declerative}{Components}{Single}{JSX}</div>;
//==========================================================================================================




function App() {
  return ( 
  <div className="App">
    <div className="hero">
      <div className='left'>
        {element}
        {para}
        {button}
      </div> 
    <div className="logo">
        <div className='main-logo'>
          <div className='LP'>
            <img src={logo} alt="RL"/>
          </div>
          <div className='LP'>
            <img src={logo} alt="RL"/>
          </div>
        </div>
        <div className='small-logo'>
          <div className='LP'>
            <img src={logo} alt="RL"/>
          </div>
          <div className='LP'>
            <img src={logo} alt="RL"/>
          </div>
        </div>
      </div>
    </div>
    <div className='footer'>
      {footer}
    </div>
  </div>
  );
}

export default App;