import { useState } from 'react'
import Input from './components/Input'


function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)

  function generate() {
    const character = "'1234567890-=qwertyuiop´[asdfghjklç~]zxcvbnm,.;/QWERTYUIOASDFGHJKLÇZXCVBNM`^{}?:!@#$%¨&*()'"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++){
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
    <h1>Gerador de Senha:</h1>
    <div className='passwordSize'>
      <label htmlFor="passwordSize">Tamanho da senha:</label>
      <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize} />
    </div>
    <button onClick={generate}>Gerar senha de {passwordSize} caracteres!</button>
    <button onClick={copyToClipboard}>{copyText}</button>
    <div className='passwordSize'>{password}</div>
 </div>

)
}

export default App
