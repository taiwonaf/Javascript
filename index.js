var numValues = [1,2,1,1,2,1,3,4,3,4];
var finalResult = numValues.reduce(
   (finalValue,currentValue)=>{
     let prevValues = finalValue.get(currentValue)
      if(prevValues){
         finalValue.set(currentValue,[...prevValues,currentValue])
      }else{
         finalValue.set(currentValue,[currentValue])
      }
      return finalValue
},new Map())
var currentMFValue = 0
var currentLength = 0
finalResult.forEach((value,key)=>{
   let valuesLength = value.length
   if(valuesLength>currentLength) {
      currentLength = valuesLength
      currentMFValue = key
   }
})
console.log("THE MOST FREQUENT VALUE IS ",currentMFValue)







