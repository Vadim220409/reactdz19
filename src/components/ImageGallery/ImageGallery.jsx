import ImageCard from '../ImageCard/ImageCard';
import './ImageGallery.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="image-gallery">
    {images.map((image) => (
      <li key={image.id}>
        <ImageCard image={image} onClick={() => onImageClick(image)} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;