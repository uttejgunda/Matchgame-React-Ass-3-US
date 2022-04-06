import './index.css'

const Thumbnails = props => {
  const {eachImage, onCheckMatch} = props

  const onClickThumbnail = () => {
    onCheckMatch(eachImage.id)
  }

  return (
    <li>
      <button
        type="button"
        className="thumbnail-image-button"
        onClick={onClickThumbnail}
      >
        <img
          src={eachImage.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default Thumbnails
