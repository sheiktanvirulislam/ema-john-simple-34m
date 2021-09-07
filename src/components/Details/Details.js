import React  from 'react';
import { useParams } from 'react-router';
import fakeData from './fakeData';
const Details = () => {
    const {Key} = useParams();
     
    // function isKey(data) {
    //     return data.key === Key;
    // }  
   
    console.log(Key)   
    fakeData.find(dataProduct => console.log(dataProduct))
    return (
        <div>
          <h1>{Key}</h1>
        </div>
    );
};

export default Details;