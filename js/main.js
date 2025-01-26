window.addEventListener('load', () =>{
    const imgHeader = document.querySelector('.top-header img');
    const headerTop = document.querySelector('.top-header')
    const navTop = headerTop.querySelector('nav')
    const aHeader = headerTop.querySelectorAll('a')

    function isNavVisible(){
        return getComputedStyle(navTop).display !== "none"
    }

    function hideNav(){
        navTop.style.display = ""
        headerTop.style.height = ""
        headerTop.style.color = ""
        headerTop.style.backgroundColor = ""
        navTop.style.flexDirection = ""
    }

    function showNav(){
        headerTop.style.height = "200px"
        headerTop.style.backgroundColor = "white"
        headerTop.style.color = "black"
        navTop.style.display = "flex"
        navTop.style.flexDirection = "column"
        navTop.style.justifyContent = "space-between"

    }

    function myScroll(){
        if(isNavVisible){hideNav()}
        if(window.scrollY > 100){
            headerTop.style.backgroundColor = "white"
            headerTop.style.color = "black"
        }else{
            headerTop.style.color = ""
            headerTop.style.backgroundColor = ""
        }
    }

    myScroll()

    imgHeader.addEventListener('click', e =>{
        if(!isNavVisible()){
            showNav()
        }else{
            myScroll()
        }
    })

    aHeader.forEach(a => {a.addEventListener('click', () => {myScroll()})})

    window.addEventListener('scroll', myScroll)
    window.addEventListener('resize', myScroll)
})

