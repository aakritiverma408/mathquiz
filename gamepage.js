player1name=localStorage.getItem("player1_name");
player2name=localStorage.getItem("player2_name");
player1score=0;
player2score=0;
questionturn="player1";
answerturn="player2";
word="";
answer=0;
document.getElementById("player1_name").innerHTML=player1name+":";
document.getElementById("player2_name").innerHTML=player2name+":";
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML="question turn"+player1name;
document.getElementById("player_answer").innerHTML="answer turn"+player2name;
function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    answer=number1*number2;
    
questionword="<h4 id='word_displayed'>Q"+number1+"x"+number2+"</h4>";
inputbox="<br>answer:<input type='text' id='check' class='form-control' placeholder='answer'>";
checkbutton="<br><br><button class='btn btn-info'onclick='check()'>check</button>";
row=questionword+inputbox+checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value=" ";

}
function check (){
    getanswer=document.getElementById("check").value;
    
    if(answer==getanswer){
        if(answerturn=="player1"){player1score=player1score+1;
        document.getElementById("player1_score").innerHTML=player1score;
    
    }
    else{
        player2score=player2score+1;
        document.getElementById("player2_score").innerHTML=player2score;

    }


    }
    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("player_question").innerHTML="questionturn-"+player2name;
    }
    else{
        questionturn="player1"
        document.getElementById("player_question").innerHTML="questionturn-"+player1name
    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("player_answer").innerHTML="answerturn-"+player2name;
    }
    else{
        answerturn="player1"
        document.getElementById("player_answer").innerHTML="answerturn-"+player1name
    }
document.getElementById("output").innerHTML=""
    
}





