// Webpack 4 使用 ESM 动态导入 wasm-bindgen 生成的模块
async function loadWasm() {
  try {
    // 动态导入 wasm-bindgen 生成的 JS 绑定
    const wasm = await import('../../rust-wasm/pkg/rust_wasm.js');

    console.log('WASM 模块加载成功:', wasm);

    // 演示使用 - 斐波那契
    const fibResult = wasm.fibonacci(10);
    console.log('fibonacci(10) =', fibResult);

    // 演示使用 - 反转字符串
    const reversed = wasm.reverse_string('Hello');
    console.log('reverse_string("Hello") =', reversed);

    // 打印日志
    wasm.log_message('WASM 加载成功!');

    // 演示 Calculator 类
    const calc = new wasm.Calculator(10);
    calc.add(5);
    calc.multiply(2);
    console.log('Calculator result:', calc.get_value());
  } catch (err) {
    console.error('加载 WASM 失败:', err);
  }
}

loadWasm();
