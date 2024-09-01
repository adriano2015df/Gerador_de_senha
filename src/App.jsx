import { useState } from 'react'


function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  function generate() {
    const character = "'1234567890-=qwertyuiop´[asdfghjklç~]zxcvbnm,.;/QWERTYUIOASDFGHJKLÇZXCVBNM`^{}?:!@#$%¨&*()'"
    const lenght = 12
    let newPassword = ""
    for (let i = 0; i < lenght; i++){
      const position = Math.floor(Math.random() * character.length)
      newPassword += character[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard (){
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado")
  }
  return (
  <div className="container">
    <h2>Gerador de Senha:</h2>
    <button onClick={generate}>Gerar:</button>
    <button onClick={copyToClipboard}>{copyText}</button>
    <div>{password}</div>
 </div>

)
}

export default App
