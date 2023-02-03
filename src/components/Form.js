import { useState, useEffect } from "react"

const API = "http://localhost:5000";

const Form = () => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = {
            id: Math.random(),
            title,
            time,
            done: false,
        }

        // ESSE CÓDIGO SERVE PARA ENVIAR A TAREFA PARA A API
        console.log(todo);

        setTitle("");
        setTime("");

        console.log(title)
        console.log(time)
        console.log("Enviou");
    }



    return (
        <section nameclass="form">
            <div className="formulario">
                <div className="form-data">
                <div className="titulo-list">
                    <h1>Titulo</h1>
                </div>

                <div className="form-list">
                    <h2>Insira a sua próxima tarefa</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="titulo-tarefa">
                            <label htmlFor="titel">O que você vai fazer?</label>
                            <input type="text" name="title" placeholder="O que você vai fazer?" onChange={(e) => setTitle(e.target.value)} value={title || ""} required />
                        </div>
                        
                        <div className="tempo-tarefa">
                            <label htmlFor="time">Duração:</label>
                            <input type="text" name="time" placeholder="Insira a duração da tarefa" onChange={(e) => setTime(e.target.value)} value={time || ""} required />
                        </div>

                        <div className="list-botao">
                            <input type="submit" value="Criar Tarefa" />
                        </div>
                    </div>
                </form>
            </div>
            </div>
            </div>

            <div className="tarefas-listadas">
                <div className="teste">
                        <h2>Lista de tarefas:</h2>
                    {todos.length === 0 && <p>Não há Tarefas</p> || <p>Suas tarefas são: {todos}</p>}
                </div>
            </div>    
        </section>
        
    )
}

export default Form;