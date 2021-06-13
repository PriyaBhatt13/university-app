import React from 'react'
import './Pagination.scss'

const Pagination = ({ postsPerPage, totalPosts , paginate }) => {
    const pageNumbers = [];
    let renderPageNumber;

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    

    return (
        <nav>
            <div class="center">
                {pageNumbers.map(number => (
                    <div class="pagination" key={number}>
                        <a onClick={() => paginate(number)} href="#" className='page-link'>
                            {number}
                        </a>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Pagination