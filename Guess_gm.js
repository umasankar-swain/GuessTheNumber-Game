let secretnum = Math.random() * 10;
let num = Math.trunc(secretnum);
let chancesleft = 5;
let score = 100;
console.log(num);
document.querySelector(".check").addEventListener('click', function () {
    let usernum = document.querySelector(".userinput").value;
    document.querySelector(".userinput").value = ("");

    if (usernum == '') {
        document.querySelector(".empty").textContent = "Enter a number First";
    }
    else {
        document.querySelector(".empty").textContent = "";
        if (usernum == num) {
            document.querySelector(".status").textContent = "you won";
            document.querySelector(".chances").textContent = "";
            document.querySelector("body").style.backgroundColor = 'green';
            score = score + 10;
            document.querySelector(".score").textContent = `Your score is:${score}`;
            //to hide check
            document.querySelector(".check").classList.add('hidden');
        }
        else if (usernum > num) {
            document.querySelector(".status").textContent = "Your number is High.!!!";

            chancesleft--;
            document.querySelector(".chances").textContent = `you have ${chancesleft} Chances left..`;
            if (chancesleft == 0) {
                document.querySelector(".status").textContent = "You Lost The Game..";
            }

            score = score - 10;
            document.querySelector(".score").textContent = `Your score is:${score}`;
        }
        else if (usernum < num) {
            document.querySelector(".status").textContent = "Your number is Low.!!!";

            chancesleft--;
            document.querySelector(".chances").textContent = `you have ${chancesleft} Chances left..`;
            if (chancesleft == 0) {
                document.querySelector(".status").textContent = "You Lost The Game..";
            }

            score = score - 10;
            document.querySelector(".score").textContent = `Your score is:${score}`;

        }
        if(chancesleft==0){
            document.querySelector(".check").classList.add('hidden');
        }
    }
});
// -----------------------------------------------RESET----------------------------------------------------
document.querySelector(".reset").addEventListener('click',function(){
    document.querySelector(".check").classList.remove('hidden');
    document.querySelector(".status").textContent = "Start the Guessing!!!";
    document.querySelector(".chances").textContent = "You have 5 chances Left";
    document.querySelector(".score").textContent = "your score is:100";
    window.location.reload();
});