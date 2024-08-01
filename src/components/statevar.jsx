import { useState } from "react";

const stateVariable = () => {
const [list, setList] = useState([])
// list = [21, true, "name"]

const handleList = () =>{
setList([21, true, "name"])
}

    let count = 0;

    const setCount = (number) =>{
        count = number;
    }
    setCount();

    return(
        <>
        <div>
            <p>Hello State</p>
        </div>
        </>
    )
}

export default stateVariable