import { useEffect } from "react";
import { useState } from "react"

function App() {

  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  // const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  // const [isCharAllowed, setIsCharAllowed] = useState(false);

  const lengthHandler = () => {
    setLength()
  }

  useEffect(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(let i = 1; i<= length; i++){
      pass += str[Math.floor(Math.random() * str.length + 1)]
    }

    setPassword(pass)
  }, [length]);
  

  return (
    <>
      <main className="flex flex-col items-center justify-center space-y-4 p-[40px] border bg-slate-900 text-white w-[80%]">
      <h1>Password Generator</h1>
      <div className="flex gap-2 w-[70%]">
        <input type="text" placeholder="Password" value={password} className="w-[100%] border rounded-lg px-4 py-2 text-orange-600" />
        <button className="bg-blue-500 px-4 py-2 rounded-lg">Copy</button>
      </div>
      <div className="flex w-[70%] items-center justify-start gap-4 py-4">
        <div className="flex items-center gap-2">
          <input type="range" name="length" value={length} id="" min="6" max="100" onChange={lengthHandler}/>
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="numbers" />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="numbers" id="" />
          <label>Characters</label>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
