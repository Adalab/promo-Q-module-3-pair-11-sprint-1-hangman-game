
import { useState } from 'react';
import '../styles/App.scss';
export default App;

function App() {

const [numberOfErrors, setNumberOfErrors] = useState(0);

const handleClick = (ev) => {
  ev.preventDefault();
  setNumberOfErrors(numberOfErrors +1); 
  console.log(numberOfErrors);
}

const [lastLetter, setLastLetter] = useState('');

const handleImput = (ev) => {

  if( ev.target.value.search( /[a-zñáéíóúA-ZÑÁÉÍÓÚ]/ ) !== -1 ) {
    setLastLetter(ev.target.value);
    userLetters.push(ev.target.value)
    console.log(userLetters);
  }
}
const userLetters = [];

const getWordFromApi = () => {  
return fetch('https://adalab-api.herokuapp.com/api/random/word/')    
.then(response => response.json())    
.then(response => {      

return response.word; 

console.log(response.word);
});};
getWordFromApi();




  /*let data = [];

  const getData = () => {
    fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
    .then((response) => response.json() )
  
    .then((data) =>  {let word = data.body.word;
      console.log(data);
      
    console.log(word);
  })
};

  getData();
*/

  return (
 
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            
            <ul className="letters">
             
              <li className="letter"></li>
              
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleImput}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
       <button onClick={handleClick} className='btn'>Incrementar</button>

    
      </main>
    </div>
  
  );

};

