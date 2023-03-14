import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Foot from "./components/Foot";
import image1 from "./images/image-retro-pcs.jpg";
import image2 from "./images/image-top-laptops.jpg";
import image3 from "./images/image-gaming-growth.jpg";

const footData = [
  {
    id: 0,
    number: "01",
    image: image1,
    head: " Reviving Retro PCs",
    paragraph: "What happens when old PCs are given modern upgrades?",
  },

  {
    id: 1,
    number: "02",
    image: image2,
    head: "Top 10 Laptops of 2022",
    paragraph: "Our best picks for various needs and budgets.",
  },
  {
    id: 2,
    number: "03",
    image: image3,
    head: "The Growth of Gaming",
    paragraph: "How the pandemic has sparked fresh opportunities.",
  },
];

function App() {
  const mappy = footData.map((footy) => {
    return (
      <Foot
        key={footy.id}
        number={footy.number}
        image={footy.image}
        head={footy.head}
        paragraph={footy.paragraph}
      />
    );
  });
  return (
    <div className="App">
      <Navbar open={false} />
      <Main />
      <div className=" footer">{mappy}</div>
    </div>
  );
}

export default App;
