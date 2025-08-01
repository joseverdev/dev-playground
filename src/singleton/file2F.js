import { createCounter } from "./counterF.js";

const counter = createCounter();
console.log("file2F.js loaded");
console.log("Counter before increment:", counter.get());
counter.increment();
console.log("Counter after increment:", counter.get());