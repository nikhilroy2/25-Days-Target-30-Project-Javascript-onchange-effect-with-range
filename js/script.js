
function rangeChange(t) {
    setInterval(()=> {
        let rangeValue = document.querySelector('.rangeValue');
        rangeValue.innerHTML = t.value + '%';
        if (t.value >= 0 || t <=50){
            document.body.style.background = '#002';
        }
        if (t.value > 50) {
            document.body.style.background = '#322a33';

        }
    },10)
}
