import "./App.css";

function App() {
  return (
    <div className="parentbox">
      <FotoProduk />
      <ProdukInfo name="Youdora Dora" category="LEABRAN" />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="foto">
      <img src="shoes.png" alt="OK" />
    </div>
  );
}

function ProdukInfo(props) {
  const { category, name } = props;
  return (
    <div>
      <div className="deskripsi">
        <p className="cate">{category}</p>
        <h1 className="title">{name}</h1>
        <p className="price">IDR 73.309.399</p>
        <p className="info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          laudantium ea? Mollitia est labore atque consequatur optio molestiae
          nam id ipsa eaque explicabo! Doloribus obcaecati voluptates enim odit
          sapiente molestiae quod dignissimos dolores quibusdam ex, natus
          dolorem quis, reiciendis nesciunt dolor voluptatibus officia et.
          Temporibus quae ipsum placeat, iusto inventore quas expedita voluptas,
          unde quam cumque doloremque. Consequatur exercitationem deserunt
          delectus sint, accusamus, beatae ratione nemo magni enim deleniti
          nisi!
        </p>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e){
  console.log("Membeli " + e);
}

export default App;
