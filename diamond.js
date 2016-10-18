const str = function(s){
let stars = "";
for(let h = 0; h<s; h= h+1 ){
stars = stars + "*";}
return stars;
};

const sp = function(p){
let space = "";
for(let h = 0; h<p; h= h+1){
space= space+" ";}
return space;
};

const a = function(c,b){
console.log(sp(c)+str(b));
};

const diamond = function(n){
if(n%2 === 0){n = n+1;}
for(let h = 0; h<(n+1)/2; h = h+1){
a((n-1)/2-h,2*h+1);}
for(let h = (n-1)/2-1; h>=0;h = h-1){
a((n-1)/2-h,2*h+1);}
}

diamond(10);
