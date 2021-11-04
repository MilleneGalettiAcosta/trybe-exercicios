import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
        email:'',
        password:'',
        textarea:'',
        };
    }

    handleChange(event) {
        this.setState({ email:event.target.value });
    }

  render() { 
    return (
        <div className="form">
            <h1>Formulário Fixar</h1>
            <form className="form">
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
                {/* Referência: https://pt-br.reactjs.org/docs/forms.html*/}
                <label htmlFor="select">Fruta favorita:</label>
                <select id="select">
                <option value="laranja">Laranja</option>
                <option value="limao">Limão</option>
                <option selected value="coco">Coco</option>
                <option value="manga">Manga</option>
                </select>
            </form>
        </div>
    );
  }
}

export default Form;
