console.log('load!');

document.getElementsByClassName('frame__frame-center')[0].addEventListener('click', (event) => {

    document.getElementsByClassName('frame__line_up')[0].className += ' frame__line_moved_down';
    document.getElementsByClassName('frame__line_down')[0].className += ' frame__line_moved_up';
    document.getElementsByClassName('frame__line_center')[0].className += ' frame__line_no-opacity';
});