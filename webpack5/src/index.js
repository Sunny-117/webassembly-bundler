import init, * as wasm from '../../rust-wasm/pkg/rust_wasm';

async function runApp() {
  // 初始化WASM模块
  await init();

  // 绑定UI事件
  document.getElementById('fib-btn').addEventListener('click', () => {
    const result = wasm.fibonacci(30);
    document.getElementById('fib-result').textContent = `结果: ${result}`;
    wasm.log_message(`斐波那契数计算完成: ${result}`);
  });

  document.getElementById('calc-btn').addEventListener('click', () => {
    const calc = new wasm.Calculator(10);
    calc.add(5);
    calc.multiply(2);
    const result = calc.get_value();
    document.getElementById('calc-result').textContent = `结果: ${result}`;
  });

  document.getElementById('greet-btn').addEventListener('click', () => {
    const name = document.getElementById('name-input').value || '开发者';
    const greeting = wasm.format_greeting(name);
    document.getElementById('greeting').textContent = greeting;
  });

  wasm.log_message("应用初始化完成!");
}

runApp().catch(console.error);
