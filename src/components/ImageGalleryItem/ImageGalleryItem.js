import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, src, alt }) {
  return (
    <li key={id} className={s.imageGalleryItem}>
      <img src={src} alt={alt} className={s.imageGalleryItemImage} />
    </li>
  );
}
