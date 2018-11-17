import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Manu M',
        email: 'manu@gmail.com',
        phone: '999-999-9999'
      },
      {
        id: 3,
        name: 'Sanjay Taylor',
        email: 'sanjay@gmail.com',
        phone: '444-444-4444'
      },
      {
        id: 4,
        name: 'Pooja',
        email: 'pooja@gmail.com',
        phone: '777-777-7777'
      }
    ],

    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
