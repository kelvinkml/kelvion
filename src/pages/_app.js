import "@/styles/globals.css";
import { useEffect } from "react";
import anime from "animejs";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const wrapper = document.getElementById("tiles");
    let columns = Math.floor(document.body.clientWidth / 50);
    let rows = Math.floor(document.body.clientHeight / 50);

    const colours = [
      "rgb(100, 100, 100)",
      "rgb(255, 255, 255)",
      "rgb(100, 100, 100)",
      "rgb(255, 255, 255)",
      "rgb(100, 100, 100)",
      "rgb(255, 255, 255)",
    ];
    let count = -1;

    const handleOnClick = (index) => {
      count = count + 1;
      document.getElementById("tiles").style.zIndex = "0";
      anime({
        targets: ".tile",
        backgroundColor: colours[index % (colours.length - 1)],
        delay: anime.stagger(100, {
          grid: [columns, rows],
          from: index,
        }),
      });
    };

    const createTile = (index) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.onmouseover = (e) => handleOnClick(index);
      return tile;
    };

    const createTiles = (quantity) => {
      Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
      });
    };

    const createGrid = () => {
      wrapper.innerHTML = "";
      columns = Math.floor(document.body.clientWidth / 50);
      rows = Math.floor(document.body.clientHeight / 50);
      wrapper.style.setProperty("--columns", columns);
      wrapper.style.setProperty("--rows", rows);

      createTiles(columns * rows);
    };
    createGrid();
    window.onresize = () => createGrid();
  }, []);

  return (
    <>
      <div id="tiles"></div>
      <Component {...pageProps} />
    </>
  );
}
