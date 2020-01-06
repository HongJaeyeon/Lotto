window.onload = function (){
    var arr = [];
    var lottoNum = document.getElementById("lotto-num");
    var btnCheck = document.getElementById("btn-check");


    btnCheck.onclick = () => {
        f();
    }

    function f() {
        if (arr.length == 7) return lottoNum.value = arr.slice(0, 6) + " + " + arr[6];
        arr.push(Math.floor(45 * Math.random() + 1))
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < i; j++) {
                if (arr[i] == arr[j])
                    i -= 1;
                return f();
            }
        }
    }
};
