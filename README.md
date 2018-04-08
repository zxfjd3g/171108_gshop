# day01
## 1. 项目开发准备
    项目描述
    技术选型
    API接口
    你能从此项目中学到什么?

## 2. 开启项目开发
    使用脚手架创建项目
    安装所有依赖/指定依赖
    开发环境运行
    生产环境打包与发布

## 3. 搭建项目整体界面结构
    stylus的理解和使用
        结构化, 变量, minxin(混合)
    vue-router的理解和使用
        $router: 路由器对象, 包含一些操作路由的功能函数, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
        <router-link>: 路由链接
        <router-view>: 显示当前路由组件
    项目路由拆分
    底部导航组件: FooterGuide
    导航路由组件: Msite/Search/Order/Profile

## 4. 抽取组件
    头部组件: HeaderTop, 通过slot来实现组件通信标签结构
    商家列表组件: ShopList

## 5. 登陆路由组件
     静态组件
     FooterGuide的显示/隐藏: 通过路由的meta
     
## 6. 前后台交互
    后台接口测试
    ajax函数封装: axios + promise
    接口请求函数封装
    
# day02
## 1. 使用vuex管理状态
    创建所有相关的模块: store/index|state|mutations|actions|getters|mutation-types
    设计state: 从后台获取的数据
    实现actions: 
        定义异步action: async/await
        流程:　发ajax获取数据, commit给mutation
    实现mutations: 给状态赋值
    实现index: 创建store对象
    main.js: 配置store
    
## 2. 异步显示数据
    0). 整体编码
        在mounted()中, 通过$store.dispatch('actionName')来异步获取后台数据到state中
        在computed()中, mapState(['xxx'])读取state中数据到组件中
        在模板中显示xxx的数据
    1). 地址
    2). 食品分类轮播
        一维数组==>二维数组
        watch监视状态数据改变
        $nextTick()界面更新后处理
    3). 商家列表
        使用svg图片优化列表加载显示
    
## 3. 开发Star组件
    模板中显示数据的来源:
        data: 自身的数据(内部改变)
        props: 外部传入的数据(外部改变)
        computed: 根据data/props/别的compute/state/getters
        
## 4. login组件
    1). 切换登陆方式
    2). 验证手机号(以1开头, 11位数字)
    3). 倒计时
    4). 密码的显示/隐藏切换
    5). 一次性图片验证码
    
# day03
## 1. 完成登陆/注册功能
    1). 2种方式
       手机号/短信验证码登陆
       用户名/密码/图片验证码登陆
    2). 登陆的基本流程
       表单前台验证, 如果不通过, 提示
       发送ajax请求, 得到返回的结果
       根据结果的标识(code)来判断登陆请求是否成功
           1: 不成功, 显示提示
           0. 成功, 保存用户信息, 返回到上次路由
    3). vue自定义事件
       绑定监听: @eventName="fn"  function fn (data) {// 处理}
       分发事件: this.$emit('eventName', data)
    4). 注意:
       使用network查看请求(路径/参数/请求方式/响应数据)
       使用vue的chrome插件查看vuex中的state和组件中的数据
       使用debugger语句调试代码
       实参类型与形参类型的匹配问题
       
## 2. 搭建商家整体界面
    1). 拆分界面路由
    2). 路由的定义/配置|使用

## 3. 模拟(mock)数据/接口
    1). 前后台分离的理解
    2). mockjs的理解和使用
    3). json数据的理解和设计 
     
# day04
## 1. ShopHeader组件
    1). 异步显示数据效果的编码流程
        ajax
          ajax请求函数
          接口请求函数
        vuex
          state
          mutation-types
          actions
          mutations
        组件
          dispatch(): 异步获取后台数据到vuex的state
          mapState(): 从vuex的state中读取对应的数据
          模板中显示
    2). 初始显示异常
        情况1: Cannot read property 'xxx' of undefined"
        原因: 初始值是空对象, 内部没有数据, 而模块中直接显示3层表达式
        解决: 使用v-if指令
        
        情况2: Cannot read property 'avatar' of null"
        原因: 初始值是null, 而模块中直接显示2层表达式
        解决: 初始值为{}
    3). vue transition动画
    
## 2. ShopGoods组件
    1). 动态展现列表数据
    2). 基本滑动:
        使用better-scroll
        理解其基本原理
        创建BScroll对象的时机
    3). 滑动右侧列表, 左侧同步更新
        better-scroll禁用了原生的dom事件, 使用的是自定义事件
        绑定监听: scroll/scrollEnd
        滚动监听的类型: probeType
        列表滑动的3种类型
            手指触摸
            惯性
            编码
    4). 点击左侧列表项, 右侧滑动到对应位置
        
## 3. CartControl组件

## 4. ShopCart组件















