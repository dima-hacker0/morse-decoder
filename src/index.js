const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    perPoint = 0
    let arrCifr = [];
    for(let i = 0; i < expr.length; i += 10) {
        let str = expr.substr(i, 10);
        arrCifr[perPoint] = str;
        perPoint++;
    }
    let arrPoint = [];
    let shet = 0;
    for(let i = 0; i < expr.length / 10; i++){
        arrPoint[i] = '';
        if(arrCifr[i] == "**********"){
            arrPoint[i] = " ";
            continue;
        }
        for(let j = 0; j < 5; j++) {
            let temp = arrCifr[i].substr(shet, 2);
            if(temp == '10') {
                let temp1 = arrPoint[i] + '.';
                arrPoint[i] = temp1;
                
            }
            if(temp == '11') {
                let temp2 = arrPoint[i] + '-';
                arrPoint[i] = temp2;
            }
            shet += 2;
        }
        shet = 0;
    }
    arrBukv = [];
    for(let i = 0; i < expr.length / 10; i++) {
        if(arrPoint[i] == ' ') {
            arrBukv[i] = ' ';
            continue;
        }
        arrBukv[i] = MORSE_TABLE[arrPoint[i]];
    }
    return arrBukv.join('');
}

module.exports = {
    decode
}