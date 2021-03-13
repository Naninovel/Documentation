(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{441:function(a,e,t){"use strict";t.r(e);var r=t(42),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"可解锁物件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可解锁物件"}},[a._v("#")]),a._v(" 可解锁物件")]),a._v(" "),t("p",[a._v("可解锁功能允许管理物件，有持久化记录解锁或未解锁状态。该功能有多种使用场景，比如CG和影片的解锁，成就，提示或是其他游戏中玩家达成某些条件后需要激活或解锁的系统。")]),a._v(" "),t("p",[a._v("每个可解锁物件都有一个字符串id和布尔值构成，表示该物件是否解锁。在naninovel脚本中使用 "),t("a",{attrs:{href:"/api/#unlock",target:"_blank"}},[t("code",[a._v("@unlock")])]),a._v(" 和 "),t("a",{attrs:{href:"/api/#lock",target:"_blank"}},[t("code",[a._v("@lock")])]),a._v(" 命令跟物件ID来解锁或加锁物件，比如：")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@unlock")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("SecretAchievement")])])]),a._v("\n")])])]),t("p",[a._v("— 会解锁物件 "),t("code",[a._v("SecretAchievement")])]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@lock")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("SecretAchievement")])])]),a._v("\n")])])]),t("p",[a._v("— 会为该物件重新加密，变为未解锁状态")]),a._v(" "),t("p",[a._v("可解锁物件状态存储于 "),t("RouterLink",{attrs:{to:"/zh/guide/state-management.html#全局状态"}},[a._v("全局状态")]),a._v(" 和当前游戏进度无关。比如，如果你解锁了某个物件，在你开始新游戏或是加载另一个存档时，该物件也不会变为未解锁状态。")],1),a._v(" "),t("p",[a._v("要将某个"),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-GameObject.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("游戏物体"),t("OutboundLink")],1),a._v(" 设置为可解锁物件，使用 "),t("code",[a._v("UnlockableTrigger")]),a._v(" 组件：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/9e92d5296e5f07d68ce6122ccb1da34a.png",alt:""}})]),a._v(" "),t("p",[t("code",[a._v("Unlockable Item Id")]),a._v(" 设置物件ID，并设置解锁时的相应事件。以上图为例，使 "),t("code",[a._v("SecretAchievement")]),a._v(" 游戏物体在解锁时变为激活状态，反之亦然。")]),a._v(" "),t("p",[a._v("在C#中你可以使用"),t("code",[a._v("UnlockableManager")]),a._v(" "),t("RouterLink",{attrs:{to:"/zh/guide/engine-services.html"}},[a._v("引擎服务")]),a._v(" 获取可解锁物件。")],1),a._v(" "),t("h2",{attrs:{id:"可解锁资源配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可解锁资源配置"}},[a._v("#")]),a._v(" 可解锁资源配置")]),a._v(" "),t("p",[a._v("在配置菜单下 ("),t("code",[a._v("Naninovel -> Configuration -> Unlockables")]),a._v(")，可找到资源管理器，可以将任意资源设置为可解锁物件。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/17fa198861ed72de3ab1f9dc6b02b3d8.png",alt:""}})]),a._v(" "),t("p",[a._v("该资源配置被用作内建系统使用，比如"),t("RouterLink",{attrs:{to:"/zh/guide/unlockable-items.html#CG画廊"}},[a._v("CG画廊")]),a._v(" 。你可以将其用于你自己的自定义系统。")],1),a._v(" "),t("h2",{attrs:{id:"cg画廊"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cg画廊"}},[a._v("#")]),a._v(" CG画廊")]),a._v(" "),t("p",[a._v("使用CG画廊功能，可以将任意资源在游戏内设置为可解锁物件，之后可以在标题画面的 "),t("code",[a._v("ICGGalleryUI")]),a._v(" UI查看。")]),a._v(" "),t("p"),t("div",{staticClass:"video-container"},[t("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/wkZeszk6gm0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t("p"),a._v(" "),t("p",[a._v("默认情况，所有添加到"),t("RouterLink",{attrs:{to:"/zh/guide/unlockable-items.html#可解锁资源配置"}},[a._v("可解锁资源管理器")]),a._v(" 带有前缀"),t("code",[a._v("CG")]),a._v(" 的资源，和 "),t("code",[a._v("MainBackground")]),a._v(" 元素内的"),t("RouterLink",{attrs:{to:"/zh/guide/backgrounds.html"}},[a._v("背景")]),a._v(" 精灵，都会被视为可解锁物件。")],1),a._v(" "),t("p",[a._v("要添加新的资源到CG画廊，可以在已有主背景资源路径前添加 "),t("code",[a._v("CG")]),a._v(" ，如下所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/83a6eff3f91c05027ba1fbc5098e03c2.png",alt:""}})]),a._v(" "),t("p",[a._v("— 或者在"),t("code",[a._v("Naninovel -> Resources -> Unlockables")]),a._v("内使用资源管理器单独添加资源，如下所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/236bddfd0a02c18b94153cfb7189a877.png",alt:""}})]),a._v(" "),t("p",[a._v("两种方式均可，之后就可以使用 "),t("a",{attrs:{href:"/zh/api/#unlock",target:"_blank"}},[t("code",[a._v("@unlock")])]),a._v(" 和 "),t("a",{attrs:{href:"/zh/api/#lock",target:"_blank"}},[t("code",[a._v("@lock")])]),a._v(" 命令控制了。")]),a._v(" "),t("p",[a._v("比如，要解锁上图的 "),t("code",[a._v("CG/Map")]),a._v(" 物件，使用下列命令：")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@unlock")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CG/Map")])])]),a._v("\n")])])]),t("p",[a._v("如果你用了两种方式来添加可解锁物件，可解锁物件管理器内的资源将先在CG画廊显示。可以改变该设置，通过修改"),t("code",[a._v("Naninovel/Prefabs/DefaultUI/ICGGalleryUI.CGGalleryPanel")]),a._v("路径下的内置CG画廊UI预制体的 "),t("code",[a._v("CG Gallery Panel")]),a._v(" 脚本的 "),t("code",[a._v("Cg Sources")]),a._v(" 参数，该脚本用于检索实际相关资源。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/c62c69eea8d6b1147aacb178dcaa9347.png",alt:""}})]),a._v(" "),t("p",[a._v("当有可解锁物件添加成功时（无论是否解锁），标题的按钮就会变为可用状态，可点击进行浏览。")]),a._v(" "),t("p",[a._v("你可以使用"),t("RouterLink",{attrs:{to:"/zh/guide/user-interface.html#UI自定义"}},[a._v("自定义UI")]),a._v(" 修改或替换内置"),t("code",[a._v("ICGGalleryUI")]),a._v(" UI。")],1),a._v(" "),t("h2",{attrs:{id:"提示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[a._v("#")]),a._v(" 提示")]),a._v(" "),t("p",[a._v("可解锁提示系统，允许通过本地"),t("RouterLink",{attrs:{to:"/zh/guide/managed-text.html"}},[a._v("托管文本")]),a._v(" 来设置一套本地化文本记录。这些记录可以在之后的游戏中解锁，并通过标题菜单和游戏中的文本打字机的控制面板按钮打开名为"),t("code",[a._v("ITipsUI")]),a._v(" 的UI查看。")],1),a._v(" "),t("p",[a._v("该系统可用于游戏内置的词典/百科/成就等系统。")]),a._v(" "),t("p"),t("div",{staticClass:"video-container"},[t("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/CRZuS1u_J4c",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t("p"),a._v(" "),t("p",[a._v("在托管文本资源路径创建名为 "),t("code",[a._v("Tips.txt")]),a._v(" 的"),t("RouterLink",{attrs:{to:"/zh/guide/managed-text.html"}},[a._v("托管文本")]),a._v("("),t("code",[a._v("Resources/Naninovel/Text")]),a._v("为默认路径) 每行，代表一个独立的提示。一行的内容由，ID接冒号，提示标题，类别（可选），描述构成，中间由("),t("code",[a._v("|")]),a._v(")隔开，如下：")],1),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Tip1ID: Tip 1 Title | Tip 1 Category | Tip 1 Description\nTip2ID: Tip 2 Title || Tip 2 Description\nTip3ID: Tip 3 Title \nTip4ID: Tip 4 Title | Tip 4 Category |\n...\n")])])]),t("p",[a._v("你可以使 "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/StyledText.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("富文本标记"),t("OutboundLink")],1),a._v(" 并在提示的描述部分从插入 ("),t("code",[a._v("\\n")]),a._v(") 。")]),a._v(" "),t("p",[a._v("当 "),t("code",[a._v("Tips.txt")]),a._v(' 托管文本至少有一条记录时，标题菜单和控制面板的 "TIPS" 按钮就会显示出来，可通过它打开相应浏览界面。\nWhen there is at least one tip record in the '),t("code",[a._v("Tips.txt")]),a._v(' managed text document, "TIPS" button will appear in the main menu and control panels, leading to the tips browser.')]),a._v(" "),t("p",[a._v("使用"),t("a",{attrs:{href:"/zh/api/#unlock",target:"_blank"}},[t("code",[a._v("@unlock")])]),a._v(" 和 "),t("a",{attrs:{href:"/zh/api/#lock",target:"_blank"}},[t("code",[a._v("@lock")])]),a._v(" 命令来控制提示的解锁和加锁（在脚本中ID前始终要加上 "),t("code",[a._v("Tips/")]),a._v(" 前缀），如下为解锁ID为 "),t("code",[a._v("Tip1ID")]),a._v(" 的提示的示例：")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@unlock")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Tips/Tip1ID")])])]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);