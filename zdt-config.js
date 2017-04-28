module.exports = {
    templateEngine: "velocity",//"smarty"
    templateExtName: [".html", ".vm"],
    server: {
        //host: "localhost",
        port: 8080
    },
    liveReload: false,
    rootPath: "/example",//服务器根目录
    templateRoot: "/tpl",//模板根目录。'rootPath/templateRoot'
    mockRoot: "/mock",
    smarty: {
        templateRoot: "./src/www/protected/views/",
        commonMock: "./mock/smarty/common.js"
    },
    velocity: {},
    sass: {
        includePaths: []
    },
    rewrite: [
        {
            from: /(\/style)\/style/,
            to: "$1"
        },
    ]
};