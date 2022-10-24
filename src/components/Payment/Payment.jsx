import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Form, Input } from './Payment.styled'

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <Form>
        <Input
            type="tel"
                    name="number"
                    min={16}
                    max={16}
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            required
                />
                <Input
            type="tel"
                    name="cvc"
                    min={3}
            max={3}
            required
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
                />
            <Input
            type="tel"
                    name="expiry"
                    min={4}
            max={4}
            required
            placeholder="00/00"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
                />
            <Input
            type="text"
                    name="name"
                    min={2}
            max={4}
            required
            placeholder="Name on card"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
                />
            </Form>
      </div>
    );
  }
}