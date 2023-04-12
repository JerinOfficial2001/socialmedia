import React, { useEffect, useState } from "react";
import ContentCard from "@/components/ContentCard";
import Button from "@mui/material/Button";
import { supabase } from "@/SupabaseClient";
import PageNotFound from "./pageNotFound";
import RegisterForm from "@/components/RegisterForm";
import { useUser } from "@supabase/auth-helpers-react";
import Layout from "@/layouts/Layout";



function Homepage({ session }) {
const user =useUser()
  const [registerModal, setregisterModal] = useState(true);
  
  const [products, setproducts] = useState([]);
  const BASE_URL = "https://fakestoreapi.com";


//fetchprofile
const [userData, setuserData] = useState([]); 

const fetchProfile =async()=>{

  const {data,error}=await supabase.from('userdatas').select()
  if(data){
    let profile =data?.filter(i=>i.user_id === user?.id)
    
    setuserData(profile)
  }else{
    console.log(error);
  }

}

useEffect(() => {
  fetchProfile()
}, [])



  const getAllPtoducts = async () => {
    const result = await fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((res) => res);
    setproducts(result);
  };
  useEffect(() => {
    getAllPtoducts();
  }, []);
  //search filter method
  const [searchValue, setsearchValue] = useState("");
  const [filteredItems, setfilteredItems] = useState([]);
  const handleSearch = () => {
    const filteredItems = products.filter((product) => {
      product.category === searchValue;
    });

    setfilteredItems(filteredItems);
    //  console.log("SEa",filteredValues);
    //  console.log("Yup",products?.filter((i)=>{
    //   if (i?.title == input) {
    //     return i;
    //   }
    //  }));
    //  console.log("products",products);
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue]);

  //logout
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
  };
  return (
    <>
      {!session ? (
        <PageNotFound />
      ) : (
        <>
        {userData.map((item,id)=>{
          return(
        <Layout key={id} item={item} handleSearch={setsearchValue}>
          {registerModal && <RegisterForm open={registerModal} close={setregisterModal}/>}
          <Button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
         
          {searchValue !== ""
            ? filteredItems.map((category) => {
                return <ContentCard userData={userData} product={category} />;
              })
            : products.map((product, id) => {
                return <ContentCard key={id} product={product} />;
              })}
       
        </Layout>
)
})}</>

      )}
    </>
  );
}

export default Homepage;
