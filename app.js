const _ = require('lodash');

const arrays = [1, [2, [3]]];
const take = _.flattenDeep(arrays);

console.log(take);
