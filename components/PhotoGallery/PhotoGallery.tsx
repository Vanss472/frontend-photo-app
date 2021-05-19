import React from 'react'
import { Gallery } from './styled'

type PhotoGalleryProps = {
  photos: {
    id: number
    photographer: string
    photographer_url: string
    src: {
      portrait: string
    }
  }[]
}
const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  // console.log('photos curated', photos);

  return (
    <Gallery>
      {photos.map(photo => {
        return (
          <li key={photo.id}>
            <a href={photo.photographer_url} target="_blank" rel="noopener noreferrer">
              <img src={photo.src.portrait} alt={`Photo from ${photo.photographer}`} />

              <div className="overlay">
                <h2>{photo.photographer.toUpperCase()}</h2>
              </div>
            </a>
          </li>
        )
      })}
    </Gallery>
  )
}

export default PhotoGallery
