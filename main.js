const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const num_result = document.getElementById('num_result');
const btn = document.getElementById('btn');
const number = document.querySelector('.number');

btn.addEventListener('click', function () {
    getNums = getRandomNumber();

    number.textContent = nums[getNums];
});


function getRandomNumber() {
    return Math.floor(Math.random() * nums.length);
}

