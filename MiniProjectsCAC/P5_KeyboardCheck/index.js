let insert = document.querySelector('.insert');
window.addEventListener('keydown',function(e){
    insert.innerHTML=
    `<table >
        <thead>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </thead>
        <tbody>
            <tr>
                <td>${e.key === " " ? "space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </tbody>
    </table>`
})