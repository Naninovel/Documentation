(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{527:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"visual-scripting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-scripting"}},[t._v("#")]),t._v(" Visual Scripting")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.visualscripting@latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual scripting"),s("OutboundLink")],1),t._v(" (previously known as Bolt) is a built-in package bundled by default with Unity 2021 and newer version. It enables you to create logic for games or applications with unit-based graphs that both programmers and non-programmers can use without writing code.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/ab7c9d92b32810b030aba24b4bd95405.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("First, make sure you're using a compatible Unity version (2021.1.0b1 or newer) and "),s("code",[t._v("Visual Scripting")]),t._v(" package is installed in the package manager.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/885ebb9808b369c30dfcaab19b0cee2f.png",alt:""}})]),t._v(" "),s("p",[t._v("Add "),s("code",[t._v("Elringus.Naninovel.Runtime")]),t._v(" library to the "),s("code",[t._v("Node Library")]),t._v(' list found in "Visual Scripting" project settings menu. This is required to expose engine types and APIs to the visual scripting graphs.')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/38afd2ea477fcf0921114e3847de6c85.png",alt:""}})]),t._v(" "),s("p",[t._v("The Visual Scripting doesn't automatically expose all the available types in the libraries, so we additionally need to add the required Naninovel types to the "),s("code",[t._v("Type Options")]),t._v(" list found in the same settings menu. In the example below we added "),s("code",[t._v("Engine")]),t._v(" and "),s("code",[t._v("Script Player Interface")]),t._v(", but you'll probably need more types, like the other "),s("RouterLink",{attrs:{to:"/guide/engine-services.html"}},[t._v("engine service interfaces")]),t._v(", configurations, etc.")],1),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/2e416a015d980cbedfa49d1589505e17.png",alt:""}})]),t._v(" "),s("p",[t._v("Don't forget to regenerate units after adding the libraries and types to apply the changes.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/26c7bee4798b690c4eb362ec39746dc7.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("When Naninovel library and types are added in the visual scripting settings, the engine APIs will become available in the fuzzy finder under graph view and can be used in the same way as the other Unity or third-party APIs. Below is an example on initializing the engine and playing a script. Make sure to disable "),s("code",[t._v("Initialize On Application Load")]),t._v(" and "),s("code",[t._v("Show Title UI")]),t._v(", before trying this example.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/505b019b76d568e06788b505040b36f1.png",alt:""}})]),t._v(" "),s("p",[t._v("In case you wish to send an event from a scenario script to a visual scripting graph or state machine, below is example of a "),s("RouterLink",{attrs:{to:"/guide/custom-commands.html"}},[t._v("custom command")]),t._v(", which will attempt to find a game object with the provided name and send an event with the specified name and arguments:")],1),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Commands")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UniRx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Async")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Unity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VisualScripting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommandAlias")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bolt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BroadcastBoltEvent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParameterAlias")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequiredParameter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringParameter")]),t._v(" GameObjectName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParameterAlias")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequiredParameter")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringParameter")]),t._v(" EventName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParameterAlias")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"args"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringListParameter")]),t._v(" Arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("UniTask")]),t._v(" ExecuteAsync "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CancellationToken")]),t._v(" cancellationToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" gameObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GameObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GameObjectName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gameObject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LogError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"Failed to find `')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("GameObjectName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('` game object."')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" UniTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CompletedTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        CustomEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Trigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gameObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EventName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" UniTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CompletedTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Just copy-paste the contents to a new C# script stored anywhere inside the project Assets directory and the command will automatically become available and can be used as follows:")]),t._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; Send `MyEvent` to `ExampleEvent` game object with the provided args")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@bolt")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[t._v(" object:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v("ExampleEvent")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[t._v(" name:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v("MyEvent")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[t._v(" args:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v("ExampleMessage,Script002")])])]),t._v("\n")])])]),s("p",[t._v("Below is an example graph, that, when attached to a "),s("code",[t._v("ExampleEvent")]),t._v(" game object, will print the message and start playing the specified script.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/2ac8233e33b4b5be08ec8fa8360df137.png",alt:""}})]),t._v(" "),s("div",{staticClass:"custom-block example"},[s("p",{staticClass:"custom-block-title"},[t._v("EXAMPLE")]),t._v(" "),s("p",[t._v("An example project containing all the aforementioned graphs and test scripts is available on GitHub: "),s("a",{attrs:{href:"https://github.com/Naninovel/VisualScripting",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/Naninovel/VisualScripting"),s("OutboundLink")],1),t._v(". Be aware, that Naninovel is not distributed with the project, hence compilation errors will be produced after opening it for the first time; import the package from the Asset Store to resolve the issues.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);