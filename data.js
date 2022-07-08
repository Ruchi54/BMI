function add(){
    var age = document.getElementById("age").value;
    var female = document.getElementById("female").value;
    var male = document.getElementById("male").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if(age === "" || female === "" || male === "" || height === "" || weight === ""){
        alert("All fields are required!");
        return;
    }

    calculayebmi();
}

function calculayebmi(){
    var age = document.getElementById("age").value;
    var female = document.getElementById("female").value;
    var male = document.getElementById("male").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    let bmi = ([weight  / height / height] * 10000).toFixed(1);

    if(bmi < 18.5){
        document.getElementById("display_bmi").innerHTML = `<span style='color: blue; text-align:center;'>You're</span> <span style='color:darkblue; text-align:center'>Underweight</span> <span style='color:blue;'>and Your BMI is ${bmi} </span>`;
    }
    else if(bmi > 18.5 && bmi < 24.9){
        document.getElementById("display_bmi").innerHTML = `<span style='color: blue;'>You're</span> <span style='color:green;'>Healthy</span> <span style='color:blue;'>and Your BMI is ${bmi} </span>`;
    }
    else if(bmi > 25 && bmi < 29.9 ){
        document.getElementById("display_bmi").innerHTML = `<span style='color: blue;'>You're</span> <span style='color:yellow;'>Overweight</span> <span style='color:blue;'>and Your BMI is ${bmi} </span>`;
    }
    else if(bmi > 30 && bmi < 34.9){
        document.getElementById("display_bmi").innerHTML = `<span style='color: blue;'>You're</span> <span style='color:orange;'>Obese</span> <span style='color:blue;'>and Your BMI is ${bmi} </span>`;
    }
    else{
        document.getElementById("display_bmi").innerHTML = `<span style='color: blue; text-align:center'>You're</span> <span style='color:red; text-align:center'>Extremely obese</span> <span style='color:blue; text-align:center'>and Your BMI is ${bmi} </span>`;
    }

    if(document.getElementById("female").checked){
        document.getElementById("display_gender").innerHTML = `Gender: ${female}`;
    }else{
        document.getElementById("display_gender").innerHTML = `Gender: ${male}`;
    }
    
    document.getElementById("display_age").innerHTML = `Age: ${age}`;
    
    document.getElementById("display_height").innerHTML = `Height: ${height} cm`;
    
    document.getElementById("display_weight").innerHTML = `Weight: ${weight} kg`;
    
}

function reset(){
    document.getElementsByClassName("form").reset();
}

