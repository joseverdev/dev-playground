import { createCounter } from "./counterF.js";

const counter = createCounter();
console.log("file1F.js loaded");
console.log("Counter before increment:", counter.get());
counter.increment();
console.log("Counter after increment:", counter.get());