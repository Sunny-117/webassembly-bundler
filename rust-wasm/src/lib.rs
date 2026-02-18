use wasm_bindgen::prelude::*;

// ============================================
// 基础数学函数
// ============================================

/// 加法
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

/// 斐波那契数列计算
#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

/// 使用莱布尼茨公式计算 PI
#[wasm_bindgen]
pub fn calculate_pi(iterations: u32) -> f64 {
    let mut pi = 0.0;
    for k in 0..iterations {
        let term = if k % 2 == 0 {
            1.0 / (2 * k + 1) as f64
        } else {
            -1.0 / (2 * k + 1) as f64
        };
        pi += term;
    }
    4.0 * pi
}

// ============================================
// 字符串处理函数
// ============================================

/// 简单问候
#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

/// 格式化问候语（带 emoji）
#[wasm_bindgen]
pub fn format_greeting(name: &str) -> String {
    format!("Hello, {}! 👋", name)
}

/// 反转字符串
#[wasm_bindgen]
pub fn reverse_string(input: &str) -> String {
    input.chars().rev().collect()
}

/// 在控制台打印消息
#[wasm_bindgen]
pub fn log_message(msg: &str) {
    web_sys::console::log_1(&msg.into());
}

// ============================================
// 计算器结构体
// ============================================

#[wasm_bindgen]
pub struct Calculator {
    value: f64,
}

#[wasm_bindgen]
impl Calculator {
    #[wasm_bindgen(constructor)]
    pub fn new(initial: f64) -> Calculator {
        Calculator { value: initial }
    }

    pub fn add(&mut self, num: f64) {
        self.value += num;
    }

    pub fn subtract(&mut self, num: f64) {
        self.value -= num;
    }

    pub fn multiply(&mut self, num: f64) {
        self.value *= num;
    }

    pub fn divide(&mut self, num: f64) {
        self.value /= num;
    }

    pub fn get_value(&self) -> f64 {
        self.value
    }
}

// ============================================
// 计数器结构体
// ============================================

#[wasm_bindgen]
pub struct Counter {
    value: i32,
}

#[wasm_bindgen]
impl Counter {
    #[wasm_bindgen(constructor)]
    pub fn new(initial: i32) -> Counter {
        Counter { value: initial }
    }

    pub fn increment(&mut self) {
        self.value += 1;
    }

    pub fn decrement(&mut self) {
        self.value -= 1;
    }

    pub fn get_value(&self) -> i32 {
        self.value
    }
}

// ============================================
// Point 结构体（二维点）
// ============================================

#[wasm_bindgen]
pub struct Point {
    x: f32,
    y: f32,
}

#[wasm_bindgen]
impl Point {
    #[wasm_bindgen(constructor)]
    pub fn new(x: f32, y: f32) -> Point {
        Point { x, y }
    }

    /// 计算两点间距离
    pub fn distance_to(&self, other: &Point) -> f32 {
        ((self.x - other.x).powi(2) + (self.y - other.y).powi(2)).sqrt()
    }

    /// 获取坐标字符串
    pub fn to_string(&self) -> String {
        format!("({:.1}, {:.1})", self.x, self.y)
    }

    pub fn get_x(&self) -> f32 {
        self.x
    }

    pub fn get_y(&self) -> f32 {
        self.y
    }
}
