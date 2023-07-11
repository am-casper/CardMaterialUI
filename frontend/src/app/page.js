"use client";
import Head from "next/head";
import React from "react";

import CardTemplate from "../../components/Card/CardTemplate";
// const axios = require('axios');

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: '/item/0',
//   mode: 'cors',
//   headers: { 
    
//   },
//   data: ''
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });


export default function Home() {
  function cards(){
    return <CardTemplate />
  }
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/css/styles.css" />
      </Head>
      {cards()}
    </>
  );
}
