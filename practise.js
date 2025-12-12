var xworkz = ['Amith','Manoj',101,500,true,false];

console.log('Xworkz Trainees:', xworkz);

console.log(xworkz.length);

console.log('First Trainee:', xworkz[0]);   
console.log('Last :', xworkz[xworkz.length - 1]);
console.log(typeof xworkz);

xworkz.push('Sagar');
console.log('After Push:', xworkz);

xworkz.pop();
console.log('After Pop:', xworkz);


xworkz.unshift('Ravi');
console.log('After Unshift:', xworkz);

xworkz.shift();
console.log('After Shift:', xworkz);