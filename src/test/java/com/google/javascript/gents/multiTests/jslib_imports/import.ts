export{};
import{A}from "./export";
import*as AExports from "./export";
import B from "goog:lib.B";
import X from "goog:lib.C";
A();
AExports.foo();
B();
var n = B.num + B.num;
X();
n += X.num;
