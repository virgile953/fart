import { useState } from "react";


type action = {
  index: number,
  message: string,
  action: () => void
}

function App() {

  const randomFartsList = [
    new Audio("/farts/086424_small-realpoot106wav-37403.flac"),
    new Audio("/farts/fart-1-228241.flac"),
    new Audio("/farts/fart-6-228246.flac"),
  ]
  const premiumFartsList = [
    new Audio("/farts/fart-4-228244.flac"),
  ]

  const [clicks, setClicks] = useState(0);

  const [randomFarts] = useState(randomFartsList);
  const [premiumFarts] = useState(premiumFartsList);

  function playRandomFart(): void {
    const index = Math.floor(Math.random() * randomFarts.length);
    randomFarts[index].play();
  }
  function playPremiumFart(): void {
    const index = Math.floor(Math.random() * premiumFarts.length);
    premiumFarts[index].play();
  }

  const actions: action[] = [
    {
      index: 0,
      message: "Click me!",
      action: playRandomFart
    },
    {
      index: 1,
      message: "Hehe!!1!",
      action: playRandomFart

    },
    {
      index: 5,
      message: "stop...",
      action: playRandomFart
    },
    {
      index: 9,
      message: "Big one",
      action: playPremiumFart
    },
    {
      index: 10,
      message: "you've broken it :-(",
      action: playRandomFart
    }
  ].sort((a, b) => b.index - a.index);

  function getAction(): action {
    const messageObject = actions.find(message => message.index <= clicks)
    return messageObject!;
  }
  return (
    <div>
      <div className={`${clicks == 0 ? "hidden" : ""} absolute text-xl top-0 right-0 bg-slate-950 px-3 py-2 rounded-bl-lg text-white`}>{clicks}</div>
      <div className="bg-slate-900 w-screen h-screen flex justify-center items-center">
        <button id="fartButton" className="text-white bg-amber-700 p-2 text-2xl rounded-lg border border-amber-800"
          onClick={() => {
            getAction().action();
            setClicks(clicks + 1);
          }}
        >
          {getAction().message}
        </button>
      </div>
    </div>
  )
}

export default App
