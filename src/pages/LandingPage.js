import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchUniversities} from '../fetchData/fetchDataFromAPI';
import {UniversityList} from '../Components/UniversityList/UniversityList';
import Pagination from '../Components/Pagination/Pagination';

export function LandingPage() {
    
    const dispatch = useDispatch()		
    console.log(useSelector(state => state.universities));
    const { universities, loading, hasErrors } = useSelector(state => state.universities)
    useEffect(() => {
      dispatch((fetchUniversities()))
    }, [dispatch])

    
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = universities.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);    
    
   
   return <section className="collection  section">
                    <div className='univ__container'>
                        <UniversityList universities={currentPosts} loading={loading}  />
                    </div>
                     
                    <Pagination postsPerPage={postsPerPage} totalPosts={universities.length} paginate={paginate} />
                </section>
}



