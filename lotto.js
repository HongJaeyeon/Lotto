window.onload = function (){
    var arr = [];
    var lottoNum = document.getElementById("lotto-num");
    var btnCheck = document.getElementById("btn-check");

    btnCheck.onclick = () => {
        for (var i = 0; i < 7; i++) {
            arr[i] = Math.floor(45 * Math.random()+1); //Math.floor 소수점 버림으로
            for (var j = 0; j < i; j++) {
                if (arr[i] == arr[j])
                    i -= 1;
            }
        }
        lottoNum.value = arr.slice(0, 6) + " + " + arr[6];
    }
};