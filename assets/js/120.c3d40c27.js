(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{409:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"поnьзоватеnьская-конфигурация"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#поnьзоватеnьская-конфигурация"}},[t._v("#")]),t._v(" Пользовательская конфигурация")]),t._v(" "),a("p",[t._v("Объекты конфигурации используются для инициализации и настройки служб и других систем движка.")]),t._v(" "),a("p",[t._v("По умолчанию объекты конфигурации сериализуются как ассеты "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-ScriptableObject.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("объектов сценария"),a("OutboundLink")],1),t._v(" активы и хранятся в каталоге проекта "),a("code",[t._v("NaninovelData/Resources/Naninovel/Configuration")]),t._v(". Ассеты автоматически генерируются при первом открытии соответствующих конфигурационных меню ("),a("code",[t._v("Naninovel -> Configuration")]),t._v(") в редакторе Unity.")]),t._v(" "),a("p",[t._v("Для доступа к объектам конфигурации через C# используйте статический метод "),a("code",[t._v("Engine.GetConfiguration<T>()")]),t._v(", где "),a("code",[t._v("T")]),t._v(" – тип объекта конфигурации, к которому вы хотите получить доступ. Например, в следующем примере показано, как получить доступ к объекту "),a("RouterLink",{attrs:{to:"/ru/guide/configuration.html#аудио"}},[t._v("конфигурации аудио")]),t._v(" :")],1),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" audioConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfiguration")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AudioConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Имейте в виду, что метод "),a("code",[t._v("Engine.GetConfiguration")]),t._v(" может быть использован только тогда, когда движок инициализирован, так как требует объекта "),a("RouterLink",{attrs:{to:"/ru/guide/custom-configuration.html#провайдер-конфигурации"}},[t._v("конфигурации провайдера")]),t._v(", который указывается при инициализациидвижка, чтобы позволить использовать пользовательскую обработку сценариев во время выполнения. Если вы хотите получить доступ к ассету конфигурации через провайдера по умолчанию, это возможно даже в том случае, если движок не инициализирован классом "),a("code",[t._v("ProjectConfigurationProvider")]),t._v(", например:")],1),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" audioConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ProjectConfigurationProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadOrDefault")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AudioConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Хотя свойства конфигурации предназначены для изменения с помощью меню редактора, их все еще можно изменять во время выполнения. Имейте в виду, что объекты, возвращаемые провайдером проекта по умолчанию, являются фактическими ассетами, хранящимися в проекте; если вы измените их, изменения произойдут и в режиме воспроизведения. Это отличает их от конфигурационных объектов, предоставляемых с помощью метода "),a("code",[t._v("Engine.GetConfiguration")]),t._v(", который являются копиями и не будут влиять на исходные ассеты.")]),t._v(" "),a("p",[t._v("Ниже приведен пример изменения свойства "),a("code",[t._v("ReferenceResolution")]),t._v(" объекта конфигурации камеры сразу после инициализации движка:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModifyConfigAtRuntime")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeInitializeOnLoadMethod")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" ModifyConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Initialized"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OnInitializationFinished")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OnInitializationFinished "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" OnInitializationFinished"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" OnInitializationFinished "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OnInitializationFinished "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" OnInitializationFinished"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" cameraConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfiguration")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CameraConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cameraConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReferenceResolution "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Vector2Int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3840")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2160")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"добавnение-конфигурации"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-конфигурации"}},[t._v("#")]),t._v(" Добавление конфигурации")]),t._v(" "),a("p",[t._v("Чтобы добавить новую пользовательскую конфигурацию, создайте наследуемый от "),a("code",[t._v("Configuration")]),t._v(" класс C# с атрибутом "),a("code",[t._v("Serializable")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Serializable")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCustomConfiguration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Header")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Custom Header 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tooltip")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tooltip for my custom string."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" MyCustomString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Range")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tooltip")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tooltip for my custom float."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")])]),t._v(" MyCustomFloat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Header")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Custom Header 2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v(" MyCustomArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Затем соответствующее меню будет автоматически добавлено в настройки проекта, где вы сможете настроить свойства вашего пользовательского ассета конфигурации точно так же, как и во всех встроенных меню.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/c1163bba83f5d2b6286b100e837bca40.png",alt:""}})]),t._v(" "),a("p",[t._v("Для доступа к пользовательской конфигурации через C# используйте тот же API, что и для встроенных ассетов:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" myConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetConfiguration")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyCustomConfiguration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block example"},[a("p",{staticClass:"custom-block-title"},[t._v("ПРИМЕР")]),t._v(" "),a("p",[t._v("Другой пример добавления меню пользовательской конфигурации для настройки системы инвентаря можно найти в "),a("a",{attrs:{href:"https://github.com/Naninovel/Inventory",target:"_blank",rel:"noopener noreferrer"}},[t._v("примере проекта инвентаря на GitHub"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("В частности, пользовательская конфигурация реализуется с помощью скрипта воспроизведения "),a("a",{attrs:{href:"https://github.com/Naninovel/Inventory/blob/master/Assets/NaninovelInventory/Runtime/InventoryConfiguration.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("InventoryConfiguration.cs"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"провайдер-конфигурации"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#провайдер-конфигурации"}},[t._v("#")]),t._v(" Провайдер конфигурации")]),t._v(" "),a("p",[t._v("Можно изменить способ обработки объектов конфигурации во время выполнения. Например, вместо статических ресурсов проекта можно прочитать конфигурацию из файлов JSON, хранящихся на удаленном хосте.")]),t._v(" "),a("p",[t._v("Чтобы указать пользовательский сценарий обработки конфигурации, создайте класс C# и реализуйте интерфейс "),a("code",[t._v("IConfigurationProvider")]),t._v(". Интерфейс имеет только один метод, который ожидает аргумент "),a("code",[t._v("Type")]),t._v(" и возвращает объект "),a("code",[t._v("Configuration")]),t._v(". Это зависит от вас, как построить и заполнить запрошенные объекты конфигурации; только убедитесь, что тип возвращаемого объекта равен запрошенному.")]),t._v(" "),a("p",[t._v("Ниже приведен пример реализации пользовательского провайдера, который просто возвращает объекты конфигурации по умолчанию:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomConfigurationProvider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IConfigurationProvider")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Configuration")]),t._v(" GetConfiguration "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Type")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" defaultAsset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ScriptableObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" defaultAsset "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Как только пользовательский провайдер конфигураций будет готов, вы должны заставить движок использовать его вместо встроенного, создав пользовательский сценарий инициализации движка. По умолчанию движок инициализируется через "),a("code",[t._v("Naninovel/Runtime/Engine/RuntimeInitializer.cs")]),t._v("; вы можете использовать его в качестве примера при создании собственного сценария инициализации.")]),t._v(" "),a("p",[t._v("С другой стороны, если ваша цель – просто использовать пользовательский провайдер конфигурации, но сохранить процедуру инициализации движка по умолчанию, вы можете воспользоваться статическим методом "),a("code",[t._v("RuntimeInitializer.InitializeAsync(IConfigurationProvider)")]),t._v(", который принимает необязательный аргумент для провайдера конфигурации:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Naninovel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UniRx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("UnityEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomInitializer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RuntimeInitializeOnLoadMethod")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" InitializeWithCustomProvider "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" customProvider "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("CustomConfigurationProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        RuntimeInitializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("InitializeAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("customProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Forget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Независимо от того, какой способ вы выберете для инициализации движка, не забудьте отключить опцию "),a("code",[t._v("Initialize On Application Load")]),t._v(" в меню конфигурации движка, чтобы отключить процедуру инициализации по умолчанию.")])])}),[],!1,null,null,null);s.default=e.exports}}]);