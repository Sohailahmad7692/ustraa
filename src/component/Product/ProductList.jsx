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
            console.log(data.products)
        })
     },[props.itemId])
    return (
        <>
        {/* <div className="d-flex flex-column border border-dark"> */}
         <div className="productlist ">
             {
                 productArray.map((arr,i)=>{
                     if(!value){
                         if(i<3){
                        return(
                            <div className="Item d-flex flex-row border border-dark justify-content-between align-items-center m-1">
                                <img className="itemImage" src={arr.image_urls.x120} alt=""/>
                                <div className="content d-flex flex-column ">
                                   <div className="productName">
                                       <h5>{arr.name}</h5>
                                   </div>
                                   <p className="productQuantity">{arr.weight}{arr.weight_unit}</p>
                                   <h3 className="productPrice">&#8377;{arr.price}</h3>
                                   <button className="btn btn-primary">ADD TO CART</button>
                                </div>
                                <div className="rating">
                                   <p>4.2 &#9734;</p>
                                </div>
                            </div>  
                        )
                         }
                     } else{
                        return(
                            <div className="Item d-flex flex-row border border-dark justify-content-between align-items-center m-1">
                                <img className="itemImage" src={arr.image_urls.x120} alt=""/>
                                <div className="content d-flex flex-column ">
                                   <div className="productName">
                                       <h5>{arr.name}</h5>
                                   </div>
                                   <p className="productQuantity">{arr.weight}{arr.weight_unit}</p>
                                   <h3 className="productPrice">&#8377;{arr.price}</h3>
                                   <button className="btn btn-primary">ADD TO CART</button>
                                </div>
                                <div className="rating">
                                   <p>4.2 &#9734;</p>
                                </div>
                            </div>  
                        )
                     }
                    
                })
                 }
                 <div className="viewbutton">
                    {  !value ? <button onClick={()=>{if(!value){setValue(1)} else{setValue(0)}}}>[+] view More</button>: <button onClick={()=>{if(!value){setValue(1)} else{setValue(0)}}}>[-] view less</button>}
                 </div>
                 </div> 
                 
            {/* </div> */}
            </>  
             
        
    )
}

export default ProductList
