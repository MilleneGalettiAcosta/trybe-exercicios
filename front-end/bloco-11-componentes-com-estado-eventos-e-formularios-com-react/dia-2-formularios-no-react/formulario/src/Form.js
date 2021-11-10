import React from 'react';
import DataField from './DataField';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
        email:'',
        password:'',
        textarea:'',
        checkbox:false,
        formularioComErros: true,
        };
    }

    handleError() {
        const { email, password, textarea, checkbox } = this.state;

        const errorCases = [
            !email.match(/^\S+@\S+$/i),
            password.length < 6,
            !textarea.length,
            !checkbox,
        ];

        const formularioPreenchido = errorCases.every((error) => error !== true);

        this.setState({
            formularioComErros: !formularioPreenchido,
        });
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
      
        this.setState({
          [name]: value,
        });
      }

  render() { 
      const { email, password, textarea, formularioComErros } = this.state;
    return (
        <div>
            <h1>Formulário Fixar</h1>
            <form className="form">

            <DataField 
            email={ email }
            password={ password }
            textarea={ textarea }
            handleChange={ this.handleChange }
            /> 

                {/* Referência: https://pt-br.reactjs.org/docs/forms.html*/}

                <label htmlFor="select">Fruta favorita:</label>
                <select id="select">
                <option value="laranja">Laranja</option>
                <option value="limao">Limão</option>
                <option selected value="coco">Coco</option>
                <option value="manga">Manga</option>
                </select>

                <label htmlFor="checkbox">Enviar noticias:</label>
                <input 
                type="checkbox" 
                id="checkbox"
                name="checkbox"
                value={this.state.checkbox}
                onChange={this.handleChange} 
                />

                <input type="file" />
            </form>
            { formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
        </div>
    );
  }
}

export default Form;
