// Examples of destructing

const [banana, apple] = ["yellow, red"];
// the variable banana will contain  the value 'yellow'
//the variable apple will contain the value 'red'

const tranformNum = (num) => [num * 2, num + 2];
const [numTimesTwo, numPlusTwo] = transformNum(10);
// the variable numTimesTwo will contain the value 20
// the varible numPlusTwo will contain the value 12

const [state, setState] = useState(initialState);
// array destructing is used to get the state and setState values
// fro the useState hook - - you will learn about this soon!
