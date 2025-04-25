async function apifetch() {
    try {
        const api= await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(api.json());
        api.json().then((value)=>{
            
        })

    } catch (error) {
        console.error('Error')
    }
}

apifetch();


// const btn=document.querySelector('.submit-btn');

// btn.addEventListener('click',()=>{
//     apifetch();
// })

