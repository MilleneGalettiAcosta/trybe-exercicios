import React from 'react';

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
    return (
        <div className="form">
            <h1>Formulário Fixar</h1>
            <form className="form">
                <fieldset>
                    <legend>Dados Pessoais</legend>
                <label htmlFor="email">Email:</label>
                <input type='email' name='email' value={this.state.email} id='email'onChange={this.handleChange} />
                <label htmlFor="password">Password:</label>
                <input 
                type='password' 
                name='password' 
                value={this.state.password} 
                onChange={this.handleChange} 
                />
                <label htmlFor="textarea">Descrição:</label>
                <textarea id="textarea" 
                name="textarea" 
                value={this.state.textarea} 
                onChange={this.handleChange}>Digite aqui
                </textarea>
                </fieldset>
                {/* Referência: https://pt-br.reactjs.org/docs/forms.html*/}
                <label htmlFor="select">Fruta favorita:</label>
                <select id="select">
                <option value="laranja">Laranja</option>
                <option value="limao">Limão</option>
                <option selected value="coco">Coco</option>
                <option value="manga">Manga</option>
                </select>
                <label htmlFor="checkbox">Enviar noticias:</label>
                <input type="checkbox" id="checkbox" value={this.state.checkbox} onChange={this.handleChange} />
                <input type="file" />
            </form>
        </div>
    );
  }
}

export default Form;
