(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{540:function(a,t,e){"use strict";e.r(t);var s=e(42),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"インベントリ"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#インベントリ"}},[a._v("#")]),a._v(" インベントリ")]),a._v(" "),e("p",[a._v("インベントリシステムはビジュアルノベルスタイルのゲームでは少し範囲外ですが、Naninovelで活用する方法について多くの問合せがありました。"),e("a",{attrs:{href:"https://github.com/Naninovel/Inventory",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHubプロジェクト"),e("OutboundLink")],1),a._v(" には、インベントリをエンジンや拡張機能として作成し統合する例があります。Naninovel上で簡単にセットアップできます。")]),a._v(" "),e("p",[a._v("サンプルプロジェクトは、グリッドレイアウト、ページネーション、ドラッグドロップウィンドウといったカスタムインベントリUIを作成する方法、カスタムエンジンサービスと関連するコンフィグメニューを追加する方法、入力バインディングを追加する方法、ステートのアウトソーシングを使用する方法、カスタムシナリオコマンドと式関数を作成する方法を示しています。")]),a._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/86c577f007daf4ec5d79c0e91db7bc10.mp4",type:"video/mp4"}})])]),a._v(" "),e("p",[e("a",{attrs:{href:"https://help.github.com/ja/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[a._v("Git clientでリポジトリをクローン"),e("OutboundLink")],1),a._v(" するか "),e("a",{attrs:{href:"https://github.com/Naninovel/Demo/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("zipファイルをダウンロード"),e("OutboundLink")],1),a._v(" することができます。")]),a._v(" "),e("div",{staticClass:"custom-block warn"},[e("p",{staticClass:"custom-block-title"},[a._v("警告")]),a._v(" "),e("p",[a._v("プロジェクトに Naninovel パッケージは含まれないため、初めて開く際はコンパイルエラーが発生します。問題を解決するには、アセットストアから Naninovel をインポートします。")])]),a._v(" "),e("h2",{attrs:{id:"インストール"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#インストール"}},[a._v("#")]),a._v(" インストール")]),a._v(" "),e("p",[a._v("既存のUnityプロジェクトの上にインベントリ拡張機能を設定するには、"),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/upm-ui.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("UPM"),e("OutboundLink")],1),a._v(" を使用して、次のgit URL経由でパッケージをインストールします: "),e("code",[a._v("https://github.com/Naninovel/Inventory.git?path=Assets/NaninovelInventory")]),a._v(" または"),e("a",{attrs:{href:"https://github.com/Naninovel/Inventory/raw/master/NaninovelInventory.unitypackage",target:"_blank",rel:"noopener noreferrer"}},[a._v("NaninovelInventory.unitypackage"),e("OutboundLink")],1),a._v(" を手動でダウンロードしてインポートします。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/b54e9daa9a483d9bf7f74f0e94b2d38a.gif",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"使い方"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使い方"}},[a._v("#")]),a._v(" 使い方")]),a._v(" "),e("p",[a._v("テンプレートから既製のインベントリUIを作成するには、アセットコンテキストメニューの "),e("code",[a._v("Create -> Naninovel -> Inventory -> Inventory UI")]),a._v(" を使用します。次にエディターメニューの "),e("code",[a._v("Naninovel -> Resources -> UI")]),a._v(" から、プレハブをNaninovel UIリソースに追加します。追加すると、"),e("a",{attrs:{href:"/api/#showui",target:"_blank"}},[e("code",[a._v("@showUI")])]),a._v(" と "),e("a",{attrs:{href:"/api/#hideui",target:"_blank"}},[e("code",[a._v("@hideUI")])]),a._v(" コマンドで、他のすべてのUIと同様にUIを表示/非表示にすることができます。")]),a._v(" "),e("p",[a._v("インベントリUIコンポーネントには "),e("code",[a._v("Capacity")]),a._v(" プロパティがあり、インベントリのスロット数を変更できます。スロットグリッドは、 "),e("code",[a._v("Content/InventoryGrid")]),a._v(" ゲームオブジェクトで設定します（スロット番号とレイアウト、ページごとのスロットなど）。ウィンドウのドラッグドロップ動作は、"),e("code",[a._v("Content")]),a._v("ゲームオブジェクトに紐づいた "),e("code",[a._v("Drag Drop")]),a._v(" コンポーネントで設定（無効化）できます。")]),a._v(" "),e("p",[a._v("インベントリアイテムプレハブは、アセットコンテキストメニューの "),e("code",[a._v("Create -> Naninovel -> Inventory -> Inventory Item")]),a._v(" で作成できます。アイテムのプレハブは、エディターメニュー "),e("code",[a._v("Naninovel -> Resources -> Inventory")]),a._v(" からインベントリリソースとして割り当てる必要があります。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/6062f8a433a47306f582a849c7bbf57e.png",alt:""}})]),a._v(" "),e("p",[a._v("大量のアイテムがありエディターメニューから割り当てるのが大変な場合は、"),e("code",[a._v("Resources/Naninovel/Inventory")]),a._v(" フォルダーにドロップするだけで自動的にスクリプトで使用できるようになります。必要に応じて、さらにサブフォルダで整理することもできます。この場合、naninovelスクリプトで参照する場合はスラッシュ ("),e("code",[a._v("/")]),a._v(") を使用します。たとえば、"),e("code",[a._v("Resources/Naninovel/Inventory/Armor/FullPlate.prefab")]),a._v(" として保存されたアイテムは、"),e("code",[a._v("Armor/FullPlate")]),a._v(" としてスクリプトから参照できます。")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ja/guide/resource-providers.html#addressable"}},[a._v("addressable asset system")]),a._v(' を使用して手動でリソースを公開することもできます。アセットを公開するには、使用するパスと同じアドレスを "Resources/" の部分を除いて、上記の方法で割り当てます。例えば、アイテム "FullPlate.prefab" を公開するには、次のアドレスにプレハブアセットを割り当てます: '),e("code",[a._v("Naninovel/Inventory/FullPlate")]),a._v("。addressable 機能はデフォルトではエディターで使用できないことに注意してください。リソースプロバイダーのコンフィグメニューで "),e("code",[a._v("Enable Addressable In Editor")]),a._v(" プロパティを有効にすることで許可できます。")],1),a._v(" "),e("p",[a._v("各アイテムには、同じタイプのアイテムを1つのインベントリスロットにスタックできる数を制限する "),e("code",[a._v("Stack Count Limit")]),a._v(" プロパティと、アイテムが使用されたとき（"),e("code",[a._v("@useItem")]),a._v(" コマンドまたはユーザーがインベントリ内のアイテムをクリックしたとき）に呼び出される "),e("code",[a._v("On Item Used")]),a._v(" Unityイベントがあります。以下の例は、"),e("code",[a._v("Play Script")]),a._v(" コンポーネントを使用してイベントを設定し、一度使用したアイテムを削除し、グリッチの特殊効果を生成してテキストメッセージを出力する方法です。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/010a9ba35db607ba46d78eda3513f678.png",alt:""}})]),a._v(" "),e("p",[e("code",[a._v("@addItem")]),a._v(" コマンドでアイテムをインベントリに追加し、"),e("code",[a._v("@removeItem")]),a._v("(または"),e("code",[a._v("@removeItemAt")]),a._v("、"),e("code",[a._v("@removeAllItems")]),a._v("）でアイテムを削除できます。アイテムIDは、アイテムのプレハブ名と同じです。 インベントリスロットIDはグリッドスロットインデックスと同じです（たとえば、最初のスロットは0、2番目は1）。")]),a._v(" "),e("p",[a._v("カスタム "),e("RouterLink",{attrs:{to:"/ja/guide/script-expressions.html#関数式"}},[a._v("関数式")]),a._v(" "),e("code",[a._v("ItemExist()")]),a._v(" と "),e("code",[a._v("ItemCount()")]),a._v(" でアイテムが在庫に存在するかどうか、および既存のアイテムの数を確認でき、便利です。")],1),a._v(" "),e("p",[a._v("以下は、サンプルプロジェクトのスクリプトです:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# Start")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Select an action."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("skipInput")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Pick up sword"')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("!ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Sword"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" do:")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"@addItem Sword, @goto .Adventure"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Pick up armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("!ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" do:")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"@addItem Armor, @goto .Adventure"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Adventure awaits, venture forth!"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# Adventure")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@if")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('ItemExist("Sword")')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@set")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('monstersSlayed="')])]),e("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v('{ItemExist("Armor") ? Random(3,5) : 2}')]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('"')])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@addItem")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Food")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" amount:")])]),e("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{monstersSlayed}")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\tYou've encountered and slayed "),e("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{monstersSlayed}")]),a._v(" monsters with your sword."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("if")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("!ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string"}},[a._v('"Armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" You could've been more productive with an armor, though."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("endif")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("i")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("showUI")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Inventory")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v("wait:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" Check your inventory for the loot!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Start")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@else")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\tBut you don't have a weapon! You've been beaten by the monsters."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("if")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ItemExist(")]),e("span",{pre:!0,attrs:{class:"token quoted-string"}},[a._v('"Armor"')]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" At least it didn't hurt that much, thanks to the armor."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("endif")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" Let's prepare better next time.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Start")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@endif")])]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);