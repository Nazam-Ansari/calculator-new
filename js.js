var element;
element = document;

function calculateSum(inp1,inp2,inp3,output) {
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);
    var value3 = parseFloat(document.getElementById(inp3).value);

    var result = value1 + value2 + value3;

    document.getElementById(output).value = result;
}

function fuelReduction(inp5,rel){
    var value5 = parseFloat(document.getElementById(inp5).value);
    var result1 = (value5 / 1000) * 0.5;
    var finalResult = Math.round(result1);
    document.getElementById(rel).value = finalResult + "%";
    fuelCost1('result1','g1','g2','output0','calculation1');
    fuelCost1('result2','g1','g2','output1','calculation2');
    fuelCost1('result3','g1','g2','output2','calculation3');
    fuelCost1('result4','g1','g2','output3','calculation4');

    trueRate1('l04','calculation1','result21');
    trueRate1('l14','calculation2','result22');
    trueRate1('l24','calculation3','result23');
    trueRate1('l34','calculation4','result24');
    
}

function fuelCost1(val1,val2,val3,val4,out){
    var value1 =  parseFloat(document.getElementById(val1).value);
    var value2 =  parseFloat(document.getElementById(val2).value);
    var value3 =  parseFloat(document.getElementById(val3).value);
    var value4 =  parseFloat(document.getElementById(val4).value);
    var result =  value4/(value2*(1-(value1/100)))*value3;
    var finalResult = parseFloat(result.toFixed(2));
    document.getElementById(out).value =  finalResult;
    
}

function ratePerMiles(inp1,inp2,rel){
    var value1 = parseFloat(document.getElementById(inp1).value);
    var value2 = parseFloat(document.getElementById(inp2).value);
    var result1 = value2 / value1;
    var finalResult = parseFloat(result1.toFixed(2));
    document.getElementById(rel).value =  finalResult;
}

function trueRate1(inp11,inp12,rel22){
    var value1 = parseFloat(document.getElementById(inp11).value);
    var value2 = parseFloat(document.getElementById(inp12).value);
    var result1 = value1 - value2;
    var finalResult1 = parseFloat(result1.toFixed(2));
    document.getElementById(rel22).value =  finalResult1;
   
}

function trueDayRate(inp11,inp12,rel22){
    var value1 = parseFloat(document.getElementById(inp11).value);
    var value2 = parseFloat(document.getElementById(inp12).value);
    var result1 = value2 / value1;
    var finalResult1 = parseFloat(result1.toFixed(2));
    document.getElementById(rel22).value = finalResult1;


    


    RPM('output0','result21','result41');
    RPM('output1','result22','result42');
    RPM('output2','result23','result43');
    RPM('output3','result24','result44');

    TRPM('result41','result42','result43','result44','final1');
    TRPM('result31','result32','result33','result34','final2');
    TRPM2('result21','result22','result23','result24','final3');
    
}

function RPM(inp11,inp12,rel22){
    var value1 = parseFloat(document.getElementById(inp11).value);
    var value2 = parseFloat(document.getElementById(inp12).value);
    var result1 = value2 / value1;
    var finalResult1 = parseFloat(result1.toFixed(2));
    document.getElementById(rel22).value = finalResult1;
}
function TRPM(inp101,inp102,inp103,inp104,rel1001){
    var value1 = parseFloat(document.getElementById(inp101).value);
    var value2 = parseFloat(document.getElementById(inp102).value);
    var value3 = parseFloat(document.getElementById(inp103).value);
    var value4 = parseFloat(document.getElementById(inp104).value);
    var max1 = Math.max(value1,value2);
    var max2 = Math.max(value3,value4);
    var avg = (max1 + max2) / 2;
    var finalResult1 = parseFloat(avg.toFixed(2));
    document.getElementById(rel1001).value = finalResult1;
}
function TRPM2(inp101,inp102,inp103,inp104,rel1001){
    var value1 = parseFloat(document.getElementById(inp101).value);
    var value2 = parseFloat(document.getElementById(inp102).value);
    var value3 = parseFloat(document.getElementById(inp103).value);
    var value4 = parseFloat(document.getElementById(inp104).value);
    var max1 = Math.max(value1,value2);
    var max2 = Math.max(value3,value4);
    var add = max1 + max2;
    var finalResult1 = parseFloat(add.toFixed(2));
    document.getElementById(rel1001).value = finalResult1;
}


