import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, bookPDFURL, imageURL, category, bookDescription} = useLoaderData();

    const bookCategories = [
    "Fiction", "Non-Fiction","Romance", "Mystery", "Programming", "Sci-Fiction", 
    "Fanatasy", "Horror", "Bibliography", "Autobiography", "History", 
    "Self-help", "Memoir", "Buisness", "Children Books", "Travel", 
    "Religiion", "Art and Design"
  ]; 

  const [selectedCategory, setSelectedCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = selectedCategory; // Use selectedCategory state
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updatebookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    };


    // console.log(bookObj);
    // update book data
    fetch(`http://localhost:5000/book/${id}` , {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatebookObj)
    }).then(res => res.json())
    .then(data => {
      alert("Book Updated Successfully!!");
    })
    .catch(error => {
      console.error('Error in updating book:', error);
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1120px] flex-col flex-wrap gap-4">
        {/* First Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" defaultValue={bookTitle} placeholder="Book Name" required />
          </div>

          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' defaultValue={authorName} type="text" placeholder="Author Name" required />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" defaultValue={imageURL} placeholder="Book Image URL" required />
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='inputState' value='Book Category' />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </Select>
          </div>
        </div>

        {/* bookDescriptions */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name='bookDescription' defaultValue={bookDescription} placeholder="Write Description" className='w-full' required rows={6} />
        </div>

        {/* Book Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name='bookPDFURL' type="text" defaultValue={bookPDFURL} placeholder="Book PDF URL" required />
        </div>
        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
    </div>
  );
}

export default EditBooks
