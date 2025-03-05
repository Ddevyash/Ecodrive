
let toggle = document.querySelector('.hamburger');
    toggle.addEventListener('click', function(){
        document.querySelector('.nav-list').style.display='block';
        document.querySelector('.close').style.display='block';
        this.style.display='none';
})

let cancel = document.querySelector('.close');
    cancel.addEventListener('click', function(){
        document.querySelector('.nav-list').style.display='none';
        document.querySelector('.hamburger').style.display='block';
        this.style.display='none';
})