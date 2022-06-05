const {expect} = require('chai');

function size(cms) {
    if (cms <= 38) {
        return 'S';
    } else if (cms > 38 && cms < 42) {
        return 'M';
    } else if(cms >= 42) {
        return 'L';
    }
}

expect(size(37)).equals('S');
expect(size(40)).equals('M');
expect(size(43)).equals('L');
expect(size(38)).to.equals('S');
expect(size(42)).equals('L');
console.log('All is well (maybe!)');
