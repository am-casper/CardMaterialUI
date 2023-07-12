const axios = require("axios");
export default async function Api(id)
{let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:8000/item/"+id+"/",
  mode: "cors",
  headers: {},
  data: "",
};

let request = axios.request(config);
const data= request
  .then((response) => {
    if(id==0)
    {let array = Array.from({ length: response.data }, (_, i) => i + 1);
    return array;}
    else {
        // console.log(response.data)
        return response.data
    }
  })
  .catch((error) => {
    console.log(error);
  });
  return await data
}

