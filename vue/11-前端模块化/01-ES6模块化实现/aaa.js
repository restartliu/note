let name = "xiaoming";
let age = 18;
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  sum(20, 30);
}

class Test {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(this.name, this, age);
  }
}

// 1.导出方式1
export { flag, sum, Test };

// 2.导出方式2
export let num1 = 100;
export let height = 1.88;

// 3.导出函数、类
export function mul(num1, num2) {
  return num1 * num2;
}

export class Person {
  run() {
    console.log("running");
  }
}

// export default
// 使用此修饰符定义的变量 在一个js文件中只能有一个，其他模块导入时若未查询到导入名则默认使用export default修饰的变量
const address = "beijing city";
export default address;
