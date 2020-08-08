var a = "Hello JS"
document.write("<h1>hey!</h1> " + a);
// if statement
var b = 80;
var c = 40;
var d = 100
if(b < c){
    alert("c is grater");
}

//logical opreter

if(b > c && b < d){
    document.write("<br />b is greter and smaller then d");
}

if(b > c || b > d){
    document.write('<br />hello');
}

if(!(b > d)){
    document.write('oyeeeeee<br />');
}

for(var e = 1; e <= 5; e++){
    for (var f = 1; f <= e; f++){
        document.write('*');
   }
   document.write('<br />');
}


for(var e = 5; e >= 0; e--){
    for (var f = 1; f <= e; f++){
        document.write('*');
   }
   document.write('<br />');
}

for(var e = 5; e >= 0; e--){
    for (var f = 1; f <= e; f++){
        document.write(e);
   }
   document.write('<br />');
}


for(var e = 5; e >= 0; e--){
    for (var f = 1; f <= e; f++){
        document.write(f);
   }
   document.write('<br />');
}

for(var e = 1; e <= 5; e++){
    for (var f = 1; f <= e; f++){
        document.write(f);
   }
   document.write('<br />');
}

var k = 1;
var l = 20;
    for(var f =  2; f <= 20; f=f+2){
        document.write(f + ") ");
        for(var g = f; g<= l; g=g+k){
            document.write(g + " "+" ");
        }
        document.write("<br />");
        var k = k+1;
        var l = l+20;

    }
    /*for (var f = e; f <= 5; f++){
       for (var g = f; g >= 0; g--){
            document.write(g);
        }
       document.write('<br />');
   }*/
   document.write('<br />');



b < c ? document.write("true"):
b < d ? document.write("yes you did it "):
document.write("lul");