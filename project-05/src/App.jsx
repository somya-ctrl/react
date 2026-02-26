import { useCallback, useState,useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(10);
  const [includenum,setIncludenum]=useState(false);
  const [includechar,setIncludechar]=useState(false);
  const [password,setPassword]=useState("");
  const passwordRef=useRef(null);
   
  const passwordGenerator=useCallback(()=>{
     
     let pass="";
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(includenum){
      str+="0123456789"
     }
     if(includechar){
      str+="!@#$%^&*()_+"
     }
     for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass+= str.charAt(char);
      
     }
     setPassword(pass);
     
  } , [length,includenum,includechar,setPassword])
 
  const copyPasswrdtoclipboard= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
     window.navigator.clipboard.writeText(password); 
  },{password}   )
  useEffect(()=>{
    passwordGenerator();
  },[length,includenum,includechar,passwordGenerator])

  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-2xl font-bold my-3 mb-4  text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
          <input 
          type='text'
          value={password}
          readOnly
          className='w-full outline-none py-1 px-3'
          placeholder='pasword'
          ref={passwordRef}
          ></input>
           <button
           onClick={copyPasswrdtoclipboard}
           className='outline-none bg-orange-500  text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100} 
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}/>
            <label> Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1 '>
           <input type='checkbox' 
           defaultChecked={includenum}
           id = "includenum"
           onChange={(e)=>{
            setIncludenum((prev)=>!prev);
           }}></input>
           <label htmlFor='includenum'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 '>
           <input type='checkbox' 
           defaultChecked={includechar}
           id = "includechar"
           onChange={(e)=>{
            setIncludechar((prev)=>!prev);
           }}></input>
           <label htmlFor='includechar'>Characters</label>
        </div>
       </div>
       </div>
    </>
  )

}
export default App
