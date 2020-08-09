function check(){
    var score=0
    var q1_opt1=document.getElementById('q1-a1')
    var q1_opt2=document.getElementById('q1-a2')
    var right_answer_1=document.getElementById('q1-a3')
    var q1_opt4=document.getElementById('q1-a4')
    if(right_answer_1.checked===true){
        score++
        // alert('Q1 Answer is right')
    }
    else{
        // alert('Q1 Answer is wrong')
    }
    var q2_opt1=document.getElementById('q2-a1')
    var q2_opt2=document.getElementById('q2-a2')
    var right_answer_2=document.getElementById('q2-a3')
    var q1_opt4=document.getElementById('q2-a4')
    if(right_answer_2.checked===true){
        score++
        // alert('Q2 Answer is right')
    }
    else{
        // alert('Q2 Answer is wrong')
    }
    var q3_opt1=document.getElementById('q3-a1')
    var q3_opt2=document.getElementById('q3-a2')
    var q3_opt3=document.getElementById('q3-a3')
    var right_answer_3=document.getElementById('q3-a4')
    if(right_answer_3.checked===true){
        score++
        // alert('Q3 Answer is right')
    }
    else{
        // alert('Q3 Answer is wrong')
    }

    alert('Final score is: '+score)
    document.write('<h1>Your score is '+score+'</h1>')
    
}

function checks(){
    var score =0
    var q1_opt1=document.getElementById('q1-a1-s')
    var q1_opt2=document.getElementById('q1-a3-s')
    var right_answer_1=document.getElementById('q1-a2-s')
    var q1_opt4=document.getElementById('q1-a4-s')
    if(right_answer_1.checked===true){
        score++
        // alert('Q1 Answer is right')
    }
    else{
        // alert('Q1 Answer is wrong')
    }
    var q2_opt1=document.getElementById('q2-a1-s')
    var q2_opt2=document.getElementById('q2-a2-s')
    var right_answer_2=document.getElementById('q2-a3-s')
    var q2_opt4=document.getElementById('q2-a4-s')
    if(right_answer_2.checked===true){
        score++
        // alert('Q1 Answer is right')
    }
    else{
        // alert('Q1 Answer is wrong')
    }
    var q3_opt1=document.getElementById('q3-a1-s')
    var q3_opt2=document.getElementById('q3-a2-s')
    var right_answer_3=document.getElementById('q3-a3-s')
    var q3_opt4=document.getElementById('q3-a4-s')
    if(right_answer_3.checked===true){
        score++
        // alert('Q1 Answer is right')
    }
    else{
        // alert('Q1 Answer is wrong')
    }
    alert('Final score is: '+score)
    document.write('<h1>Your score is '+score+'</h1>')
}