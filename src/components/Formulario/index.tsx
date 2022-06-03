import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';
import img from '../../assets/img/mrCook.jpg'

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    setTarefa("");
    setTempo("00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
     
     <div className={style.inputContainer}>
          <img src={img} alt="semrush site audit dashboard" className={style.AppImg} width="400" height="180"/>
        </div>
      <div className={style.inputContainer}>
        
        <label htmlFor="tarefa">
          Nome
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={evento => setTarefa(evento.target.value)}
          placeholder=""
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={evento => setTempo(evento.target.value)}
          id="tempo"
          min="00:00:00"
          max="24:00:00"
          required
        />
      </div>
      <Botao type="submit">
        Adicionar
      </Botao>
    </form>
  )
}

export default Formulario;