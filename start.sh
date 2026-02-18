#!/bin/bash

# WebAssembly Bundler 启动脚本
# 交互式选择要启动的构建项目

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 项目列表
projects=(
    "vite:Vite 项目 (React + TypeScript)"
    "webpack4:Webpack 4 项目"
    "webpack5:Webpack 5 项目"
    "rspack:Rspack 项目 (React + TypeScript)"
)

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}  WebAssembly Bundler 启动脚本  ${NC}"
echo -e "${BLUE}================================${NC}"
echo ""
echo -e "${YELLOW}请选择要启动的项目:${NC}"
echo ""

# 显示项目列表
for i in "${!projects[@]}"; do
    IFS=':' read -r dir name <<< "${projects[$i]}"
    echo -e "  ${GREEN}$((i+1))${NC}) $name"
done

echo ""
echo -e "  ${GREEN}0${NC}) 退出"
echo ""

# 读取用户选择
read -p "请输入选项 [0-${#projects[@]}]: " choice

# 验证输入
if ! [[ "$choice" =~ ^[0-9]+$ ]]; then
    echo -e "\n${YELLOW}无效的输入，请输入数字${NC}"
    exit 1
fi

# 处理退出
if [ "$choice" -eq 0 ]; then
    echo -e "\n${BLUE}再见!${NC}"
    exit 0
fi

# 验证选项范围
if [ "$choice" -lt 1 ] || [ "$choice" -gt "${#projects[@]}" ]; then
    echo -e "\n${YELLOW}无效的选项，请选择 0-${#projects[@]}${NC}"
    exit 1
fi

# 获取选中的项目
index=$((choice-1))
IFS=':' read -r project_dir project_name <<< "${projects[$index]}"

echo ""
echo -e "${GREEN}启动 $project_name ...${NC}"
echo ""

# 进入项目目录并启动
cd "$(dirname "$0")/$project_dir" || exit 1

# 检查是否安装了依赖
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}检测到未安装依赖，正在安装...${NC}"
    pnpm install
fi

# 启动开发服务器
pnpm dev
