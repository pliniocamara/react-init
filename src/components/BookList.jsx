import React from 'react';
import axios from 'axios';
// import { useState } from 'react';
import { useEffect } from 'react';

export default function BookList() {

    // const [books, setBooks] = useState({});

    axios.defaults.baseURL = 'https://my-json-server.typicode.com/dmitrijt9/book-api-mock';

    const getBooks = () => {
        axios.get('/books')
            .then(response => {
                console.log(response);
                // setBooks(response.data);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getBooks();
    }, []);

  return (
    <div>
        BookList
    </div>
  )
}