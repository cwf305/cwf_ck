window.addEventListener('load', function() {
    var xhx = document.querySelectorAll('.xhx')
        var zjlis = document.querySelectorAll('.yxlcd')
        var yblis = document.querySelectorAll('.mjzx')
        var gjdzlis = document.querySelector('.gjdz')
        var sslxlcdlis = document.querySelector('.sslxlcd')
        var inputx = document.querySelector('input')
        var guanggao = document.querySelector('.ggao')
        // 内容分类的下划线
        for (i = 0; i < xhx.length; i++) {
            xhx[i].onmouseover = function() {
                this.className = 'yxhx'
            }
            xhx[i].onmouseout = function() {
                this.className = ''
            }
        }
        // 导航条中间的下拉菜单
        for (i = 0; i < zjlis.length; i++) {
            zjlis[i].onmouseover = function() {
                this.children[1].style.display = 'block'
                this.style.backgroundColor = '#fff'
            }
            zjlis[i].onmouseout = function() {
                this.children[1].style.display = 'none'
                this.style.backgroundColor = ''
            }
        }
        // 导航条右边的下拉菜单
        for(i = 0; i < yblis.length; i++) {
            yblis[i].onmouseover = function() {
                this.children[1].style.display = 'block'
                this.style.backgroundColor = '#fff'
            }
            yblis[i].onmouseout = function() {
                this.children[1].style.display = 'none'
                this.style.backgroundColor = ''
            }
        }
        // 地区下拉菜单
        gjdzlis.onmouseover = function() {
            this.children[1].style.display = 'block'
            this.style.backgroundColor = '#fff'
        }
        gjdzlis.onmouseout = function() {
            this.children[1].style.display = 'none'
            this.style.backgroundColor = ''
        }
        // 搜索栏下拉菜单
        sslxlcdlis.onmouseover = function() {
            this.children[2].style.display = 'block'
        }
        sslxlcdlis.onmouseout = function() {
            this.children[2].style.display = 'none'
        }
        // 控制搜索内容
        document.addEventListener('keyup', function(e) {
            if(e.keyCode == 83) {
                inputx.focus()
            }
        })
        // 弹出广告
        // var btn = guanggao.children[0]
        // var ggaa = guanggao.children[1]
        // btn.addEventListener('click', function() {
        //     ggaa.style.display = 'none'
        //     this.style.display = 'none'
        // })
        // setInterval(function() {
        //     btn.style.display = 'block'
        //     ggaa.style.display = 'block'
        // }, 10000)
        // 最上面固定栏
        var neiro = document.querySelector('.neiro')
        var smd = document.querySelector('.zuisssl')
        window.addEventListener('scroll', function() {
            if(parseInt(this.scrollY) > neiro.offsetTop) {
                smd.style.display = 'block'
            } else {
                smd.style.display = 'none'
            }
        })
        var bbb = document.querySelector('.bbb')
        bbb.addEventListener('mouseover', function() {
            this.children[2].style.display = 'block'
        })
        bbb.addEventListener('mouseout', function() {
            this.children[2].style.display = 'none'
        })
        // 左边固定栏
        var zbgdl = document.querySelector('.huidb')
        window.addEventListener('scroll', function() {
            if(parseInt(this.scrollY) > 600) {
                zbgdl.style.display = 'block'
            } else {
                zbgdl.style.display = 'none'
            }
        })
        // 轮播图按钮
        var num = 0
        var gs = 0
        var dsqq = setInterval(function() {
            yann.click()
        }, 2000)
        var lbt = this.document.querySelector('.left2')
        var zann = this.document.querySelector('.zuoann')
        var yann = this.document.querySelector('.youann')
        lbt.addEventListener('mouseenter', function() {
            zann.style.display = 'block'
            yann.style.display = 'block'
            clearInterval(dsqq)
            dsqq = null
        })
        lbt.addEventListener('mouseleave', function() {
            zann.style.display = 'none'
            yann.style.display = 'none'
            dsqq = setInterval(function() {
                yann.click()
            }, 2000)
        })
        // 1.动态生成小圆圈
        var ol = this.document.querySelector('ol')
        for(i = 0; i < lbt.children[2].children.length; i++) {
            var li = this.document.createElement('li')
            li.setAttribute('index', i)
            ol.appendChild(li)
            // 2.小圆圈排他思想
            li.addEventListener('click', function() {
                for(i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = ''
                }
                var index = this.getAttribute('index')
                this.className = 'xzxyq'
                dh(lbt.children[2], -index * 564)
                num = index
                gs = index
            })
        }
        ol.children[0].className = 'xzxyq'
        
        var first = lbt.children[2].children[0].cloneNode(true)
        lbt.children[2].appendChild(first)
        // 右侧按钮功能
        var flag = true
        yann.addEventListener('click', function() {
            if(flag == true) {
                flag = false
                if(num == lbt.children[2].children.length - 1) {
                    lbt.children[2].style.left = 0
                    num = 0
                }
                num++
                dh(lbt.children[2], -num * 564, function() {
                    flag = true
                })
                // 小圆圈跟随右侧按钮
                gs++
                if(gs == ol.children.length) {
                    gs = 0
                }
                for(i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = ''
                }
                ol.children[gs].className = 'xzxyq'
            }
        })
        // 左侧按钮功能
        zann.addEventListener('click', function() {
            if (flag == true) {
                flag = false
                if(num == 0) {
                    num = lbt.children[2].children.length - 1
                    lbt.children[2].style.left = -num * 564 + 'px'
                    
                }
                num--
                dh(lbt.children[2], -num * 564, function() {
                    flag = true
                })
                // 小圆圈跟随左侧按钮
                gs--
                if(gs < 0) {
                    gs = ol.children.length - 1
                }
                for(i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = ''
                }
                ol.children[gs].className = 'xzxyq'
            }
        })
        // 回顶部功能
        var huidb = this.document.querySelector('.huidb')
        console.log(huidb);
        huidb.addEventListener('click', function() {
            window.scroll(0, 0)
            
        })
        var gfkf = document.querySelector('.gudinglang').children[0]
        console.log(gfkf.children[1]);
        gfkf.children[1].addEventListener('click', function() {
            window.scroll(0, 1000)
        })

    // 搜索框功能

        // 定义延时器ID
        var timer = null

        var hc = {}
        // 定义防抖的函数
        function fdd(srknr) {
            timer = setTimeout(function() {
                getssgjchs(srknr)
            }, 500)
        }

        // 请求数据函数
        function getssgjchs(kw) {
            $.ajax({
                url: 'https://suggest.taobao.com/sug?q=' + kw,
                dataType: 'jsonp',
                success: function(re) {
                    console.log(re);
                    
                    xrjg(re)
                    
                }
            })
        }

        // 渲染搜索结构函数
        function xrjg(re) {
            if(re.result.length <= 0) {
                return $('#xrssnr').empty().hide()
            }
            var htmlstr = template('mbyq', re)
            $('#xrssnr').html(htmlstr).show()

            // 获取用户输入的内容
            var k = $('#sskuang').val().trim()
            // 需要将值作为值进行缓存
            hc[k] = re
        }

        // 输入框输入内容
        $('#sskuang').on('keyup', function() {
            clearTimeout(timer)
            var srknr = $(this).val().trim()

            // 判断内容是否为空
            if(srknr.length <= 0) {
                return $('#xrssnr').empty().hide()
            }

            // 判断是否存在于本地
            if(hc[srknr]) {
                return xrjg(hc[srknr])
            }
            
            fdd(srknr)


        })
        

        
})