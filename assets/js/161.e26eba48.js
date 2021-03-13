(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{375:function(a,t,e){"use strict";e.r(t);var r=e(42),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"人物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#人物"}},[a._v("#")]),a._v(" 人物")]),a._v(" "),e("p",[a._v("人物时用于表现独立场景的演出元素，置于"),e("RouterLink",{attrs:{to:"/zh/guide/backgrounds.html"}},[a._v("背景")]),a._v(" 之上。")],1),a._v(" "),e("p",[a._v("一个角色元素由名字，外观，可见度，位置，旋转，缩放，朝向定义组成。在运行中，上述属性可改变。")]),a._v(" "),e("p",[a._v("角色配置可以通过"),e("code",[a._v("Naninovel -> Configuration -> Characters")]),a._v("菜单来配置。其他可选配置参考"),e("RouterLink",{attrs:{to:"/zh/guide/configuration.html#人物"}},[a._v("属性配置")]),a._v(" 。角色资源管理通过"),e("code",[a._v("Naninovel -> Resources -> Characters")]),a._v("管理。")],1),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/c8a4f7f987621831b4a2ecb3145a4a07.png",alt:"Add Character"}})]),a._v(" "),e("p",[a._v("如果你有大量角色需要配置，通过菜单添加会很不便你可以在"),e("code",[a._v("Resources/Naninovel/Characters")]),a._v('目录下通过拖拽至此，添加相应ID的资源。比如，你想添加ID为"Kohaku"角色的资源，\n在上述目录中直接放入Texture图片精灵，它们就会被自动配置，在脚本中就能获取到了。')]),a._v(" "),e("p",[a._v("另外你可以通过子文件夹管理相应资源。该情况下，你可以用正斜杠 ("),e("code",[a._v("/")]),a._v(")在Naninovel脚本中调用。比如，资源路径为"),e("code",[a._v("Resources/Naninovel/Characters/Kohaku/Casual/Angry")]),a._v(" 的资源，调用时为"),e("code",[a._v("Casual/Angry")]),a._v("。")]),a._v(" "),e("p",[a._v("你也可使用"),e("RouterLink",{attrs:{to:"/zh/guide/resource-providers.html#寻址资源系统"}},[a._v("可寻址资源系统")]),a._v(' 手动调用资源。你可以通过省略上述的"Resources/"部分的路径来直接调用相应资源。\n比如，如果你想使用"Kohaku"的"Happy"外观，绑定资源地址为'),e("code",[a._v("Naninovel/Characters/Kohaku/Happy")]),a._v("。注意该调用系统默认关闭，打开资源提供配置菜单的"),e("code",[a._v("Enable Addressable In Editor")]),a._v("属性来启用。")],1),a._v(" "),e("p",[a._v("在Naninovel脚本中，人物大多数由"),e("a",{attrs:{href:"/zh/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v("命令控制：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 显示Sora的默认外观")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Sora")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 显示Sora 的“Happy”外观")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Sora.Happy")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 同上，显示距离距左边框45%")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 距下边框10%，并使其看向左")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Sora.Happy")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" look:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("left")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("45,10")])])]),a._v("\n")])])]),e("h2",{attrs:{id:"姿势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#姿势"}},[a._v("#")]),a._v(" 姿势")]),a._v(" "),e("p",[a._v("每个角色都有一个名为"),e("code",[a._v("Poses")]),a._v("的属性，允许定制特定状态（姿势）。\nEach character has "),e("code",[a._v("Poses")]),a._v(" property allowing to specify named states (poses).")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/5b022d32eddb3e721ed036c96f662f5d.png",alt:""}})]),a._v(" "),e("p",[a._v("已经配置好的姿势名可被像外观名字一样用"),e("a",{attrs:{href:"/zh/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v("命令来调用预设，而不是每次通过脚本命令参数来达到效果。")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 名为`SuperAngry` 的预设姿势，用于 `Kohaku` 角色，")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 将所有的预设参数应用于该角色，")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku.SuperAngry")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 同上，但是同时使用`DropFade`过渡效果，持续3秒。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku.SuperAngry")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" transition:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("DropFade")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("3")])])]),a._v("\n")])])]),e("p",[a._v("注意，当姿势像外观一样被调用的时候，你仍然可以单独对某个参数进行重定义修改，比如：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 名为`SuperAngry` 的预设姿势，用于 `Kohaku` 角色，")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 将所有的预设参数应用于该角色，")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 除色调Tint参数外, 使用如下命令重新定义。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku.SuperAngry")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" tint:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("#ff45cb")])])]),a._v("\n")])])]),e("h2",{attrs:{id:"显示姓名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示姓名"}},[a._v("#")]),a._v(" 显示姓名")]),a._v(" "),e("p",[a._v("在角色配置菜单，你可以为特定角色设置"),e("code",[a._v("Display Name")]),a._v("即显示姓名。当设置以后，在姓名区位置显示名字就会显示该配置的名字，而不是角色的ID。该设置可以允许名字使用特殊字符和空格（ID则不行）。")]),a._v(" "),e("p",[a._v("做本地化时，使用"),e("a",{attrs:{href:"/zh/guide/managed-text"}},[a._v("托管文本")]),a._v(' 中的"CharacterNames"来配置。该文本文件，会在使用生成托管文本资源功能时创建。该配置，在相应语言内不会覆盖原本的角色数据设置。')]),a._v(" "),e("p",[a._v("你也可以将"),e("code",[a._v("Display Name")]),a._v("绑定为自定义变量，来在运行中通过Naninovel脚本动态改变这个值。按下图所示，用中括号括住相应变量名字写入配置菜单。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/9743061df462bd809afc45bff20bbb6d.png",alt:""}})]),a._v(" "),e("p",[a._v("你可以在Naninovel脚本中改变变量值，它也会随着同时改变显示姓名：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@set")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('PlayerName="Mistery')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('Man"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Player: ...")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@set")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('PlayerName="Dr.')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('Stein"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Player: You can call me Dr. Stein.")]),a._v("\n")])])]),e("p",[a._v("你也可以姓名绑定功能使用"),e("a",{attrs:{href:"/zh/api/#input",target:"_blank"}},[e("code",[a._v("@input")])]),a._v("命令来让玩家自己输入其姓名，如下：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@input")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("PlayerName")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" summary:")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Choose your name."')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Player: You can call me "),e("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{PlayerName}")]),a._v(".")]),a._v("\n")])])]),e("h2",{attrs:{id:"文本颜色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文本颜色"}},[a._v("#")]),a._v(" 文本颜色")]),a._v(" "),e("p",[a._v("当角色配置菜单中 "),e("code",[a._v("Use Character Color")]),a._v(" 属性打开，打字机文本和角色姓名，会在使用"),e("a",{attrs:{href:"/zh/api/#print",target:"_blank"}},[e("code",[a._v("@print")])]),a._v(" 命令或普通内容文本行的时候根据特定角色ID，被着色为对应的颜色。")]),a._v(" "),e("p",[a._v("以下视频为显示姓名功能和文本颜色的演示：")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/u5B5s",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("h2",{attrs:{id:"头像贴图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#头像贴图"}},[a._v("#")]),a._v(" 头像贴图")]),a._v(" "),e("p",[a._v("你可以使用"),e("a",{attrs:{href:"/zh/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v(" 命令的"),e("code",[a._v("avatar")]),a._v("参数来使用头像。在可用头像功能的打字机显示角色的时候，就会显示头像。目前，仅"),e("code",[a._v("宽屏打字机")]),a._v("和"),e("code",[a._v("对话打字机")]),a._v("支持头像显示功能。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/83c091c08846fa1cab8764a8d4dddeda.png",alt:""}})]),a._v(" "),e("p",[a._v("要使用头像，你首先需要在资源里配置相应资源并设置名字。在角色配置菜单中的"),e("code",[a._v("Avatar Resources")]),a._v("属性中完成相应配置。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/5a0f10d174aa75ed87da1b472567e40b.png",alt:""}})]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),e("p",[a._v("头像名字可以说随意取，也并不需要和已有的角色或外观姓名有关联。除了当你像想让他们自动关联显示的时候。")])]),a._v(" "),e("p",[a._v("在脚本中显示特定头像方法，如下：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharacaterId")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" avatar:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("AvatarName")])])]),a._v("\n")])])]),e("p",[a._v("要为一个角色设置默认头像，将该头像贴图资源的名字按"),e("code",[a._v("角色ID/Default")]),a._v("格式命名；比如，你要为"),e("code",[a._v("Kohaku")]),a._v("角色设置默认头像，头像贴图就命名为"),e("code",[a._v("Kohaku/Default")]),a._v("。如此操作，即使脚本里"),e("a",{attrs:{href:"/zh/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v("命令里没有定义"),e("code",[a._v("avatar")]),a._v("参数，头像也会随人物自动显示。")]),a._v(" "),e("p",[a._v("参照如上方法，可以为特定角色立绘来匹配头像，格式为"),e("code",[a._v("角色ID/立绘ID")]),a._v("，"),e("code",[a._v("立绘ID")]),a._v("为匹配立绘的ID名。")]),a._v(" "),e("p",[a._v("请注意，"),e("strong",[a._v("头像显示和角色立绘显示无关")]),a._v("，不应当将此功能用作立绘显示。立绘显示时绘制于场景之上，而头像仅仅将任意图像“注入”到打字机的图像匹配区域。")]),a._v(" "),e("p",[a._v("通过设置"),e("a",{attrs:{href:"/zh/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v("命令的 "),e("code",[a._v("visible")]),a._v(" 参数值为 "),e("code",[a._v("false")]),a._v("，可以隐藏角色，而只显示头像，如下：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharacaterId")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" visible:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n")])])]),e("p",[a._v("万一你需要频繁改变头像，而不显示角色。可以将角色配置菜单中的 "),e("code",[a._v("Auto Show On Modify")]),a._v(" 关闭。如此你就不需要每次都取修改"),e("code",[a._v("visible:false")]),a._v(" 了。")]),a._v(" "),e("h2",{attrs:{id:"说话人高亮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说话人高亮"}},[a._v("#")]),a._v(" 说话人高亮")]),a._v(" "),e("p",[a._v("当在角色配置菜单中打开时，将为说话的角色加高亮效果提示。参考如下视频：")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/gobowgagdyE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("h2",{attrs:{id:"嘴唇同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#嘴唇同步"}},[a._v("#")]),a._v(" 嘴唇同步")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/guide/characters.html#传统人物"}},[a._v("传统立绘")]),a._v(" and "),e("RouterLink",{attrs:{to:"/zh/guide/characters.html#Live2D人物"}},[a._v("Live2D")]),a._v(" 人物支持名为“嘴唇同步”的特性，允许通过合适的事件通知，来在显示文字的时候，控制角色的嘴唇动画。")],1),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/fx_YS2ZQGHI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("p",[a._v("当"),e("RouterLink",{attrs:{to:"/zh/guide/voicing.html#自动语音"}},[a._v("自动语音")]),a._v(" 功能开启时，嘴唇同步会由语音控制。另外，文字打印时也会激活该事件，在这种情况下，如果你想开始或停止该功能，（比如：在显示文字符号的时候停止嘴唇同步），使用"),e("a",{attrs:{href:"/zh/api/#lipsync",target:"_blank"}},[e("code",[a._v("@lipSync")])]),a._v("命令。")],1),a._v(" "),e("p",[a._v("参考 "),e("RouterLink",{attrs:{to:"/zh/guide/characters.html#传统人物"}},[a._v("传统立绘")]),a._v(" and "),e("RouterLink",{attrs:{to:"/zh/guide/characters.html#Live2D人物"}},[a._v("Live2D")]),a._v(" 人物的实现部分来使用此功能。")],1),a._v(" "),e("h2",{attrs:{id:"关联打字机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关联打字机"}},[a._v("#")]),a._v(" 关联打字机")]),a._v(" "),e("p",[a._v("用户可以使用"),e("code",[a._v("关联打字机")]),a._v("属性，将"),e("RouterLink",{attrs:{to:"/zh/guide/text-printers.html"}},[a._v("文本打字机")]),a._v("和人物相关联。")],1),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/50ca6b39cd7f708158678339244b1dc4.png",alt:""}})]),a._v(" "),e("p",[a._v("关联之后，程序就会自动根据人物来使用相应的打字机预设。")]),a._v(" "),e("p",[a._v("注意，"),e("a",{attrs:{href:"/zh/api/#print",target:"_blank"}},[e("code",[a._v("@print")])]),a._v("命令（在处理普通内容文本行时程序也会使用该命令），会默认将关联的打字机设为默认，并隐藏其他打字机。在关联时，"),e("a",{attrs:{href:"/zh/api/#print",target:"_blank"}},[e("code",[a._v("@print")])]),a._v("命令会自动改变其他打字机的可见，改变为相应打字机，将其设为默认。你可以通过关闭打字机元素配置菜单内的"),e("code",[a._v("Auto Default")]),a._v("属性停用该效果。停用之后，你必须手动通过"),e("a",{attrs:{href:"/zh/api/#printer",target:"_blank"}},[e("code",[a._v("@printer")])]),a._v("来切换默认打字机以及显示隐藏相应打字机。")]),a._v(" "),e("h2",{attrs:{id:"图像精灵人物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图像精灵人物"}},[a._v("#")]),a._v(" 图像精灵人物")]),a._v(" "),e("p",[a._v("图像精灵人物，是用于人物元素的最通用最简单的一种资源格式。"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/Sprites",target:"_blank",rel:"noopener noreferrer"}},[a._v("图像精灵"),e("OutboundLink")],1),a._v(" 。 用于表现人物的外观。精灵可以是贴图或其他"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/ImportingTextures",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unity支持的格式"),e("OutboundLink")],1),a._v(" 。")]),a._v(" "),e("h2",{attrs:{id:"切片精灵人物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切片精灵人物"}},[a._v("#")]),a._v(" 切片精灵人物")]),a._v(" "),e("p",[a._v("通过开源资源"),e("a",{attrs:{href:"https://github.com/Elringus/SpriteDicing",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpriteDicing"),e("OutboundLink")],1),a._v("创建 。\n"),e("code",[a._v("切片精灵人物")]),a._v("特性能够通过复用相同图像部分，来显著减少图像文件大小。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/af08d141e7a08b6a8e2ef60c07332bbf.png",alt:"Sprite Dicing"}})]),a._v(" "),e("p",[a._v("通过unity内置的"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/upm-ui.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unity package manager"),e("OutboundLink")],1),a._v(' 来安装该资源包。打开该窗口，(Window -> Package Manager)点击“+”按钮，选择"Add package from git URL"，输入地址：'),e("code",[a._v("https://github.com/Elringus/SpriteDicing.git#package")]),a._v("点击“Add”导入。参考下图来安装：")]),a._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/b54e9daa9a483d9bf7f74f0e94b2d38a.mp4",type:"video/mp4"}})])]),a._v(" "),e("p",[e("code",[a._v("切片精灵人物")]),a._v("资源包含用于人物表现的切片精灵，每个外观都由名字来切分出其包含在图集中的精灵。")]),a._v(" "),e("p",[a._v("注意，部分切片人物数据参数（单位像素pixels per unit，锚点pivot）由图集资源控制。人物配置的数值，适用于渲染实际显示的图像。当图集参数改变的时候，记得重构该图集以保证设置参数生效。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/3765726bd326bb7a8a03a653f458cd3d.png",alt:""}})]),a._v(" "),e("p",[a._v("以下视频内容为：创建和配置切分精灵图集；在已创建图集中添加新切分人物；使用Naninovel脚本控制其中人物。")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/6PdOAOsnhio",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("h2",{attrs:{id:"分层式人物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分层式人物"}},[a._v("#")]),a._v(" 分层式人物")]),a._v(" "),e("p",[a._v("分层式人物特性，允许使用多个精灵（图层）来组合人物，并可以使用Naninovel脚本在运行时，单独或是成组切换其中的图层。")]),a._v(" "),e("p",[a._v("要创建分层式人物预制体，打开菜单"),e("code",[a._v("Create -> Naninovel -> Character -> Layered")]),a._v("。进入"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/EditingInPrefabMode.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("预制体编辑模式"),e("OutboundLink")],1),a._v(" ，来制作图层。有多个图层或组会被自动创建，你可以直接使用，删除或添加你自己的资源。")]),a._v(" "),e("p",[a._v("每个预制体下的子物体上都有"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-SpriteRenderer.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("sprite renderer"),e("OutboundLink")],1),a._v(" 组件的，视为一个图层，其他的物体一组。除了规划和变换的目的意外，将图层置于组内，可以让你通过Naninovel脚本来对其中单个的图层或是打开关闭一个组内的所有图层。（稍后详细说明）")]),a._v(" "),e("p",[a._v("要隐藏部分默认显示的图层，可以通过关闭"),e("code",[a._v("sprite renderer")]),a._v("组件（非该游戏物体）实现。")]),a._v(" "),e("p",[a._v("下图所示白框线为运行时所渲染的区域大小，确保调整为合适大小来减少内存占用以及锚点的正常工作。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/4ff103c27858ac9671ba3b94ab1ade20.png",alt:""}})]),a._v(" "),e("p",[a._v("可是适当微调相应演出元素的游戏物体的尺寸。")]),a._v(" "),e("p",[a._v("在使用PS编辑美术素材时，考虑使用"),e("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.2d.psdimporter@3.0/manual/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("PSD Importer package"),e("OutboundLink")],1),a._v(" 来导入相应资源为预制体来保留图层和位置信息。记得导入的时候勾选上"),e("code",[a._v("Use Layer Grouping")]),a._v("来保留图层属性。")]),a._v(" "),e("p",[a._v("不要忘记添加在 ("),e("code",[a._v("Naninovel -> Resources -> Characters")]),a._v(')创建好的预制体，选择"Naninovel.LayeredCharacter"并把预制体拖拽到"Resource"栏。')]),a._v(" "),e("p",[a._v("要在Naninovel脚本控制分层式人物元素，像其他人物类型一样使用"),e("a",{attrs:{href:"/zh/api/#char",target:"_blank"}},[e("code",[a._v("@char")])]),a._v(" 命令。唯一区别是设置不同外观时，使用的是"),e("em",[a._v("图层组合表达式")]),a._v("而非ID，有以下三种表达式：")]),a._v(" "),e("ul",[e("li",[a._v("打开一组中的单个图层: "),e("code",[a._v("group>layer")])]),a._v(" "),e("li",[a._v("打开一个图层: "),e("code",[a._v("group+layer")])]),a._v(" "),e("li",[a._v("关闭一个图层: "),e("code",[a._v("group-layer")])])]),a._v(" "),e("p",[a._v('比如，“Miho”有一个包含三个图层的身体组，"Uniform"， "SportSuit" 和 "Pajama"。\n要开启其中的“Uniform”层关闭另外两层，使用如下命令：')]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Miho.Body>Uniform")])])]),a._v("\n")])])]),e("p",[a._v("要开启关闭一个图层而不影响同组其他层，依序使用“+”和“-”而不是“>”。你可以使用这些符号定义多个表达组合：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('; 打开glasses,关闭hat,选择 "Cool" 表情。')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharId.Head/Accessories+BlackGlasses,Head-Hat,Head/Emotions>Cool")])])]),a._v("\n")])])]),e("p",[a._v("要选择不属于任何组的属于根预制体的层，省略组别，如下：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('; "Halo" 层位于根预制体，将其关闭。')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharId.-Halo")])])]),a._v("\n")])])]),e("p",[a._v("也可以通过在合成表达式中省略图层名称来影响组中的所有图层（以及使用选择表达式时，还会影响其相邻图层）：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('; 关闭 "Body/Decoration" 组中所有层')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharId.Body/Decoration-")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 打开所有存在的图层")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharId.+")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 假定`Poses/Light` 和 `Poses/Dark` 组 (每个都有多个图层), ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 打开所有 `Light` 组内的精灵，而关闭所有 `Dark` 组内的图层。")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("CharId.Poses/Light>")])])]),a._v("\n")])])]),e("p",[a._v("以上表达式式，不仅会影响有明确写出来的子组别，而是会依次改变所有其目录下的图层。")]),a._v(" "),e("p",[a._v("当一个外观并未专门定义时（如"),e("code",[a._v("@char CharId")]),a._v("，预先没定义时），则会使用默认的外观。默认外观图层的启用状态会和预制体保持一直。")]),a._v(" "),e("p",[a._v("以下视频内容时演示如何设置分层式人物，以及如何通过naninovel脚本来控制。")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/Bl3kXrg8tiI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),e("p",[e("code",[a._v("@char Miho.Shoes>")]),a._v('命令在视频中实际上时选中的"Shoes"组（关闭所有相邻组），而不是隐藏。正确的隐藏命令为'),e("code",[a._v("@char Miho.Shoes-")]),a._v("，")])]),a._v(" "),e("p",[a._v("可以通过"),e("code",[a._v("Layered Actor Behaviour")]),a._v("组件的"),e("code",[a._v("Composition Map")]),a._v("属性，来为构成分层人物的部件进行组别统筹，使用设定表达形的key值来调用：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/ede5cde3548a3187aa714d3e140750ba.png",alt:""}})]),a._v(" "),e("p",[a._v("— 定义好的key值可以用来直接调用显示相应外观：")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 等效于同时使用 `Body>Uniform,Hair/Back>Straight,Hair/Front>Straight,Shoes>Grey`.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Miho.Uniform")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 等效于同时使用 `Hair/Back>Straight,Hair/Front>Straight`.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Miho.StraightHair")])])]),a._v("\n")])])]),e("p",[a._v('可以参照下图操作，在相应条目位置右键选择"Preview Composition"，在编辑时对编辑的表现外观进行预览。')]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/9fb0aeccf4f33245d9f975592ee86dbc.gif",alt:""}})]),a._v(" "),e("p",[a._v("注意，所有分层部件，运行时并不直接由Unity相机渲染，而是在渲染完成后填充至缓存的渲染贴图上，之后由Naninovel的相机显示出来。这样的流程能够避免深度冲突问题，并以此来支持动画的渐变特效。")]),a._v(" "),e("h2",{attrs:{id:"传统人物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传统人物"}},[a._v("#")]),a._v(" 传统人物")]),a._v(" "),e("p",[a._v("传统的人物模型应该时最被广泛使用的人物元素模板了。该类型人物基于有"),e("code",[a._v("CharacterActorBehaviour")]),a._v("组件的预制体。外观更改和其他人物参数修改，都基于"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/UnityEvents.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unity事件"),e("OutboundLink")],1),a._v(" 来进行通信，以便开发时能够让你应用并实现任何你想要的修改效果。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/9f799f4152782afb6ab86d3c494f4cc4.png",alt:""}})]),a._v(" "),e("p",[a._v("要通过模板创建通用人物预制体，请使用Create -> Naninovel -> Character -> Generic菜单。")]),a._v(" "),e("p",[a._v("要为通用人物模型设置嘴型同步特性，使用"),e("code",[a._v("CharacterActorBehaviour")]),a._v("组件上的"),e("code",[a._v("On Started Speaking")]),a._v("和"),e("code",[a._v("On Finished Speaking")]),a._v("的unity事件。当角色成为或不再是任何已打印消息的作者时（或者当消息完全显示时），将调用事件来触发任何自定义逻辑实现，例如开始或停止受控角色的嘴部动画。这类似于UI的"),e("code",[a._v("On Show")]),a._v(" 和"),e("code",[a._v("On Hide")]),a._v("事件。参考"),e("RouterLink",{attrs:{to:"/zh/guide/user-interface.html#添加自定义UI"}},[a._v("自定义UI引导")]),a._v(" 来了解其工作机制。")],1),a._v(" "),e("p",[a._v("参考以下视频来了解如何设置3D骨骼模型为传统模型，并通过"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-AnimatorController.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Animator"),e("OutboundLink")],1),a._v(" 组件来调用外观改变。")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/HPxhR0I1u2Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("p",[a._v("注意，unity的"),e("code",[a._v("Animator")]),a._v("组件如果在游戏物体同一帧进行开启/关闭触发时调用"),e("code",[a._v("SetTrigger")]),a._v(" 可能会失败。因此，你可以使用"),e("code",[a._v("GameObject.SetActive")]),a._v("方法解决可见度的修改（参考上述教程），考虑使用渲染器来开启/关闭子物体。")]),a._v(" "),e("h2",{attrs:{id:"live2d人物"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#live2d人物"}},[a._v("#")]),a._v(" Live2D人物")]),a._v(" "),e("p",[a._v("Live2D人物模型使用的是通过"),e("a",{attrs:{href:"https://www.live2d.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("Live2D Cubism"),e("OutboundLink")],1),a._v(" 2D模型动画软件创建的。")]),a._v(" "),e("p",[a._v("要是live2D模型，你需要先导入"),e("a",{attrs:{href:"https://live2d.github.io/#unity",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unity Live2D Cubism 开发SDK"),e("OutboundLink")],1),a._v(" ，参阅官方说明文档。")]),a._v(" "),e("p",[a._v("然后下载导入"),e("a",{attrs:{href:"https://github.com/Naninovel/Live2D/raw/master/NaninovelLive2D.unitypackage",target:"_blank",rel:"noopener noreferrer"}},[a._v("Live2D扩展支持包"),e("OutboundLink")],1),a._v(" 。")]),a._v(" "),e("p",[a._v("Live2D模型预制体使用时，都必须有"),e("code",[a._v("Live2DController")]),a._v("组件。外观动作调用使用的是Animator组件的"),e("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Animator.SetTrigger.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("SetTrigger"),e("OutboundLink")],1),a._v(" 命令触发。相应外观为触发名。比如，如果你想调用“Kaori”的live2D模型预制体，并想调用其名为“surprise”的触发器，使用以下命令")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kaori.Surprise")])])]),a._v("\n")])])]),e("p",[a._v("注意，以上命令只是试图去调用预制体上位于animator控制器内的"),e("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Animator.SetTrigger.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("SetTrigger"),e("OutboundLink")],1),a._v(" 内“surprise”的参数。你必须去自己手动设置好"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/Animator",target:"_blank",rel:"noopener noreferrer"}},[a._v("animator"),e("OutboundLink")],1),a._v(" 其中要使用的调用参数。")]),a._v(" "),e("div",{staticClass:"custom-block warn"},[e("p",{staticClass:"custom-block-title"},[a._v("警告")]),a._v(" "),e("p",[a._v("最新版本的Cubism-SDk是直接和"),e("code",[a._v("Animator")]),a._v("组件一起工作的。Cubism 2.x版本的表情和动作（分别导出为expression.json和pose.json文件），现在已经被"),e("a",{attrs:{href:"https://docs.live2d.com/cubism-sdk-tutorials/blendexpression",target:"_blank",rel:"noopener noreferrer"}},[a._v("弃用"),e("OutboundLink")],1),a._v(" ，也不被Naninovel的live2D扩展支持了。")])]),a._v(" "),e("p",[a._v("当"),e("code",[a._v("CubismLookController")]),a._v(" 和 "),e("code",[a._v("CubismMouthController")]),a._v("组件存在在于预制体时，"),e("code",[a._v("Live2DController")]),a._v("组件就能够控制人物的朝向以及嘴唇动画（即是嘴型同步特性）。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/498fe948bc5cbdb4dfc5ebc5437ae6b4.png",alt:""}})]),a._v(" "),e("p",[a._v("参考Live2D的说明文档获取更多细节设置：\n"),e("a",{attrs:{href:"https://docs.live2d.com/cubism-sdk-tutorials/lookat",target:"_blank",rel:"noopener noreferrer"}},[a._v("眼部追踪"),e("OutboundLink")],1),a._v(" 以及 "),e("a",{attrs:{href:"https://docs.live2d.com/cubism-sdk-tutorials/lipsync",target:"_blank",rel:"noopener noreferrer"}},[a._v("嘴型同步"),e("OutboundLink")],1),a._v(" 。")]),a._v(" "),e("p",[a._v("请注意，Live2DController在Live2D模型预制体（将Live2D模型导入Unity时会自动创建）中需要一个“可绘制”的游戏对象。控制器将在运行时根据@char命令的“ scale”参数缩放此游戏对象。因此，将忽略在编辑器中设置的任何本地缩放值。要设置Live2D预制体的初始缩放，请设置父游戏对象的缩放值"),e("a",{attrs:{href:"https://youtu.be/rw_Z69z0pAg?t=353",target:"_blank",rel:"noopener noreferrer"}},[a._v("参考该视频指引"),e("OutboundLink")],1),a._v(" 。")]),a._v(" "),e("p",[a._v("以下视频引导，包含内容为：从Cubism编辑器导出Live2D人物；配置预制体；创建简单动画状态机；通过Naninovel脚本控制人物。")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/rw_Z69z0pAg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("div",{staticClass:"custom-block example"},[e("p",{staticClass:"custom-block-title"},[a._v("例")]),a._v(" "),e("p",[a._v("参考 "),e("a",{attrs:{href:"https://github.com/Naninovel/Live2D",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub的Live2D示例"),e("OutboundLink")],1),a._v(" 来了解使用。注意其中不包含Live2D的SDK以及Naninovel相关资源。直接打开会有报错，再导入后解决报错。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);