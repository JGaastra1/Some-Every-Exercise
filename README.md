# Some-Every-Exercise <br>
Write the functions below and ensure that the tests pass, you can find the tests in the downloaded code.<br>

hasOddNumber<br>
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.<br>

hasOddNumber([1,2,2,2,2,2,4]) // true<br>
hasOddNumber([2,2,2,2,2,4]) // false<br>
hasAZero<br>
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false<br>

hasAZero(33321232131012) // true<br>
hasAZero(1212121) // false<br>
hasOnlyOddNumbers<br>
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.<br>

hasOnlyOddNumbers([1,3,5,7]) // true<br>
hasOnlyOddNumbers([1,2,3,5,7]) // false<br>
hasNoDuplicates<br>
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.<br>

hasNoDuplicates([1,2,3,1]) // false<br>
hasNoDuplicates([1,2,3]) // true<br>
hasCertainKey<br>
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.<br>

let arr = [<br>
    {title: "Instructor", first: 'Elie', last:"Schoppik"},<br>
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},<br>
    {title: "Instructor", first: 'Matt', last:"Lane"},<br>
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}<br>
  ]<br>

  hasCertainKey(arr,'first') // true<br>
  hasCertainKey(arr,'isCatOwner') // false<br>
hasCertainValue<br>
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.<br>

let arr = [<br>
    {title: "Instructor", first: 'Elie', last:"Schoppik"},<br>
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},<br>
    {title: "Instructor", first: 'Matt', last:"Lane"},<br>
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}<br>
  ]<br>

  hasCertainValue(arr,'title','Instructor') // true<br>
  hasCertainValue(arr,'first','Elie') // false<br>
