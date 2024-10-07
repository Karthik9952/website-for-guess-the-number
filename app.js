var inp = document.getElementById("input")
var ge2 = document.getElementById("g2")
var ge3 = document.getElementById("one1")
var score1 = document.getElementById("score")
var score2,score3,score=10

function submitin()
{
    var ren = Math.floor(Math.random()*10)+1
    var guessnumber=inp.value
    ge2.textContent=" Random number:"+ren
    if(ren == guessnumber)
    {
        score = score + 1
        ge3.textContent="correct"
        score1.textContent="score:"+score
    }
    else if(score<=0)
    {
        score1.textContent="failed"
    }
    else
    {
        score=score - 1
        ge3.textContent="wrong"
        score1.textContent="score:"+score
    }
        
    
}
var feed1 = document.getElementById("feed")
function change()
{
    feed1.textContent="thank you for your feed back"
}







