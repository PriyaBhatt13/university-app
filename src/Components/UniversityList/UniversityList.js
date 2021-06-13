import React from 'react';

import { Link } from 'react-router-dom'
import ProductIMG from '../../assets/univ.png'
import './UniversityList.scss';

export const UniversityList =({ universities, loading }) => {
  if(loading) {
    return <div className="container"> 
        <div className="loading">
            <box-icon name='loader' animation='spin'></box-icon>
            <h2>Loading...</h2>
        </div>
    </div>
}

  return (
    
    universities && universities.map(university =>
      
        <div key={university.id} className="univ__product">
            {/* Picture Box */}
            <div className="univ__box">
                <div className="univ__new">{university.alpha_two_code}</div>
                <img src={ProductIMG} alt="" className="univ__img"></img>
            </div>
            {/* University Data */}
            <div className="univ__data">
                <div className="univ__name">
                    <h3>{university.name} <br></br> <span className="univ__country">{university.country}</span></h3>
                </div>

                <div className="univ__website">
                    <span>Website: <br></br>{university.web_pages}</span>
                </div>

                <div className="univ__detail" >
                <Link to={`/university/${university.name}`} className="button">
                    View University
                  </Link>
                </div>
            </div>
        </div>
    
  )

  
            


  )
}

