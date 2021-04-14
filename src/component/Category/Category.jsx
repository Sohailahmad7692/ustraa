import React from 'react'
import {useEffect,useState} from "react"
import "./category.css"
import ProductList from "../Product/ProductList"
// import "bootstrap/dist/css/bootstrap.css"
// import Change from "../Change/Change"
// import ScrollMenu from 'react-horizontal-scrolling-menu';
// import HorizontalScroll from 'react-scroll-horizontal'


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
        <div className="d-flex flex-column align-items-center ">
            <div className="horizontal-scroll your-class">
            { categoryArray.map((arr,i) => {
                if(arr.category_id==categoryId){
                return (
                <div className="eachCategory text-center pt-3 border border-success" key={i} onClick={()=>{setcategoryid(arr.category_id)}} style={{backgroundImage: `url(${arr.category_image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',opacity:'0.6'}}>
                   <h5 className="text-white text-uppercase">{arr.category_name}</h5>
               </div>)
                } else{
                    return (
                        <div className="eachCategory text-center pt-3 " style={{}} key={i} onClick={()=>{setcategoryid(arr.category_id)}} style={{backgroundImage: `url(${arr.category_image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                           <h5 className="text-white text-uppercase">{arr.category_name}</h5>
                       </div>
                       )
                }
            })}
            <div className="eachCategory text-center pt-3"><h5 className="text-black">View All</h5></div>
            </div>
            <ProductList itemId={categoryId}/> 
            <div class="dropdown dropup change">
                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Change
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                   <ul className="list-group list-group-flush">
                       {
                           categoryArray.map((arr,i)=>{
                               if(arr.category_id==categoryId){
                               return(
                                   <li className="list-group-item list-group-item-action active" data-toggle="list" onClick={()=>{setcategoryid(arr.category_id)}}>{arr.category_name}</li>
                               )
                               } else{
                                return(
                                    <li className="list-group-item list-group-item-action" data-toggle="list" onClick={()=>{setcategoryid(arr.category_id)}}>{arr.category_name}</li>
                                )
                               }
                           })
                       }
                   </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Category
