var expect = require("chai").expect;
var func = require("../exercises.js");

describe("JS fundamental Drills", function() {
  xit("#doubleArray is a function that takes in an array of numbers and returns a new array with each number doubled.", function() {
    var doubledArray = func.doubleArray([1, 2, 3]);
    expect(doubledArray).to.deep.equal([2, 4, 6]);
  });
  xit("#sumArrays is a function that takes in two arrays of numbers and returns the sum of the numbers of both arrays.", function() {
    var sum = func.sumArrays([1, 2, 3], [4, 5, 6]);
    expect(sum).to.deep.equal(21);
  });
  xit("#stringCount is a function that takes in a string and returns the amount of letters in the string.", function() {
    var count = func.stringCount("abc");
    expect(count).to.deep.equal(3);
  });
  xit("#arrayLength is a function that takes in an array and returns the length of the array. ", function() {
    expect(func.arrayLength([1, 2, 3])).to.deep.equal(3);
  });
  xit("#countAll is a function that takes in an array of numbers and returns the sum of all numbers in the array.", function() {
    expect(func.countAll([1, 2, 3])).to.deep.equal(6);
  });
  xit("#countStrings is a function that takes in an array of strings and returns an array containing each of the lenghts of the strings.", function() {
    expect(func.countStrings(["a", "ab", "abc"])).to.deep.equal([1, 2, 3]);
  });
  xit("#countAllStrings is a function that takes in an array of strings and returns the sum of the length of all characters.", function() {
    expect(func.countAllStrings(['a','ab','abc'])).to.deep.equal(6);
  });
  xit("#convertToArray is a function that takes in an object and returns an array of values in the object.", function() {
    expect(func.convertToArray({'a':1,'b':2})).to.deep.equal([1,2]);
  });
  xit("#objectSize is a function that takes in an object and returns the amount of key value pairs in the object.", function() {
    expect(func.objectSize({'a':'a','b':'b'})).to.deep.equal(2);
  });
  xit("#createZeroFilledArray is a function that takes in a number and returns an array with the length of that number filled with zeroes.", function() {
    expect(func.createZeroFilledArray(2)).to.deep.equal([0,0]);
  });
  xit("#poppedArray is a function that takes in a an array of numbers and returns a new array without the last element of the array.", function() {
    expect(func.poppedArray([1,2,3])).to.deep.equal([1,2]);
  });
  xit("#splitString is a function that takes in a string and returns an array with each characater as a value of the array.", function() {
    expect(func.splitString('abc')).to.deep.equal(['a','b','c']);
  });
  xit("#lengthOfLast is a function that takes in an array of strings and returns the length of the last string in the array.", function() {
    expect(func.lengthOfLast(['a','ab','abc'])).to.deep.equal(3);
  });
  xit("#sumBelowTen is a function that takes in an array of numbers and returns the sum of all numbers below 10.", function() {
    expect(func.sumBelowTen([1,2,11])).to.deep.equal(3);
  });
  xit("#moreThanTenLetters is a function that takes in an array of strings and returns the amount of elements that have greater than 10 letters. ", function() {
    expect(func.moreThanTenLetters(['abc','ab','lollerskatesrofl'])).to.deep.equal(1);
  });
  xit("#multiplyAll is a function that takes in an array of numbers and returns the product of all elements.", function() {
    expect(func.multiplyAll([1,2,3])).to.deep.equal(6);
  });
  xit("#sumAllPositive is a function that takes in an array of numbers and returns the sum of all non-negative numbers. ", function() {
    expect(func.sumAllPositive([-1,2,3])).to.deep.equal(5);
  });
  xit("#stringCountBelowThree is a function that takes in an array of strings and returns the amount of strings that have 3 characters or less. ", function() {
    expect(func.stringCountBelowThree(['a','asd','blargggg!'])).to.deep.equal(2);
  });
  xit("#countObjects is a function that takes in an array of objects and returns the amount of objects in the array. ", function() {
    expect(func.countObjects([{},{},{}])).to.deep.equal(3);
  });

  xit("#getObjectKeys is a function that takes in an object and returns an array of all the object keys. ", function() {
    expect(func.getObjectKeys({'a':1,'b':2,'c':3})).to.deep.equal(['a','b','c']);
  });
  xit("#getObjectValues is a function that takes in an object and returns an array of all the object values. ", function() {
    expect(func.getObjectValues({'a':1,'b':2})).to.deep.equal([1,2]);
  });
  xit("#makeObject is a function that takes in two arguments key & value and returns an object {key: value} ", function() {
    expect(func.makeObject('a',1)).to.deep.equal({'a':1});
  });
  xit("#makeObjectReverse is a function that takes in two arguments value & key, and returns an object {key: value} ", function() {
    expect(func.makeObjectReverse(1, 'a')).to.deep.equal({'a':1});
  });
  xit("#tupleToObject is a function that takes in a tuple and returns an object with the first array element as key and second as value. ", function() {
    expect(func.tupleToObject(['a',1])).to.deep.equal({'a':1});
  });
  xit("#tupleToObjectReverse is a function that takes in a tuple and returns an object second array element as key and first array element as the value. ", function() {
    expect(func.tupleToObjectReverse([1,'a'])).to.deep.equal({'a':1});
  });
  xit("#strToKeys is a function that takes in an array of strings and returns an object with all the strings as keys and values set to 0.", function() {
    expect(func.strToKeys(['a','ab','abc'])).to.deep.equal({'a':0,'ab':0,'abc':0});
  });
  xit("#getValues is a function that takes in an object and returns an array of all the objects values. ", function() {
    expect(func.getValues({'a':1,'b':2})).to.deep.equal([1,2]);
  });
  xit("#getKeys is a function that takes in an object and returns an array of all the objects keynames. ", function() {
    expect(func.getKeys({'a':1,'b':2})).to.deep.equal(['a','b']);
  });
  xit("#objectToArray is a function that takes in an object and returns an array of tuples of the objects key value pairs. ", function() {
    expect(func.objectToArray({'a':1,'b':2})).to.deep.equal([['a',1],['b',2]]);
  });
  xit("#arrayToObject is a function that takes in an array and returns an object of keys set to the elements in the array with all values set to false. ", function() {
    expect(func.arrayToObject(['a','b'])).to.deep.equal({'a':false,'b':false});
  });
  it("#arraysToObject is a function that takes in two arrays, the first array elements will be keys of an object and second array elements will be values of an object ", function() {
    expect(func.arraysToObject(['a','b'],[1,2])).to.deep.equal({'a':1,'b':2});
  });
  xit("#objectsToTuples is a function that takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.", function() {
    expect(func.objectsToTuples({'a':1,'b':2},{'c':3,'d':4})).to.deep.equal([['a',1],['b',2],['c',3],['d',4]]);
  });
  xit("#mapArrayValues is a function that takes in an array and returns an object with keys of all values in the array and the values for the keys will be all set to true.", function() {
    expect(func.mapArrayValues(['a','b','c'])).to.deep.equal({'a':true,'b':true,'c':true});
  });
  xit("#mapStringCounts is a function that takes in an array of strings and returns an object with the keys of all strings in the array and value if the character count of the key is greater than or equal to 5 to true, and less than five to false. ", function() {
    expect(func.mapStringCounts(['a','abcdfe'])).to.deep.equal({'a':false,'abcdfe':true});
  });
  xit("#arrayToObjectNums is a function that takes in an array of numbers and returns an object with keys of the numbers of the array and set each value in the object to true. ", function() {
    expect(func.arrayToObjectNums([1,2,3])).to.deep.equal({1:true,2:true,3:true});
  });
  xit("#stringToKeys is a function that takes in a string and returns an object whos keys are each letter of the string and values are true. ", function() {
    expect(func.stringToKeys('cat')).to.deep.equal({'c':true,'a':true,'t':true});
  });

  xit("#charCountMap is a function that takes in an array of strings and returns an object whos keys are the value of the strings and value of each key set to the character count of the string. ", function() {
    expect(func.charCountMap(['cat','dog','unicorn'])).to.deep.equal({'cat':3,'dog':3,'unicorn':7});
  });
  xit("#frequencyMap is a function that takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.", function() {
    expect(func.frequencyMap(['a','a','a','b','c'])).to.deep.equal({'a':3,'b':1,'c':1});
  });
  xit("#tupleConvertToObject is a function that takes in an array of tuples and and returns an object whos keys are the first element of the tuples and values are second element of the tuples. ", function() {
    expect(func.tupleConvertToObject([['a',1],['b',2],['c',3]])).to.deep.equal({'a':1, 'b':2, 'c':3});
  });
});
