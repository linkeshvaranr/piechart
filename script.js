//Clicking the submit button triggers this func, which simply gets the value and pass it into Piechart function

function callPie() {
    const valName = document.getElementById('valname').value;
    const pievalues = document.getElementById('values').value;
    
    piechart(valName,pievalues)
    valName.rese
}



function piechart(valname,pievalues){
    

// input values are split and stored as an Array
let pieArr = pievalues.split(" ")
let valArr = valname.split(" ")
let pieArrFloat =[]

// Pie values are converted into Float array
for (var i = 0; i < pieArr.length; i++){
        pieArrFloat.push(parseFloat(pieArr[i]));
}
  console.log(pieArrFloat)


let total = pieArrFloat.reduce((a,b) => a+b,0);
console.log(total)
let pieval = []
//   this is where the values will be converted into %
let divider = (pieArr , total) =>{
     for(let i= 0; i<pieArr.length;i++){
        pieval[i] = (pieArr[i]/total)*100;
    }
}
divider(pieArr , total)
 
let s = []
// rounding off
 function roundOff(){
   for(let elem in pieval){
     
     s[elem] = pieval[elem].toFixed(1)
     }
 }
 roundOff()

 let percArr =[]
 let percArrFunc =(arr)=>{
    for (var i = 0; i < arr.length; i++){
        percArr.push(parseFloat(arr[i]));
}


 }
 percArrFunc(s)
let a = parseFloat(s[0]), b = parseFloat(s[1]), c = parseFloat(s[2])

let Pie = document.getElementById("pie").style 
let Labelval = document.getElementById("label1")
let triColor = ["red", "blue", "black"]
Pie.width = "600px";
Pie.height="600px";
Pie.borderRadius="50%"
Pie.margin="20px"


Pie.background = `conic-gradient(${triColor[0]} 0% ${percArr[0]}%,${triColor[1]}  ${percArr[0]}% ${a+b}%, ${triColor[2]}  ${percArr[0]+percArr[1]}% 100%) ` //template  literalS

// Label
let labelFunc = (valArr) => {
    for(let i =0; i<triColor.length; i++){
        console.log(valArr[i])
        Labelval.innerHTML += `<span style="color:${triColor[i]}; margin: 5px; font-size: 50px;">${valArr[i]+"-"+percArr[i] + " % "}</span>`

    }
}
labelFunc(valArr)

}

