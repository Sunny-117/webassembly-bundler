import {
  fibonacci,
  Calculator,
  format_greeting,
  log_message,
  calculate_pi
} from '../../rust-wasm/pkg';

async function runExamples() {
  // 初始化WASM模块
  try {
    console.log("WASM模块初始化成功！");
  } catch (error) {
    console.error("无法初始化WASM模块:", error);
    return;
  }

  // 示例1: 使用斐波那契函数
  function fibonacciExample() {
    console.log("\n=== 斐波那契数列示例 ===");

    const n = 10;
    const result = fibonacci(n);

    console.log(`斐波那契数列第${n}项: ${result}`);
    log_message(`计算完成: fib(${n}) = ${result}`);
  }

  // 示例2: 使用计算器结构体
  function calculatorExample() {
    console.log("\n=== 计算器示例 ===");

    // 创建计算器实例
    const calc = new Calculator(100);
    console.log(`初始值: ${calc.get_value()}`);

    // 执行计算
    calc.add(50);
    calc.subtract(30);
    calc.multiply(2);
    calc.divide(4);

    console.log(`最终值: ${calc.get_value()}`);
    log_message(`计算器结果: ${calc.get_value()}`);
  }

  // 示例3: 使用字符串处理函数
  function greetingExample() {
    console.log("\n=== 问候语示例 ===");

    const name = "Alice";
    const greeting = format_greeting(name);

    console.log(greeting);
    document.getElementById("greeting")!.textContent = greeting;
    log_message(`已生成问候语: ${greeting}`);
  }

  // 示例4: 使用PI计算函数
  function piCalculationExample() {
    console.log("\n=== PI计算示例 ===");

    const iterations = 10000000;
    console.log(`使用 ${iterations.toLocaleString()} 次迭代计算PI...`);

    const start = performance.now();
    const pi = calculate_pi(iterations);
    const duration = performance.now() - start;

    console.log(`PI ≈ ${pi}`);
    console.log(`计算耗时: ${duration.toFixed(2)}ms`);
    log_message(`PI计算结果: ${pi} (耗时: ${duration.toFixed(2)}ms)`);
  }

  // 示例5: 复杂场景组合使用
  function complexExample() {
    console.log("\n=== 复杂示例 ===");

    // 创建计算器
    const calc = new Calculator(0);

    // 计算前10个斐波那契数的和
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
      const fib = fibonacci(i);
      calc.add(fib);
      sum += fib;
    }

    // 验证结果
    console.log(`斐波那契数列和: ${sum}`);
    console.log(`计算器累计值: ${calc.get_value()}`);

    // 生成包含结果的问候语
    const resultGreeting = format_greeting(`结果=${sum}`);
    console.log(resultGreeting);

    // 记录日志
    log_message(`复杂计算完成: ${resultGreeting}`);
  }

  // 执行所有示例
  fibonacciExample();
  calculatorExample();
  greetingExample();
  piCalculationExample();
  complexExample();
}

// 运行示例
runExamples();
