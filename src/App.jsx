import Counter from "./components/Counter";
import { counterContext } from "./context/Counter";
import { useContext } from "react";
import "./App.css";

function App() {
  const counterState = useContext(counterContext);
  return (
    <>
    <div className="bg-gradient-to-b from-indigo-950 via-blue-800 to-sky-600 min-h-screen w-full fixed">
      <h1 className="flex justify-center p-12 text-6xl font-bold font-serif text-white">Count The Value</h1>
      <div className="font-semibold text-[350px] text-white flex justify-center items-center">{counterState.count}</div>
      <Counter />
      </div>
    </>
  );
}

export default App;
