(async () => {
    const response = await fetch('http://localhost:3000');
    const body = await response.json();

    if(!body.length) return loading()

    let table = document.createElement('table');
    table.className = 'table'
    let tbody = document.createElement('tbody');
    let td = `<tr>
    <th scope="col">Name</th>
   </tr>`; 

    for (let i = 0; i < body.length; i++) {
       // td.innerHTML = body[i].name
       td += `<tr> 
       <td>${body[i].name} </td>       
   </tr>`;
    }
    
    tbody.innerHTML = td

    table.appendChild(tbody);

    document.getElementById('contents').appendChild(table)
})();


function loading() {
    const spinner = `
    <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>`
    document.getElementById('spinner').style.display = 'flex'
    document.getElementById('spinner').style.justifyContent = 'center'
    document.getElementById('spinner').style.marginTop = '100px'
    document.getElementById('spinner').innerHTML = spinner
}
