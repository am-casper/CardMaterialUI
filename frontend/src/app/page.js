// "use client";
import Head from "next/head";
import React from "react";

import CardTemplate from "../../components/Card/CardTemplate";
import Api from "../../utils/api";

export default async function Home() {
  const idArray = await Api(0)
  console.log("entries=",idArray);
  async function cards() {
    return idArray.map((id)=>{
      return (<CardTemplate index={id} key={id}/>)
    });
      
    

  }
  
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/css/styles.css" />
      </Head>
      {await cards()}
    </>
  );
}
