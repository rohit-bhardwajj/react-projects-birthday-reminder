import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  // use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function (not only for running method on changing depend. , but to optimize by keeping method in cache)
  const passwordRef = useRef(null); //to select the password to show that its copied
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-red-800 bg-slate-900 shadow-slate-700 ">
        <h1 className="text-indigo-500 font-extrabold  text-center">
          Password generator
        </h1>
        <div className="flex shadow overflow-hidden rounded-lg mb-4 my-3">
          <input
            type="text"
            className="outline-none w-full font-semibol text-black py-1 px-3"
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            className="outline-none hover:bg-cyan-700 active:bg-slate-400  bg-blue-700 text-white px-3 py-0.5"
            onClick={copyPasswordtoClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-small gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer focus:ring-blue-600 hover:bg-blue-400"
              onChange={(e) => setlength(e.target.value)}
            />
            <label className=" text-indigo-300 font-extralight ">
              Length:{length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="mr-1 "
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setnumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className=" text-indigo-400 font-bold">
              Numbers
            </label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setcharAllowed((prev) => !prev)}
            />
            <label className=" text-indigo-400 font-bold" htmlFor="charInput">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
