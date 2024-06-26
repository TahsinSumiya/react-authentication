import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({news}) => {
    const {title,image_url,details,_id}=news
  return (
   <>
   <div className="card justify-center bg-base-100  shadow-xl my-5">
  <figure>
    <img
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{details.length >200? <><p>{details.slice(0,200)}<Link to={`/news/${_id}`} className='mx-5 text-green-600'>read more</Link></p></>:<><p>{details}</p></>
        
         }</p>

   
 
  </div>
</div>
   </>
  )
}

export default NewsCard