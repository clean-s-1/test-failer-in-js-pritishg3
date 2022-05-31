const {expect} = require('chai')
const colorPairMap = new Map();
const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function updateColorPairMap() {    
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            colorPairMap.set((i * 5 + j), `| ${majorColors[i]} | ${minorColors[j]}`);
        }
    }    
}

function print_color_map() {
    updateColorPairMap();
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(i * 5 + j,colorPairMap.get(i * 5 + j));
        }
    }
    return majorColors.length * minorColors.length;
}

result = print_color_map();

expect(result).equals(25);
expect(colorPairMap.size).equals(25);
expect(colorPairMap.get(1)).equals('| White | Blue');
expect(colorPairMap.get(0)).equals(undefined);
console.log('All is well (maybe!)');
