# 大模型学习与面试地图 · LLM Career Map

搜索学习主题与完成标准，按六条岗位路线导航并查看前置知识和来源。

市场版本提供配置和启动入口，运行权限通过独立组件或 MCP 单独授权。

## 配置 MCP

先下载固定版本的运行组件。

```sh
git clone --branch runtime-v1.0.0 --single-branch https://github.com/wblxr408/agh-plugin-career-map.git career-map-runtime
```

在 AGH「连接（MCP）」建立 ID 为 `career-map` 的 stdio 连接。命令为 Node.js 24，参数依次是 `<运行组件绝对目录>/career.mjs`。运行文件和数据目录需满足 AGH 宿主策略。核对配置后测试并启用连接。

调用 `career_roles`、`career_route` 和 `career_search`。工具读内置主题与路线，并返回原站链接。

从「智能体」启动「大模型学习与面试地图」，在草稿中填写实际问题。 [AGH MCP 配置](https://github.com/AgnesAI-Labs/agnes-harness/blob/main/docs/guide/mcp.zh-CN.md)
