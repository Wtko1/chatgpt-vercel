export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- 由 [@wtko1](https://github.com/wtko1) 基于 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发，查看 [源码](https://github.com/wtko1/chatgpt-vercel)，欢迎自部署。

- 该网站仅作为演示，不提供长期服务，网站密码为 \`hewentao\`，在左下角小齿轮填写密码，请勿滥用。

- 如果本项目对你有所帮助，可以给小猫 [买点零食](https://cdn.jsdelivr.net/gh/wtko1/chatgpt-vercel/assets/reward.gif)，但不接受任何付费功能请求。

-  ✨ 有任何问题联系[[QQ]] [[1351834861]] （备注ChatGPT） ✨

- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
