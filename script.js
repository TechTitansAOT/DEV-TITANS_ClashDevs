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


const btn=document.querySelector('.submit-btn');
const output=document.querySelector('.output')

let html='';
btn.addEventListener('click',()=>{    
    html+=`<p>Hamse to na ho payega :)</p>`;
    output.innerHTML=html;
})

