import "@/styles/globals.css";
import { useEffect } from "react";
import anime from "animejs";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const wrapper = document.getElementById("tiles");
    if (!wrapper) return;

    let columns = Math.ceil(document.body.clientWidth / 50);
    let rows = Math.ceil(document.body.clientHeight / 50);

    const colours = [
      "rgb(170, 170, 170)",
      "rgb(255, 255, 255)",
      "rgb(170, 170, 170)",
      "rgb(255, 255, 255)",
      "rgb(170, 170, 170)",
      "rgb(255, 255, 255)",
    ];
    let count = 1;

    const handleOnMouseOver = (index: number): void => {
      count++;
      anime({
        targets: ".tile",
        backgroundColor: colours[count % (colours.length - 1)],
        duration: 100,
        delay: anime.stagger(window.innerWidth > 1200 ? 100 : 150, {
          grid: [columns, rows],
          from: index,
        }),
      });
    };

    const createTile = (index: number): HTMLDivElement => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.onmouseover = () => handleOnMouseOver(index);
      return tile;
    };

    const createTiles = (quantity: number): void => {
      Array.from(Array(quantity)).map((_, index) => {
        wrapper.appendChild(createTile(index));
      });
    };

    const createGrid = (): void => {
      wrapper.innerHTML = "";
      columns = Math.ceil(document.body.clientWidth / 50);
      rows = Math.ceil(document.body.clientHeight / 50);
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
