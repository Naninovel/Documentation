(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{506:function(a,e,t){"use strict";t.r(e);var n=t(42),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"playmaker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#playmaker"}},[a._v("#")]),a._v(" Playmaker")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://assetstore.unity.com/packages/tools/visual-scripting/playmaker-368",target:"_blank",rel:"noopener noreferrer"}},[a._v("PlayMaker"),t("OutboundLink")],1),a._v(" is a popular visual scripting tool for Unity specifically designed to be friendly for non-programmers.")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/0a5b219b059fd61c85d225e903d77857.png",alt:""}})]),a._v(" "),t("p",[a._v("Be aware, that in contrast to Bolt, where all the Naninovel's C# API is available by default, PlayMaker requires creating a special C# class for each action. This means that only a limited subset of the engine API is available out of the box when using PlayMaker. The available custom actions could also break in case Naninovel's API change.")]),a._v(" "),t("h2",{attrs:{id:"setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[a._v("#")]),a._v(" Setup")]),a._v(" "),t("p",[a._v("Install PlayMaker following instructions from the "),t("a",{attrs:{href:"https://hutonggames.fogbugz.com/default.asp?W11",target:"_blank",rel:"noopener noreferrer"}},[a._v("official manual"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("Download and import "),t("a",{attrs:{href:"https://github.com/Naninovel/PlayMaker/raw/master/NaninovelPlayMaker.unitypackage",target:"_blank",rel:"noopener noreferrer"}},[a._v("PlayMaker extension package"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v('The custom Naninovel actions should appear in the PlayMaker actions browser under "Naninovel" category.')]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/a40b0b7b21c73d3b5f64b005085198ea.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("p",[a._v("The following video demonstrates using PlayMaker FSM (finite state machine) to initialize Naninovel engine, preload and play a scenario script.")]),a._v(" "),t("p"),t("div",{staticClass:"video-container"},[t("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/N856vi18XVU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t("p"),a._v(" "),t("h3",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[a._v("#")]),a._v(" Events")]),a._v(" "),t("p",[a._v("Some of the essential Naninovel events can be automatically routed to PlayMaker FSMs. For this, create a global "),t("a",{attrs:{href:"https://hutonggames.fogbugz.com/default.asp?W148",target:"_blank",rel:"noopener noreferrer"}},[a._v("user event"),t("OutboundLink")],1),a._v(" with an appropriate name and use it inside an FSM. Following are the available event names:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("Naninovel/Engine/OnInitialized")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/ScriptPlayer/OnPlay")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/ScriptPlayer/OnStop")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/StateManager/OnGameSaveStarted")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/StateManager/OnGameSaveFinished")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/StateManager/OnGameLoadStarted")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/StateManager/OnGameLoadFinished")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/TextPrinterManager/OnPrintTextStarted")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/TextPrinterManager/OnPrintTextFinished")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/LocalizationManager/OnLocaleChanged")])])]),a._v(" "),t("p",[a._v("It's also possible to broadcast custom PlayMaker events from naninovel scripts using "),t("code",[a._v("@playmaker")]),a._v(" command:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@playmaker")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("EventName")])])]),a._v("\n")])])]),t("p",[a._v('— will invoke a global user event named "EventName" in all the active FSMs on scene.')]),a._v(" "),t("p",[a._v("The command also allows sending events to specific FSMs by using "),t("code",[a._v("fsm")]),a._v(" and "),t("code",[a._v("object")]),a._v(" parameters. The first parameter allows specifying FSM names, which should receive the event, eg:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@playmaker")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("EventName")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" fsm:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Fsm1,Fsm2")])])]),a._v("\n")])])]),t("p",[a._v('— will invoke an event named "EventName" for FSMs with name "Fsm1" and "Fsm2".')]),a._v(" "),t("p",[a._v("When "),t("code",[a._v("object")]),a._v(" parameter is specified, the event will only be sent to FSMs, that are applied to game objects, which has corresponding names, eg:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@playmaker")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("EventName")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" object:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Obj1,Obj2")])])]),a._v("\n")])])]),t("p",[a._v('— will invoke an event named "EventName" for all the FSMs, that are attached to game objects with names "Obj1" and "Obj2".')]),a._v(" "),t("p",[a._v("You can as well combine "),t("code",[a._v("fsm")]),a._v(" and "),t("code",[a._v("object")]),a._v(" parameters to farther filter the FSMs, that should receive the event.")]),a._v(" "),t("h3",{attrs:{id:"global-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-variables"}},[a._v("#")]),a._v(" Global Variables")]),a._v(" "),t("p",[a._v("It's possible to access a global PlayMaker variable in Naninovel scripts with the following custom "),t("RouterLink",{attrs:{to:"/guide/script-expressions.html#expression-functions"}},[a._v("expression functions")]),a._v(" available in the extension package:")],1),a._v(" "),t("ul",[t("li",[t("code",[a._v('GetPlayMakerGlobalVariable("variableName")')]),a._v(' — retrieves a variable of a simple type (int, float, string, etc) with the "variableName" name')]),a._v(" "),t("li",[t("code",[a._v('GetPlayMakerGlobalArray("variableName", arrayIndex)')]),a._v(' — retrieves a value stored at "arrayIndex" index of an array variable with the "variableName" name')])]),a._v(" "),t("p",[a._v('Given you have a "Score" integer and "FinishedRoutes" bool array global PlayMaker variables, you can use them in Naninovel scripts as follow:')]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Felix: My score is "),t("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v('{GetPlayMakerGlobalVariable("Score")}')]),a._v(".")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@if")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('GetPlayMakerGlobalArray("FinishedRoutes",2)')])])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("    Third route (second array index) is completed.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@else")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("    Not yet.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@endif")])]),a._v("\n")])])]),t("p",[a._v("To assign a PlayMaker's global variable value from Naninovel script, use "),t("code",[a._v("@pset")]),a._v(" command as following:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('; Assign "10" to PlayMaker\'s integer global variable named "Score"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@pset")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" name:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Score")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" value:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("10")])])]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('; Assign "Banana" at 10th index of "Groceries" PlayMaker\'s global array of strings')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@pset")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" name:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Groceries")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" index:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" value:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Banana")])])]),a._v("\n")])])]),t("h2",{attrs:{id:"ide-extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ide-extension"}},[a._v("#")]),a._v(" IDE Extension")]),a._v(" "),t("p",[a._v("To add IDE support for playmaker-specific commands distributed with the extension package (eg, "),t("code",[a._v("@playmaker")]),a._v("), see the "),t("RouterLink",{attrs:{to:"/guide/custom-commands.html#ide-metadata"}},[a._v("guide on generating metadata for custom commands")]),a._v(".")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);