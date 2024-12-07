import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

const handleInputChange = (e) => {
    setInput(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
};

return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;