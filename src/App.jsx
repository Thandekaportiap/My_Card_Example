import { useState } from 'react'
import MainDiv from './components/mainDiv'
import Statevar from './components/statevar';
import TestingFun from './components/testingFunctions';

import './App.css'

function App() {
 
  
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

let bookTable = [
  
  {
  isbm:	979,
  title: "Baby Driver",
   no_of_pages: 1240,
   edition: "1st edition",
   publisher: "Micca Books",
   coverDesigner: "Solo Sakoa",
   price: "R700",
   editer: "Onezwa Dlamin",
   format: "PDF",
   relesedate: "17-Aug-10",
  },
  {
    
    isbm:	985,
     title: "Beekeeper",
     no_of_pages: 720,
     edition: "1st edition",
     publisher: "Marvel",
     coverDesigner: "Jason Dhlomo",
     price: "R500",
     editer: "Lawson Tadai",
     format: "PDF",
     relesedate: "13-Jun-19"
    },
    {
      isbm:	799,
       title: "The Room",
       no_of_pages: 512,
       edition: "1st edition",
       publisher: "AW Books",
       coverDesigner: "Simlindile Dlamin",
       price: "R430",
       editer: "Ntai Kgomotso",
       format: "PDF",
       relesedate: "30-May-20",
      }
]

localStorage.setItem("booktable" , JSON.stringify(bookTable))
let bookList = []

const handleAdd = (arr) => {
  let localData = localStorage.getItem("houseLists");
 let newList = localData ? JSON.parse(localData) : {};
 newList.push(arr)
  localStorage.setItem("houseLists", JSON.stringify(newList))
}
//  handleAdd(house)


const handleRead = () => {
  let localData = localStorage.getItem("booktable");
  let newList = localData ? JSON.parse(localData) : [];
return (
  <ul>
    {newList.map(item => (
      <li key={item}>{item.price}</li>
    ))}
  </ul>
);
}

const handleUpdate = () => {
  
}

const handleDelete = () => {
  
}



  return (
    <>
   
   <MainDiv accommodation={house}/>
   {/* <MainDiv accommodation={housesForSale[0]}/>
   <MainDiv accommodation={housesForSale[1]}/>
   <MainDiv accommodation={housesForSale[2]}/>  */}
   {handleRead()}
   <TestingFun/>
    
    </>
  )
}

export default App
