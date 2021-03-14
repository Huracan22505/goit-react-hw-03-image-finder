import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li key={this.props.id} className={s.imageGalleryItem}>
        <img
          onClick={this.props.onClick}
          src={this.props.src}
          alt={this.props.alt}
          className={s.imageGalleryItemImage}
          data-source={this.props.largeImageURL}
        />
      </li>
    );
  }
}
