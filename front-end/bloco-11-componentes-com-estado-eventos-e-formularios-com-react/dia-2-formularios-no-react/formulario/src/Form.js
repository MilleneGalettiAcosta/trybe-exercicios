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
        };
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
      
        this.setState({
          [name]: value,
        });
      }

  render() { 
      const { email, password, textarea } = this.state;
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
        </div>
    );
  }
}

export default Form;
