const {expect} = require('chai')
const colorPairMap = new Map();
const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

const constructColorMapping = () => {
    for (let i = 0; i <= majorColors.length; i++) {
        for (let j = 0; j <= minorColors.length; j++) {
            if(isIndexInRange(i, j)) {
               colorPairMap.set((i * 5 + j)+1, {majorColor: majorColors[i], minorColor: minorColors[j]});
            }
        }
    }
}

const isIndexInRange  = (i, j) => {
   return (i * 5 + j)+1 <= majorColors.length * minorColors.length
}

const formatColorPair = (colorPair, index) => {
    return index + '|' + colorPair.majorColor + '|' + colorPair.minorColor;
}

printColorPairMap = (callColorFomatter) => {
   for(let [index, colorPair] of colorPairMap.entries()) {
       console.log(callColorFomatter(colorPair, index));
   }
}

constructColorMapping();
printColorPairMap(formatColorPair);

expect(colorPairMap.size).equals(majorColors.length * minorColors.length);
expect(colorPairMap.get(1)).eql({majorColor: "White", minorColor: "Blue"});
expect(formatColorPair(colorPairMap.get(1), 1)).equals('1|White|Blue');
expect(formatColorPair(colorPairMap.get(6), 6)).equals('6|Red|Blue');
console.log("All is well (maybe!)");