(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{516:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"фоновая-музыка"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#фоновая-музыка"}},[a._v("#")]),a._v(" Фоновая музыка")]),a._v(" "),s("p",[a._v("Вы можете добавлять, редактировать и удалять ресурсы фоновой музыки (BGM) с помощью аудиоменеджера, доступного через "),s("code",[a._v("Naninovel -> Resources -> Audio")]),a._v(", или просто хранить аудиоклипы в папке "),s("code",[a._v("Resources/Audio")]),a._v(".")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/cacdec36623dbbfcf9f49c594de53c0f.png",alt:"Управление ресурсами BGM"}})]),a._v(" "),s("p",[a._v("Вы можете использовать любые аудиоформаты, "),s("a",{attrs:{href:"https://docs.unity3d.com/Manual/AudioFiles.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("поддерживаемые Unity"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("Поведение воспроизведения фоновой музыки можно настроить с помощью контекстного меню "),s("code",[a._v("Naninovel -> Configuration -> Audio")]),a._v("; доступные параметры см. в разделе "),s("RouterLink",{attrs:{to:"/ru/guide/configuration.html#аудио"}},[a._v("Руководство по конфигурации")]),a._v(".")],1),a._v(" "),s("p",[a._v("Используйте команду "),s("a",{attrs:{href:"/ru/api/#bgm",target:"_blank"}},[s("code",[a._v("@bgm")])]),a._v(", за которой следует название трека, чтобы управлять воспроизведением музыки в сценариях Naninovel:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Начать проигрывать зацикленный трек с названием `Sanctuary` ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Sanctuary")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; То же самое, что выше, но в начале используется фейд в 10 секунд, и трек проигрывается только один раз")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Sanctuary")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" fade:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" loop:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Изменить громкость всех воспроизводимых музыкальных треков до 50% за 2,5 секунды и зациклить их")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" volume:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("0.5")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" loop:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("2.5")])])]),a._v("\n")])])]),s("p",[a._v("Музыкальные треки по умолчанию зациклены. Если название трека не указано в команде "),s("a",{attrs:{href:"/ru/api/#bgm",target:"_blank"}},[s("code",[a._v("@bgm")])]),a._v(", то командой будут затронуты все проигрываемые в данный момент треки. При вызове трека, который уже воспроизводится, воспроизведение не будет затронуто (трек не начнет воспроизводиться с самого начала), но будут применены указанные параметры (громкость, зацикливание).")]),a._v(" "),s("p",[a._v("Можно воспроизвести вступление трека, за которым следует зацикленная часть, используя параметр "),s("code",[a._v("intro")]),a._v(", например:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Проиграть `BattleThemeIntro` один раз, а затем сразу же зацикленный `BattleThemeMain`.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("BattleThemeMain")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" intro:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("BattleThemeIntro")])])]),a._v("\n")])])]),s("p",[a._v("Чтобы остановить воспроизведение музыки, используйте команду "),s("a",{attrs:{href:"/ru/api/#stopbgm",target:"_blank"}},[s("code",[a._v("@stopBgm")])]),a._v(", за которой следует название трека. Если название трека не указано, команда остановит все воспроизводимые в данный момент треки.")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Затухание трека `Promenade` в течение 10 секунд и остановка воспроизведения")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stopBgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Promenade")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" fade:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("10")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Остановить все играющие в данный момент музыкальные треки")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stopBgm")])]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);