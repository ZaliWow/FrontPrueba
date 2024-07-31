// Suggested code may be subject to a license. Learn more: ~LicenseLog:2876631253.
import { useContext } from "react";
import { FiltersContext } from "../context/FilterBooksContext";

export function useFilterBooks(params) {
    const {filtersBody, setFiltersBody} = useContext(FiltersContext)
    const FilterBooks = (books) => {
        return books.filter(book => {
            const categoryAll = filtersBody.category === "all" || filtersBody.category === "";
            const AuthorAll = filtersBody.author=== "all" || filtersBody.author === "";
            
            if (categoryAll && AuthorAll) {
              return true; // Mostrar todos los streamers
            } else if (categoryAll && !AuthorAll) {
              return book.author.name.toLowerCase().includes(filtersBody.author);
            } else if (!categoryAll && AuthorAll) {
              return book.categories.some(cat => cat.type === filtersBody.category)
            } else {
              return book.categories.some(cat => cat.type === filtersBody.category) && book.author.name.toLowerCase().includes(filtersBody.author);
            }
          });
        
        

    }


    return {
        filtersBody,
        setFiltersBody,
        FilterBooks
    }

}