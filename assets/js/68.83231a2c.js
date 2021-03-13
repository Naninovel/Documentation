(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{555:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"custom-script-parser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-script-parser"}},[t._v("#")]),t._v(" Custom Script Parser")]),t._v(" "),e("p",[t._v("Script parsing is a process of transforming source script text (contained in .nani files) into data structures, which then used to control the game flow. For example, parser will transform "),e("code",[t._v("@hide Kohaku")]),t._v(" text line in naninovel script file into "),e("code",[t._v("HideActor")]),t._v(" command with "),e("code",[t._v("ActorId")]),t._v(' parameter set to "Kohaku".')]),t._v(" "),e("p",[t._v("It's possible to tweak or even completely change the way parsing behaves with a custom script parser implementation. Akin to other custom implementations, it's added simply by creating a new C# class, which implements a specific interface, in this case "),e("code",[t._v("IScriptParser")]),t._v(".")]),t._v(" "),e("p",[t._v("Script parser can be selected in scripts configuration menu with "),e("code",[t._v("Script Parser")]),t._v(" property:")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/12a03e71e66d1fb0901317e380c9694e.png",alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("通知")]),t._v(" "),e("p",[t._v("After switching script parser in the configuration, it's required to re-import script assets (right-click folder containing the assets and choose "),e("code",[t._v("Reimport")]),t._v(") in order for the changes to take effect.")])]),t._v(" "),e("p",[t._v("Below is an example of a custom parser, which automatically inserts wait commands after each "),e("code",[t._v("...")]),t._v(" found in the source script text.")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Collections"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Generic")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomParser")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScriptParser")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Script")]),t._v(" ParseText "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" scriptName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" scriptText"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ICollection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ScriptParseError"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" errors "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        scriptText "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scriptText"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"...[wait 1]"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("base")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParseText")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scriptName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" scriptText"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("When the parser is selected and a "),e("code",[t._v("...")]),t._v(" is printed in the game, a one-second delay will automatically be added, even though it's not explicitly assigned in the script text. Be aware, that this naive implementation is just for demo purpose. In real project you'd rather modify generic text sub-parser to make sure this only affect the printed text and/or use regex for a more precise matching.")]),t._v(" "),e("p",[t._v("Notice, that instead of implementing "),e("code",[t._v("IScriptParser")]),t._v(" interface from scratch, the example parser above is inherited from built-in parser and overrides one of its methods. You can further tweak the built-in parser this way, overriding sub-parsers used for comments, labels, command and generic text lines. For example, you can create a custom generic text line sub-parser and override it like this:")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomParser")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token type-list"}},[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScriptParser")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("GenericTextLineParser")]),t._v(" GenericTextLineParser "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CustomGenericLineParser")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block example"},[e("p",{staticClass:"custom-block-title"},[t._v("例")]),t._v(" "),e("p",[t._v("Find example of "),e("code",[t._v("CustomGenericLineParser")]),t._v(" implementation that extracts a number from author ID and modifies consequent print commands to control reveal speed in the GitHub project: "),e("a",{attrs:{href:"https://github.com/Naninovel/CustomParser",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/Naninovel/CustomParser"),e("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);s.default=n.exports}}]);