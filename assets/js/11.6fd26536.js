(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{390:function(e,a,t){"use strict";t.r(a);var r=t(42),o=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"backgrounds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backgrounds"}},[e._v("#")]),e._v(" Backgrounds")]),e._v(" "),t("p",[e._v("Opposed to "),t("RouterLink",{attrs:{to:"/guide/characters.html"}},[e._v("characters")]),e._v(", backgrounds are actors used to represent a "),t("em",[e._v("back")]),e._v(" layer of the scene: locations, sceneries, landscapes or anything that should always appear "),t("em",[e._v("behind")]),e._v(" the characters.")],1),e._v(" "),t("p",[e._v("A background actor is defined with a name, appearance, visibility and transform (position, rotation, scale). It can change appearance, visibility and transform over time.")]),e._v(" "),t("p",[e._v("Backgrounds' behavior can be configured using "),t("code",[e._v("Naninovel -> Configuration -> Backgrounds")]),e._v(" context menu; for available options see "),t("RouterLink",{attrs:{to:"/guide/configuration.html#backgrounds"}},[e._v("configuration guide")]),e._v(". The backgrounds' resources manager can be accessed using "),t("code",[e._v("Naninovel -> Resources -> Backgrounds")]),e._v(" context menu.")],1),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/cccd08280dac72d199ea3465bc167a22.gif",alt:""}})]),e._v(" "),t("p",[e._v("In case you have a lot of backgrounds and it's inconvenient to assign them via editor menu, it's possible to just drop them at "),t("code",[e._v("Resources/Naninovel/Backgrounds")]),e._v(' folder, grouped under folders corresponding to actor ID. Eg, to add appearances for a background actor with "MainBackground" ID, store the textures (sprites) at '),t("code",[e._v("Resources/Naninovel/Backgrounds/MainBackground")]),e._v(" folder, and they'll automatically be available in the scripts.")]),e._v(" "),t("p",[e._v("You can additionally organize appearance resources with sub-folders, if you wish; in this case use forward slashes ("),t("code",[e._v("/")]),e._v(") when referencing them in naninovel scripts. Eg, appearance texture stored as "),t("code",[e._v("Resources/Naninovel/Backgrounds/MainBackground/Events/CG251")]),e._v(" can be referenced in scripts as "),t("code",[e._v("Events/CG251")]),e._v(".")]),e._v(" "),t("p",[e._v("It's also possible to use "),t("RouterLink",{attrs:{to:"/guide/resource-providers.html#addressable"}},[e._v("addressable asset system")]),e._v(' to manually expose the resources. To expose an asset, assign address equal to the path you\'d use to expose it via the method described above, except omit the "Resources/" part. Eg, to expose a "Beach" appearance for "MainBackground" background, assign the texture asset following address: '),t("code",[e._v("Naninovel/Backgrounds/MainBackground/Beach")]),e._v(". Be aware, that addressable provider is not used in editor by default; you can allow it by enabling "),t("code",[e._v("Enable Addressable In Editor")]),e._v(" property in resource provider configuration menu.")],1),e._v(" "),t("p",[e._v("In naninovel scripts, backgrounds are mostly controlled with "),t("a",{attrs:{href:"/api/#back",target:"_blank"}},[t("code",[e._v("@back")])]),e._v(" command:")]),e._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Set `River` as the appearance of the main background")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("River")])])]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Same as above, but also use a `RadialBlur` transition effect")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("River.RadialBlur")])])]),e._v("\n")])])]),t("p",[e._v("Backgrounds are handled a bit differently from characters to better accommodate traditional VN game flow. Most of the time you'll probably have a single background actor on scene, which will constantly transition to different appearances. To remove the hassle of repeating same actor ID in scripts, it's possible to provide only the background appearance and transition type (optional) as a nameless parameter assuming "),t("code",[e._v("MainBackground")]),e._v(" actor should be affected. When this is not the case, ID of the background actor can be explicitly provided via the "),t("code",[e._v("id")]),e._v(" parameter:")]),e._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Given a `CityVideo` background actor with `Night` and `Day` appearances (video clips)")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Show the video background playing day clip")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Day")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[e._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("CityVideo")])])]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Transition to night clip with ripple effect")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Night.Ripple")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[e._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("CityVideo")])])]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Hide the video background")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@hide")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("CityVideo")])])]),e._v("\n")])])]),t("p",[e._v("Main background actor record is created by default in the background resources manager and can't be renamed or deleted; however, parameters of the main background (implementation, pivot, PPU, etc) can be freely changed.")]),e._v(" "),t("h2",{attrs:{id:"match-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#match-mode"}},[e._v("#")]),e._v(" Match Mode")]),e._v(" "),t("p",[e._v("When "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-Camera.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("camera"),t("OutboundLink")],1),e._v(" is rendering in orthographic mode and "),t("code",[e._v("Match Mode")]),e._v(" in background actor configuration is not disabled, the actor will attempt to match its size against current screen size. This is performed to handle the cases when display "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Aspect_ratio_(image)",target:"_blank",rel:"noopener noreferrer"}},[e._v("aspect ratio"),t("OutboundLink")],1),e._v(' is different from the background\'s. When the matching is disabled and the aspect ratios are different, "black bars" will appear.')]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/46619a08e3b91441cf30800185932963.png",alt:""}})]),e._v(" "),t("p",[e._v("While for standalone (PC, Mac, Linux) builds you can limit the available aspect ratios in the "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-PlayerSettingsStandalone.html#Resolution",target:"_blank",rel:"noopener noreferrer"}},[e._v("player settings"),t("OutboundLink")],1),e._v(", on web, consoles and mobiles it's not possible and the applications have to adapt for the target devices instead.")]),e._v(" "),t("p",[e._v("Following match modes can be set for each background actor (except of generic implementation):")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Mode")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Crop")]),e._v(" "),t("td",[e._v("The background will always occupy the whole camera frustum, ensuring no black bars are visible to the player, no matter the display aspect ratio; however, some background areas could be cropped. Set by default for new background actors.")])]),e._v(" "),t("tr",[t("td",[e._v("Fit")]),e._v(" "),t("td",[e._v("The whole background area will always remain visible, but black bars will appear when the aspect ratios are different.")])]),e._v(" "),t("tr",[t("td",[e._v("Custom")]),e._v(" "),t("td",[e._v("Allows matching either width or height with a custom ratio. The ratio is controlled with "),t("code",[e._v("Custom Match Ratio")]),e._v(" property: minimum (0) value will match width and ignore height, maximum (1) — vice-versa.")])]),e._v(" "),t("tr",[t("td",[e._v("Disable")]),e._v(" "),t("td",[e._v("Don't perform any matching.")])])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("In case you wish to implement a similar matching feature for a generic or custom background see the "),t("a",{attrs:{href:"https://forum.naninovel.com/viewtopic.php?f=8&t=107&p=335#p335",target:"_blank",rel:"noopener noreferrer"}},[e._v("scale to screen example"),t("OutboundLink")],1),e._v(" on the forum.")])]),e._v(" "),t("h2",{attrs:{id:"poses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#poses"}},[e._v("#")]),e._v(" Poses")]),e._v(" "),t("p",[e._v("Each background has "),t("code",[e._v("Poses")]),e._v(" property allowing to specify named states (poses).")]),e._v(" "),t("p",[e._v("Pose name can be used as appearance in "),t("a",{attrs:{href:"/api/#back",target:"_blank"}},[t("code",[e._v("@back")])]),e._v(" command to apply all the selected parameters specified in the pose at once, instead of specifying them individually via the command parameters.")]),e._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Given `Day` pose is defined for main background, ")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; applies all the selected parameters specified in the pose.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Day")])])]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Same as above, but for a background actor with `City` ID")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; and using `DropFade` transition over 3 seconds.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Day")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[e._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("City")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[e._v(" transition:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("DropFade")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[e._v(" time:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("3")])])]),e._v("\n")])])]),t("p",[e._v("Notice, that when a pose is used as appearance, you can still override individual parameters, eg:")]),e._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Given `Day` pose is defined for main background,")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; applies all the parameters specified in the pose state,")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; except tint, which is overridden in the command.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Day")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[e._v(" tint:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("#ff45cb")])])]),e._v("\n")])])]),t("h2",{attrs:{id:"sprite-backgrounds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sprite-backgrounds"}},[e._v("#")]),e._v(" Sprite Backgrounds")]),e._v(" "),t("p",[e._v("Sprite implementation of the background actors is the most common and simple one; it uses a set of "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/Textures.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("texture"),t("OutboundLink")],1),e._v(" assets wrapped over a quad mesh (sprite) to represent appearances of the background. The textures can be based on "),t("code",[e._v(".jpg")]),e._v(", "),t("code",[e._v(".png")]),e._v(", "),t("code",[e._v(".tiff")]),e._v(", "),t("code",[e._v(".psd")]),e._v(" or any other image file format "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/ImportingTextures",target:"_blank",rel:"noopener noreferrer"}},[e._v("supported by Unity"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Choose file formats that are most comfortable for your development workflow. When building the project, Unity will automatically convert all the source resources (textures, audio, video, etc) to the formats most suitable for the target platform, so it won't make difference in which format you originally store the resources in the project. Find more information on how Unity manage project assets in the "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/AssetWorkflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[e._v("Initial (unscaled) size of the sprite background mesh on scene depends on the reference resolution (camera configuration), background's "),t("code",[e._v("Pixel Per Unit")]),e._v(" property (set for each background actor in the configuration menu) and source texture resolution.")]),e._v(" "),t("p",[e._v("Naninovel will attempt to make the backgrounds cover the whole camera frustum by default, so make sure to size the source textures so that the aspect ratio is equal to the reference resolution; see "),t("RouterLink",{attrs:{to:"/guide/backgrounds.html#match-mode"}},[e._v("match mode guide")]),e._v(" for more information on how to change or disable this behaviour.")],1),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Define reference resolution with your team before starting the work on the art assets (both characters and backgrounds). This way the artists will be able to author the assets with the correct dimensions and you won't have to edit them later.")])]),e._v(" "),t("h2",{attrs:{id:"diced-sprite-backgrounds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diced-sprite-backgrounds"}},[e._v("#")]),e._v(" Diced Sprite Backgrounds")]),e._v(" "),t("p",[e._v("Built with an open source "),t("a",{attrs:{href:"https://github.com/Elringus/SpriteDicing",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpriteDicing"),t("OutboundLink")],1),e._v(" package, "),t("code",[e._v("DicedSpriteBackground")]),e._v(" implementation allows to significantly reduce build size and texture memory by reusing texture areas of the background sprites when the associated textures contain mostly similar data.")]),e._v(" "),t("p",[e._v("Diced background is very similar to diced character implementation; see the "),t("RouterLink",{attrs:{to:"/guide/characters.html#diced-sprite-characters"}},[e._v("diced characters guide")]),e._v(" for the setup and usage instructions.")],1),e._v(" "),t("h2",{attrs:{id:"video-backgrounds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#video-backgrounds"}},[e._v("#")]),e._v(" Video Backgrounds")]),e._v(" "),t("p",[e._v("Video backgrounds use looped "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/class-VideoClip",target:"_blank",rel:"noopener noreferrer"}},[e._v("video clip"),t("OutboundLink")],1),e._v(" assets to represent the appearance.")]),e._v(" "),t("p",[e._v("For the supported video formats for each platform see "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/VideoSources-FileCompatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity docs for video sources"),t("OutboundLink")],1),e._v(". When using video with an alpha channel (transparency), see the "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/VideoTransparency.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide on the supported formats"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTICE")]),e._v(" "),t("p",[e._v("When "),t("code",[e._v("Transcode")]),e._v(" is disabled in the video asset import settings, the clip may not be playable on some platforms. When a video is not playing in the build, try enabling the transcode option and rebuild the player.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/9c3fb59dc8ebb2fbd0f5a5e79542e11f.png",alt:""}})])]),e._v(" "),t("div",{staticClass:"custom-block example"},[t("p",{staticClass:"custom-block-title"},[e._v("EXAMPLE")]),e._v(" "),t("p",[e._v("In case having issues with achieving a seamless loop, make sure the video has exactly same starting and finishing frames and a compatible encoding setup; check our "),t("a",{attrs:{href:"https://github.com/Elringus/VideoLoop",target:"_blank",rel:"noopener noreferrer"}},[e._v("video loop example project"),t("OutboundLink")],1),e._v(" for the reference.")])]),e._v(" "),t("h3",{attrs:{id:"webgl-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgl-limitations"}},[e._v("#")]),e._v(" WebGL Limitations")]),e._v(" "),t("p",[e._v("On WebGL Unity's video player can only work in streaming mode, so all the video resources will be copied to "),t("code",[e._v("Assets/StreamingAssets/Backgrounds")]),e._v(" folder upon building the WebGL player. "),t("strong",[e._v("StreamingAssets")]),e._v(" folder will also appear in the build output directory; make sure to preserve it when publishing the build and check that your web server allows reading the data from this folder.")]),e._v(" "),t("p",[e._v("The copied video files won't be transcoded by Unity (even if the option is enabled), so the source files should initially be in a format supported by the web browsers; alternatively, you can replace the clip files in the game directory after the build. Below is the detailed metadata of a background video clip that is used in our WebGL demo:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Container : MPEG-4\nContainer profile : Base Media\nContainer codec ID : isom (isom/iso2/avc1/mp41)\nFormat : AVC\nFormat/Info : Advanced Video Codec\nFormat profile : High@L4\nFormat settings, CABAC : Yes\nFormat settings, RefFrames : 4 frames\nCodec ID : avc1\nCodec ID/Info : Advanced Video Coding\nBit rate : 3 196 kb/s\nWidth : 1 920 pixels\nHeight : 1 080 pixels\nDisplay aspect ratio : 16:9\nFrame rate mode : Constant\nFrame rate : 25.000 FPS\nColor space : YUV\nChroma subsampling : 4:2:0\nBit depth : 8 bits\nScan type : Progressive\nWriting library : x264 core 148 r2795 aaa9aa8\nEncoding settings : cabac=1 / ref=3 / deblock=1:0:0 / analyse=0x3:0x113 / me=hex / subme=7 / psy=1 / psy_rd=1.00:0.00 / mixed_ref=1 / me_range=16 / chroma_me=1 / trellis=1 / 8x8dct=1 / cqm=0 / deadzone=21,11 / fast_pskip=1 / chroma_qp_offset=-2 / threads=12 / lookahead_threads=2 / sliced_threads=0 / nr=0 / decimate=1 / interlaced=0 / bluray_compat=0 / constrained_intra=0 / bframes=3 / b_pyramid=2 / b_adapt=1 / b_bias=0 / direct=1 / weightb=1 / open_gop=0 / weightp=2 / keyint=250 / keyint_min=25 / scenecut=40 / intra_refresh=0 / rc_lookahead=40 / rc=crf / mbtree=1 / crf=23.0 / qcomp=0.60 / qpmin=0 / qpmax=69 / qpstep=4 / ip_ratio=1.40 / aq=1:1.00\n")])])]),t("p",[e._v("If you're using a video format other than mp4 (eg, webm), set the extension of the hosted files via "),t("code",[e._v("Video Stream Extension")]),e._v(" property in the resource provider configuration.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/b3eb1ab2af513e6a131347d6e5e455e5.png",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"layered-backgrounds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#layered-backgrounds"}},[e._v("#")]),e._v(" Layered Backgrounds")]),e._v(" "),t("p",[e._v("The layered implementation allows composing backgrounds from multiple sprites (layers) and then toggle them individually via naninovel scripts at runtime.")]),e._v(" "),t("p",[e._v("To create a layered background prefab, use "),t("code",[e._v("Create -> Naninovel -> Background -> Layered")]),e._v(" asset context menu. Enter "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/EditingInPrefabMode.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("prefab editing mode"),t("OutboundLink")],1),e._v(" to compose the layers. Several layers and groups will be created by default. You can use them or delete and add your own.")]),e._v(" "),t("p",[e._v("The layered backgrounds are very similar to "),t("RouterLink",{attrs:{to:"/guide/characters.html#layered-characters"}},[e._v("layered characters")]),e._v("; consult the documentation for more info on how to set up and control them via naninovel scripts.")],1),e._v(" "),t("p",[e._v("Don't forget that nameless parameter in "),t("a",{attrs:{href:"/api/#back",target:"_blank"}},[t("code",[e._v("@back")])]),e._v(" command is expecting appearance and transition type (not ID and appearance as with "),t("a",{attrs:{href:"/api/#char",target:"_blank"}},[t("code",[e._v("@char")])]),e._v(" command), so specify layer composition expressions in the following way:")]),e._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('; Given "LayeredForest" background actor')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Group>Layer,Other/Group+Layer,-RootLayer.TransitionType")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[e._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("LayeredForest")])])]),e._v("\n")])])]),t("h2",{attrs:{id:"generic-backgrounds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generic-backgrounds"}},[e._v("#")]),e._v(" Generic Backgrounds")]),e._v(" "),t("p",[e._v("Generic background is the most flexible background actor implementation. It's based on a prefab with a "),t("code",[e._v("Generic Background Behaviour")]),e._v(" component attached to the root object. Appearance changes and all the other background parameters are routed as "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/UnityEvents.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity events"),t("OutboundLink")],1),e._v(" allowing to implement the behavior of the underlying object in any way you wish.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/6483ef3e84549c1bbfbdffc6556308ea.png",alt:""}})]),e._v(" "),t("div",{staticClass:"custom-block warn"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Generic actor implementations just route events from the scenario scripts and it's up to user to implement the underlying behaviour, eg how the actor should react to the appearance or visibility change commands, whether and how it will adapt to aspect ratio changes, etc. Don't expect most of the actor-related features to work automatically with the generic implementations.")])]),e._v(" "),t("p",[e._v("To create generic background prefab from a template, use "),t("code",[e._v("Create -> Naninovel -> Background -> Generic")]),e._v(" context asset menu.")]),e._v(" "),t("p",[e._v("Generic backgrounds are very similar to generic characters; check out a tutorial video on setting an animated 3D model as a generic character for one of the possible usage examples. Be aware, that the video is captured with an old Naninovel version and some properties and component names are different now; see the above docs for the up to date information.")]),e._v(" "),t("p"),t("div",{staticClass:"video-container"},[t("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/HPxhR0I1u2Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t("p"),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Unity's "),t("code",[e._v("Animator")]),e._v(" component could fail to register "),t("code",[e._v("SetTrigger")]),e._v(" when the game object is enabled/disabled in the same frame; in case you use "),t("code",[e._v("GameObject.SetActive")]),e._v(" to handle visibility changes (as it's shown in the above tutorial), consider enabling/disabling the child objects with renderers instead.")])]),e._v(" "),t("div",{staticClass:"custom-block example"},[t("p",{staticClass:"custom-block-title"},[e._v("EXAMPLE")]),e._v(" "),t("p",[e._v("Find "),t("a",{attrs:{href:"https://github.com/Naninovel/GenericActor",target:"_blank",rel:"noopener noreferrer"}},[e._v("example project on GitHub"),t("OutboundLink")],1),e._v(", where generic background implementation is used to host animated sprites.")])]),e._v(" "),t("h2",{attrs:{id:"scene-backgrounds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scene-backgrounds"}},[e._v("#")]),e._v(" Scene Backgrounds")]),e._v(" "),t("p",[e._v("You can use a "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/CreatingScenes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unity scene"),t("OutboundLink")],1),e._v(" as a background with scene backgrounds implementation.")]),e._v(" "),t("p",[e._v("Create a new (or move an existing) scene inside "),t("code",[e._v("Assets/Scenes")]),e._v(" folder and make sure it has at least one "),t("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Camera.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("camera"),t("OutboundLink")],1),e._v(" component attached to a root game object inside the scene. Upon loading scene background, Naninovel will assign a render texture to the first found camera in the scene. The render texture will then be assigned to a background sprite, representing the scene background inside Naninovel scene space. This way, the scene background will be able to co-exist with other background and character actors, support all the background transition effects and scale to handle various display aspect ratios.")]),e._v(" "),t("p",[e._v("Make sure to position the scene objects in world space so that they don't overlap with objects from other scenes, that could potentially be loaded at the same time (eg, when referenced in a single naninovel script). Additionally, be aware, that in case a scene background object is positioned near the global space origin ("),t("code",[e._v("x0 y0 z0")]),e._v("), it could be rendered by Naninovel's main camera; to prevent this, either offset all the scene objects from the global origin, or use "),t("code",[e._v("Configuration -> Engine -> Override Objects Layer")]),e._v(" to isolate Naninovel-related objects using "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/Layers.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("layers"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("After scene setup is complete, create a new background actor via "),t("code",[e._v("Naninovel -> Configuration -> Backgrounds")]),e._v(" menu, select "),t("code",[e._v("SceneBackground")]),e._v(" implementation and add the scene asset to the actor resources.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/d69159ab4d93793022018fa8d244f1aa.png",alt:""}})]),e._v(" "),t("p",[e._v("When assigning resources for a scene background actor, corresponding scene assets should automatically be added to the "),t("a",{attrs:{href:"https://docs.unity3d.com/Manual/BuildSettings.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("build settings"),t("OutboundLink")],1),e._v("; in case you're getting an error that a scene asset wasn't added to the build, try adding it manually.")]),e._v(" "),t("p",[e._v("You can now use "),t("a",{attrs:{href:"/api/#back",target:"_blank"}},[t("code",[e._v("@back")])]),e._v(" command to control the created scene background actor, eg:")]),e._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Show `Scene` background actor with content from `TestScene1` Unity scene.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("TestScene1")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[e._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Scene")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("; Transition the same actor to `TestScene2` with `RandomCircleReveal` effect.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@back")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("TestScene2.RandomCircleReveal")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[e._v(" id:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Scene")])])]),e._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("When composing backgrounds with Unity scenes, consider adding "),t("a",{attrs:{href:"/guide/custom-commands"}},[e._v("custom commands")]),e._v(" to control scene state (eg, modify light color to change time of day or move camera to change the view) instead of creating multiple scenes for each appearance. This way you won't have to track objects position to prevent overlap when multiple scenes are loaded.")])]),e._v(" "),t("h2",{attrs:{id:"render-to-texture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#render-to-texture"}},[e._v("#")]),e._v(" Render to Texture")]),e._v(" "),t("p",[e._v("It's possible to render character and background actors of all the implementations (except generic) to a texture asset, which can then can be assigned to a custom UI, printer, material or any other compatible source. Setting up background actor render to texture is very similar to that of a character; "),t("RouterLink",{attrs:{to:"/guide/characters.html#render-to-texture"}},[e._v("check the guide")]),e._v(" for more info and examples.")],1)])}),[],!1,null,null,null);a.default=o.exports}}]);