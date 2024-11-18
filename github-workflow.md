# Github workflow自动化部署

![image-20240908210523023](C:\Users\44550\AppData\Roaming\Typora\typora-user-images\image-20240908210523023.png)

项目内新建文件夹	.github，内新建workflows文件夹，内新建一个yaml文件

![image-20240908205409848](C:\Users\44550\AppData\Roaming\Typora\typora-user-images\image-20240908205409848.png)

yaml内容：

```yaml
name: workflow test # 工作流名字

on: # git什么操作触发，这里是push
  push:
  	branches: # 操作什么分支触发
  		- master

permissions:
  contents: write # 写入权限

jobs:
  build: # 具体操作
    name: Run build
    runs-on: ubuntu-latest # 运行环境，这里是最新版Ubuntu
    needs: *** # 需要什么操作后才能进行
    
    steps:
      - name: Checkout repo # 官方actions
        uses: actions/checkout@v3

      - name: Setup Node # 设置node
        uses: actions/setup-node@v3

      - name: Install # 安装依赖
        run: |
          npm install -g pnpm
          pnpm install --frozen-lockfile
        
      - name: Build docs
        run: npm run build # 打包命令
        
      - name: Deploy to GitHub Pages🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: github-pages # 发布到GitHub-pages分支
          folder: dist # 打包后的地址
```



最后一步🚀，打开仓库的settings，按如下操作。

![image-20240908213323094](http://47.101.145.72/images/github-page-setting.png)

左侧Actions=>Genaral，选择读写权限，然后save

![](https://i-blog.csdnimg.cn/blog_migrate/8c326a7e769218443e1b5d4d75e0c65a.png)

本地commit之后，最后点击actions，有新的工作流。自已的工作流跑完之后，会有pages-build-deployment的工作流帮你部署页面

![image-20240908213358017](C:\Users\44550\AppData\Roaming\Typora\typora-user-images\image-20240908213358017.png)

成功后，点击链接，就打开了你打包后的页面

