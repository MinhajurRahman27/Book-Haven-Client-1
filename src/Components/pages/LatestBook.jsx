import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard from '../Cards/BookCard';

const LatestBook = () => {
  const [books, setBooks] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/latest-books')
    .then(data =>{
      setBooks(data.data)
    })
  },[])
  return (
    <div className='mb-25 w-11/12 mx-auto'>
      <h1 className='text-center text-4xl'>Latest Books_</h1>
      <div className='grid grid-cols-3 p-13 mt-7'>
        {
          books.map(book => <BookCard key={book._id} book={book}></BookCard>)
        }
      </div>
    </div>
  );
};

export default LatestBook;