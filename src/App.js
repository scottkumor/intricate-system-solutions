import logo from './images/ISS.png';
import logoText from './images/intraText.jpeg';
import cam from './images/pawel-czerwinski-zBTYRFCeaS0-unsplash.jpg';
import op from './images/op.png'
import lts from './images/Lts_logo.svg.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoText} className="App-logo-text" alt="logo-text" />
      </header>

      <img src={cam} className="cam-img" alt="cam-img" />

      <div className="section-partners">
        <a className="img" href="https://www.openpath.com/" alt="openpath" rel="noopener noreferrer" target="_blank">
          <img src={op} className="op-img" alt="op-img" />
        </a>
        <a className="img" href="https://www.ltsecurityinc.com/" alt="LTS" rel="noopener noreferrer" target="_blank">
          <img src={lts} className="lts-img" alt="lts-img" />
        </a>
      </div>

      <section className="section-contact">
        <p className="section-contact-title">
          Contact Us
        </p>
        <a className="contact-phone" href="tel:6305101520">📱 (630)-510-1520</a>
      </section>
    </div>
  );
}

export default App;
