import { incrementCounter, getCounter } from "./counter.js";

console.log("file1.js loaded");
console.log("Counter before increment:", getCounter());
incrementCounter();
console.log("Counter after increment:", getCounter());