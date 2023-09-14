const orientacao = document.querySelector('#orienta')
const ul = document.querySelector('ul')
orientacao.addEventListener('click', function(){
    orientCont = orientacao.value
    if(orientCont =='Vertical'){
    orientacao.value = "Horizontal";
    ul.style.flexDirection = 'row'

    }else if(orientCont =='Horizontal'){
    orientacao.value = "Vertical";
    ul.style.flexDirection = 'column'
}
}
)