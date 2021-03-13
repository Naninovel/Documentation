(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{415:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"аудио"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#аудио"}},[a._v("#")]),a._v(" Аудио")]),a._v(" "),s("p",[a._v("В данной статье рассматриваются фоновая музыка (BGM) и звуковые эффекты (SFX); для голосов см. "),s("RouterLink",{attrs:{to:"/ru/guide/voicing.html"}},[a._v("руководство по озвучиванию")]),a._v(".")],1),a._v(" "),s("p",[a._v("Чтобы добавить, отредактировать или удалить ресурсы BGM и SFX, используйте диспетчер аудиоресурсов, доступный через "),s("code",[a._v("Naninovel -> Resources -> Audio")]),a._v(". Вы можете использовать любые аудиоформаты, "),s("a",{attrs:{href:"https://docs.unity3d.com/Manual/AudioFiles.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("поддерживаемые Unity"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/cacdec36623dbbfcf9f49c594de53c0f.png",alt:""}})]),a._v(" "),s("p",[a._v("Если у вас много аудиофайлов и их неудобно назначать через меню редактора, можно просто поместить их в папку "),s("code",[a._v("Resources/Naninovel/Audio")]),a._v(", и они автоматически будут доступны в скриптах. Вы можете дополнительно организовать их с помощью вложенных папок, если хотите; в этом случае используйте слеш ("),s("code",[a._v("/")]),a._v(") при ссылке на них в скриптах naninovel. Например, аудиоклип по адресу: "),s("code",[a._v("Resources/Naninovel/Audio/Music/Ambient/Noise002.wav")]),a._v(" можно объявить в скрипте как "),s("code",[a._v("Music/Ambient/Noise002")]),a._v(".")]),a._v(" "),s("p",[a._v("Также можно использовать "),s("RouterLink",{attrs:{to:"/ru/guide/resource-providers.html#адресация"}},[a._v("систему адресируемых ассетов")]),a._v(', чтобы вручную распределить ресурсы. Чтобы предоставить доступ к ассету, назначьте адрес, равный пути, который вы использовали бы для его объявления с помощью метода, описанного выше, за исключением опущенной части "Resources/". Например, для объявления BGM "MainTheme.wav" назначьте ассету следующий адрес:'),s("code",[a._v("Naninovel/Audio/MainTheme")]),a._v(". Имейте в виду, что адресируемый провайдер по умолчанию не используется в редакторе; вы можете разрешить его, включив свойство "),s("code",[a._v("Enable Addressable In Editor")]),a._v(" в меню конфигурации провайдера ресурсов.")],1),a._v(" "),s("div",{staticClass:"custom-block warn"},[s("p",{staticClass:"custom-block-title"},[a._v("ВНИМАНИЕ")]),a._v(" "),s("p",[a._v("Ассеты аудио, не объявленные через диспетчер ресурсов, не будут доступны в различных выпадающих меню редактора, как например, в том, что используется для выбора "),s("code",[a._v("Message Sound")]),a._v(" для актора персонажа.")])]),a._v(" "),s("p",[a._v("Поведение воспроизводимого звука можно настроить с помощью контекстного меню "),s("code",[a._v("Naninovel -> Configuration -> Audio")]),a._v("; доступные параметры см. в разделе "),s("RouterLink",{attrs:{to:"/ru/guide/configuration.html#аудио"}},[a._v("Руководство по конфигурации")]),a._v(".")],1),a._v(" "),s("h2",{attrs:{id:"фоновая-музыка"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#фоновая-музыка"}},[a._v("#")]),a._v(" Фоновая музыка")]),a._v(" "),s("p",[a._v("Используйте команду "),s("a",{attrs:{href:"/ru/api/#bgm",target:"_blank"}},[s("code",[a._v("@bgm")])]),a._v(", за которой следует название трека, чтобы управлять воспроизведением музыки в скриптах Naninovel:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Начать проигрывать зацикленный трек с названием `Sanctuary` ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Sanctuary")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; То же самое, что выше, но в начале используется фейд в 10 секунд, и трек проигрывается только один раз")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Sanctuary")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" fade:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" loop:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Изменить громкость всех воспроизводимых музыкальных треков до 50% за 2,5 секунды и зациклить их")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" volume:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("0.5")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" loop:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("2.5")])])]),a._v("\n")])])]),s("p",[a._v("Музыкальные треки по умолчанию зациклены. Если название трека не указано в команде "),s("a",{attrs:{href:"/ru/api/#bgm",target:"_blank"}},[s("code",[a._v("@bgm")])]),a._v(", то командой будут затронуты все проигрываемые в данный момент треки. При вызове трека, который уже воспроизводится, воспроизведение не будет затронуто (трек не начнет воспроизводиться с самого начала), но будут применены указанные параметры (громкость, зацикливание).")]),a._v(" "),s("p",[a._v("Можно воспроизвести вступление трека, за которым следует зацикленная часть, используя параметр "),s("code",[a._v("intro")]),a._v(", например:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Проиграть `BattleThemeIntro` один раз, а затем сразу же зацикленный `BattleThemeMain`.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("BattleThemeMain")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" intro:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("BattleThemeIntro")])])]),a._v("\n")])])]),s("p",[a._v("Чтобы остановить воспроизведение музыки, используйте команду "),s("a",{attrs:{href:"/ru/api/#stopbgm",target:"_blank"}},[s("code",[a._v("@stopBgm")])]),a._v(", за которой следует название трека. Если название трека не указано, команда остановит все воспроизводимые в данный момент треки.")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Затухание трека `Promenade` в течение 10 секунд и остановка воспроизведения")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stopBgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Promenade")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" fade:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("10")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Остановить все играющие в данный момент музыкальные треки")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stopBgm")])]),a._v("\n")])])]),s("h2",{attrs:{id:"звуковые-эффекты"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#звуковые-эффекты"}},[a._v("#")]),a._v(" Звуковые эффекты")]),a._v(" "),s("p",[a._v("Используйте команды "),s("a",{attrs:{href:"/ru/api/#sfx",target:"_blank"}},[s("code",[a._v("@sfx")])]),a._v(" и "),s("a",{attrs:{href:"/ru/api/#stopsfx",target:"_blank"}},[s("code",[a._v("@stopSfx")])]),a._v(", за которыми следует название клипа, чтобы управлять воспроизведением звуковых эффектов в сценариях Naninovel:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Однократно воспроизвести SFX под названием `Explosion`")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@sfx")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Explosion")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Зацикленно воспроизводить SFX `Rain`")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@sfx")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Rain")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" loop:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("true")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Изменить громкость всех воспроизводимых треков SFX до 75% за 2,5 секунды и отключает зацикливание для всех них")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@sfx")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" volume:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("0.75")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" loop:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("2.5")])])]),a._v("\n")])])]),s("p",[a._v("Треки звуковых эффектов по умолчанию  не зациклены. Если название трека не указано в команде "),s("a",{attrs:{href:"/ru/api/#sfx",target:"_blank"}},[s("code",[a._v("@sfx")])]),a._v(", то командой будут затронуты все проигрываемые в данный момент треки. При вызове трека, который уже воспроизводится, воспроизведение не будет затронуто (трек не начнет воспроизводиться с самого начала), но будут применены указанные параметры (громкость, зацикливание).")]),a._v(" "),s("p",[a._v("Чтобы остановить воспроизведение звукового эффекта (вне зависимости, зациклен тот или нет), используйте команду "),s("a",{attrs:{href:"/ru/api/#stopsfx",target:"_blank"}},[s("code",[a._v("@stopSfx")])]),a._v(", за которой следует название трека. Если название трека не указано, команда остановит все воспроизводимые в данный момент треки.")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Затухание и остановка трека `Rain` в течение 15 секунд")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stopSfx")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Rain")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" fade:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("15")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Остановить все играющие в данный момент треки звуковых эффектов")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stopSfx")])]),a._v("\n")])])]),s("h2",{attrs:{id:"аудиомикшер"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#аудиомикшер"}},[a._v("#")]),a._v(" Аудиомикшер")]),a._v(" "),s("p",[a._v("Naninovel использует ассет "),s("a",{attrs:{href:"https://docs.unity3d.com/Manual/AudioMixer.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("аудиомикшера"),s("OutboundLink")],1),a._v(" при воспроизведении аудио для разделения каналов BGM, SFX и голосовой озвучки.")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/6271d59ee9ac63a0a218316bd3bc78a8.png",alt:""}})]),a._v(" "),s("p",[a._v("В меню конфигурации аудио можно назначить пользовательский ассет микшера, изменить группы, используемые для каждого аудиоканала, и контроллеры регулировки громкости (имена открытых параметров). Если пользовательские ассеты микшера не назначены, то по умолчанию будет использоваться стандартный.")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/ef2db68edb871608d1718117a37e9486.png",alt:""}})]),a._v(" "),s("p",[a._v("Чтобы воспроизвести звук через пользовательскую группу в микшере, укажите путь к группе параметром "),s("code",[a._v("group")]),a._v(", доступным в командах "),s("a",{attrs:{href:"/ru/api/#bgm",target:"_blank"}},[s("code",[a._v("@bgm")])]),a._v(", "),s("a",{attrs:{href:"/ru/api/#sfx",target:"_blank"}},[s("code",[a._v("@sfx")])]),a._v(" и "),s("a",{attrs:{href:"/ru/api/#voice",target:"_blank"}},[s("code",[a._v("@voice")])]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Воспроизвести зацикленное аудио `Noise` через группу микшера `Master/Ambient`.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@sfx")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Noise")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" loop:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" group:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Master/Ambient")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Воспроизвести голосовое аудио `ScaryVoice` через группу микшера `Master/Reverb`.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@voice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ScaryVoice")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" group:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Master/Reverb")])])]),a._v("\n")])])]),s("p",[a._v("Группы извлекаются с помощью метода "),s("code",[a._v("FindMatchingGroups(groupPath)")]),a._v(" текущего назначенного ассета аудиомикшера; см. "),s("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Audio.AudioMixer.FindMatchingGroups",target:"_blank",rel:"noopener noreferrer"}},[a._v("документацию Unity"),s("OutboundLink")],1),a._v(" для получения дополнительной информации об ожидаемом формате пути. В случае, если несколько групп связаны с предоставленным путем, использоваться для воспроизведения звука будет первая из них.")]),a._v(" "),s("p",[a._v("В скриптах C# используемый в настоящее время аудиомикшер можно получить с помощью "),s("RouterLink",{attrs:{to:"/ru/guide/engine-services.html"}},[a._v("сервиса движка")]),a._v(" "),s("code",[a._v("IAudioManager")]),a._v(".")],1),a._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")])]),a._v(" audioManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("IAudioManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")])]),a._v(" audioMixer "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" audioManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("AudioMixer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);