import './App.css';
import BookList from './components/BookList';
// import Books from './components/Books';

function App() {

  // const livros = [
  //   {
  //     id: 1,
  //     nome: "Memórias de uma Gueixa"
  //   },
  //   {
  //     id: 2,
  //     nome: "O Príncipe"
  //   },
  //   {
  //     id: 3,
  //     nome: "O Silmarillion"
  //   },
  // ]

  return (
    <div className="App">
      <h1>Livros</h1>
      <BookList />
      
    </div>
  );
}

export default App;
