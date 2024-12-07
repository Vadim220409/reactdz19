const ImageCard = ({ image, onClick }) => (
  <div className="image-card" onClick={onClick}>
    <img src={image.urls.small} alt={image.alt_description} />
  </div>
);

export default ImageCard;