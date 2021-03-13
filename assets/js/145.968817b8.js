(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{367:function(a,t,e){"use strict";e.r(t);var r=e(42),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"текстовые-принтеры"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#текстовые-принтеры"}},[a._v("#")]),a._v(" Текстовые принтеры")]),a._v(" "),e("p",[a._v("Текстовые принтеры – это акторы, используемые для представления текстовых сообщений, выводимых (печатаемых) в течение некоторого времени.")]),a._v(" "),e("p",[a._v("Поведение принтеров может настраиваться через контекстное меню "),e("code",[a._v("Naninovel -> Configuration -> Printers")]),a._v("; для существующих вариантов см. "),e("RouterLink",{attrs:{to:"/ru/guide/configuration.html#текстовые-принтеры"}},[a._v("руководство по конфигурации")]),a._v(". Менеджер ресурсов принтеровдоступен в контекстном меню "),e("code",[a._v("Naninovel -> Resources -> Printers")]),a._v(".")],1),a._v(" "),e("p",[a._v("В сценариях Naninovel текстовые принтеры, как правило, контролируется с помощью команд "),e("a",{attrs:{href:"/ru/api/#print",target:"_blank"}},[e("code",[a._v("@print")])]),a._v(" и "),e("a",{attrs:{href:"/ru/api/#printer",target:"_blank"}},[e("code",[a._v("@printer")])]),a._v(":")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Сделает принтер `Dialogue` принтером по умолчанию")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@printer")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Dialogue")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Сделает принтер `Fullscreen` принтером по умолчанию")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@printer")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Fullscreen")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Выведет фразу, используя принтер по умолчанию")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@print")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" text:")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Lorem ipsum dolor sit amet."')])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; То же, что и выше, но используя универсальное текстовое выражение")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Lorem ipsum dolor sit amet.")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('; То же, что и выше, но ассоциированное с персонажем "Felix"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Felix: Lorem ipsum dolor sit amet.")]),a._v("\n")])])]),e("p",[a._v('Имейте в виду, что даже несмотря на то, что встроенные принтеры реализованы как UI, они все еще являются акторами, и все связанные с акторами изменения видимости (анимации "показать/скрыть") используют длительности, заданные либо в соответствующих командах, либо в конфигурации актора: например, параметр '),e("code",[a._v("time")]),a._v(" команды "),e("a",{attrs:{href:"/ru/api/#showprinter",target:"_blank"}},[e("code",[a._v("@showPrinter")])]),a._v(" управляет длительностью анимации, а когда он не указан, свойство "),e("code",[a._v("Change Visibility Duration")]),a._v(" конфигурации актора принтера используется в качестве длительности по умолчанию; свойство "),e("code",[a._v("Fade Time")]),a._v(" из корня префаба UI принтера в этом случае игнорируется.")]),a._v(" "),e("h2",{attrs:{id:"авточтение-текста"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#авточтение-текста"}},[a._v("#")]),a._v(" Авточтение текста")]),a._v(" "),e("p",[a._v("Функция авточтения текста позволяет автоматически продолжать выполнение сценария при обработке команд "),e("RouterLink",{attrs:{to:"/ru/api/#i"}},[e("code",[a._v("i")])]),a._v(".")],1),a._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/e6f58f861fa18bd62591db9794e7641b.mp4",type:"video/mp4"}})])]),a._v(" "),e("p",[a._v('Ожидание ввода пользователем или команды "i" останавливает выполнение сценария до тех пор, пока пользователь не активирует ввод '),e("code",[a._v("Continue")]),a._v(', и обычно используются после выведения текстового сообщения. Когда вы находитесь в режиме авточтения текста, команды "i" вместо этого останавливают выполнение сценария на некоторое время, а затем заканчивают, позволяя выполнить следующую команду. Период остановки зависит от длины последнего напечатанного текстового сообщения и дополнительно изменяется настройкой игры "скорость печати" ("Print speed").')]),a._v(" "),e("p",[a._v("Режим авточтения текста можно переключить с помощью ввода "),e("code",[a._v("AutoPlay")]),a._v(" (клавиша "),e("code",[a._v("A")]),a._v(' по умолчанию для автономного модуля ввода) или кнопки "AUTO" на панели управления.')]),a._v(" "),e("h2",{attrs:{id:"пропуск-текста"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#пропуск-текста"}},[a._v("#")]),a._v(" Пропуск текста")]),a._v(" "),e("p",[a._v("Функция пропуска текста позволяет ускорить выполнение команд "),e("a",{attrs:{href:"/ru/api/#print",target:"_blank"}},[e("code",[a._v("@print")])]),a._v(", эффективно пропуская процесс выведения (печати) текста.")]),a._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/9605a5c8cd1911217350d77712f47e7d.mp4",type:"video/mp4"}})])]),a._v(" "),e("p",[a._v("Режим пропуска можно переключать с помощью ввода "),e("code",[a._v("Skip")]),a._v(" (клавиша "),e("code",[a._v("Ctrl")]),a._v(' по умолчанию для автономного модуля ввода) или кнопки "SKIP" на панели управления.')]),a._v(" "),e("p",[a._v('По умолчанию режим пропуска доступен только при выполнении команд, которые уже были выполнены в прошлом; например, если пользователь еще не прочитал текст, который будет напечатан, режим пропуска будет недоступен. Это можно изменить в настройках игры, используя настройку "Режим пропуска" ("Skip mode").')]),a._v(" "),e("h2",{attrs:{id:"бэкnог-принтера"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#бэкnог-принтера"}},[a._v("#")]),a._v(" Бэклог принтера")]),a._v(" "),e("p",[a._v("Бэклог принтера – это функция, позволяющая пользователю перечитывать ранее выведенный текст.")]),a._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/4bde6752b676aa1acedb54d2af075ced.mp4",type:"video/mp4"}})])]),a._v(" "),e("p",[a._v("Бэклог может быть показан в любое время во время основного игрового процесса через ввод "),e("code",[a._v("ShowBacklog")]),a._v(" (клавиша "),e("code",[a._v("L")]),a._v(' по умолчанию для автономного модуля ввода) или по нажатию кнопки "LOG" на панели управления.')]),a._v(" "),e("h2",{attrs:{id:"диаnоговый-принтер"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#диаnоговый-принтер"}},[a._v("#")]),a._v(" Диалоговый принтер")]),a._v(" "),e("p",[a._v("Диалоговые принтеры представляют текст внутри окон с переменной высотой. Они изначально занимают около трети размера экрана и увеличивают высоту, когда содержимое требует больше места. Диалоговые принтеры также выводят имя связанного с репликой персонажа в виде метке над текстовым окном.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/73abe9eabc7b285109b08e77dbf75430.png",alt:"Dialogue Printer"}})]),a._v(" "),e("h2",{attrs:{id:"широкий-принтер"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#широкий-принтер"}},[a._v("#")]),a._v(" Широкий принтер")]),a._v(" "),e("p",[a._v("Широкие принтеры очень похожи на диалоговые принтеры, за исключением некоторых изменений в компоновке панелей, адаптированных для широких дисплеев. Широкие принтеры также поддерживают функцию "),e("RouterLink",{attrs:{to:"/ru/guide/characters.html#avatar-textures"}},[a._v("аватаров персонажей")]),a._v(".")],1),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/83c091c08846fa1cab8764a8d4dddeda.png",alt:"Wide Printer"}})]),a._v(" "),e("h2",{attrs:{id:"поnноэкранный-принтер"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#поnноэкранный-принтер"}},[a._v("#")]),a._v(" Полноэкранный принтер")]),a._v(" "),e("p",[a._v('Полноэкранные принтеры представляют текст внутри окон со статическим размером. Они занимают большую часть размера экрана и предназначены для представления больших объемов текста (так называемый "NVL" режим).')]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/c7861949717f9b600b664365af53abbc.png",alt:"Fullscreen Printer"}})]),a._v(" "),e("p",[a._v("Полноэкранные принтеры по умолчанию не сбрасывают текст при каждой последующей команде печати; вместо этого используйте команду "),e("a",{attrs:{href:"/ru/api/#resettext",target:"_blank"}},[e("code",[a._v("@resetText")])]),a._v(" для очистки содержимого принтера, когда это необходимо. Это можно изменить, включив функцию "),e("code",[a._v("Auto Reset")]),a._v(" в меню конфигурации актора принтера.")]),a._v(" "),e("p",[a._v("Каждая команда печати, обрабатываемая полноэкранным принтером, по умолчанию вводит 2 разрыва строки перед напечатанным текстом (за исключением случаев, когда текущее содержимое принтера пусто). Это можно отключить в меню конфигурации актора принтера, установив "),e("code",[a._v("Auto Line Break")]),a._v(" равным нулю.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/978c2eb05215aac2d62177cfb58bfbef.png",alt:""}})]),a._v(" "),e("p",[a._v("Ниже приведен пример использования полноэкранного принтера.")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Активировать полноэкранный принтер.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@printer")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Fullscreen")])])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Следующие строки будут напечатаны в том же окне, разделенные двумя разрывами строк.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Lorem ipsum dolor sit amet. Proin ultricies in leo id scelerisque. ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Praesent vel orci luctus, tincidunt nisi et, fringilla arcu. In a metus orci. ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Maecenas congue nunc quis lectus porttitor, eget commodo massa congue.")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Очистить содержимое принтера.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@resetText")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Вывести текст снова.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Morbi ultrices dictum diam, in gravida neque vulputate in. ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("...")]),a._v("\n")])])]),e("h2",{attrs:{id:"чат-принтер"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#чат-принтер"}},[a._v("#")]),a._v(" Чат-принтер")]),a._v(" "),e("p",[a._v('Чат-принтер представляет текст внутри сообщений-"пузырьков", обрамленных в окно с вертикально прокручиваемым содержимым, что напоминает мобильный мессенджер. Вместо того, чтобы показывать печатное сообщение символ за символом, он показывает анимацию "автор печатает" в течение всего эффекта раскрытия, а затем мгновенно выводит текстовое сообщение. Чат-принтер поддерживает функцию '),e("RouterLink",{attrs:{to:"/ru/guide/characters.html#avatar-textures"}},[a._v("аватаров персонажей")]),a._v(".")],1),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/3c04aecabe7f754ffc9ce5452eeba270.png",alt:"Chat Printer"}})]),a._v(" "),e("p",[a._v("При использовании универсальных текстовых строк и команд "),e("a",{attrs:{href:"/ru/api/#print",target:"_blank"}},[e("code",[a._v("@print")])]),a._v(" текст в целевом принтере по умолчанию сбрасывается (очищается). В случае с чат-принтерами это приведет к удалению всех сообщений при добавлении нового, что в большинстве случаев может быть нежелательно. Установка параметра "),e("code",[a._v("reset")]),a._v(" в значение "),e("em",[a._v("false")]),a._v(" предотвратит очистку принтера, например:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@print")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Orci varius natoque penatibus."')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" author:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" reset:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@print")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Integer ullamcorper fringilla ipsum a scelerisque."')]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" author:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Yuko")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" reset:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n")])])]),e("p",[a._v("— выведет два сообщения без очистки содержимого принтера.")]),a._v(" "),e("h2",{attrs:{id:"баббn-принтер"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#баббn-принтер"}},[a._v("#")]),a._v(" Баббл-принтер")]),a._v(" "),e("p",[a._v("Баббл-принтеры могут использоваться для презентации текста в стиле манги/комиксов.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/900ee728505a0d7ce2eb597f3aa2249a.png",alt:""}})]),a._v(" "),e("p",[a._v('Встроенный баббл-принтер поддерживает два варианта внешнего вида: "Left" и "Right", которые можно использовать для подстраивания направления принтера в зависимости от того, с какой стороны он расположен относительно персонажа.')]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@printer")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Bubble.Left")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("42,80")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" visible:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("0")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@show")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Bubble")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" wait:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Misaki: Aliquam lobortis!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Nanikun.Happy")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" wait:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@printer")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Bubble.Right")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("53,55")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" visible:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("0")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@show")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Bubble")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" wait:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Nanikun: Integer nec maximus elit, eget posuere risus.")]),a._v("\n")])])]),e("p",[a._v("Чтобы одновременно отображать более одного баббл-принтера (или любого другого), добавьте пользовательские принтеры.")]),a._v(" "),e("h2",{attrs:{id:"добавnение-поnьзоватеnьских-принтеров"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-поnьзоватеnьских-принтеров"}},[a._v("#")]),a._v(" Добавление пользовательских принтеров")]),a._v(" "),e("p",[a._v("Вы можете добавлять пользовательские текстовые принтеры на основе встроенных шаблонов или создавать новые принтеры с нуля. Например, давайте рассмотрим настройку встроенного шаблона "),e("code",[a._v("Dialogue")]),a._v(".")]),a._v(" "),e("p",[a._v("Используйте контекстное меню ассетов "),e("code",[a._v("Create -> Naninovel -> Text Printers -> Dialogue")]),a._v(", чтобы создать префаб диалога вне пакета Naninovel, например в папке "),e("code",[a._v("Assets/TextPrinters")]),a._v(".")]),a._v(" "),e("p",[a._v("Отредактируйте префаб: измените шрифт, текстуры, добавьте анимацию и т. д. Для получения дополнительной информации о доступных инструментах построения UI обратитесь к "),e("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.ugui@latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("документации Unity для uGUI"),e("OutboundLink")],1),a._v(". Есть также несколько обучающих видеороликов и пример проекта по работе с uGUI в "),e("RouterLink",{attrs:{to:"/ru/guide/user-interface.html#кастомизация-UI"}},[a._v("руководстве по настройке UI")]),a._v(".")],1),a._v(" "),e("p",[a._v("Предоставьте префаб ресурсам движка через GUI менеджера принтеров, которые доступен через контекстном меню "),e("code",[a._v("Naninovel -> Resources -> Printers")]),a._v(". Добавьте новую запись с помощью кнопки "),e("code",[a._v("+")]),a._v(" (плюс), введите ID актора (может отличаться от имени префаба) и дважды щелкните запись, чтобы открыть настройки актора. Перетащите префаб принтера в поле "),e("code",[a._v("Resource")]),a._v(".")]),a._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/3f51881fa554720b7a4092dca42fd15e.mp4",type:"video/mp4"}})])]),a._v(" "),e("p",[a._v("Теперь вы можете использовать новый текстовый принтер, активировав его с помощью команды "),e("a",{attrs:{href:"/ru/api/#printer",target:"_blank"}},[e("code",[a._v("@printer")])]),a._v(" и указав ID актора, установленный в менеджере.")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@printer")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("MyNewPrinter")])])]),a._v("\n")])])]),e("div",{staticClass:"custom-block example"},[e("p",{staticClass:"custom-block-title"},[a._v("ПРИМЕР")]),a._v(" "),e("p",[a._v("Пример добавления пользовательского принтера см. в разделе "),e("RouterLink",{attrs:{to:"/ru/guide/getting-started.html#demo-project"}},[a._v("демо-проекта")]),a._v(". Префаб хранится как "),e("code",[a._v("Assets/Prefabs/PimpedPrinter.prefab")]),a._v("; принтер появляется в демо, когда Кохаку-тян пытается создать свой собственный: 3")],1)]),a._v(" "),e("p",[a._v("Кроме того, можно создать принтер с нуля, вручную реализовав интерфейс "),e("code",[a._v("ITextPrinterActor")]),a._v(". См. руководство по "),e("RouterLink",{attrs:{to:"/ru/guide/custom-actor-implementations.html"}},[a._v("реализации пользовательских акторов")]),a._v(" для получения дополнительной информации.")],1),a._v(" "),e("p",[a._v("При изменении текстового компонента имейте в виду, что высота строк меньше 1,0 не поддерживается (в этом случае визуализируемые строки будут перекрываться, что делает невозможным применение эффекта раскрытия). Рассмотрите возможность редактирования самого шрифта текста, чтобы уменьшить вертикальное перекрытие.")]),a._v(" "),e("h2",{attrs:{id:"эффект-проявnения-текста"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#эффект-проявnения-текста"}},[a._v("#")]),a._v(" Эффект проявления текста")]),a._v(" "),e("p",[a._v('По умолчанию при печати текстовых сообщений применяется эффект градиентного проявления. Однако если вы предпочитаете более традиционный стиль "пишущей машинки", вы можете отключить эффект затухания, отключив '),e("code",[a._v("Slide Clip Rect")]),a._v(" и установив свойство "),e("code",[a._v("Reveal Fade Width")]),a._v(" в компоненте "),e("code",[a._v("Revealable Text")]),a._v(" равным нулю. Компоненты "),e("code",[a._v("Revealable Text")]),a._v(" применяются к текстовым объектам в некоторых встроенных принтерах; например, вы можете найти его прикрепленным к игровому объекту "),e("code",[a._v("Fullscreen/Content/Printer/Text")]),a._v(" префаба принтера "),e("code",[a._v("Fullscreen")]),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/ab848f3c1c56921634b9d2b872e7c0cb.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"звук-проявnения-текста"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#звук-проявnения-текста"}},[a._v("#")]),a._v(" Звук проявления текста")]),a._v(" "),e("p",[a._v("Для встроенных принтеров, поддерживающих эффект проявления (в настоящее время "),e("code",[a._v("Dialogue")]),a._v(", "),e("code",[a._v("Fullscreen")]),a._v(" и "),e("code",[a._v("Wide")]),a._v("), вы можете дополнительно установить SFX для воспроизведения при выведении символов.")]),a._v(" "),e("p",[a._v('Следуйте приведенному выше руководству "добавление пользовательских принтеров", чтобы создать пользовательский принтер на основе любого из встроенных принтеров, затем найдите компонент '),e("code",[a._v("Revealable Text Printer Panel")]),a._v(", прикрепленный к корневому объекту префаба, и используйте свойство "),e("code",[a._v("Reveal Sfx")]),a._v(", чтобы настроить воспроизведение SFX при обнаружении символа. Актуальный список доступных опций основан на аудиоресурсах, которые вы добавили через меню "),e("code",[a._v("Naninovel -> Resources -> Audio")]),a._v(".")]),a._v(" "),e("p",[a._v("Вы также можете использовать свойство списка "),e("code",[a._v("Chars SFX")]),a._v(' для сопоставления нескольких SFX с определенными символами. На следующем рисунке представлена настройка, где SFX "Keystroke2" будет воспроизводиться для пробелов, "Explosion" – для символов '),e("code",[a._v("D")]),a._v(", "),e("code",[a._v("d")]),a._v(", "),e("code",[a._v("F")]),a._v(", "),e("code",[a._v("1")]),a._v(", "),e("code",[a._v("4")]),a._v(", "),e("code",[a._v("9")]),a._v(" и "),e("code",[a._v("*")]),a._v(", никакой SFX не будет воспроизводиться для символа "),e("code",[a._v("%")]),a._v(', а "Keystroke1" будет воспроизводиться для всех остальных символов.')]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/c51247254e262dca35267b3689460ad2.png",alt:""}})]),a._v(" "),e("p",[a._v("Кроме того, вы можете установить "),e("code",[a._v("Message Sound")]),a._v(" в меню конфигурации персонажей, чтобы воспроизводить определённые для персонажа звуки при выведении текста, когда этот персонаж является автором сообщения (независимо от того, какой текстовый принтер печатает это сообщение). В случае, если и "),e("code",[a._v("Message Sound")]),a._v(" автора сообщения, и "),e("code",[a._v("Reveal Sfx")]),a._v(" принтера по умолчанию назначены, "),e("code",[a._v("Message Sound")]),a._v(" будет воспроизводиться вместо "),e("code",[a._v("Reveal SFX")]),a._v(" принтера по умолчанию. "),e("code",[a._v("Chars SFX")]),a._v(", если он назначен, всегда будет воспроизводиться, независимо от того, указан ли "),e("code",[a._v("Message Sound")]),a._v(" автора или нет.")]),a._v(" "),e("p",[a._v("Звуки выведения текста воспроизводятся очень часто (в зависимости от скорости выведения сообщения) и обрезаются при последующем воспроизведении одного и того же звука, поэтому убедитесь, что соответствующие аудиоклипы очень короткие и резкие (без какой-либо паузы/тишины в начале).")]),a._v(" "),e("p",[a._v("В случае, если звуки выведения не работают для вас (например, звук недостаточно короток, чтобы воспроизводить его на выведении каждого символа), возможно использование событий "),e("code",[a._v("OnPrintTextStarted")]),a._v(" и "),e("code",[a._v("OnPrintTextFinished")]),a._v(" в "),e("RouterLink",{attrs:{to:"/ru/guide/engine-services.html"}},[a._v("сервисе движка")]),a._v(" "),e("code",[a._v("TextPrinterManager")]),a._v(" для запуска/остановки циклического воспроизведения звука соответственно. Эти события также доступны PlayMaker, если вы предпочитаете использование "),e("RouterLink",{attrs:{to:"/ru/guide/playmaker.html"}},[a._v("визуального скриптинга")]),a._v(".")],1),a._v(" "),e("h2",{attrs:{id:"textmesh-pro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#textmesh-pro"}},[a._v("#")]),a._v(" TextMesh Pro")]),a._v(" "),e("p",[a._v("Naninovel поддерживает "),e("a",{attrs:{href:"https://assetstore.unity.com/packages/essentials/beta-projects/textmesh-pro-84126",target:"_blank",rel:"noopener noreferrer"}},[a._v("TextMesh Pro"),e("OutboundLink")],1),a._v(" через встроенные "),e("code",[a._v("TMProFullscreen")]),a._v(", "),e("code",[a._v("TMProDialogue")]),a._v(", "),e("code",[a._v("TMProWide")]),a._v(" и  "),e("code",[a._v("TMProBubble")]),a._v(" принтеры, реализованные с текстовыми компонентами UI TMPro.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/bb143607ce79e5a28d89052c7f9fb07c.png",alt:""}})]),a._v(" "),e("p",[a._v("Перед использованием принтеров TMPro убедитесь, что в вашем проекте Unity установлен TextMesh Pro. TextMesh Pro можно установить с помощью диспетчера пакетов, доступного через меню "),e("code",[a._v("Window -> Package Manager")]),a._v(".")]),a._v(" "),e("p",[a._v("Вы можете выбрать принтеры TMPro, чтобы направить на них все команды печати, используя команду "),e("a",{attrs:{href:"/ru/api/#printer",target:"_blank"}},[e("code",[a._v("@printer")])]),a._v(" в сценариях Naninovel:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Активировать диалоговый принтер TMPro")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@printer")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("TMProDialogue")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Вывести текст, используя активированный принтер")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Hello World!")]),a._v("\n")])])]),e("p",[a._v("При создании пользовательских ассетов шрифтов или материалов TextMesh Pro не забудьте применить шейдер "),e("code",[a._v("Naninovel/RevealableTMProText")]),a._v(" к материалу шрифта, иначе эффект проявления текста не будет работать.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/18e112ba90cad84f44f0b78db0db303a.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"стиnи-текста"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#стиnи-текста"}},[a._v("#")]),a._v(" Стили текста")]),a._v(" "),e("p",[a._v("Различные стили текста могут быть применены с помощью тегов Rich text, размещенных прямо внутри текста, или с помощью команды "),e("a",{attrs:{href:"/ru/api/#style",target:"_blank"}},[e("code",[a._v("@style")])]),a._v(".")]),a._v(" "),e("p",[a._v("Текстовые принтеры по умолчанию (не TMPro) основаны на "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/script-Text.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("системе рендеринга текста Unity"),e("OutboundLink")],1),a._v(" и поддерживают основные стили текста, такие как цвет, размер, полужирный, курсив и т.д. См. "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/StyledText.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("руководство по текстовым тегам"),e("OutboundLink")],1),a._v(" для получения дополнительной информации.")]),a._v(" "),e("p",[a._v("Принтеры TextMesh Pro поддерживают широкий спектр дополнительных текстовых тегов. См. "),e("a",{attrs:{href:"http://digitalnativestudios.com/textmeshpro/docs/rich-text/",target:"_blank",rel:"noopener noreferrer"}},[a._v("официальную документацию"),e("OutboundLink")],1),a._v(" для получения дополнительной информации.")]),a._v(" "),e("p",[a._v("Поддержка "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Ruby_character",target:"_blank",rel:"noopener noreferrer"}},[a._v("Ruby"),e("OutboundLink")],1),a._v(" (фуригана) символов также предоставляется TextMesh Pro принтерами Naninovel с помощью пользовательского тега "),e("code",[a._v("<ruby>")]),a._v(". Оформите текст, над которым должны быть помещены символы Ruby, в тег Ruby, затем укажите текст Ruby внутри тега, например:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v('Lorem <ruby="VERY">ipsum</ruby> dolor sit amet. ')]),a._v("\n")])])]),e("p",[a._v('— Ruby текст "VERY" появится прямо над словом "ipsum" при выведении текста во время выполнения.')]),a._v(" "),e("p",[a._v("Вы можете дополнительно управлять размером и смещением текста Ruby по вертикали, изменяя свойства компонента "),e("code",[a._v("RevealableTMProText")]),a._v(", прикрепленного к префабам принтеров.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/7e1e927c144f30353baaab2ac7b643c7.png",alt:""}})]),a._v(" "),e("p",[a._v("Ниже приводится видео-демонстрация тегов Ruby в действии.")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/aWdq7YxIxkE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p")])}),[],!1,null,null,null);t.default=s.exports}}]);