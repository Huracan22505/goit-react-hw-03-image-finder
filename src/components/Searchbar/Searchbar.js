import React, { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    hitsName: '',
  };

  hendleNameChange = e => {
    this.setState({ hitsName: e.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = e => {
    e.preventDefault();

    if (this.state.hitsName.trim() === '') {
      toast.error('введите шо-нибудь');
      return;
    }

    this.props.onSubmit(this.state.hitsName);
    this.setState({ hitsName: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.hendleSubmit}>
          <button type="submit" className={s.searchFormButton}>
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            placeholder="Search images and photos"
            value={this.state.hitsName}
            onChange={this.hendleNameChange}
          />
        </form>
      </header>
    );
  }
}
