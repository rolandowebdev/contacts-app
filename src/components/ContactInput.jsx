import React from 'react';

export default class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: '',
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  }

  onTagChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        tag: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <div>
        <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
          <input
            type='text'
            placeholder='Name'
            value={this.state.name}
            onChange={this.onNameChangeEventHandler}
          />
          <input
            type='text'
            placeholder='Tage'
            value={this.state.tag}
            onChange={this.onTagChangeEventHandler}
          />
          <button type='submit'>Add Contact</button>
        </form>
      </div>
    );
  }
}
