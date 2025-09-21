import { useEffect, useState } from "react";


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
    new Audio("/farts/funny-fart-88611.flac"),
  ]

  const [clicks, setClicks] = useState(0);
  const [randomFarts] = useState(randomFartsList);
  const [premiumFarts] = useState(premiumFartsList);
  const [isPlaying, setIsPlaying] = useState(false);

  function playRandomFart(): void {
    const index = Math.floor(Math.random() * randomFarts.length);
    randomFarts[index].onended = () => setIsPlaying(false);
    setIsPlaying(true);
    randomFarts[index].play();
  }
  function playPremiumFart(idx: number = 0): void {
    premiumFarts[idx].onended = () => setIsPlaying(false);
    setIsPlaying(true);
    premiumFarts[idx].play();
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
      index: 3,
      message: "you like it huh..?",
      action: playRandomFart
    },
    {
      index: 5,
      message: "Well that's awkward..",
      action: playRandomFart
    },
    {
      index: 6,
      message: "Well that's awkward..",
      action: playRandomFart
    },
    {
      index: 8,
      message: "Big one coming up!",
      action: playRandomFart
    },
    {
      index: 9,
      message: "phew",
      action: () => playPremiumFart(0),

    },
    {
      index: 10,
      message: "Why do you keep clicking?",
      action: playRandomFart,
    },
    {
      index: 19,
      message: "That's it tho, only farts here",
      action: playRandomFart,
    },
    {
      index: 29,
      message: "Get some help, maybe some fresh air",
      action: playRandomFart,
    },
  ].sort((a, b) => b.index - a.index);
  const [action, setAction] = useState(getAction());
  const [message, setMessage] = useState(action.message);
  function getAction(): action {
    const messageObject = actions.find(message => message.index <= clicks)
    if (!messageObject)
      return actions[0];
    return messageObject;
  }

  useEffect(() => {
    setAction(getAction());
    setMessage(action.message);
  }, [clicks])

  return (
    <div>
      <div className={`${clicks == 0 ? "hidden" : ""} absolute text-xl top-0 right-0 bg-slate-950 px-3 py-2 rounded-bl-lg text-white`}>{clicks}</div>
      <div className="bg-slate-900 w-screen h-screen flex justify-center items-center">
        <button id="fartButton" className="text-white bg-amber-700 p-2 text-2xl rounded-lg border border-amber-800"
          onClick={() => {
            setClicks(clicks + 1);
            action.action();
          }}
        >
          {message}
          {isPlaying ? " 💨" : ""}
        </button>
      </div>
    </div >
  )
}

export default App
