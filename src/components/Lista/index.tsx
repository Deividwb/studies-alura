import React from "react";

function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
      tarefa: "Typescript",
      tempo: "03:00:01",
    },
  ];
  return (
    <div>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => {
          return (
            <li>
              <h3>{item.tarefa}</h3>
              <span>{item.tempo}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Lista;
