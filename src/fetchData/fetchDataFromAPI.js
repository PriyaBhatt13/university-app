import { getUniversities,getUniversitiesSuccess,getUniversitiesFailure } from '../slices/universitiesSlice'
import {getUniversity,getUniversityFailure,getUniversitySuccess} from '../slices/universitySlice'

// A mock function to mimic making an async request for data
export function fetchUniversities() {
  return dispatch => {
    dispatch(getUniversities())

    fetch('http://universities.hipolabs.com/search?country=india')
    .then(response => response.json())
    .then(data =>{ console.log('data',data);
      dispatch(getUniversitiesSuccess(data))})
    .catch((error) => 
      dispatch(getUniversitiesFailure())
    )
    }
}

export function fetchUniversityDetails(name){
  console.log(name);
  return dispatch => {
    dispatch(getUniversity(name))

    fetch(`http://universities.hipolabs.com/search?country=india&name=${name}`)
    .then(response => response.json())
    .then(data =>{ console.log('data',data);
      dispatch(getUniversitySuccess(data))})
    .catch((error) => 
      dispatch(getUniversityFailure())
    )
    }
}

