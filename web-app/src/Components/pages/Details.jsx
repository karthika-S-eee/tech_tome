// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ApiData } from '../../ApiData'
import '../css/Details.css';
import { useParams } from 'react-router-dom';

export default function Details() {

    const { productId } = useParams(); // Get the productId from the URL
    const book = ApiData.find(item => item.id === parseInt(productId));

  return (<div>
        <div className="book-container">
        <h1>{book.title}</h1>
        <img src={book.image} alt={book.title} className="book-image" />
        <p><strong>Author:</strong> {book.authors}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>Language:</strong> {book.language}</p>
        <p><strong>Pages:</strong> {book.pages}</p>
        <p><strong>Year:</strong> {book.year}</p>
        <p><strong>Price:</strong> {book.price}</p>
        <p><strong>Description:</strong> {book.desc}</p>
        <a href={book.url} target="_blank" rel="noopener noreferrer">More Details</a>
        <br />
        {/* <a href={book.pdf["Free eBook"]} target="_blank" rel="noopener noreferrer">Download Free eBook</a> */}
      </div>
    
    </div>

  )
}
