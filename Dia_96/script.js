const button  = document.querySelector('button');
const input = document.querySelector('input');
const url = 'http://localhist:8081'

button.addEventListener('click', () => {
    fetch(url, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({url: input.value}),
    });
});