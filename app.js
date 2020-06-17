
const plusElements = document.getElementsByClassName("qun-plus");



for (var i = 0; i < plusElements.length; i++) {
    plusElements[i].addEventListener('click', function (params) {

        // get amount
        const currentAmount = params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML;

        // get Qun
        const currentQun = params.target.parentElement.parentElement.children[1].value;
        // make Qun Float
        const currentQunInt = parseFloat(currentQun);
        const addedQun = currentQunInt + 1;
        // update Qun
        params.target.parentElement.parentElement.children[1].value = addedQun

        const singleProduct = currentAmount / currentQun;

        // make amount Float
        const currentAmountInt = parseFloat(currentAmount);
        const addedAmount = currentAmountInt + singleProduct;
        // update amount
        params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML = addedAmount


    });

}


const minusElements = document.getElementsByClassName("qun-minus");



for (var i = 0; i < minusElements.length; i++) {
    minusElements[i].addEventListener('click', function (params) {
        // get amount
        const currentAmount = params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML;
        // make amount Float
        // get Qun
        const currentQun = params.target.parentElement.parentElement.children[1].value;
        // make Qun Float
        const currentQunInt = parseFloat(currentQun);
        if (currentQunInt > 1) {
            const addedQun = currentQunInt - 1;
            // update Qun
            params.target.parentElement.parentElement.children[1].value = addedQun

            const singleProduct = currentAmount / currentQun;
            const currentAmountInt = parseFloat(currentAmount);
            const addedAmount = currentAmountInt - singleProduct;
            // update amount
            params.target.parentElement.parentElement.nextElementSibling.children[0].innerHTML = addedAmount
        }

    });
}









// .nextSibling.input.form - control.text - center.innerHTML