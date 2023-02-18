
import axios from 'axios';

export const getPlacesData=async(type,sw,ne)=>{
try{
    const {data :{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        
      },
      headers: {
        'X-RapidAPI-Key': '41ea18d17cmshfa3a6711e119dc7p17b9adjsn50c2cfd182cc',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    
    return data;

}

catch(error){
  console.log(error)
}


}