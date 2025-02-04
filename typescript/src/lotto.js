var _a;
(_a = document.querySelector("#btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", game);
function game() {
    //lotto 번호를 위한 배열 선언
    var lotto = [];
    while (lotto.length < 6) {
        // 1 ~ 45 사이 난수
        var num = parseInt(Math.random() * 45 + 1 + '');
        // 같은 수 배제하기
        if (lotto.indexOf(num) == -1)
            lotto.push(num);
    }
    lotto.sort(function (a, b) { return a - b; });
    //숫자에 따라 ball 색이 다름
    var view = '';
    var i = 0;
    var intervalId = setInterval(function () {
        if (lotto.length == i) {
            clearInterval(intervalId);
            return;
        }
        view += "<div class = 'ball ball".concat(parseInt(lotto[i] / 10 + ''), "'>").concat(lotto[i++], "</div>");
        var viewDiv = document.querySelector('#view');
        viewDiv == null ? '' : viewDiv.innerHTML = view;
    }, 1000);
}
