#zdt

## 环境依赖

- node ~4.0
- python 2.7（node-sass需要使用）

## 因未发布到npm。所以，目前的使用方式如下：

- 下载zdt包，源码地址：[https://git.coding.net/harx/zdt.git](https://git.coding.net/harx/zdt.git)
        
        git clone https://git.coding.net/harx/zdt.git
        
- 进入目录，npm全局安装。（可能需要管理员权限）

        注意！windows下需要安装两次才能成功。
        因为node-sass默认会编译libsass，而编译需要visualStudio,所以第一次会失败。但是编译是非必需的，若失败，则node-sass自动回退使用第三方编译好的文件。
        第二次安装时，因为已经可以正常编译sass，所以直接跳过编译函数。进而顺利执行其他的安装步骤。


        cd zdt
        npm install -g ./
        
## 使用方法

- 进入到项目的根目录，然后运行命令即可

        cd project/aaa
        zdt
        
### livereload 需下载插件使用

- chrome商店地址：[https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?utm_source=chrome-app-launcher-info-dialog](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?utm_source=chrome-app-launcher-info-dialog)

- 启动zdt后 点击插件图标开启调试即可。


