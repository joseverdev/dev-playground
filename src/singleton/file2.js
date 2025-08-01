import { incrementCounter, getCounter } from "./counter.js";

console.log("file2.js loaded");
console.log("Counter before increment:", getCounter());
incrementCounter();
console.log("Counter after increment:", getCounter());