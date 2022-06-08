import React,{ useState,useEffect }  from 'react'
import { useParams } from "react-router-dom"; 
import axios from 'axios';
function ViewProduct() {

    let params=useParams()


    const [productData,setProducts]=useState([])
    useEffect(() => {

      async function fetchData(){
     let product = await axios.get(`https://62283fa09fd6174ca81e7895.mockapi.io/product/${params.id}`)
    
   setProducts(product.data);
 
  
  }  fetchData();
    }, [])

  return (
    <><h1>Product details</h1>
    
    <ul class="list-group">
  <li class="list-group-item active">Name - {productData.name} </li>
  <li class="list-group-item">Price - {productData.price}</li>
  <li class="list-group-item">Category - {productData.category}</li>
  <li class="list-group-item">Offer - {productData.offer}</li>
  <li class="list-group-item">Model - {productData.model}</li>
 
</ul>
    
    
    
    
    </>
  )
}

export default ViewProduct






