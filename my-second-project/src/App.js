import React, { useState } from 'react';
import './App.css';

function App() {
  // Manage state with React hooks
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "S. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);
  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Function to add a new book entry
  const addBook = (e) => {
    e.preventDefault();
    if (newTitle.trim() && newAuthor.trim()) {
      const newEntry = {
        id: Date.now(),
        title: newTitle,
        author: newAuthor
      };
      setBooks([...books, newEntry]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Function to enable book removal
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Implement search functionality
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>
      
      <div className="card form-section">
        <input 
          type="text" 
          placeholder="Search books..." 
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <form onSubmit={addBook} className="input-group">
          <input 
            placeholder="Book Title" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            required 
          />
          <input 
            placeholder="Author" 
            value={newAuthor} 
            onChange={(e) => setNewAuthor(e.target.value)} 
            required 
          />
          <button type="submit" className="add-btn">Add Book</button>
        </form>
      </div>

      <div className="book-list">
        {filteredBooks.map(book => (
          <div key={book.id} className="card book-item">
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </div>
            <button className="remove-btn" onClick={() => removeBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;