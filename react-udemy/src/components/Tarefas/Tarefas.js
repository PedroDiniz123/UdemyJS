import React from 'react';
import PropTypes from 'prop-types';
import './Tarefas.css';
import {FaEdit, FaWindowClose} from "react-icons/fa";

const Tarefas = ({tarefas, handleEdit, handleDelete}) => (
    <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
                {tarefa}
                <div>
                    <FaEdit onClick={(e) => handleEdit(e, index)} className="edit"/>
                    <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete"/>
                </div>
            </li>
        ))}
    </ul>
);

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default Tarefas;
