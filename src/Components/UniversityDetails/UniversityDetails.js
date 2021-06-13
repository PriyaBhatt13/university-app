import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchUniversityDetails} from '../../fetchData/fetchDataFromAPI';
import './UniversityDetails.scss';

export function UniversityDetails({match}) {
    const dispatch = useDispatch()		
    //console.log('here',useSelector(universitiesSelector))
    const { university, loading, hasErrors } = useSelector(state => state.university)
    // dispatch our thunk when component first mounts
    useEffect(() => {
        const { id } = match.params
        console.log(match.params);
      dispatch((fetchUniversityDetails(id)))
    }, [dispatch,match])
    
    
    const renderUniversities = () => {
      if (loading) return <p>Loading universities...</p>
      if (hasErrors) return <p>Cannot display universities...</p>
      if(university.length >0) {
      return  (
          <div className='grid-flex'>
              <div className="col col-image">

              </div>
              <div className="col col-text">
            <div className="Aligner-item">
                <h2>{university[0].name}</h2>
                <p>{university[0].country}</p>
                <a>{university[0].web_pages[0]}</a>
                
            </div>
        </div>
          </div>
        
      )
      }
    }
  
    return <section>
              <div className='content'>
                {renderUniversities()}
              </div>
    </section>
  }
  