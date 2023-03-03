// import logo from './logo.svg';
//import './Header';
//import Header from './Header';
//import Card from './Card';
//import Footer from './Footer';
import './App.css';
import Card from './componentes/Card.js'; // puede asumir el .js o no
import Header from './componentes/Header';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className='App'>
      <Header texto_titulo='Galeria de imagenes con react' />
      <div className='contenedor-principal'>
        <Card 
        nombre='Coyote Canis latrans'
        pais='Chile'
        imagen='coyote'
        alimentacion='Carnivoro'
        testimonio='Es una especie de mamífero carnívoro de la familia Canidae.
        Los coyotes solo se encuentran en América del Norte, 
        América Central y recientemente América del Sur; desde Canadá hasta Colombia.
        Habita en una gran diversidad de ecosistemas, 
        tropicales, templados y áridos. Su nombre viene de la palabra náhuatl cóyotl. '
        />
        <Card 
        nombre='Monito de monte'
        pais='Chile'
        imagen='monitomonte'
        alimentacion='Herbivoro'
        testimonio='El Monito del Monte es un marsupial más emparentado con 
        los marsupiales de origen australiano que con los de Sudamérica. 
        Estudios genéticos y moleculares muestran que esta especie mantiene 
        los caracteres más primitivos de su grupo, por lo que ha sido considerado como un fósil viviente, 
        representante de los primeros marsupiales que poblaron Sudamérica.'
        />
        <Card 
        nombre='Puma'
        pais='Chile'
        imagen='puma'
        alimentacion='Carnivoro'
        testimonio='Felino esbelto y ágil de gran tamaño que habita en toda América. 
        La subespecie existente en Chile puede medir hasta 2.8 metros de largo, 80 cms. 
        de altura y pesar 80 kgs. La hembra es más pequeña y liviana. Su cabeza es redonda y 
        de orejas erguidas. Su color es variable: 
        entre rubio, amarillos-grises hasta pardo-rojizo.'
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
