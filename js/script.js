const opcionesBtn = document.getElementById('opciones-li')
const menu = document.getElementById('opciones-menu')


opcionesBtn.addEventListener('click', function(){
    searchForm = `<form class="d-flex" role="search">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchBar">
  </form>`

        

    if (menu.style.display === 'none') {
        menu.style.display = 'inline'
    } else {
       menu.style.display = 'none'
    }
})