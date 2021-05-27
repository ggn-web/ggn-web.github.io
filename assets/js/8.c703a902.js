(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{357:function(t,s,a){t.exports=a.p+"assets/img/yarn-err.f51bd5e4.jpg"},378:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"前端环境的配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端环境的配置"}},[t._v("#")]),t._v(" 前端环境的配置")]),t._v(" "),n("h2",{attrs:{id:"基本工具的安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本工具的安装"}},[t._v("#")]),t._v(" 基本工具的安装")]),t._v(" "),n("ul",[n("li",[t._v("Node.js 的安装 → "),n("a",{attrs:{href:"https://nodejs.org/zh-cn/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网链接"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("git 的安装 → "),n("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("cnpm || yarn 的安装\n"),n("blockquote",[n("p",[n("a",{attrs:{href:"https://developer.aliyun.com/mirror/NPM?from=tnpm",target:"_blank",rel:"noopener noreferrer"}},[t._v("cnpm 淘宝镜像"),n("OutboundLink")],1),t._v("【这是详细描述】"),n("br"),t._v(" "),n("a",{attrs:{href:"https://yarn.bootcss.com/docs/install/#windows-stable",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn 下载地址"),n("OutboundLink")],1),t._v(" 【或者通过命令直接安装 npm i yarn -g】"),n("br"),t._v("\ncnpm 只需要在 powershell 里面运行下面指令即可：")]),t._v(" "),n("blockquote",[n("p",[t._v("在一个文件夹下，按住 shift，右击鼠标，就能打开基于当前文件夹的 powershell"),n("br"),t._v("\n指令：npm install -g cnpm --registry=https://registry.npm.taobao.org")])])])]),t._v(" "),n("li",[t._v("vscode 的安装 → "),n("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode 下载地址"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"基本工具的安装的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本工具的安装的问题"}},[t._v("#")]),t._v(" 基本工具的安装的问题")]),t._v(" "),n("ul",[n("li",[n("h4",{attrs:{id:"node-sass-的错误【主要是-node-sass-的依赖包地址的问题】"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-sass-的错误【主要是-node-sass-的依赖包地址的问题】"}},[t._v("#")]),t._v(" node-sass 的错误【主要是 node-sass 的依赖包地址的问题】")]),t._v(" "),n("blockquote",[n("p",[t._v("命令行里直接输入指令 npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/")])])]),t._v(" "),n("li",[n("h4",{attrs:{id:"event-js-error-的错误【表示端口占用】"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-js-error-的错误【表示端口占用】"}},[t._v("#")]),t._v(" event.js error 的错误【表示端口占用】")]),t._v(" "),n("blockquote",[n("p",[t._v("去计算机的环境变量里面的用户变量的 Path 里增加 C:\\Windows\\System32")])])])]),t._v(" "),n("h2",{attrs:{id:"cnpm-yarn-安装后运行时候的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cnpm-yarn-安装后运行时候的问题"}},[t._v("#")]),t._v(" cnpm || yarn 安装后运行时候的问题")]),t._v(" "),n("p",[n("font",{attrs:{color:"red"}},[t._v("因为在此系统上禁止运行脚本报错")])],1),t._v(" "),n("p",[n("img",{attrs:{src:a(357),alt:"cnpm || yarn错误指令展示"}})]),t._v(" "),n("ul",[n("li",[t._v("打开 windows 的搜索，输入 powershell，找到 windows PowerShell，右击管理员身份运行")]),t._v(" "),n("li",[t._v("输入命令： set-ExecutionPolicy RemoteSigned")]),t._v(" "),n("li",[t._v("按照界面意思 输入 Y，然后就可以运行 cnpm || yarn 的指令了")])]),t._v(" "),n("h2",{attrs:{id:"拉取前端-git-库的代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拉取前端-git-库的代码"}},[t._v("#")]),t._v(" 拉取前端 git 库的代码")]),t._v(" "),n("ul",[n("li",[t._v("找后端或者其他相关人员配置 git 的权限")]),t._v(" "),n("li",[t._v("git clone "),n("a",{attrs:{href:"http://gitlab.ggn.top/web/saas-admin.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 地址"),n("OutboundLink")],1),t._v(" 进行代码拉取")]),t._v(" "),n("li",[t._v("需要的话 可以配置 ssh")]),t._v(" "),n("li",[t._v("git checkout dev 切换到 dev 分支进行开发")])]),t._v(" "),n("h2",{attrs:{id:"配置开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置开发环境"}},[t._v("#")]),t._v(" 配置开发环境")]),t._v(" "),n("ul",[n("li",[t._v("进入到【项目目录】")]),t._v(" "),n("li",[t._v("在当前目录按住 shift，鼠标右击，点击【在此处打开 powershell 窗口】")]),t._v(" "),n("li",[t._v("安装项目需要的依赖 yarn || npm install || cnpm install 【三种方式自己选择】，会出现 node_modules 文件夹")]),t._v(" "),n("li",[t._v("开发环境运行命令 → 在 powershell 窗口中 yarn serve || npm run serve || cnpm run serve 【三种方式自己选择】")]),t._v(" "),n("li",[t._v("打包运行命令 → 在 powershell 窗口中 yarn build || npm run build || cnpm run build 【三种方式自己选择】")])]),t._v(" "),n("h2",{attrs:{id:"运行后的问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行后的问题"}},[t._v("#")]),t._v(" 运行后的问题")]),t._v(" "),n("ul",[n("li",[n("h4",{attrs:{id:"network-unavailable"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#network-unavailable"}},[t._v("#")]),t._v(" Network unavailable")]),t._v(" "),n("blockquote",[n("p",[t._v("如果启动后有 localhost:端口，但是下面出现 network unavailable, 表示没有获取到计算机的 IP，可以在 vue.config.js 里面的 devServer 里面加一个 public")])])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("devServer"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    host"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    open"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://192.168.1.50:")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加这一行")]),t._v("\n    proxy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_BASE_API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        target"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://192.168.10.73:8080")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个是后端接口的地址，这个要修改成你本地的接口地址")]),t._v("\n        changeOrigin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        pathRewrite"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VUE_APP_BASE_API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),t._v(" "),n("h2",{attrs:{id:"后端人员配置本地前端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后端人员配置本地前端"}},[t._v("#")]),t._v(" 后端人员配置本地前端")]),t._v(" "),n("ul",[n("li",[t._v("同样 Nodejs 必须安装，配置下淘宝镜像 cnpm || yarn")]),t._v(" "),n("li",[t._v("git clone 前端的项目，放到本地的文件夹")]),t._v(" "),n("li",[t._v("进入到项目根目录，运行 cnpm install || yarn 安装依赖，可参考【配置开发环境】")]),t._v(" "),n("li",[t._v("修改根目录下的【vue.config.js】里面的 proxy(代理)，改成你本地的接口地址【http://127.0.0.1/port(端口)】")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("devServer"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/jeecg-boot'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        target"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://127.0.0.1:8080")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个是后端接口的地址，这个要修改成你本地的接口地址")]),t._v("\n        ws"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        changeOrigin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("ul",[n("li",[t._v("运行cnpm run serve || yarn serve, 启动项目，就可以看到效果了")]),t._v(" "),n("li",[n("h4",{attrs:{id:"上面启动命令的serve不是一成不变的-是根据package-json里面的scripts的里面的key决定的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上面启动命令的serve不是一成不变的-是根据package-json里面的scripts的里面的key决定的"}},[t._v("#")]),t._v(" 上面启动命令的serve不是一成不变的，是根据package.json里面的scripts的里面的key决定的")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);