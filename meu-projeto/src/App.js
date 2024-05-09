import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
function App() {
  const nome = 'Maria'
  return (   
    <div className="App">
      <SayMyName nome="Wesley"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Wesley" 
      idade="26" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"
    />
    </div>
  );
}

export default App;
