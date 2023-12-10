import './App.css';

function App() {
  const category = "HOLIDAY";
  return (
    <div className="parentbox">
      <div className="foto">
        <img src="shoes.png" alt="OK" />
      </div>
      <div className="deskripsi">
        <p className="cate">{category}</p>
        <h1 className="title">Pinky Swagg</h1>
        <p className="price">IDR 73.309.399</p>
        <p className="info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, laudantium ea? Mollitia est labore atque consequatur optio molestiae nam id ipsa eaque explicabo! Doloribus obcaecati voluptates enim odit sapiente molestiae quod dignissimos dolores quibusdam ex, natus dolorem quis, reiciendis nesciunt dolor voluptatibus officia et. Temporibus quae ipsum placeat, iusto inventore quas expedita voluptas, unde quam cumque doloremque. Consequatur exercitationem deserunt delectus sint, accusamus, beatae ratione nemo magni enim deleniti nisi!
        </p>
      </div>
    </div>
  );
}

export default App;
