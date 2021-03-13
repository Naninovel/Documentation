(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{474:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"custom-build-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#custom-build-environment"}},[t._v("#")]),t._v(" Custom Build Environment")]),t._v(" "),n("p",[t._v("When building the project using editor's "),n("a",{attrs:{href:"https://docs.unity3d.com/Manual/BuildSettings.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("build menu"),n("OutboundLink")],1),t._v(", Naninovel automatically executes additional pre- and post-processing procedures. Those procedures, among other things, include ensuring that all the resources assigned via Naninovel's configuration menus (eg, script documents, character appearances, BGM and SFX clips, etc) are included to the build.")]),t._v(" "),n("p",[t._v("In case you're using a custom build environment (eg, "),n("a",{attrs:{href:"https://unity3d.com/unity/features/cloud-build",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cloud Build"),n("OutboundLink")],1),t._v(" or starting the build via custom scripts or from the command line) you have to manually invoke "),n("code",[t._v("Naninovel.BuildProcessor.PreprocessBuild(BuildPlayerOptions)")]),t._v(" and "),n("code",[t._v("Naninovel.BuildProcessor.PostprocessBuild()")]),t._v(" static methods before and after the build respectively.")]),t._v(" "),n("p",[t._v("Below is an example of Cloud Build custom build processing script, which invokes the required Naninovel processing methods. Consult the "),n("a",{attrs:{href:"https://docs.unity3d.com/Manual/UnityCloudBuildPreAndPostExportMethods.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official service docs"),n("OutboundLink")],1),t._v(" on how to setup the processing scripts.")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomBuildProcessor")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token preprocessor property"}},[t._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("if")]),t._v(" UNITY_CLOUD_BUILD")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PreExport")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnityEngine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CloudBuild"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BuildManifestObject")]),t._v(" manifest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("UnityEditor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BuildPlayerOptions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" cloudBuildTargetName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" manifest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token generic-method"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetValue")]),n("span",{pre:!0,attrs:{class:"token generic class-name"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cloudBuildTargetName"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToLower")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cloudBuildTargetName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Contains")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"windows"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" cloudBuildTargetName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Contains")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"64"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UnityEditor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BuildTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StandaloneWindows64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cloudBuildTargetName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Contains")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"windows"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UnityEditor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BuildTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StandaloneWindows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cloudBuildTargetName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Contains")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UnityEditor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BuildTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cloudBuildTargetName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Contains")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webgl"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UnityEditor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BuildTarget"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebGL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("System"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ArgumentException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token interpolation-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"Unhandled cloudBuildTargetName: ')]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("cloudBuildTargetName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n        Naninovel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BuildProcessor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PreprocessBuild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token preprocessor property"}},[t._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token return-type class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PostExport")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" exportPath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Naninovel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BuildProcessor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PostprocessBuild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("In case you're using you own custom build handler, which supposed to be triggered with the editor's build menu, it's possible to disable the Naninovel's handler by disabling "),n("code",[t._v("Enable Build Processing")]),t._v(' property in the "Resource Provider" configuration menu. When enabling or disabling the property, restart Unity editor in order for the change to take effect.')])])}),[],!1,null,null,null);s.default=e.exports}}]);