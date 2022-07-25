import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({details}) {
    const [searchField, setSearchField] = useState("")

    const filteredPersons = details.filter (
        person => {
            return(
                person.name.toLowerCase().includes(searchField.toLowerCase()) || person.email.toLowerCase().includes(searchField.toLowerCase())
            );
        }
    )

    const hadleChange = e => {
        setSearchField(e.target.value)
    }

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredPersons={filteredPersons} />
            </Scroll>
        )
    }


    return (
        <section className="bg-black min-vh-100 p-5">
        <div className="d-flex justify-content-center">
          <h2 className="color-white">Search your course</h2>
        </div>
        <div className='d-flex justify-content-center mt-1 mb-5'>
        <input 
            className="w-100 w-lg-25 bg-dark outline-0 border-0 ps-3 py-1 br-2 color-white outline-0"
            type = "search" 
            placeholder = "Search People" 
            onChange = {hadleChange}
          />
        </div>


        {searchList()}
      </section>
    )

}

export default Search;