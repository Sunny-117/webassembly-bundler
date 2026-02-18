# WebAssembly Bundler Examples

演示如何在不同前端构建工具中集成 Rust WebAssembly 模块的示例项目。

## 项目结构

```
webassembly-bundler/
├── rust-wasm/          # 统一的 Rust WASM 源码（共享）
│   ├── Cargo.toml
│   ├── src/
│   │   └── lib.rs
│   └── pkg/            # wasm-pack 构建输出
├── webpack5/           # Webpack 5 示例
├── webpack4/           # Webpack 4 示例
├── vite/               # Vite 示例
├── rspack/             # Rspack 示例
└── README.md
```

## 快速开始

### 1. 构建 WASM 模块

首先需要安装 [Rust](https://rustup.rs/) 和 [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)。

```bash
# 进入 rust-wasm 目录并构建
cd rust-wasm
wasm-pack build --target web
```

### 2. 运行示例

选择任意一个构建工具示例运行：

**Webpack 5:**
```bash
cd webpack5
pnpm install
pnpm start
```

**Webpack 4:**
```bash
cd webpack4
pnpm install
pnpm dev
```

**Vite:**
```bash
cd vite
pnpm install
pnpm dev
```

**Rspack:**
```bash
cd rspack
pnpm install
pnpm dev
```

## Rust WASM 模块 API

统一的 `rust-wasm` 模块提供以下功能：

### 函数

| 函数 | 签名 | 说明 |
|------|------|------|
| `add` | `(a: i32, b: i32) -> i32` | 加法运算 |
| `fibonacci` | `(n: u32) -> u32` | 斐波那契数列计算 |
| `calculate_pi` | `(iterations: u32) -> f64` | 使用莱布尼茨公式计算 PI |
| `greet` | `(name: &str) -> String` | 简单问候 |
| `format_greeting` | `(name: &str) -> String` | 格式化问候语 |
| `reverse_string` | `(input: &str) -> String` | 反转字符串 |
| `log_message` | `(msg: &str)` | 在浏览器控制台打印消息 |

### 结构体

**Calculator** - 计算器
```rust
Calculator::new(initial: f64) -> Calculator
calc.add(num: f64)
calc.subtract(num: f64)
calc.multiply(num: f64)
calc.divide(num: f64)
calc.get_value() -> f64
```

**Counter** - 计数器
```rust
Counter::new(initial: i32) -> Counter
counter.increment()
counter.decrement()
counter.get_value() -> i32
```

**Point** - 二维点
```rust
Point::new(x: f32, y: f32) -> Point
point.distance_to(other: &Point) -> f32
point.to_string() -> String
point.get_x() -> f32
point.get_y() -> f32
```

## 各构建工具配置对比

| 构建工具 | WASM 加载方式 | 关键配置 |
|---------|--------------|---------|
| **Webpack 5** | 原生支持 | `experiments: { asyncWebAssembly: true }` |
| **Webpack 4** | file-loader | `type: 'javascript/auto'` + `experiments: { syncWebAssembly: true }` |
| **Vite** | 插件 | `vite-plugin-wasm` + `vite-plugin-top-level-await` |
| **Rspack** | 原生支持 | `experiments: { asyncWebAssembly: true }` + `.wasm` 规则 |

## 使用示例

### JavaScript/TypeScript 中使用

```javascript
// Webpack 5 / Vite
import init, { fibonacci, Calculator, log_message } from '../../rust-wasm/pkg/rust_wasm';

async function main() {
  await init();  // 初始化 WASM 模块

  // 使用函数
  const fib = fibonacci(10);
  log_message(`Fibonacci(10) = ${fib}`);

  // 使用结构体
  const calc = new Calculator(100);
  calc.add(50);
  calc.multiply(2);
  console.log(calc.get_value());  // 300
}
```

### React 中使用

```tsx
import { add, greet, Counter } from '../../rust-wasm/pkg/rust_wasm';

function App() {
  const result = add(5, 3);
  const greeting = greet("World");

  const counter = new Counter(0);
  counter.increment();

  return <div>{greeting}, result: {result}</div>;
}
```

## 技术栈

- **Rust** + **wasm-bindgen** - WASM 源码编写
- **wasm-pack** - WASM 构建工具
- **Webpack 4/5** - 传统打包器
- **Vite** - 现代开发服务器
- **Rspack** - Rust 实现的高性能打包器

## License

MIT
