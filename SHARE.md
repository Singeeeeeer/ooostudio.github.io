# 把网站分享给其他成员

这是一个纯静态网站，不需要数据库或安装依赖。

## 方法一：直接发送文件

把 `deep-space-studio-site-share.zip` 发给成员。对方解压后双击 `index.html` 即可离线浏览。

适合内部评审；缺点是每次更新都要重新发送压缩包。

## 方法二：同一 Wi-Fi 下临时分享

在网站目录打开 PowerShell，运行：

```powershell
py -m http.server 4174 --bind 0.0.0.0
```

如果电脑使用的是 `python` 命令，则运行：

```powershell
python -m http.server 4174 --bind 0.0.0.0
```

用 `ipconfig` 找到本机的 IPv4 地址，再把 `http://IPv4地址:4174/` 发给同一局域网内的成员。运行窗口必须保持开启；Windows 防火墙询问时只允许“专用网络”。

## 方法三：生成长期公网链接（推荐）

最省事的是 Netlify Drop：

1. 打开 https://app.netlify.com/drop
2. 登录后，把整个网站文件夹或分享压缩包拖进去
3. 等待发布，复制生成的 `netlify.app` 地址
4. 后续更新时，再把新版文件夹拖到该站点的 Deploys 页面

如果团队已经使用 GitHub，也可以把文件放进仓库，然后在 `Settings → Pages` 中选择 `Deploy from a branch`、`main` 分支和 `/(root)` 目录。之后每次提交更新都会重新发布。

## 发布前记得替换

- “未命名工作室（暂用名）”
- 成员姓名和职务
- `studio@example.com`
- 最终项目介绍、平台与开发状态

不要把尚未公开的内部资料、个人联系方式或密钥放进公开网站目录。
