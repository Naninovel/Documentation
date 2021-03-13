(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{369:function(a,t,e){"use strict";e.r(t);var n=e(42),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"начаnо-работы"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#начаnо-работы"}},[a._v("#")]),a._v(" Начало работы")]),a._v(" "),e("h2",{attrs:{id:"необходимые-компоненты"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#необходимые-компоненты"}},[a._v("#")]),a._v(" Необходимые компоненты")]),a._v(" "),e("p",[a._v("Naninovel – это расширение для "),e("a",{attrs:{href:"https://unity.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("игрового движка Unity"),e("OutboundLink")],1),a._v(", поэтому настоятельно рекомендуется изучить основы использования движка перед началом работы с Naninovel.")]),a._v(" "),e("p",[a._v("Указанные ниже главы руководства являются важнейшими:")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/GettingStartedInstallingHub",target:"_blank",rel:"noopener noreferrer"}},[a._v("Установка Unity"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/GettingStarted",target:"_blank",rel:"noopener noreferrer"}},[a._v("Создание проектов"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/LearningtheInterface",target:"_blank",rel:"noopener noreferrer"}},[a._v("Интерфейс редактора"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/AssetStore",target:"_blank",rel:"noopener noreferrer"}},[a._v("Использование Asset Store"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://docs.unity3d.com/Manual/PublishingBuilds",target:"_blank",rel:"noopener noreferrer"}},[a._v("Публикация сборок"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("В случае, если вы не собираетесь создавать какой-либо пользовательский геймплей за пределами Naninovel, можете не углубляться в изучение информации о сценах, так как Naninovel позаботится об этом.")]),a._v(" "),e("h2",{attrs:{id:"основные-концепты"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#основные-концепты"}},[a._v("#")]),a._v(" Основные концепты")]),a._v(" "),e("p",[a._v("Прежде чем использовать Naninovel, давайте пробежимся по некоторым основным концептам.")]),a._v(" "),e("p",[a._v("Важнейшим из них, с которым вы постоянно будете сталкиваться в остальной части руководства, является "),e("em",[a._v("актор")]),a._v(". Актор – это объект, описываемый идентификатором (ID), внешностью, положением в пространстве (в сцене) и некоторыми другими параметрами.")]),a._v(" "),e("p",[a._v("Актор – абстрактный объект, который не может существовать непосредственно; вместо этого используются его специализированные типы с различными дополнительными параметрами:")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Тип актора")]),a._v(" "),e("th",[a._v("Дополнительные параметры")]),a._v(" "),e("th",[a._v("Описание")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ru/guide//characters.html"}},[a._v("Персонаж")])],1),a._v(" "),e("td",[a._v("Направление взгляда")]),a._v(" "),e("td",[a._v("Представляет персонажа в сцене.")])]),a._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ru/guide//backgrounds.html"}},[a._v("Фон")])],1),a._v(" "),e("td",[a._v("Отсутствуют")]),a._v(" "),e("td",[a._v("Представляет фоновое изображение сцены; по умолчанию размещается за акторами персонажей.")])]),a._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ru/guide//text-printers.html"}},[a._v("Текстовый принтер")])],1),a._v(" "),e("td",[a._v("Текст, ID персонажа, Процесс отображения")]),a._v(" "),e("td",[a._v("Постепенно проявляет (печатает) текстовое сообщение в течение некоторого времени.")])]),a._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ru/guide//choices.html"}},[a._v("Обработчик выбора")])],1),a._v(" "),e("td",[a._v("Варианты выбора")]),a._v(" "),e("td",[a._v("Позволяет игроку выбрать один из доступных вариантов.")])])])]),a._v(" "),e("p",[a._v("Рассмотрим типичную сцену визуальной новеллы – с персонажем, изображенным поверх фона. В Naninovel она будет представлена следующим образом:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/1d4d5130056f7d6acee978c5fde42cfc.gif",alt:""}})]),a._v(" "),e("p",[a._v('Теперь, предположим, вы хотите, чтобы персонаж "Kohaku" выглядел счастливым. У вас есть несколько текстур (изображений) этого персонажа, изображающих различные эмоции. В Naninovel такие текстуры называются "внешностью" актора. Чтобы получить желаемый результат, нужно изменить внешность актора персонажа. Точно так же для того, чтобы "MainBackground" отображал другой фон, необходимо изменить внешность актора фона.')]),a._v(" "),e("p",[a._v("Акторы и их параметры управляются (направляются) с помощью команд, указанных в "),e("RouterLink",{attrs:{to:"/ru/guide//naninovel-scripts.html"}},[a._v("скриптах Naninovel")]),a._v(".")],1),a._v(" "),e("p",[a._v("Ещё одним широко используемым концептом является "),e("RouterLink",{attrs:{to:"/ru/guide//user-interface.html"}},[a._v("пользовательский интерфейс")]),a._v(" (UI). UI используется игроком для взаимодействия с акторами и остальной игрой. Сюда входят различные меню (главное меню, сохранение-загрузка, настройки и т. д.) и панели управления (режим авточтения, пропуск текста и т. д.). Элементы пользовательского интерфейса по умолчанию располагаются поверх акторов.")],1),a._v(" "),e("p",[a._v("Текстовые принтеры и обработчики выбора рассматриваются и как акторы, и как элементы пользовательского интерфейса, то есть они имеют качества акторов и могут управляться с помощью скриптов Naninovel, и в то же время используются игроками для взаимодействия с игрой.")]),a._v(" "),e("p",[a._v("Если вы знакомы с программированием, взгляните на "),e("RouterLink",{attrs:{to:"/ru/guide//engine-architecture.html"}},[a._v("архитектуру движка")]),a._v(", чтобы понять, как он спроектирован с точки зрения программного обеспечения.")],1),a._v(" "),e("h2",{attrs:{id:"создание-нового-проекта-unity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#создание-нового-проекта-unity"}},[a._v("#")]),a._v(" Создание нового проекта Unity")]),a._v(" "),e("p",[a._v("Итак, держа основные концепты в уме, начнем первоначальную настройку. Первое, что вам понадобится – проект Unity. Обратитесь к "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/GettingStarted",target:"_blank",rel:"noopener noreferrer"}},[a._v("руководству Unity"),e("OutboundLink")],1),a._v(", описывающему создание проекта.")]),a._v(" "),e("p",[a._v("При создании проекта вы, вероятно, захотите использовать шаблон "),e("code",[a._v("2D Template")]),a._v(", чтобы установить редактор в режим 2D проекта, благодаря чему изображения будут импортироваться по умолчанию как спрайты, и вам не придется вручную изменять настройки импорта. Вы можете изменить режим работы редактора позже, используя "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/2DAnd3DModeSettings.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("настройки проекта"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v('Когда вы создадите новый проект, Unity автоматически добавит пример сцены с двумя игровыми объектами в ней: "Main Camera" и "Directional Light". Naninovel полностью независим от сцены, поэтому вы можете удалить эти объекты из сцены, чтобы они не создавали ненужной производительной нагрузки. Вы также можете удалить саму сцену, хотя для корректной работы некоторых функций редактора рекомендуется иметь в проекте хотя бы одну сцену.')]),a._v(" "),e("h2",{attrs:{id:"установка-naninovel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#установка-naninovel"}},[a._v("#")]),a._v(" Установка Naninovel")]),a._v(" "),e("p",[a._v("Загрузите пакет Naninovel с помощью "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/AssetStore.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("окна Asset Store"),e("OutboundLink")],1),a._v(" и дождитесь начальной компиляции скриптов и импорта ассетов. Вы можете свободно перемещать папку 'Naninovel' в любое место в директории ассетов вашего проекта, если хотите.")]),a._v(" "),e("p",[a._v("В процессе использования Naninovel в папке 'Assets/NaninovelData' будет автоматически сгенерирован ряд ассетов (конфигурация, настройки, сохранения и т.д.). В отличие от папки пакета Naninovel, не стоит вручную перемещать папку данных (она будет автоматически перегенерирована). Если вы хотите изменить её расположение, измените свойство "),e("code",[a._v("Generated Data Path")]),a._v(" в меню конфигурации движка.")]),a._v(" "),e("h2",{attrs:{id:"добавnение-скрипта-naninovel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-скрипта-naninovel"}},[a._v("#")]),a._v(" Добавление скрипта Naninovel")]),a._v(" "),e("p",[a._v("Воспользуйтесь контекстным меню ассетов "),e("code",[a._v("Create -> Naninovel -> Naninovel Script")]),a._v(" для создания ассета скрипта Naninovel.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/be7677077abeb4f805979bd647d6d90e.png",alt:"Создание скрипта Naninovel"}})]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("ПРИМЕЧАНИЕ")]),a._v(" "),e("p",[a._v("Вы можете создавать и хранить скрипты Naninovel (а также все другие ресурсы Naninovel) в любой папке проекта и организовывать их по своему усмотрению, как и задавать им имена. Приведенная выше иллюстрация является лишь примером.")])]),a._v(" "),e("p",[a._v("Скрипты Naninovel – это текстовые документы (с расширением "),e("code",[a._v(".nani")]),a._v("), где вы контролируете происходящее в сцене. Вы можете открывать их и редактировать с помощью любого текстового редактора на ваш выбор, например Notepad, TextEdit или "),e("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("VS Code"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/f552c2ef323f9ec1171eba72e0c55432.png",alt:"Открытие скрипта Naninovel"}})]),a._v(" "),e("p",[a._v("Вы также можете использовать визуальный редактор скриптов для редактирования скриптов Naninovel. Выберите созданный скрипт, и вы увидите, что визуальный редактор автоматически откроется в окне инспектора.")]),a._v(" "),e("p",[e("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:"https://i.gyazo.com/ba57b9f78116e57408125325bdf66be9.mp4",type:"video/mp4"}})])]),a._v(" "),e("p",[a._v("Чтобы добавить новую строку в скрипт, щелкните правой кнопкой мыши в месте, куда вы хотите вставить строку, либо нажмите "),e("code",[a._v("Ctrl+Space")]),a._v(' (вы можете изменить стандартные комбинации клавиш в меню конфигурации ввода) и выберите нужную строку или тип команды. Чтобы изменить порядок строк, перетащите их, используя их номерные метки. Чтобы удалить строку, нажмите на неё правой кнопкой мыши и выберите "Удалить".')]),a._v(" "),e("p",[a._v("После изменения скрипта с помощью визуального редактора вы увидите звездочку ("),e("code",[a._v("*")]),a._v(") над именем сценария в шапке инспектора. Это означает, что ассет изменён и должен быть сохранен; нажмите "),e("code",[a._v("Ctrl+S")]),a._v(", чтобы сохранить внесённые изменения. Если вы попытаетесь выбрать другой ассет, не сохранив изменения в скрипте, появится диалоговое окно, позволяющее либо сохранить, либо отменить изменения.")]),a._v(" "),e("p",[a._v("Визуальный редактор автоматически синхронизирует редактируемый скрипт при его обновлении извне, так что вы можете легко работать со сценариями как в текстовых, так и в визуальных редакторах.")]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("ПРИМЕЧАНИЕ")]),a._v(" "),e("p",[a._v("В остальной части этого руководства мы будем использовать текстовый редактор, но вы можете повторить все те же шаги в визуальном редакторе, если хотите.")])]),a._v(" "),e("p",[a._v('Для того, чтобы ассет Naninovel (например, созданный вами скрипт) стал "видимым" для движка, он должен быть назначен ресурсом проекта. При создании с помощью меню создания ассетов скрипты назначаются автоматически. Чтобы назначить (или отредактировать/удалить) файл скрипта вручную, используйте окно скриптовых ресурсов, доступное в меню редактора '),e("code",[a._v("Naninovel -> Resources -> Scripts")]),a._v(". Чтобы добавить скрипт, нажмите кнопку "),e("code",[a._v("+")]),a._v(" (знак плюс) в списке, чтобы добавить новую строку, и перетащите файл скрипта в неё. Кроме того, можно перетащить несколько выделенных ассетов или даже целые папки в список, чтобы добавить их группой.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/b3281a145ba54e6cb6cbdaa478ea894d.png",alt:"Добавление скрипта Naninovel"}})]),a._v(" "),e("p",[a._v("Откройте созданный скрипт в текстовом редакторе и добавьте следующий текст:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Hello World!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n")])])]),e("p",[a._v('Первая строка выведет текст "Hello World!" при запуске игры, а вторая требуется для корректной остановки выполнения скрипта.')]),a._v(" "),e("p",[a._v("Войдите в режим воспроизведения и начните новую игру, чтобы увидеть результат.")]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("ПРИМЕЧАНИЕ")]),a._v(" "),e("p",[a._v("Все доступные встроенные команды скрипта, поддерживаемые параметры и примеры использования приведены в "),e("RouterLink",{attrs:{to:"/ru/api/"}},[a._v("справочнике по API")]),a._v(". Кроме того, можно добавить пользовательские команды; дополнительную информацию смотрите в "),e("RouterLink",{attrs:{to:"/ru/guide/custom-commands.html"}},[a._v("руководстве")]),a._v(".")],1)]),a._v(" "),e("p",[a._v('Если кнопка "НОВАЯ ИГРА" в главном меню неактивна, убедитесь, что свойство '),e("code",[a._v("Start Game Script")]),a._v(" в настройках скриптов ("),e("code",[a._v("Naninovel -> Configuration -> Scripts")]),a._v(") равно имени созданного скрипта. Свойство заполняется автоматически при создании первого скрипта через меню создания ассетов, но может не сработать, если вы скопируете в проект уже существующий скрипт.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/47e34c913994a5b3e88d8f30d5127b7b.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"добавnение-персонажа"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-персонажа"}},[a._v("#")]),a._v(" Добавление персонажа")]),a._v(" "),e("p",[a._v("Персонажи в Naninovel могут быть основаны на обычных и нарезанных спрайтах, анимированных моделях Live2D и 3D-моделях; вы также можете добавить свои собственные варианты реализации. В этом туториале мы будем использовать спрайты.")]),a._v(" "),e("p",[a._v("Каждый персонаж представлен ID и набором вариантов внешности. Чтобы добавить персонажа, используйте графический интерфейс менеджера персонажей, доступный через меню "),e("code",[a._v("Naninovel -> Resources -> Characters")]),a._v(", добавьте новую строку актора персонажа, указав ее ID, затем дважды щелкните по ней (или нажмите кнопку в конце строки) и добавьте все варианты спрайта в список "),e("code",[a._v("Resources")]),a._v(". Как и в случае со скриптами Naninovel, вы можете перетащить в список сразу несколько ассетов и папок.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/0c1e81ea1a20165c1bf88854df177b7f.png",alt:"Создание персонажа"}})]),a._v(" "),e("p",[a._v('Предположим, что ID созданного персонажа – "Kohaku". Отредактируйте скрипт Naninovel, чтобы показать добавленного персонажа:')]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Hello World!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n")])])]),e("p",[a._v('Запустите игру, и вы увидите спрайт персонажа в центре экрана. Если вы не укажете внешность, то по умолчанию будет выбрана либо та, имя которой равно ID персонажа, либо внешность с названием "Default". Чтобы выбрать определенную внешность, добавьте её название после ID персонажа, разделив их точкой, как здесь:')]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku.Happy")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Hello World!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n")])])]),e("p",[a._v('Так как персонажу "Kohaku" была выбрана внешность под названием "Happy", соответствующий спрайт будет отображен вместо стандартного.')]),a._v(" "),e("p",[a._v("Теперь вы можете связать выводимый текст с именем персонажа, добавив его ID, а затем двоеточие перед текстом:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku.Happy")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Kohaku: Hello World!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n")])])]),e("p",[a._v("Кроме того, можно объединить объявление внешности персонажа с выводом текста, чтобы сократить код:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Kohaku.Happy: Hello World!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n")])])]),e("p",[a._v("Чтобы скрыть (удалить из сцены) персонажа (или любой другой актор, например, фон, текстовый принтер и т. д.), используйте команду "),e("a",{attrs:{href:"/ru/api/#hide",target:"_blank"}},[e("code",[a._v("@hide")])]),a._v(", за которой следует ID актора:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Kohaku.Happy: Hello World!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@hide")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n")])])]),e("h2",{attrs:{id:"добавnение-фона"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-фона"}},[a._v("#")]),a._v(" Добавление фона")]),a._v(" "),e("p",[a._v("Подобно персонажам, фон в Naninovel может быть представлен несколькими способами: спрайт, простой объект, видео и сцена; также возможны пользовательские реализации.")]),a._v(" "),e("p",[a._v("Вы можете создать несколько независимых акторов фона, хотя в типичной визуальной новелле обычно используется только один, меняется лишь его внешность. Чтобы упростить процедуру, актор "),e("code",[a._v("MainBackground")]),a._v(" по умолчанию добавляется в список акторов фона, и вам не нужно указывать его ID каждый раз, чтобы изменить его внешность в скриптах Naninovel.")]),a._v(" "),e("p",[a._v("Добавьте фоновые спрайты через меню "),e("code",[a._v("Naninovel -> Resources -> Backgrounds")]),a._v(". Строка "),e("code",[a._v("MainBackground")]),a._v(" откроется автоматически, но вы все равно можете вернуться в список акторов и создать другие, если потребуется.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/98e88780625c7f2e1ef88db7ef10d1f4.png",alt:"Добавление фона"}})]),a._v(" "),e("p",[a._v('Предположим, что добавленная внешность спрайта фона называется "City". Чтобы отобразить фон, используйте команду '),e("a",{attrs:{href:"/ru/api/#back",target:"_blank"}},[e("code",[a._v("@back")])]),a._v(", за которой следует название внешности фона:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("City")])]),e("span",{pre:!0,attrs:{class:"token whitespaces"}},[a._v(" ")])]),a._v("\n")])])]),e("p",[a._v("При переключении между фонами по умолчанию будет использоваться кроссфейд "),e("RouterLink",{attrs:{to:"/ru/guide//transition-effects.html"}},[a._v("(эффект перехода)")]),a._v(". Чтобы сменить эффект, укажите тип перехода после внешности:")],1),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("City")])]),e("span",{pre:!0,attrs:{class:"token whitespaces"}},[a._v(" ")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("School.RadialBlur")])])]),a._v("\n")])])]),e("p",[a._v('Это позволит перейти от фона "City" к фону "School", используя эффект перехода "RadialBlur".')]),a._v(" "),e("p",[a._v('Чтобы обратиться к фону, отличному от основного (например, если вы хотите создать несколько фонов поверх друг друга), укажите ID актора. Например, если фоновый актор с ID "Flower" существует отдельно от основного, следующие команды изменят его внешность на "Bloomed", а затем на "Withered":')]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Flower")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Flower")])])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Withered")]),e("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" id:")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Flower")])])]),a._v("\n")])])]),e("h2",{attrs:{id:"добавnение-музыки-и-звуковых-эффектов"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-музыки-и-звуковых-эффектов"}},[a._v("#")]),a._v(" Добавление музыки и звуковых эффектов")]),a._v(" "),e("p",[a._v("Чтобы добавить ассет BGM (фоновая музыка) или SFX (звуковой эффект), используйте меню редактора "),e("code",[a._v("Naninovel -> Resources -> Audio")]),a._v(". Вы можете использовать любые аудиоформаты, "),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/AudioFiles.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("поддерживаемые Unity"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/cacdec36623dbbfcf9f49c594de53c0f.png",alt:"Управление аудио"}})]),a._v(" "),e("p",[a._v('Допустим, вы добавили BGM трек под названием "ThePromenade". Для воспроизведения этого трека в качестве фоновой музыки используйте команду '),e("a",{attrs:{href:"/ru/api/#bgm",target:"_blank"}},[e("code",[a._v("@bgm")])]),a._v(", за которой следует название трека:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ThePromenade")])])]),a._v("\n")])])]),e("p",[a._v("Эффект кроссфейда будет автоматически применен при смене музыкального трека. Музыка по умолчанию будет зациклена, но вы можете изменить это, как и громкость, и длительность затухания с помощью параметров команды.")]),a._v(" "),e("p",[a._v('Напротив, звуковые эффекты по умолчанию не будут зациклены. Предположим, вы добавили SFX с названием "Explosion" – используйте команду '),e("a",{attrs:{href:"/ru/api/#sfx",target:"_blank"}},[e("code",[a._v("@sfx")])]),a._v(", чтобы воспроизвести его:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token command function"}},[e("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@sfx")]),e("span",{pre:!0,attrs:{class:"token command-params"}},[e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Explosion")])])]),a._v("\n")])])]),e("h2",{attrs:{id:"видеогайд"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#видеогайд"}},[a._v("#")]),a._v(" Видеогайд")]),a._v(" "),e("p",[a._v("Если вы предпочитаете видеогайды, то здесь вы можете найти таковой, иллюстрирующий вышеприведенные инструкции.")]),a._v(" "),e("p"),e("div",{staticClass:"video-container"},[e("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/wFil5vje3NE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e("p"),a._v(" "),e("h2",{attrs:{id:"демо-проект"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#демо-проект"}},[a._v("#")]),a._v(" Демо-проект")]),a._v(" "),e("p",[a._v("Полные исходники демо-проекта (того же, что демонстрировался в магазине) доступны на GitHub здесь: "),e("a",{attrs:{href:"https://github.com/Naninovel/Demo",target:"_blank",rel:"noopener noreferrer"}},[a._v("github.com/Naninovel/Demo"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("p",[a._v("Вы можете "),e("a",{attrs:{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[a._v("клонировать репозиторий с помощью клиента Git"),e("OutboundLink")],1),a._v(" или "),e("a",{attrs:{href:"https://github.com/Naninovel/Demo/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("скачать его в виде zip-архива"),e("OutboundLink")],1),a._v(". Обратите внимание на то, что ресурсы, распространяемые вместе с демо-проектом, могут быть предметами пользовательских лицензий и предоставляться исключительно в учебных целях.")]),a._v(" "),e("div",{staticClass:"custom-block warn"},[e("p",{staticClass:"custom-block-title"},[a._v("ВНИМАНИЕ")]),a._v(" "),e("p",[a._v("Пакет Naninovel не распространяется вместе с проектом, а значит, при первом его открытии могут появиться ошибки компиляции; импортируйте Naninovel из Asset Store, чтобы решить эту проблему.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);