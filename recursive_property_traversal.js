// Define generic multilevel JSON object
const JSONObj = {
	"data1": {
		"key1": "value1",
		"key2": "value2"
	},
	"data2": {
		"key3": "value3",
		"key4": "value4"
	}
}

// stringify JSON object
const stringInterp = JSON.stringify(JSONObj);

// parse string interpretation of JSON Object
const newObject = JSON.parse(stringInterp);

// get own properties of object
const keyArr = Object.keys(newObject);

/**
* Recursive function to print all node level properties of the object
* param obj - object to assess
* param key - property of object being assessed
*/
const printAllVals = function(obj, prop) {
	if (typeof obj[prop] == 'object') {
		Object.keys(obj[prop]).forEach((key) => {
			printAllVals(obj[prop], key);
		})
	} else { 
		console.log(prop, ': ', obj[prop]);
	}
}

// Iterate over first branch of properties, call printAllVals
// recursive function with each branch and entire object as object to assess
keyArr.forEach((key) => {
    printAllVals(newObject, key);
});

// key1 :  value1
// key2 :  value2
// key3 :  value3
// key4 :  value4
// undefined (execution complete; no return value)