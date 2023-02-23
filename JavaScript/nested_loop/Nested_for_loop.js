//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles) 
}

for (var i = 1; i <=10; i++){
    if (i == 1){
        console.log('Gold medal');
    } else if (i == 2){
        console.log('Silver medal');
    } else if (i == 3){
        console.log('Bronze medal');
    } else {
        console.log(i);
    }
}

for (var i = 1; i <=10; i++){
    switch(i){
        case 1:
            console.log('Gold medal');
            break;
        case 2:
            console.log('Silver medal');
            break;
        case 3:
            console.log('Bronze medal');
            break;
        default:
            console.log(i);

    }
}
