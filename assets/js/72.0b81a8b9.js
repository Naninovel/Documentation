(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{422:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"エンジンサービス"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#エンジンサービス"}},[t._v("#")]),t._v(" エンジンサービス")]),t._v(" "),s("p",[t._v("エンジン機能のほとんどは、エンジンサービスを介して実装されます。 エンジンサービスは "),s("code",[t._v("IEngineService")]),t._v(" インターフェースの実装であり、naninovelスクリプトの実行、アクターの管理、ゲームのセーブロードなど、特定のジョブを処理します。")]),t._v(" "),s("p",[t._v("エンジンシステムとやり取りする場合は、エンジンサービスを使用することをお勧めします。エンジンサービスへの参照は、静的メソッド "),s("code",[t._v("Engine.GetService<TService>()")]),t._v(" で取得できます。ここで "),s("code",[t._v("TService")]),t._v(" は、参照するサービスのタイプ（インターフェース）です。 たとえば、 "),s("code",[t._v("IScriptPlayer")]),t._v(" サービスを取得するには:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IScriptPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nplayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("以下のサービスが利用可能です:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("サービスインターフェース")]),t._v(" "),s("th",[t._v("説明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("IBackgroundManager")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/backgrounds.html"}},[t._v("背景")]),t._v(" アクターの管理")],1)]),t._v(" "),s("tr",[s("td",[t._v("ICharacterManager")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/characters.html"}},[t._v("キャラクター")]),t._v(" アクターの管理")],1)]),t._v(" "),s("tr",[s("td",[t._v("IChoiceHandlerManager")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/choices.html"}},[t._v("選択肢ハンドラー")]),t._v(" アクターの管理")],1)]),t._v(" "),s("tr",[s("td",[t._v("ITextPrinterManager")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/text-printers.html"}},[t._v("テキストプリンター")]),t._v(" アクターの管理")],1)]),t._v(" "),s("tr",[s("td",[t._v("IAudioManager")]),t._v(" "),s("td",[t._v("オーディオ: "),s("RouterLink",{attrs:{to:"/ja/guide/audio.html#効果音"}},[t._v("SFX")]),t._v("、 "),s("RouterLink",{attrs:{to:"/ja/guide/audio.html#background-music"}},[t._v("BGM")]),t._v("、 "),s("RouterLink",{attrs:{to:"/ja/guide/voicing.html"}},[t._v("ボイス収録")]),t._v("の管理")],1)]),t._v(" "),s("tr",[s("td",[t._v("IInputManager")]),t._v(" "),s("td",[t._v("ユーザー "),s("RouterLink",{attrs:{to:"/ja/guide/input-processing.html"}},[t._v("入力処理")]),t._v("の管理")],1)]),t._v(" "),s("tr",[s("td",[t._v("ILocalizationManager")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/localization.html"}},[t._v("ローカライズ")]),t._v(" アクティビティの管理")],1)]),t._v(" "),s("tr",[s("td",[t._v("ITextManager")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/managed-text.html"}},[t._v("テキスト管理")]),t._v(" 機能を制御")],1)]),t._v(" "),s("tr",[s("td",[t._v("IMoviePlayer")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/movies.html"}},[t._v("ムービー")]),t._v(" 再生を制御")],1)]),t._v(" "),s("tr",[s("td",[t._v("IScriptManager")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/naninovel-scripts.html"}},[t._v("Naninovel スクリプト")]),t._v(" リソースの管理")],1)]),t._v(" "),s("tr",[s("td",[t._v("IScriptPlayer")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/naninovel-scripts.html"}},[t._v("Naninovel スクリプト")]),t._v(" 実行を制御")],1)]),t._v(" "),s("tr",[s("td",[t._v("ICameraManager")]),t._v(" "),s("td",[t._v("シーンのレンダリングに必要なカメラやその他のシステムを管理")])]),t._v(" "),s("tr",[s("td",[t._v("IResourceProviderManager")]),t._v(" "),s("td",[s("code",[t._v("IResourceProvider")]),t._v(" オブジェクトを管理")])]),t._v(" "),s("tr",[s("td",[t._v("IStateManager")]),t._v(" "),s("td",[s("code",[t._v("IEngineService")]),t._v("関連の永続的なデータの逆シリアル化を処理。 "),s("RouterLink",{attrs:{to:"/ja/guide/save-load-system.html"}},[t._v("セーブロードシステム")]),t._v(" ゲームステートにAPIを提供。")],1)]),t._v(" "),s("tr",[s("td",[t._v("IUIManager")]),t._v(" "),s("td",[s("code",[t._v("IManagedUI")]),t._v(" オブジェクトを管理し、"),s("RouterLink",{attrs:{to:"/ja/guide/user-interface.html#カスタムUI"}},[t._v("カスタムUI")]),t._v(" 機能を制御")],1)]),t._v(" "),s("tr",[s("td",[t._v("ICustomVariableManager")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/custom-variables.html"}},[t._v("カスタム変数")]),t._v(" へのアクセスと編集を可能にする")],1)]),t._v(" "),s("tr",[s("td",[t._v("ISpawnManager")]),t._v(" "),s("td",[s("a",{attrs:{href:"/ja/api/#spawn",target:"_blank"}},[s("code",[t._v("@spawn")])]),t._v(" コマンドで生成されたオブジェクトを管理")])]),t._v(" "),s("tr",[s("td",[t._v("IUnlockableManager")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/ja/guide/unlockable-items.html"}},[t._v("収集アイテム")]),t._v(" (CGやムービーギャラリー, tipsなど) を管理")],1)])])]),t._v(" "),s("p",[t._v("サービスの組み込み実装は、 "),s("code",[t._v("Naninovel/Runtime")]),t._v(" に格納されているランタイムソースコードにあります。")]),t._v(" "),s("h2",{attrs:{id:"カスタムサービスの追加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#カスタムサービスの追加"}},[t._v("#")]),t._v(" カスタムサービスの追加")]),t._v(" "),s("p",[t._v("新しいカスタムエンジンサービスを追加するには、"),s("code",[t._v("IEngineService")]),t._v(" インターフェースを実装し、実装クラスに "),s("code",[t._v("InitializeAtRuntime")]),t._v(" 属性を追加します。実装のインスタンスはエンジンの初期化中に自動的に作成され、"),s("code",[t._v("Engine.GetService<TService>()")]),t._v(" APIを介して利用できるようになります。")]),t._v(" "),s("p",[s("code",[t._v("InitializeAtRuntime")]),t._v(" 属性の "),s("code",[t._v("InitializationPriority")]),t._v(" 引数を使用して、他のサービスの前後にカスタムサービスを強制的に初期化できます。値を小さくすると、初期化キュー内の他のサービスの前にプッシュされます。逆も同様です。")]),t._v(" "),s("p",[t._v("自動的にインスタンス化するには、サービス実装に互換性のあるコンストラクター（またはデフォルトのコンストラクター）が必要です。以下の引数（任意の順序）を使用できます:")]),t._v(" "),s("ul",[s("li",[t._v("任意の数の他のサービス ("),s("code",[t._v("IEngineService")]),t._v("-派生)")]),t._v(" "),s("li",[t._v("任意の数の構成オブジェクト ("),s("code",[t._v("Configuration")]),t._v("-派生)")]),t._v(" "),s("li",[t._v('Unityの "MonoBehavior" プロキシーオブジェクト ('),s("code",[t._v("IEngineBehaviour")]),t._v("-派生)")])]),t._v(" "),s("p",[t._v("コンストラクタで他のサービスを使用するのは安全ではないので、注意してください。代わりに、 "),s("code",[t._v("InitializeServiceAsync")]),t._v(" メソッドで他のサービスを使用する必要がある初期化アクティビティを実行します。サービスにアクセスするときに必要なサービスが確実に初期化されるようにするには、それらをサービスコンストラクターにリストします（初期化キューは、コンストラクターの引数に基づいてトポロジ的にソートされます）。")]),t._v(" "),s("p",[t._v("カスタムサービスに永続的なステートがあり、他のエンジンサービスで非/シリアル化したい場合は、  "),s("code",[t._v("IStatefulService<TState>")]),t._v(" インターフェイスを実装します。ここで、"),s("code",[t._v("TState")]),t._v(" は、"),s("code",[t._v("GameStateMap")]),t._v("、"),s("code",[t._v("GlobalStateMap")]),t._v("、または "),s("code",[t._v("SettingsStateMap")]),t._v("です。これはステートをゲームセッション固有のもの、グローバルステートまたは、設定で保存するかによって決まります。必要に応じて、1つのサービスに3つすべてのインターフェースを実装することができます。さまざまなタイプのエンジン状態の詳細については、"),s("RouterLink",{attrs:{to:"/ja/guide/state-management.html"}},[t._v("ステート管理ガイド")]),t._v("を参照してください。")],1),t._v(" "),s("p",[t._v("以下は、いくつかの使用上の注意を伴うカスタムエンジンサービス実装の例です:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UniRx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Async")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InitializeAtRuntime")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IEngineService")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputManager")]),t._v(" inputManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScriptPlayer")]),t._v(" scriptPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" CustomService "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputManager")]),t._v(" inputManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScriptPlayer")]),t._v(" scriptPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// サービスはここではまだ初期化されていない可能性があるため、")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用しないでください。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" inputManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scriptPlayer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scriptPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("UniTask")]),t._v(" InitializeServiceAsync "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ここでサービスを初期化します。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// これで、コンストラクターでリクエストされたサービスを使用しても安全です。")]),t._v("\n        Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProcessInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scriptPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PlayedScript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" UniTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CompletedTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" ResetService "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ここでサービスステートをリセットします。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" DestroyService "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// サービスを停止し、使用されているリソースをここで解放します。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("前述のサービスの場合、次の方法でエンジンAPIを介して取得できます:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" customService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CustomService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block example"},[s("p",{staticClass:"custom-block-title"},[t._v("例")]),t._v(" "),s("p",[t._v("アイテムのリソースとインベントリUIの構成を管理するカスタムエンジンサービスを追加する別の例は、"),s("a",{attrs:{href:"https://github.com/Naninovel/Inventory",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHubのインベントリサンプルプロジェクト"),s("OutboundLink")],1),t._v(" にあります。")]),t._v(" "),s("p",[t._v("具体的には、カスタムエンジンサービスは "),s("a",{attrs:{href:"https://github.com/Naninovel/Inventory/blob/master/Assets/NaninovelInventory/Runtime/InventoryManager.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("InventoryManager.cs"),s("OutboundLink")],1),t._v("  ランタイムスクリプトを介して実装されます。")])]),t._v(" "),s("h2",{attrs:{id:"組み込みサービスの上書き"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#組み込みサービスの上書き"}},[t._v("#")]),t._v(" 組み込みサービスの上書き")]),t._v(" "),s("p",[t._v("すべての組み込みサービスは、エンジンのソースコード内のインターフェイスを介して参照されるため、カスタム実装で入れ替えることができます。")]),t._v(" "),s("p",[t._v("カスタムサービスは上記と同じ方法で追加しますが、"),s("code",[t._v("IEngineService")]),t._v(" の代わりに具象エンジンインターフェースを実装し、"),s("code",[t._v("InitializeAtRuntime")]),t._v(" 属性で上書きするタイプ（インターフェースではなく実装タイプ）を指定します。すると、組み込みサービスの代わりにカスタム実装が初期化されます。")]),t._v(" "),s("p",[t._v("以下は、ダミーの "),s("code",[t._v("IInputManager")]),t._v(" 実装の例です。これは何もしませんが、いずれかのメソッドが呼び出されるとログに記録します。")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UniRx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Async")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InitializeAtRuntime")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("InputManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomInputManager")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IInputManager")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("InputConfiguration")]),t._v(" Configuration "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" ProcessInput "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" CustomInputManager "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputConfiguration")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Configuration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("UniTask")]),t._v(" InitializeServiceAsync "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomInputManager::InitializeServiceAsync()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" UniTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CompletedTask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" ResetService "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomInputManager::ResetService()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" DestroyService "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CustomInputManager::DestroyService()"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("IInputSampler")]),t._v(" GetSampler "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" bindingName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"CustomInputManager::GetSampler(')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("bindingName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(')"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" AddBlockingUI "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IManagedUI")]),t._v(" ui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("params")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" allowedSamplers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"CustomInputManager::AddBlockingUI(')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("ui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(')"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" RemoveBlockingUI "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IManagedUI")]),t._v(" ui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"CustomInputManager::RemoveBlockingUI(')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("ui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(')"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("これで、"),s("code",[t._v("Engine.GetService<IInputManager>()")]),t._v(" から入力マネージャーが要求されると、組み込みの "),s("code",[t._v("Naninovel.InputManager")]),t._v(" ではなく、カスタム実装が提供されます。")])])}),[],!1,null,null,null);a.default=e.exports}}]);