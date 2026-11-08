# v2 — 冯梅作品集（Jesper Landberg 风格版）

把 jesperlandberg.com 的视觉语言与交互动效，套用到自己的 14 个案例与个人信息上。
原站是 Nuxt + WebGL 的编译产物，这里**保留其运行时与全部动效**，只替换数据与素材。

## 怎么跑

站点使用根绝对路径（`/_nuxt/`、`/textures/`、`/basis/`），**必须把它作为站点根目录**提供服务：

```bash
cd v2 && python3 -m http.server 8770
# 打开 http://127.0.0.1:8770/
```

放到线上时，这一层要作为域名根（或子域根），不能塞进二级目录。

## 结构

```
v2/
├── index.html              # 首页：3D 卡片轮播 + Profile 圆环浮层
├── _payload.json           # 首页数据（14 个案例，devalue 扁平格式）
├── full/index.html         # 全部作品索引（静态页）
├── newsletter/index.html   # 联系页（静态页，沿用原站 URL）
├── projects/<slug>/        # 14 个案例详情页（静态页，深链兜底）
├── assets/css/detail.css   # 详情弹窗样式
├── assets/js/detail.js     # 详情弹窗逻辑 + 14 个案例的数据（含图片清单）
├── assets/ours/<slug>/     # 每个案例的卡片图 + 过程图
├── textures/ours_*.ktx2    # 卡片图编码成 GPU 纹理（Basis UASTC/ETC1S）
├── textures/manifest.json  # 图片路径 → ktx2 映射（含 ours/ 条目）
├── _nuxt/                  # 原站 Nuxt 运行时（仅改过文案字面量）
├── basis/、models/         # WebGL 转码器与 3D 模型（圆环）
└── models/award.glb        # Profile 浮层的金属圆环
```

## 这版做了什么

1. **卡片数据**：`_payload.json` 重写为 14 个项目（标题 / 简介 / 年份 / 地点 / 角色 / 卡片图），
   原本的 23 个 Jesper 项目与 22 个 Mux 视频全部移除 → 卡片改为静态纹理，不再加载 mp4。
2. **卡片图**：5 个真实项目用自家封面；9 个模板占位案例生成排版海报卡（大字 + 纸质/深色渐变）。
   所有图先**垂直翻转**再用 `basisu -ktx2` 编码——WebGL 侧是 flipY=false，不翻转会上下颠倒。
3. **个人信息**：`_nuxt/DZyj3ghP.js` 里的姓名 / 职务 / 邮箱 / 简介 / 荣誉行 / 技能 / 社交链接，
   以及 Profile 浮层的三处文案字面量，全部换成中文（WebGL 文字走 canvas 光栅化，中文可正常渲染）。
4. **入场动效（flight）**：参考站是「点中的卡片在 3D 里飞到详情页位置、同时冲白成白色 sheet」。
   这里用一层 `.fm-ghost` 复刻：它从被点元素的真实矩形（卡片 / 列表行 / 侧边预览卡）出发，
   带着该案例的封面，用 `transform: translate3d + scale` 飞向面板矩形（680ms，expo-out），
   封面在落地前冲白；面板在 75% 处先淡入顶替，sheet 落地的同一帧撤掉、内容开始逐项上浮。
   深链进入时没有起点卡片，改为从画面中央一块 46%×46% 的小 sheet 长出来（与原站一致）。
   关闭时反向 flight：面板缩回它来时的那张卡片（500ms）。`prefers-reduced-motion` 下全部跳过。
5. **详情弹窗**：卡片点击不再跳页，改为在首页上浮出白色圆角面板——
   左边是标题 / 简介 / 年份·角色药丸 + 自动浏览按钮，右边是可独立滚动的通栏图片流，
   右上角圆形关闭。Esc 关闭、←/→ 切换上下案例、`#work=<slug>` 可直达、
   滚到底自动停止播放，左下角的圆环是图片列滚动进度。
   左右两侧各露出相邻案例的一条细边（悬停展开成预览卡：封面 + 案例名 + 序号/年份），
   点一下即切换；切换时内容按方向滑出、再从另一侧滑入。
6. **路由**：静态镜像没有 Nuxt 服务端路由，`index.html` 里加了 `ours-router` 脚本，
   把页脚 `/full`、`/newsletter` 链接改跳静态页面。
7. **移动端**：≤900px 隐藏 WebGL 舞台，改用同风格的纵向卡片列表（`m-fallback`），避免卡片重叠。

## 已知缺口（原站镜像自带，与本次改动无关）

- `/glyphs/sans-500.{json,bin}`：WebGL 的 MSDF 字型图集原站未公开，文字自动走 canvas 兜底，显示正常。
- `/_nuxt/builds/meta/*.json`：Nuxt 应用清单，404 不影响运行。

## 想改内容时

- 换案例：改 `_payload.json`（devalue 扁平格式，可用配套脚本重新生成）+ 替换 `assets/ours/<slug>/card.jpg`
  并重新编码 `textures/ours_<slug>_card.ktx2`、更新 `textures/manifest.json`。
- 改个人信息：搜 `_nuxt/DZyj3ghP.js` 里的 `冯梅`，共 4 处（数据对象 + 三处渲染字面量）。
- 改详情弹窗：`assets/js/detail.js` 顶部的 `DATA` 数组（标题 / 简介 / 年份 / 角色 / 标签 / 图片清单）
  与 `assets/css/detail.css`；图片放在 `assets/ours/<slug>/`。图片按名字排序：命名成 `p01…pNN`
  （成套演示稿，如 Naivideo 8 屏、OPPO 小程序 10 屏）就按编号铺开，`card.jpg` 单独作为封面/飞行起点，
  不重复出现在图片流里；只有零散图时按 `card` + `extraN` 排。
- 旧的深链页：`projects/<slug>/index.html` 仍是普通静态页，直接编辑即可（弹窗之外的兜底）。
