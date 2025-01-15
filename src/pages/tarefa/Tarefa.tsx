import {useEffect, useState} from "react"

function Tarefa() {

  const [completed, setCompleted] = useState(false)
  const [tarefa, setTarefa] = useState('')

  useEffect(() => {
    if(completed){
      setTarefa('parabens! voce concluiu a tarefa!')
    }else{
      setTarefa('opa não concluiu a tarefa')
    }
  }, [completed])

  return (
    <>
    <h2>Componente Tarefa</h2>
    <h3>{tarefa}</h3>
    <p>Conclua a terefa</p>
    {/* mudar o "Concluir Tarefa"  para revisão */}
    <button onClick={() => setCompleted(v => !v)}>
      {completed ? "Revisar" : "Concluir Tarefa"}
    </button>
    </>
  )
}

export default Tarefa