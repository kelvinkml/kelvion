import "@/styles/globals.css";
import { useEffect } from "react";
import anime from "animejs";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const wrapper = document.getElementById("tiles");
    // let columns = Math.floor(window.innerWidth / 50);
    let rows = Math.floor(window.innerHeight / 50);
    let columns = Math.floor(document.body.clientWidth / 50);
    // let rows = Math.floor(document.body.clientHeight / 50);

    const colours = [
      "rgb(170, 170, 170)",
      "rgb(255, 255, 255)",
      "rgb(170, 170, 170)",
      "rgb(255, 255, 255)",
      "rgb(170, 170, 170)",
      "rgb(255, 255, 255)",
    ];
    let count = 1;
    const handleOnMouseOver = (index) => {
      document.getElementById("tiles").style.zIndex = "0";
      count++;
      anime({
        targets: ".tile",
        backgroundColor: colours[count % (colours.length - 1)],
        delay: anime.stagger(window.innerWidth > 1200 ? 100 : 150, {
          grid: [columns, rows],
          from: index,
        }),
      });
    };

    const createTile = (index) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.onmouseover = (e) => handleOnMouseOver(index);
      return tile;
    };

    const createTiles = (quantity) => {
      Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
      });
    };

    const createGrid = () => {
      wrapper.innerHTML = "";
      // columns = Math.floor(window.innerWidth / 50);
      rows = Math.floor(window.innerHeight / 50);
      columns = Math.floor(document.body.clientWidth / 50);
      // rows = Math.floor(document.body.clientHeight / 50);
      wrapper.style.setProperty("--columns", columns);
      wrapper.style.setProperty("--rows", rows);

      createTiles(columns * rows);
    };
    createGrid();
    window.onresize = () => createGrid();
    handleOnMouseOver(1);
  }, []);

  return (
    <>
      <div id="tiles"></div>
      <Component {...pageProps} />
    </>
  );
}
