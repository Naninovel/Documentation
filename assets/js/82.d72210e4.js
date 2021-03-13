(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{538:function(e,a,t){"use strict";t.r(a);var s=t(42),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ムービー"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ムービー"}},[e._v("#")]),e._v(" ムービー")]),e._v(" "),t("p",[e._v("ムービーは "),t("code",[e._v("IMovieUI")]),e._v(" UIを介してシーンの上で再生される動画で、再生中はスクリプトの実行とユーザー入力処理を停止します。")]),e._v(" "),t("p",[e._v("ムービーの再生を開始する前に、指定されたフェードテクスチャ（デフォルトでは黒一色）へのフェードインが実行されます。再生が終了すると、フェードテクスチャからシーンコンテンツへのフェードアウトが実行されます。")]),e._v(" "),t("p",[e._v("プレーヤーは "),t("code",[e._v("Cancel")]),e._v(" 入力（スタンドアロン入力モジュールのデフォルトは "),t("code",[e._v("Esc")]),e._v("）で映画の再生をスキップできます。バインディングは入力コンフィグメニューで変更できます。")]),e._v(" "),t("p",[e._v("ムービーリソースを追加、編集、削除するには、コンテキストメニュー "),t("code",[e._v("Naninovel -> Resources -> Movies")]),e._v(" のムービーマネージャーを使用します:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/aace59f30f42245fc3ba714d10815d46.png",alt:"Manage Movies"}})]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.unity3d.com/Manual/VideoSources-FileCompatibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unityでサポートされている"),t("OutboundLink")],1),e._v(" 動画フォーマットはどれも利用できます。")]),e._v(" "),t("p",[e._v("ムービーの再生動作は、コンテキストメニュー "),t("code",[e._v("Naninovel -> Configuration -> Movies")]),e._v(" から設定できます。利用可能なオプションは、"),t("RouterLink",{attrs:{to:"/ja/guide/configuration.html#movies"}},[e._v("コンフィグガイド")]),e._v(" をご覧ください。")],1),e._v(" "),t("p",[e._v("naninovelスクリプトでムービーを再生するには、"),t("a",{attrs:{href:"/ja/api/#movie",target:"_blank"}},[t("code",[e._v("@movie")])]),e._v(" コマンドに続けてビデオクリップ名を記述します:")]),e._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('; ムービーリソースに追加済みのビデオクリップ "Opening" を再生する。')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@movie")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Opening")])])]),e._v("\n")])])]),t("p",[e._v("デフォルトでは、再生されるビデオは引き伸ばしを防ぐため縦横比を 16:9 に合わせます。この動作は "),t("code",[e._v("IMovieUI")]),e._v(" UIを "),t("RouterLink",{attrs:{to:"/ja/guide/user-interface.html#カスタムUI"}},[e._v("上書き")]),e._v(" することで変更できます。 "),t("code",[e._v("MovieImage")]),e._v(" ゲームオブジェクトに紐付けられた "),t("code",[e._v("Aspect Ratio Fitter")]),e._v(" コンポーネントは、フィッティング動作を制御します。")],1),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/38e8b1fc220d5fedd50f62ab855b2e92.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"webglでの制限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webglでの制限"}},[e._v("#")]),e._v(" WebGLでの制限")]),e._v(" "),t("p",[e._v("プラットフォームの制限により、WebGLでのビデオ再生はURIストリーミングモードでのみ可能です。WebGLプレーヤーのビルド時にすべてのビデオリソースは "),t("code",[e._v("Assets/StreamingAssets")]),e._v(" フォルダーにコピーされます。お使いのWebホスティングが、プレイヤービルドディレクトリからローカルファイルへのアクセスを許可する設定になっているかどうか確認してください。")])])}),[],!1,null,null,null);a.default=n.exports}}]);