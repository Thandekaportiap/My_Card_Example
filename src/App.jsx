import { useState } from 'react'
import MainDiv from './components/mainDiv'
import Statevar from './components/statevar';


import './App.css'

function App() {
 
  // localStorage.setItem("myCat", "Tom");
  localStorage.setItem("number", 21);
  localStorage.setItem("boolean", true);
  localStorage
 
 let myFavoratePlaylist =  { artist:"kygo", song:"cut your teeth", artist:"Alan Walker", song:"Lily"};
localStorage.setItem("myPlaylist", JSON.stringify(myFavoratePlaylist) )
let myArray = [2,5,87,434,4,88,90,70]
localStorage.setItem("array" , JSON.stringify(myArray))

let house = {
  image:"src\assets\house.jpg",
  type:"detached house",
  age: 5,
  price:"$700,000",
  address:"742 Evergreen Tarrace",
  bathrooms: 2,
  bedrooms: 3,
  realtorName: "Tiffany Heffner",
  realtorPhone: "(555) 555-4321"
}

  return (
    <>
    <MainDiv house/>
    {/* <Statevar /> */}
    </>
  )
}

export default App
