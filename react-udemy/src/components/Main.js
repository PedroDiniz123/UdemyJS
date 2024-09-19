import React, {Component} from 'react';

import './Main.css'

// Tarefas
import { FaEdit, FaWindowClose } from "react-icons/fa";
import Form from "./Form";
import Tarefas from "./Tarefas/Tarefas";

export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [
            'Fazer Café',
            'Beber Água',
            'Estudar'
        ],
        index: -1
    }

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'))

        if (!tarefas) return

        this.setState({ tarefas })
    }

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state

        if (tarefas === prevState.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas } = this.state;
        let { novaTarefa , index} = this.state;
        novaTarefa = novaTarefa.trim()

        if (tarefas.indexOf(novaTarefa) !== -1) return;

        let novasTarefas = [...tarefas]
        if (index === -1) {
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: '',
            })
            return
        }

        novasTarefas[index] = novaTarefa

        this.setState({
            tarefas: [...novasTarefas],
            novaTarefa: '',
            index: -1
        })
    }

    handleDelete = (e, index) => {
        let { tarefas } = this.state;

        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas]
        })

    }

    handleEdit = (e, index) => {

        const { tarefas } = this.state;

        this.setState({
            index,
            novaTarefa: tarefas[index]
        })
    }

    render() {
        const {novaTarefa, tarefas} = this.state;
        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />

                <Tarefas
                    tarefas={tarefas}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}