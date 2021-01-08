Practice: Vanilla JS - SPA route
===

用原生 Javascript 做 Single page application router。

如果要使用 `path` 需要搭配 backend，這個小練習用 `hash` 代替，
讓操作控制落在 frontend。

整體只有一個 html ，頁面的切換由 JS 抽換 DOM element，
路徑的設置也由 JS 做設定

實際上不會在這時候用到 `window.onhashchange`，僅是這次小練習用 `hash` 的變化取代 `path` 變化
- [window.location](https://developer.mozilla.org/zh-TW/docs/Web/API/Window/location)
- [window.history](https://developer.mozilla.org/zh-TW/docs/Web/API/Window.history)
- [window.onpopstate](https://developer.mozilla.org/zh-TW/docs/Web/API/Window.onpopstate)
- [window.onhashchange](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange)
