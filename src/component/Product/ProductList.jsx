import react, { useEffect, useState } from "react"
import "./productlst.css"
import "bootstrap/dist/css/bootstrap.css"

const ProductList = (props) => {
    const [productArray,setproductArray]=useState([])
    const [value,setValue]=useState(0)
    useEffect(() => {
        let endpoint=`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${props.itemId}`
        fetch(endpoint)
        .then((res)=>res.json())
        .then((data)=>{
            setproductArray(data.products)
        })
     },[props.itemId])
    return (
        <>
         <div className="productlist d-flex flex-wrap ml-5 mt-4">
             {
                 productArray.map((arr,i)=>{
                     if(!value){
                         if(i<3){
                        return(
                            <div className="Item d-flex flex-row justify-content-between m-1">
                                <img className="itemImage mt-4" src={arr.image_urls.x120} alt=""/>
                                <div className="content d-flex flex-column mt-4">
                                   <div className="productName">
                                       <h5 >{arr.name}</h5>
                                   </div>
                                   <p className="productQuantity">({arr.weight} {arr.weight_unit})</p>
                                   <div>
                                   <span className="productPrice fs-3">&#8377;{arr.final_price} </span>
                                    <span className="productPrice text-decoration-line-through fs-5"> &#8377;{arr.price}</span>
                                       </div>
                                   {
                                      arr.is_in_stock ? <button className="btn btn-success">ADD TO CART</button> :
                                      <button className="btn btn-secondary" disabled>Out Of Stock</button> 
                                   }
                                </div>
                                <div className="rating mt-4 mr-2">
                                {arr.rating?<p>{arr.rating} &#9733;</p>:null}
                                </div>
                            </div>  
                        )
                         }
                     } else{
                        return(
                            <div className="Item d-flex flex-row justify-content-between m-1">
                                <img className="itemImage mt-4" src={arr.image_urls.x120} alt=""/>
                                <div className="content d-flex flex-column mt-4">
                                   <div className="productName">
                                       <h5>{arr.name}</h5>
                                   </div>
                                   <p className="productQuantity">({arr.weight} {arr.weight_unit})</p>
                                   <div>
                                   <span className="productPrice fs-3">&#8377;{arr.final_price} </span>
                                    <span className="productPrice text-decoration-line-through fs-5"> &#8377;{arr.price}</span>
                                       </div>
                                   
                                   {
                                      arr.is_in_stock ? <button className="btn btn-success">ADD TO CART</button> :
                                      <button className="btn btn-secondary" disabled>Out Of Stock</button> 
                                   }
                                </div>
                                <div className="rating mt-4 mr-2">
                                   {arr.rating?<p>{arr.rating} &#9733;</p>:null}
                                </div>
                            </div>  
                        )
                     }
                    
                })
                 }
                 </div> 
                 <br/>
                 <div className="viewbutton">
                    {  !value ? <button className="btn btn-light" onClick={()=>{setValue(1)} }>[+] View More</button>: <button className="btn btn-light" onClick={()=>{setValue(0)}}>[-] View less</button>}
                 </div>
            </>  
             
        
    )
}

export default ProductList
