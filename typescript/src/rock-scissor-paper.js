var buttons = document.querySelectorAll(".button");
buttons.forEach(function (button, index) {
    button.addEventListener('click', function () { return rockGame(index); });
});
var totalCount = 0;
var win = 0;
var lose = 0;
var middle = 0;
function rockGame(index) {
    // 번호뽑기
    totalCount++;
    var computer = parseInt(Math.random() * 3 + '');
    var computerResult = document.querySelector(".computer");
    // let computerResult = document.querySelector(".computer");
    switch (computer) {
        case 0:
            computerResult == null ? '' : computerResult.src = '/images/rock.png';
            // computerResult == null ? '' : computerResult.setAttribute('src','/images/rock.png');
            if (index == 2) {
                win++;
            }
            else if (index == 1) {
                lose++;
            }
            break;
        case 1:
            computerResult == null ? '' : computerResult.src = '/images/scissors.png';
            if (index == 0) {
                win++;
            }
            else if (index == 2) {
                lose++;
            }
            break;
        default:
            computerResult == null ? '' : computerResult.src = '/images/paper.png';
            if (index == 1) {
                win++;
            }
            else if (index == 0) {
                lose++;
            }
            break;
    }
    if (computer == index) {
        middle++;
    }
    result();
}
function result() {
    var resultView = document.querySelector('.result');
    resultView.innerText = "".concat(totalCount, " \uC804 ").concat(win, " \uC2B9 ").concat(middle, " \uBB34 ").concat(lose, " \uD328");
}
