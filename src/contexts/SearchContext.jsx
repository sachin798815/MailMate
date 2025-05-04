import { createContext, useContext, useState } from 'react';

// Context for the search query
const SearchContext = createContext();

// Custom hook to use the search context
export const useSearch = () => useContext(SearchContext);

// Context Provider Component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
