var objectA = {
  nestedPropertie: {
    name: 'nestedPropertyName'
  }
}

function printNestedObject(obj) {
  if(obj?.nestedPropertie?.name) { //<--
    console.log('obj.nestedPropertie.name = ' + obj.nestedPropertie.name)
  }else {
    console.log('name not found or undefined')
  }
}

printNestedObject(undefined) //name not found or undefined

printNestedObject({
  aProperty: 'another property'
}) //name not found or undefined

printNestedObject({
  nestedPropertie: {
    name: null
  }
}) //name not found or undefined

printNestedObject({
  nestedPropertie: {
    name: 'nestedPropertyName'
  }
}) //obj.nestedPropertie.name = nestedPropertyName
