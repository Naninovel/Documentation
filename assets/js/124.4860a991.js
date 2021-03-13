(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{505:function(t,e,n){"use strict";n.r(e);var a=n(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"архитектура-движка"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#архитектура-движка"}},[t._v("#")]),t._v(" Архитектура движка")]),t._v(" "),n("p",[t._v("Движок разработан с учетом следующих принципов: "),n("strong",[t._v("независимость от сцен")]),t._v(" и "),n("strong",[t._v("ориентированность на сервисы")]),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"независимость-от-сцен"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#независимость-от-сцен"}},[t._v("#")]),t._v(" Независимость от сцен")]),t._v(" "),n("p",[t._v("Дизайн Unity продвигает использование сцен и композиции префабов, что не очень практично при разработке визуальных новелл.")]),t._v(" "),n("p",[t._v("Все системы Naninovel либо не связаны непосредственно с "),n("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/MonoBehaviour.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MonoBehaviour"),n("OutboundLink")],1),t._v(", либо прикреплены к "),n("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Object.DontDestroyOnLoad.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("постоянному"),n("OutboundLink")],1),t._v(" корневому "),n("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/GameObject.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GameObject"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.gyazo.com/9805e2ce450bc486a007cdc001f8ae13.png",alt:""}})]),t._v(" "),n("p",[t._v("В зависимости от среды используются следующие корневые объекты:")]),t._v(" "),n("p",[t._v("– "),n("code",[t._v("Naninovel<Runtime>")]),t._v(" для воспроизведения (сборки и режим воспроизведения редактора);\n– "),n("code",[t._v("Naninovel<Editor>")]),t._v(" для редактора (вне режима воспроизведения).")]),t._v(" "),n("p",[t._v("Все необходимые игровые объекты создаются при инициализации движка, которая выполняется автоматически и асинхронно при запуске приложения (сразу после входа в режим воспроизведения или запуска сборки) с помощью метода "),n("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/RuntimeInitializeOnLoadMethodAttribute.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RuntimeInitializeOnLoadMethod"),n("OutboundLink")],1),t._v(". Вы можете изменить это поведение, отключив свойство "),n("code",[t._v("Initialize On Application Load")]),t._v(" в конфигурации движка и вручную вызвав инициализацию с помощью классов "),n("code",[t._v("RuntimeInitializer")]),t._v(" (для среды выполнения) или "),n("code",[t._v("EditorInitializer")]),t._v(" (для редактора).")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.gyazo.com/f58a8af9f2f6d71286061e55fc228896.png",alt:""}})]),t._v(" "),n("p",[t._v("Поскольку процесс инициализации является асинхронным, используйте либо "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/",target:"_blank",rel:"noopener noreferrer"}},[t._v("подход async-await"),n("OutboundLink")],1),t._v(" при вызове метода "),n("code",[t._v("InitializeAsync()")]),t._v(", либо используйте статическое событие "),n("code",[t._v("Engine.OnInitialized")]),t._v(".")]),t._v(" "),n("p",[t._v("Чтобы полностью отключить и удалить из памяти все системы движка, используйте статический метод "),n("code",[t._v("Engine.Destroy()")]),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"ориентированность-на-сервисы"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ориентированность-на-сервисы"}},[t._v("#")]),t._v(" Ориентированность на сервисы")]),t._v(" "),n("p",[t._v("Большинство функций движка реализуются через его сервисы. Сервис движка – это реализация интерфейса "),n("code",[t._v("IEngineService")]),t._v(", который исполняет конкретную работу – например, выполнение сценариев Naninovel, управление акторами или сохранение-загрузка состояния игры.")]),t._v(" "),n("p",[t._v("В случае, если вы хотите взаимодействовать с системой движка, вы, скорее всего, захотите использовать сервисы движка. Вы можете получить ссылку на сервис движка, используя статический метод "),n("code",[t._v("Engine.GetService<TService>()")]),t._v(", где "),n("code",[t._v("TService")]),t._v(" - это тип (интерфейс) сервиса, на который вы хотите сослаться; например, чтобы получить сервис "),n("code",[t._v("IScriptPlayer")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" player "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token generic-method"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),n("span",{pre:!0,attrs:{class:"token generic class-name"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IScriptPlayer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nplayer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Список всех доступных в настоящее время сервисов движка и информацию о том, как переопределить/добавить пользовательские сервисы, можно найти в "),n("RouterLink",{attrs:{to:"/ru/guide/engine-services.html"}},[t._v("руководстве по сервисам движка")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"высокоуровневая-концепция"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#высокоуровневая-концепция"}},[t._v("#")]),t._v(" Высокоуровневая концепция")]),t._v(" "),n("p",[t._v("Следующая диаграмма UML иллюстрирует высокоуровневую концепцию архитектуры движка. Обратите внимание, что все имена классов и интерфейсов на диаграмме организованы в пространстве имён "),n("code",[t._v("Naninovel")]),t._v(". Например, чтобы сослаться на класс "),n("code",[t._v("Engine")]),t._v(", используйте "),n("code",[t._v("Naninovel.Engine")]),t._v(" или "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/namespaces/using-namespaces",target:"_blank",rel:"noopener noreferrer"}},[t._v("включите пространство имён"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[n("object",{staticStyle:{width:"100%","max-width":"699px"},attrs:{data:"/engine-design.svg",type:"image/svg+xml"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);