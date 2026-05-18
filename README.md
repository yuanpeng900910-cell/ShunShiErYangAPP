# 京颐养方｜顺时而养视觉 Demo

这是“顺时而养”东方疗愈 Companion OS 的横屏首页视觉 Demo，当前阶段用于确定产品视觉方向，不包含正式业务功能。

## 运行方式

```bash
npm install
npm run dev
```

默认本地预览地址：`http://localhost:5173`。

如需生成静态产物：

```bash
npm run build
npm run preview
```

## 目录说明

- `src/components/`：首页视觉组件，包括背景、毛玻璃卡片、今日时养、五音疗愈、身体状态、节气植物、轻行动和悬浮导航。
- `src/styles/tokens.css`：视觉变量，包括背景色、玻璃态、文字色、草本绿、玉色、浅金、圆角、阴影和模糊强度。
- `src/styles/home.css`：首页布局、卡片视觉、响应式适配和轻量动效。
- `src/data/visualHome.json`：首页文案与展示数据，后续可替换为接口或本地状态。
- `src/assets/placeholders/`：占位资源说明；当前为避免 PR 平台的二进制文件限制，首页插画使用 CSS 绘制。

## 可替换内容

### 替换图片

为避免“创建拉取请求后显示不支持二进制文件”，当前版本不提交 PNG/JPG 二进制占位图；植物、饮食、运动、五音图形都由 `src/styles/home.css` 中的 CSS 占位插画绘制。

后续拿到正式视觉资源后，可以放入 `src/assets/placeholders/`，再把 `SeasonPlantCard` 和 `GentleActionCard` 中的 CSS 占位图替换为真实图片引用。

### 替换文案和数据

首页展示内容集中在 `src/data/visualHome.json`：

- `brand`：母品牌、产品名、副标题
- `today`：时间、公历日期、农历日期、节气、天气、一句话养生
- `music`：五音疗愈推荐
- `body`：身体综合评分与脏腑平衡指数
- `plant`：节气福田植物、养分和提示语
- `actions`：今日轻行动卡片
- `nav`：极简导航项

## 下一阶段建议

1. 接入真实日期、农历、节气和天气数据。
2. 将五音疗愈电台接入真实音频播放与进度状态。
3. 将节气福田扩展为可成长的陪伴系统。
4. 增加横屏设备的触控、遥控器和键盘焦点态。
5. 在确定技术栈后，可将当前 ES Modules 组件平滑迁移到 React / Vue / 小程序等正式框架。
