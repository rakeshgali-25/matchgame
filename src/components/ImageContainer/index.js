import './index.css'

const ImageContainer = props => {
  const {each, onClickImage} = props
  const {imageUrl, thumbnailUrl, category} = each

  const imageClicked = () => {
    onClickImage(imageUrl)
  }

  return (
    <li>
      <button type="button" className="image-button">
        <img
          src={thumbnailUrl}
          className="image"
          alt="thumbnail"
          onClick={imageClicked}
        />
      </button>
    </li>
  )
}

export default ImageContainer
