import React from 'react'
import {useEffect,useState} from "react"
import "./category.css"

const Category = () => {
    let [categoryArray,setcategoryArray]=useState([])
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
                <div className="eachCategory text-center pt-3" style={{backgroundImage: `url(${arr.category_image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                   <h5 className="text-white">{arr.category_name}</h5>
               </div>)
               
            })}
            </div>
           
            <h2>What</h2>
        </div>
    )
}

export default Category
