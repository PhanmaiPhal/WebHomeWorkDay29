const BaseUrl="http://127.0.0.1:5500/data/";


export async function getData(anpoint){
    try{
        const res =await fetch(BaseUrl+anpoint+".json");
        const respon= await res.json();  
        console.log(respon)
        return respon;
    }catch(error){
        console.log("Your error");
    }
}

