import React from 'react';
import Card from './Card';

function SearchList({filteredPersons}) {
    const filtered = filteredPersons.map(person => <Card key={person.id} person={person} />);

    return(
        <div className="d-flex mx-0 px-0 row row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-center">
            {filtered}
        </div>
    )
}

export default SearchList;