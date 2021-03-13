(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{515:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"save-load-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save-load-system"}},[e._v("#")]),e._v(" Save-Load System")]),e._v(" "),a("p",[e._v("Game can be saved and loaded at any time by using save and load menus. User can select a save slot to use and delete any previously used slot.")]),e._v(" "),a("p",[a("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"https://i.gyazo.com/a7109097f6abbeea16d6fe773bfffb3f.mp4",type:"video/mp4"}})])]),e._v(" "),a("p",[e._v("Save slots are serialized to either "),a("code",[e._v(".json")]),e._v(" or binary files (depending on the configuration). File names, slot limit and directory name can be configured using "),a("code",[e._v("Naninovel -> Configuration -> State")]),e._v(" context menu; for available options see "),a("RouterLink",{attrs:{to:"/guide/configuration.html#state"}},[e._v("configuration guide")]),e._v(".")],1),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/f9a2462d19eb228224f1dcd5302d6b1c.png",alt:"State Configuration"}})]),e._v(" "),a("p",[e._v("In WebGL save slots are serialized using cross-browser "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Indexed_Database_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("IndexedDB API"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Menu UIs can be customized or completely replaced using "),a("RouterLink",{attrs:{to:"/guide/user-interface.html#ui-customization"}},[e._v("UI Customization")]),e._v(" feature.")],1),e._v(" "),a("p",[e._v("Naninovel provides two serialization handlers out of the box: "),a("code",[e._v("System.IO")]),e._v(" and "),a("code",[e._v("UnityEngine.PlayerPrefs")]),e._v(". Former will store the slots as separate files at "),a("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Application-persistentDataPath.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("persistentDataPath"),a("OutboundLink")],1),e._v(" and the second one will use Unity's "),a("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/PlayerPrefs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("PlayerPrefs"),a("OutboundLink")],1),e._v(" API to store the slots in the key-value database. You can select the handler in the state configuration menu. IO handlers are selected by default; consider switching to PlayerPrefs or adding a "),a("RouterLink",{attrs:{to:"/guide/state-management.html#custom-serialization-handlers"}},[e._v("custom handler")]),e._v(" in case you have issues reading/writing save data on specific platforms.")],1),e._v(" "),a("p",[e._v("For more information on how the state is managed and ways to customize it, see "),a("RouterLink",{attrs:{to:"/guide/state-management.html"}},[e._v("state management guide")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);