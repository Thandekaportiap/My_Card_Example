import { useState } from 'react'
import MainDiv from './components/mainDiv'
import Statevar from './components/statevar';


import './App.css'

function App() {
 
  // localStorage.setItem("myCat", "Tom");
  localStorage.setItem("number", 21);
  localStorage.setItem("boolean", true);
 let myFavoratePlaylist =  { artist:"kygo", song:"cut your teeth", artist:"Alan Walker", song:"Lily"};
localStorage.setItem("myPlaylist", JSON.stringify(myFavoratePlaylist) )
let myArray = [2,5,87,434,4,88,90,70]
localStorage.setItem("array" , JSON.stringify(myArray))

let house = {
  image:"src/assets/house.jpg",
  type:"DETACHED HOUSE",
  age: "5Y OLD",
  price:"R750,000",
  address:"742 Evergreen Tarrace",
  bathrooms: 2,
  bedrooms: 3,
  realtorName: "Tiffany Heffner",
  realtorPhone: "(555) 555-4321"
}

let housesForSale = [
  {
    image:"https://images.pexels.com/photos/24734507/pexels-photo-24734507/free-photo-of-red-house-in-the-nature.jpeg?auto=compress&cs=tinysrgb&w=600",
    type:"DETACHED HOUSE 1",
    age: "7Y OLD",
    price:"R1050,000",
    address:"43 LakeView",
    bathrooms: 4,
    bedrooms: 5,
    realtorName: "John Richard",
    realtorPhone: "031 5598 2525"
  },
  {
    image:"https://images.pexels.com/photos/24730250/pexels-photo-24730250/free-photo-of-red-house-in-the-nature.jpeg?auto=compress&cs=tinysrgb&w=600",
    type:"COUNTRY HOUSE ",
    age: "5Y OLD",
    price:"R1 000 000",
    address:"22 Cherry Drive",
    bathrooms: 3,
    bedrooms: 5,
    realtorName: "Amanda Jonson",
    realtorPhone: "033 5849 2358"
  },
  {
    image:"https://images.pexels.com/photos/24800152/pexels-photo-24800152/free-photo-of-detached-house-with-a-lawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type:"COUNTRY  HOUSE ",
    age: "17Y OLD",
    price:"R2 000 000",
    address:"234 Ouk avenue",
    bathrooms: 3,
    bedrooms: 3,
    realtorName: "Kevin DeSouza",
    realtorPhone: "011 897 8458"
  },
  {
    image:"https://images.pexels.com/photos/24800152/pexels-photo-24800152/free-photo-of-detached-house-with-a-lawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type:"COUNTRY  HOUSE ",
    age: "17Y OLD",
    price:"R2 000 000",
    address:"234 Ouk avenue",
    bathrooms: 3,
    bedrooms: 3,
    realtorName: "Kevin DeSouza",
    realtorPhone: "011 897 8458"
  },
  
  
]



// localStorage.setItem("houseLists" , JSON.stringify(housesForSale))
// let localData = localStorage.getItem("houseList")
// localStorage.removeItem("l");

const handleAdd = () => {
  let localData = localStorage.getItem("houseLists");
 let newList = localData ? JSON.parse(localData) : {};
 newList.push(house)
  localStorage.setItem("houseLists", JSON.stringify(newList))
}
handleAdd()


const handleRead = () => {
  
}

const handleUpdate = () => {
  
}

const handleDelete = () => {
  
}


  return (
    <>
   
   <MainDiv accommodation={house}/>
   <MainDiv accommodation={housesForSale[0]}/>
   <MainDiv accommodation={housesForSale[1]}/>
   <MainDiv accommodation={housesForSale[2]}/>
     
    {/* <Statevar /> */}
    </>
  )
}

export default App
