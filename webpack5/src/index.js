// Webpack 5 使用 ESM 导入 wasm-bindgen 生成的模块
// wasm-bindgen 生成的模块在导入时会自动初始化
import * as wasm from '../../rust-wasm/pkg/rust_wasm';

async function runApp() {
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
