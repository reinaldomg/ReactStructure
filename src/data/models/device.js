import React from 'react';
import axios from 'axios';
import { Card } from 'antd';

var devs = () => {
   return axios.get('http://localhost:8000/devices')
  .then(response => {
      return response.data
  })
}

async function deps(value){
    const response = await axios.get('http://localhost:8000/devices')

    const data = await response.data

    return(
        <Card
        title="ABC">
            
        </Card>
    )
}

export default deps;


//console.log(devs.data)