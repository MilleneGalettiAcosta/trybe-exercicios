import React from 'react';
import PropTypes from 'prop-types';

class DataField extends React.Component {
    render() {
        const { email, password, handleChange, textarea } = this.props;
        return (
            <fieldset>
                    <legend>Dados Pessoais</legend>

                <label htmlFor="email">Email:
                <input 
                type='email' 
                name='email' 
                value={ email } 
                id='email'
                onChange={ handleChange } 
                />
                {!email.match(/^\S+@\S+$/i) ? '-email inválido-' : ' -ok- '}
                </label>

                <label htmlFor="password">Password:
                <input 
                type='password' 
                name='password' 
                value={ password } 
                onChange={ handleChange } 
                />
                {password.length < 6 ? '-password inválido-' : ' -ok- '}
                </label>

                <label htmlFor="textarea">Descrição:
                <textarea 
                id="textarea" 
                name="textarea" 
                value={ textarea } 
                onChange={ handleChange }
                >Digite aqui
                </textarea>
                { !textarea.length ? ' -campo vazio- ': ' -ok- '}
                </label>
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
