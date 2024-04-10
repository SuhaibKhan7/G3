import React from 'react'

export default function CardData() {
    const cardlist = [
        { id: 1, title: "Card title 1", des: " orem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cum.", img: "https://images.unsplash.com/photo-1712543322587-728f5624d723?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

        { id: 2, title: "Card title 1", des: " orem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cum.", img: "https://images.unsplash.com/photo-1712543322587-728f5624d723?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

        { id: 3, title: "Card title 1", des: " orem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cum.", img: "https://images.unsplash.com/photo-1712543322587-728f5624d723?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

        { id: 4, title: "Card title 1", des: " orem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cum.", img: "https://images.unsplash.com/photo-1712543322587-728f5624d723?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ]




    return (
        <div>
           {cardlist.map( (card)=>{
              return <div className="card w-25" key={card.id}>
                   <img src={card.img} className="card-img-top" alt="..."/>
                       <div className="card-body">
                           <h5 className="card-title">{card.title}</h5>
                           <p className="card-text">{card.des}</p>
                           <a href="#" className="btn btn-success">Go somewhere</a>
                       </div>
               </div>
           }
           )}
        </div>
    )
}
