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
├── projects/<slug>/        # 14 个案例详情页（静态页）
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
4. **路由**：静态镜像没有 Nuxt 服务端路由，`index.html` 里加了 `ours-router` 脚本，
   把卡片点击与页脚 `/full`、`/newsletter` 链接改跳静态页面。
5. **移动端**：≤900px 隐藏 WebGL 舞台，改用同风格的纵向卡片列表（`m-fallback`），避免卡片重叠。

## 已知缺口（原站镜像自带，与本次改动无关）

- `/glyphs/sans-500.{json,bin}`：WebGL 的 MSDF 字型图集原站未公开，文字自动走 canvas 兜底，显示正常。
- `/_nuxt/builds/meta/*.json`：Nuxt 应用清单，404 不影响运行。

## 想改内容时

- 换案例：改 `_payload.json`（devalue 扁平格式，可用配套脚本重新生成）+ 替换 `assets/ours/<slug>/card.jpg`
  并重新编码 `textures/ours_<slug>_card.ktx2`、更新 `textures/manifest.json`。
- 改个人信息：搜 `_nuxt/DZyj3ghP.js` 里的 `冯梅`，共 4 处（数据对象 + 三处渲染字面量）。
- 改详情页：`projects/<slug>/index.html` 是普通静态页，直接编辑即可。
