//write function to retrieve a blob of json
// make an ajax request! Use the 'fetch' function. 
//test only in console


//ES15
// function fetchStarWars() {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//     .then(res => res.json())
//     .then(json => console.log(json));
// }

// fetchStarWars();

//ES17
async function fetchStarWars() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const json = await res.json();

    console.log(json)
}

fetchStarWars();

//ES17 need to refresh the browser first, because const is constanta and cannot be change
const fetchStarWars = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments")
        const json = await res.json();
    
        console.log(json)
    }
    
    fetchStarWars();