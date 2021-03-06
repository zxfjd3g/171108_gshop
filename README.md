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
    1). 问题: 更新状态数据, 对应的界面不变化
        原因: 一般方法给一个已有绑定的对象中添加一个新的属性, 这个属性没有数据绑定
        解决: 
            Vue.set(obj, 'xxx', value)才有数据绑定
            this.$set(obj, 'xxx', value)才有数据绑定
            
## 4. ShopCart组件
    1). 问题: 点击添加购物项, 会1次添加多个
        原因: 创建了多个BScroll对象来管理同一个DOM元素
        解决: 只创建一个BScroll对象 
        扩展: 单例对象: 
            创建前, 先判断是否已经存在, 只有不存在才创建
            创建后, 保存创建的对象

# day05
## 1. Food组件
    1). 父子组件:
        子组件调用父组件的方法: 通过props将方法传递给子组件
        父组件调用子组件的方法: 通过ref找到子组件标签对象
    2). vue的自定义事件
        在父组件中, 给子组件对象绑定事件监听: @setSelectType="setSelectType"
        在子组件中, 分发/触发事件: $emit('setSelectType', selectType)
    3). 列表过滤效果
        使用计算属性
        过滤条件分析
## 2. RatingSelect组件
    props的设计
    
## 3. ShopRatings组件
    1). 异步获取商家的ratings数据显示列表
    2). 使用Vue组件的mixins技术实现多组件代码的复用

## 4. ShopInfo组件
    1). 动态操作样式
    2). 解决刷新当前组件路由时异常的问题
    3). 使用localStorage保存数据

## 5. 优化














