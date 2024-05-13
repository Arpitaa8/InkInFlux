import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

const UploadBooks = () => {
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

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = selectedCategory; // Use selectedCategory state
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    };
    console.log(bookObj);

    // Send data to db
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(bookObj) // Specify body outside headers object
    })
    .then(res => res.json())
    .then(data => {
      alert("Book Uploaded Successfully!!");
      form.reset();
    })
    .catch(error => {
      console.error('Error uploading book:', error);
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1120px] flex-col flex-wrap gap-4">
        {/* First Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
          </div>

          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required />
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
          <Textarea id="bookDescription" name='bookDescription' placeholder="Write Description" className='w-full' required rows={6} />
        </div>

        {/* Book Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF URL" required />
        </div>
        <Button type="submit" className='mt-5'>Upload Book</Button>
      </form>
    </div>
  );
};

export default UploadBooks;
