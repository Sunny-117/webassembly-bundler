async function loadWasm() {
  try {
    // 导入生成的 JS 绑定
    const rustWasm = await import('../../rust-wasm/pkg/rust_wasm.js');
    console.log(rustWasm, 'rustWasm');

    // 演示使用
    const fibResult = rustWasm.fibonacci(10);
    console.log('fibonacci(10) =', fibResult);

    const reversed = rustWasm.reverse_string('Hello');
    console.log('reverse_string("Hello") =', reversed);

    rustWasm.log_message('WASM 加载成功!');
  } catch (err) {
    console.error('加载 WASM 失败:', err);
  }
}

loadWasm();
