import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={s.loader}>
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={80}
          width={80}
          className={s.loader}
        />
      </div>
    );
  }
}
