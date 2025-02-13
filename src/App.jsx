import { useState } from "react";
const lovesvg = "public/PXX.PNG";
//import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
const lovesvg2 = "public/PXL.JPG";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Segura Changa??",
      "Realmente segura??",
      "Piensalo bien!",
      "Ultima oportunidad!",
      "segura q no?",
      "Podrías arrepentirte de esto!",
      "Piénsalo otra vez!",
      "Estás absolutamente segura?",
      "Esto podría ser un error!",
      "Ten un poco de corazon!",
      "No seas tan friaaaaaaaaa!",
      "ya Cambio de opinión? n_n",
      "No lo reconsiderarias?",
      "Es tu respuesta final?",
      "Me estás rompiendo el corazón :'''(",
      "Es tu respuesta final?",
      "Me estás rompiendo el corazoon ;(",
      "Por favor? :( Me estás rompiendo el corazón"

    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Okeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeey n_________n!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Changa quieres ser mi valentinnnnnn?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              SI
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a

    >
      CON AMOR PA TI CHANGA{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
