console.log("beginging of testing functions")

const testingFunctions = () => {

    const pushToList = () =>{
        alert("I've added one more thing")
        console.log("I,m fine ")
    }

    const sayHello = (hi) => {
        let myGreeting =  hi
        return "hello mimo"
    }

    let greeting = sayHello();
    console.log(greeting)
    

    // pushToList()

    return (
        <>
        </>
    )
    
}

export default testingFunctions

console.log("ending of testing functions")