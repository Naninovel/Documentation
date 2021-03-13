(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{500:function(t,a,e){"use strict";e.r(a);var n=e(42),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"inventory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inventory"}},[t._v("#")]),t._v(" Inventory")]),t._v(" "),e("p",[t._v("While an inventory system is a bit out of scope for VN-style games, we had a lot of requests and questions on how to integrate one with Naninovel. The "),e("a",{attrs:{href:"https://github.com/Naninovel/Inventory",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub project"),e("OutboundLink")],1),t._v(" serves as both an example for creating and integrating an inventory with the engine and an extension, which you can easily setup on top of a Naninovel installation.")]),t._v(" "),e("p",[t._v("Example project shows how to make a custom inventory UI with grid layout, pagination and drag-drop window, add custom engine service and related configuration menu, add input bindings, use state outsourcing, author custom scenario commands and expression functions.")]),t._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/86c577f007daf4ec5d79c0e91db7bc10.mp4",type:"video/mp4"}})])]),t._v(" "),e("p",[t._v("You can "),e("a",{attrs:{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("clone the project repository with a Git client"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://github.com/Naninovel/Inventory/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("download it as a zip archive"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warn"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Naninovel package is not distributed with the project, hence compilation errors will be produced after opening it for the first time; import Naninovel from the Asset Store to resolve the issues.")])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("To set up inventory extension on top of an existing Unity project use "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/upm-ui.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UPM"),e("OutboundLink")],1),t._v(" to install the package via the following git URL: "),e("code",[t._v("https://github.com/Naninovel/Inventory.git?path=Assets/NaninovelInventory")]),t._v(" or download and import "),e("a",{attrs:{href:"https://github.com/Naninovel/Inventory/raw/master/NaninovelInventory.unitypackage",target:"_blank",rel:"noopener noreferrer"}},[t._v("NaninovelInventory.unitypackage"),e("OutboundLink")],1),t._v(" manually.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/b54e9daa9a483d9bf7f74f0e94b2d38a.gif",alt:""}})]),t._v(" "),e("p",[t._v("After importing the package, add "),e("code",[t._v("Elringus.NaninovelInventory.Runtime")]),t._v(" and "),e("code",[t._v("Elringus.NaninovelInventory.Editor")]),t._v(" records to the "),e("code",[t._v("Type Assemblies")]),t._v(" list property found in the engine configuration menu and restart Unity editor (otherwise the custom implementation types under the assemblies won't be accessible by Naninovel).")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/4c16b9f9b71fe3d6f61159fe9d4860f4.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("To create a pre-made inventory UI from template, use "),e("code",[t._v("Create -> Naninovel -> Inventory -> Inventory UI")]),t._v(" asset context menu. Then add the prefab to the Naninovel UI resources via "),e("code",[t._v("Naninovel -> Resources -> UI")]),t._v(" editor menu. Once added, the UI can be shown/hidden like all the other UIs with "),e("a",{attrs:{href:"/api/#showui",target:"_blank"}},[e("code",[t._v("@showUI")])]),t._v(" and "),e("a",{attrs:{href:"/api/#hideui",target:"_blank"}},[e("code",[t._v("@hideUI")])]),t._v(" commands.")]),t._v(" "),e("p",[t._v("The Inventory UI component has "),e("code",[t._v("Capacity")]),t._v(" property, where you can change number of slots in the inventory. Slot grid is configured (slot number and layout, slots per page, etc) via "),e("code",[t._v("Content/InventoryGrid")]),t._v(" game object. Window drag-drop behavior can be configured (disabled) via "),e("code",[t._v("Drag Drop")]),t._v(" component attached to "),e("code",[t._v("Content")]),t._v(" game object.")]),t._v(" "),e("p",[t._v("Inventory item prefabs can be created with "),e("code",[t._v("Create -> Naninovel -> Inventory -> Inventory Item")]),t._v(" asset context menu. The item prefabs will then need to be assigned as inventory resources via "),e("code",[t._v("Naninovel -> Resources -> Inventory")]),t._v(" editor menu.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/6062f8a433a47306f582a849c7bbf57e.png",alt:""}})]),t._v(" "),e("p",[t._v("In case you have a lot of items and it's inconvenient to assign them via editor menu, it's possible to just drop them at "),e("code",[t._v("Resources/Naninovel/Inventory")]),t._v(" folder and they'll automatically be exposed to the engine. You can additionally organize them with sub-folders, if you wish; in this case use forward slashes ("),e("code",[t._v("/")]),t._v(") when referencing them in naninovel scripts. Eg, item stored as "),e("code",[t._v("Resources/Naninovel/Inventory/Armor/FullPlate.prefab")]),t._v(" can be referenced in scripts as "),e("code",[t._v("Armor/FullPlate")]),t._v(".")]),t._v(" "),e("p",[t._v("It's also possible to use "),e("RouterLink",{attrs:{to:"/guide/resource-providers.html#addressable"}},[t._v("addressable asset system")]),t._v(' to manually expose the resources. To expose an asset, assign address equal to the path you\'d use to expose it via the method described above, except omit the "Resources/" part. Eg, to expose a "FullPlate.prefab" item, assign the prefab asset following address: '),e("code",[t._v("Naninovel/Inventory/FullPlate")]),t._v(". Be aware, that addressable provider is not used in editor by default; you can allow it by enabling "),e("code",[t._v("Enable Addressable In Editor")]),t._v(" property in resource provider configuration menu.")],1),t._v(" "),e("p",[t._v("Each item has a "),e("code",[t._v("Stack Count Limit")]),t._v(" property to limit how much items of this type can be stacked in a single inventory slot and a "),e("code",[t._v("On Item Used")]),t._v(" Unity event, which is invoked when the item is used (either via "),e("code",[t._v("@useItem")]),t._v(" command or when user clicks on the item in the inventory). Below is an example on how you can setup the event with "),e("code",[t._v("Play Script")]),t._v(" component to remove the item once it used, spawn a glitch special effect and print a text message.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/010a9ba35db607ba46d78eda3513f678.png",alt:""}})]),t._v(" "),e("p",[t._v("You can add items to the inventory with "),e("code",[t._v("@addItem")]),t._v(" command and remove with "),e("code",[t._v("@removeItem")]),t._v(" (or "),e("code",[t._v("@removeItemAt")]),t._v(", "),e("code",[t._v("@removeAllItems")]),t._v("). Item IDs are equal to the item prefab names. Inventory slot IDs are equal to the grid slot indexes (eg, first slot is 0, second is 1, etc).")]),t._v(" "),e("p",[e("code",[t._v("ItemExist()")]),t._v(" and "),e("code",[t._v("ItemCount()")]),t._v(" custom "),e("RouterLink",{attrs:{to:"/guide/script-expressions.html#expression-functions"}},[t._v("expression functions")]),t._v(" to check wither an items exist in inventory and number of existing items are also available for convenience.")],1),t._v(" "),e("p",[t._v("Below is a script from the example project:")]),t._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token label regex"}},[t._v("# Start")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[t._v("Select an action."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[t._v("skipInput")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("]")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[t._v('"Pick up sword"')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[t._v(" if:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v("!ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[t._v('"Sword"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[t._v(" do:")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[t._v('"@addItem Sword, @goto .Adventure"')])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[t._v('"Pick up armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[t._v(" if:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v("!ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[t._v('"Armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[t._v(" do:")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[t._v('"@addItem Armor, @goto .Adventure"')])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[t._v('"Adventure awaits, venture forth!"')])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@stop")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token label regex"}},[t._v("# Adventure")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@if")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v('ItemExist("Sword")')])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[t._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@set")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v('monstersSlayed="')])]),e("span",{pre:!0,attrs:{class:"token expression selector"}},[t._v('{ItemExist("Armor") ? Random(3,5) : 2}')]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v('"')])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[t._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@addItem")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v("Food")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[t._v(" amount:")])]),e("span",{pre:!0,attrs:{class:"token expression selector"}},[t._v("{monstersSlayed}")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[t._v("\tYou've encountered and slayed "),e("span",{pre:!0,attrs:{class:"token expression selector"}},[t._v("{monstersSlayed}")]),t._v(" monsters with your sword."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v("!ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string"}},[t._v('"Armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("]")])]),t._v(" You could've been more productive with an armor, though."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[t._v("endif")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("]")])]),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[t._v("i")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("]")])]),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[t._v("showUI")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v("Inventory")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[t._v("wait:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("]")])]),t._v(" Check your inventory for the loot!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[t._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@goto")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(".Start")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@else")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[t._v("\tBut you don't have a weapon! You've been beaten by the monsters."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v("ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string"}},[t._v('"Armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("]")])]),t._v(" At least it didn't hurt that much, thanks to the armor."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[t._v("endif")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[t._v("]")])]),t._v(" Let's prepare better next time.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[t._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@goto")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[t._v(".Start")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@endif")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);