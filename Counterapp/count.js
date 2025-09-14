let c = 0, ci = 0, cd = 0;  //variable declared here
const count = document.getElementById("count");
const incCount = document.getElementById("incCount");  //in this 3 we used DOM for JS HTML interaction
const decCount = document.getElementById("decCount");

function inc() {
    c++;
    ci++;  // increment used
    update();   
}

function dec() {
    c = c > 0 ? c - 1 : 0;
    cd++;
    update();
}

function update() {
    incCount.textContent = ci;
    decCount.textContent = cd;
    count.textContent = c;
}
