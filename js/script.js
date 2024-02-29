'use stricts'

import{cardproduct} from "../components/cardProduct.js"
import{carduser}from"../components/cardUser.js"
import { getData } from "../store/fetchData.js"


const product = document.querySelector("#Product")
const renderProduct = await getData("product")
renderProduct.map((e)=>{
    product.innerHTML += cardproduct(e)
})
const user = document.querySelector("#User")
const renderUser = await getData("user")
renderUser.map((e)=>{
    user.innerHTML += carduser(e)
})