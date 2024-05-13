import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  },[])

  // delete a book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is deleted Successfully")
      // setAllBooks(data);
    })
  }
  return (
    <div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold text-pink-700'>Manage Your Books</h2> 

    {/* table for book data */}
    <Table className='lg:w-full'>
        <Table.Head>
          <Table.HeadCell>S.No</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>

        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className=" font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell> */}
            <Table.Cell className='font-medium text-gray-900 dark:text-white'>{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$10.00</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-pink-600 hover:underline dark:text-pink-400 mr-5">
                Edit
              </Link>
              <button onClick={() => handleDelete(book._id)} className='bg-pink-500 px-4 py-1 font-semibold text-white rounded-sm hover:bg-gray-500 '>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }  
      </Table>
    </div>
  )
}

export default ManageBooks
