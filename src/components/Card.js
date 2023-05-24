import { useState } from "react";


function Card({id, image,info,price,name, removeTour,setTour})  {
    const[readmore,setReadmore] = useState(false);
    
    const description = readmore ? info :`${info.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }


    return (
        
        <div className="card">

            <img src={image} className="image" alt="pic"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>
                </div>
            </div>
            <div className="btn">
                <button className="btn-red" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
                <button className="btn-red" onClick={() => setTour(id)}>
                    Yes Interested
                </button>
            </div>
            
        </div>
        
    );
}

export default Card;