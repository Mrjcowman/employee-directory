import React from 'react'

function SearchForm(props) {
    return (
        <form>
            <h2>I'm a search form!</h2>
            <input type="text" autocomplete="off" placeholder="Search by Name..." name="query" onChange={props.onChange}></input>
        </form>
    )
}

export default SearchForm;
