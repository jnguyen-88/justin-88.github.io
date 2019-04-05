// Contact popup
const contactBtn = document.querySelector("#contact-pop");

contactBtn.addEventListener('click', function(){
    $('#cardModal').modal({
        show: true
    });
});