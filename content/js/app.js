// let userId = prompt('Enter The PostID That you want: ')
let divElem = document.querySelector("#div")



window.addEventListener('load', () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => {
            showUser(data)
            console.log(data);
        })
})




function showUser(data) {
    data.forEach(item => {
        divElem.insertAdjacentHTML('beforeend', `
        <h1>${item.id}</h1>
        <p>${item.title}</p>
        <p>${item.body}</p>
        `)
    });
}