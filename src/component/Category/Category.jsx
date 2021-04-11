import React from 'react'
import {useEffect,useState} from "react"
import "./category.css"
import ProductList from "../Product/ProductList"
// import "bootstrap/dist/css/bootstrap.css"
import Change from "../Change/Change"


const Category = () => {
    let [categoryArray,setcategoryArray]=useState([])
    const [categoryId,setcategoryid]=useState(185) 
console.log(categoryId)
    useEffect(() => {
       let endpoint=`https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob`
       fetch(endpoint)
       .then((res)=>res.json())
       .then((data)=>{
           setcategoryArray(data.category_list)
        //    console.log(data.category_list)
       })
    },[])
    return (
        <div>
            <div className="horizontal-scroll">
            { categoryArray.map((arr,i) => {
                return (
                <div className="eachCategory text-center pt-3" key={i} onClick={()=>{setcategoryid(arr.category_id)}} style={{backgroundImage: `url(${arr.category_image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                   <h5 className="text-white">{arr.category_name}</h5>
               </div>)
            })}
            </div>
            <ProductList itemId={categoryId}/> 
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                   <ul>
                       {
                           categoryArray.map((arr,i)=>{
                               return(
                                   <li onClick={()=>{setcategoryid(arr.category_id)}}>{arr.category_name}</li>
                               )
                           })
                       }
                   </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Category
