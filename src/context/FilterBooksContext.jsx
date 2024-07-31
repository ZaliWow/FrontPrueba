import { createContext } from "react";
import { useState } from "react";

export const FiltersContext = createContext()
export function FiltersProvider({ children }) {

    const [filtersBody, setFiltersBody] = useState({
        category: "all",
        author: "all"
    })

    return (
        <FiltersContext.Provider
            value={{
                filtersBody,
                setFiltersBody
            }}>
            {children}
        </FiltersContext.Provider>
    )

}