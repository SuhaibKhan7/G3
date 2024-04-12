import React from 'react'

export default function({id,title,des,img}) {

  return (
      <div className="card w-25" key={id}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{des}</p>
              <a href="#" className="btn btn-success">Go somewhere</a>
          </div>
      </div>
 
  )
}
