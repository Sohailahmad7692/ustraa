import react, { useEffect, useState } from "react"
import "./productlst.css"

const ProductList = () => {
    const [categoryId,setcategoryid]=useState(185)
    const [productArray,setproductArray]=useState([])
    useEffect(() => {
        let endpoint=`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${categoryId}`
        console.log(categoryId)
        fetch(endpoint)
        .then((res)=>res.json())
        .then((data)=>{
            setproductArray(data.products)
            console.log(data.products)
         //    console.log(data.category_list)
        })
     },[])
    return (
        <>
         <div className="productlist ">
             {
                 productArray.map((arr,i)=>{
                     return(
                     <div className="Item d-flex flex-row border border-dark">
                         <img className="itemImage" src={arr.image_urls.x120} alt=""/>
                         <div className="d-flex flex-column">
                            <div className="productName">
                                <h5>{arr.name}</h5>
                            </div>
                            <p className="productQuantity">{arr.weight}{arr.weight_unit}</p>
                            <h3 className="productPrice">{arr.price}</h3>
                            <button>ADD TO CART</button>
                         </div>
                         <div className="rating">
                            <p>4.2</p>
                         </div>
                     </div>
                     )
                 })
             }
             </div>   
        </>
    )
}

export default ProductList
