import React, { useEffect, useState } from 'react'
import Layout from './layouts/Layout'
import ContentCard from '@/components/ContentCard'
import Button from '@mui/material/Button'
import { supabase } from '@/SupabaseClient'
import PageNotFound from './pageNotFound'

function Homepage({session}) {
const [products, setproducts] = useState([])
  const BASE_URL ='https://fakestoreapi.com'

  const getAllPtoducts =async()=>{
    const result =await fetch(`${BASE_URL}/products`).then((res)=>res.json()).then((res)=>res)
    setproducts(result)
   
  }
  useEffect(() => {
    getAllPtoducts()
   
    
  }, [])
  //search filter method
  const [searchValue, setsearchValue] = useState("")
const [filteredItems, setfilteredItems] = useState([])
const handleSearch =()=>{
  const filteredItems = products.filter((product)=>{product.category === searchValue})
 
 setfilteredItems(filteredItems);
//  console.log("SEa",filteredValues);
//  console.log("Yup",products?.filter((i)=>{
//   if (i?.title == input) {
//     return i;
//   }
//  }));
//  console.log("products",products);
}

useEffect(() => {
  handleSearch() 
}, [searchValue])


//logout
  const logout =async()=>{
    const {error}= await supabase.auth.signOut()
  }
  return (
    <>
    {!session? (<PageNotFound/>):(<Layout handleSearch={setsearchValue} >
      <Button onClick={()=>{logout()}}>Logout</Button>
      {searchValue !==''? filteredItems.map((category)=>{
        return <ContentCard  product={category}/>
      }):products.map((product,id)=>{
       
        return (<ContentCard key={id} product={product}/>)})}
       
    </Layout>)}
    
    </>
  )
}

export default Homepage;