import React, { use } from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
  const book = useLoaderData()
  console.log(book.data)
  return (
    <div>
      book details 
    </div>
  );
};

export default BookDetails;