import React from "react";
import {
  add,
  greet,
  Counter,
  log_message,
} from "../../rust-wasm/pkg/rust_wasm";

export default function App() {
  // 使用导出的函数
  const addResult = add(5, 3); // 输出 8
  const greeting = greet("World"); // "Hello, World!"
  const counter = new Counter(10);
  counter.increment();
  const counterValue = counter.get_value(); // 11
  log_message("From JavaScript!");

  return (
    <div>
      <pre>
        {`add(5,3)=${addResult}\ngreet=${greeting}\ncounter=${counterValue}`}
      </pre>
    </div>
  );
}
