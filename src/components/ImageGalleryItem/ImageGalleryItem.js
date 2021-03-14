import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, src, alt, largeImageURL, onClick }) => {
  return (
    <li key={id} className={s.imageGalleryItem}>
      <img
        onClick={onClick}
        src={src}
        alt={alt}
        className={s.imageGalleryItemImage}
        data-source={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
