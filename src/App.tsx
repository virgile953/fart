import { useState } from "react";

function App() {

  const fartsList = [
    new Audio("/farts/086424_small-realpoot106wav-37403.flac"),
    new Audio("/farts/fart-1-228241.flac"),
    new Audio("/farts/fart-6-228246.flac"),
  ]

  const [clicks, setClicks] = useState(0);
  const fartSound = useState(fartsList);

  return (
    <div>
      <div className={`${clicks == 0 ? "hidden": ""} absolute text-xl top-0 right-0 bg-slate-950 px-3 py-2 rounded-bl-lg text-white`}>{clicks}</div>
      <div className="bg-slate-900 w-screen h-screen flex justify-center items-center">
        <button id="fartButton" className="text-white bg-amber-700 p-2 text-2xl rounded-lg border border-amber-800"
          onClick={() => {
            const index = Math.floor(Math.random() * fartSound[0].length);
            fartSound[0][index].play();
            setClicks(clicks + 1);
            console.log(clicks);
          }}
        >
          Click me!
        </button>
      </div>
    </div>
  )
}

export default App
