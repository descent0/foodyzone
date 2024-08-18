export function random(val){
//note val is an array
let  randomIndex = Math.floor(Math.random() * val.length);
return val[randomIndex];
}