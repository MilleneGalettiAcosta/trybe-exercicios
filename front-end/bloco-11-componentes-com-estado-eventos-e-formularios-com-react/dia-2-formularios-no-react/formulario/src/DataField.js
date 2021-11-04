import React from 'react';
import PropTypes from 'prop-types';

class DataField extends React.Component {
    render() {
        const { email, password, handleChange, textarea } = this.props;
        return (
            <fieldset>
                    <legend>Dados Pessoais</legend>

                <label htmlFor="email">Email:</label>
                <input 
                type='email' 
                name='email' 
                value={ email } 
                id='email'
                onChange={ handleChange } 
                />

                <label htmlFor="password">Password:</label>
                <input 
                type='password' 
                name='password' 
                value={ password } 
                onChange={ handleChange } 
                />

                <label htmlFor="textarea">Descrição:</label>
                <textarea 
                id="textarea" 
                name="textarea" 
                value={ textarea } 
                onChange={ handleChange }
                >Digite aqui
                </textarea>
                </fieldset>
        );
    }
}

DataField.propTypes = {
    handleChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    textarea: PropTypes.string.isRequired,
};

export default DataField;
