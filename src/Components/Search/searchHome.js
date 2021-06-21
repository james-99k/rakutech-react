import React from 'react'
import './searchHome.scss'

function search() {
    return (
        <div class="page_search">

            <input type="text" placeholder="Search query..." name="search" class="page_search_box" />
            <button type="submit" class="search_button">SEARCH</button>

        </div>
    )
}

export default search