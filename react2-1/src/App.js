import Todo from "./components/Todo"; //Importando o arquivo Todo.js

// Chamando função App do arquivo index.js, aqui pode escrever
// tranquilamente código html
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      {/*Para não precisarmos ficar escrevendo o mesmo código várias 
      vezes, criamos o arquivo Todo.js e replicamos aqui, o text é uma 
      props que faz com que possamos trocar o título do elemento, em vez
      de todos ficarem com o mesmo valor*/}
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the full React course" />
    </div>
  );
}

export default App;
