import React from 'react'
import './ArtistsList.css'
import { Link } from 'react-router-dom';

export default function ArtistsList(props) {
  const artists = props.artists
  return (
    <div className='myArtists'>
      <h3>REPRESENTED ARTISTS OR WORKS AVAILABLE BY</h3>
      <div className='artistsList'>
        {artists.map(artist => {
          return (
            // <Link to={{pathname:`/artists/${artist._id}`}}>
            <a className='btnWhite'>
              {artist.name}
            </a>
            // </Link>
          )
        })}
      </div>
    <h3>ADD AN ARTIST</h3>
      <div className='addArtist'>
        <h4>GALLERY BIOGRAPHY</h4>
        <article>
          <p> We are happy to assist you in adding a new artist to your program, name of the gallery ! </p>
          <p>Please, note that all required fields will need to be completed on your end. Once validated by ORA, we will publish the artist page officially onto ORA’s artist glossary and to your gallery page, in ORA’s gallery network. You’ll be able to manage your artist’s data, private sales and advisory requests as well as inventory directly from your interface.</p>
          <p> You can complete your artist’s profile all at once or start now and save your changes for later validation ! </p>
          <p>If you have any questions, please contact our support team. </p> 
          <a className='btnBlack'> ADD AN ARTIST + </a>
          </article>
          
      </div>
    </div>
  )
}
