import React from 'react';

import './Form.css'

import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Form({handleSubmit, handleChange, novaTarefa}) {
    return (
        <form onSubmit={handleSubmit} action="#" className="form">
            <input
                onChange={handleChange}
                type="text"
                value={novaTarefa}
            />
            <button type="submit">
                <FaPlus/>
            </button>
        </form>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}
