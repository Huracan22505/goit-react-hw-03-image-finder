import React, { Component } from 'react';
import axios from 'axios';
import s from './ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';

export default class ImageGallery extends Component {
  state = {
    hits: null,
    status: 'idle',
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.hitsName;
    const nextName = this.props.hitsName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=19836909-16e58b6603fc5616f8f6edf37&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(({ hits }) => this.setState({ hits, status: 'resolved' }));
    }
  }

  // "idle"
  // "pending"
  // "resolved"
  // "rejected"

  render() {
    const { hits, status } = this.state;
    const { hitsName } = this.props;

    if (status === 'idle') {
      return <div>введите запрос</div>;
    }

    if (status === 'pending') {
      return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.imageGallery}>
            {hits.map(({ id, webformatURL, tags }) => {
              return (
                <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
              );
            })}
          </ul>
        </>
      );
    }
  }
}
