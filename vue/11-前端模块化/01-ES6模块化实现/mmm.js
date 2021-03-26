// 导入{}中定义的变量
import { flag, sum, Test } from "./aaa.js";

if (flag) {
  console.log("xiaoming is good");
  console.log(sum(20, 30));
  let t = new Test("fuck", 20);
  t.print();
}

// 直接导入export定义的变量
import { num1, height } from "./aaa.js";
console.log(num1, height);

// 导入export的function、class
import { mul, Person } from "./aaa.js";
console.log(mul(30, 50));
const p = new Person();
p.run();

// 导入export default定义的变量，命名可以自己写
import fuckttt from "./aaa.js";
console.log(fuckttt);

// 统一全部导入
import * as aaa from "./aaa.js";
console.log(aaa.height);
