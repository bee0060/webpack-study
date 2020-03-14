## 简要记录

1. 将入口组件抽象提取到入口js（一般是main）之外，在入口js引入组件。
2. 实现两个入口js，分别对应服务端build和客户端build， e.g., main_server.js, main_browser.js
3. main_server.js需要以commonjs方式书写，并export一个render方法。该方法用于服务器端渲染html。该render方法内需要使用react-dom提供的renderToString将组件渲染成字符串。
3. 实现2个webpack config分别用于build服务端和客户端的main.js
4. 客户端的build正常build出所有依赖和文件，包括css，js等
5. 服务端（webpack_server.config.js)build在node环境下将main_server编译成符合commonjs模式的模块。
6. 实现服务端，可以用express或其他js服务端。因为main_server为js依赖，所以应该是需要用nodejs实现服务端，才能引用main_server并调用其render方法。 该服务端引用main_server编译后的文件，如bundle_server.服务端在接收页面请求后，调用bundle_server的render方法，并将render的结果（组件的html字符串）插入到html模板中，然后将完整的html返回给前端。
7. 启动服务端， 在浏览器访问服务端对应端口和url地址，即可得到服务端渲染的包含react组件的完整html内容。
8. 其中html模板引用了客户端的bundle，所以渲染后的应用功能也能正常使用。