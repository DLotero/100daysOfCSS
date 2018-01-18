document.getElementsByClassName('frame__block-center')[0].addEventListener('click', (event) => {
    
    if(event.target.classList.contains('frame__block-center-menu') ||
       event.target.parentElement.classList.contains('frame__block-center-menu')){
        let lines = document.getElementsByClassName('frame__line');
        Array.from(lines).forEach(element => {
            if(element.className.indexOf('no-animation') !== -1) element.classList.remove("frame__line_no-animation");
            else  element.className = element.className.replace('-reverse', '');
        });

        document.getElementsByClassName('frame__block-center')[0].className += ' frame__block-center-icon'
        document.getElementsByClassName('frame__block-center')[0].classList.remove('frame__block-center-menu');
    }else{

        document.getElementsByClassName("frame__block-center")[0].className += ' frame__block-center-menu'
        document.getElementsByClassName("frame__block-center")[0].classList.remove('frame__block-center-icon');
        let lines = document.getElementsByClassName('frame__line');
        Array.from(lines).forEach(element => {
            element.className += '-reverse'
        });
    }
})
