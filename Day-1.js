"use strict";

// debugger;
// const para = document.getElementById("para");
// console.log(para);
// debugger;

function fn2() {
  let a = 20;
  function fn() {
    var a = 10;
    console.log(a);
  }
  fn();
  console.log(a);
}

fn2();
