import { useLocation } from "react-router"
import './ItemDetail.css'
const ItemDetail = () => {
    const location=useLocation()
const {item}=location.state
  return (

<>
<div className="mainC1">
<div className="mainC">

<div className="img1">
<img src={item.image}/>
</div>
<div className="details">
  <h1>{item.title}</h1>
<h2>{item.subTitle}</h2>
<h2>${item.price}</h2>
<button>Buy Now</button>
  </div>
  
</div>
</div>

</>

  )
}

export default ItemDetail