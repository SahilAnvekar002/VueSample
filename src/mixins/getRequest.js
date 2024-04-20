import axios from "axios"

let getRequest=async()=>{
    let promise = axios.get('https://jsonplaceholder.typicode.com/posts')
    let data = await promise.then((response) => response.data)

    console.log(data)
    return data
}

export default getRequest