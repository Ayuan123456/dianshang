$(function( window){
    // 发请求
    $.ajax({
        url:"/category/queryTopCategory",
        dataType:"json",
        data:"get",
        success: function(arr){
            var html=template('leftTpl',arr);
            $(".left ul").html(html)
            console.log($(".left ul"));
            
        }
    })
    categoryRight(1)
    var odd
    //获取分类页面信息
    //注册点击事件

    $(".left ul").on("tap","li",function(){
        $(this).addClass("active").siblings().removeClass("active");
        if (odd==this.dataset.id) {
           return false;
        }
        
        categoryRight(this.dataset.id)
        odd=this.dataset.id 
         
    })
    
    
    //获取分页ID
    function categoryRight(idd ){
          $.ajax({
                  url:"/category/querySecondCategory",
                  dataType:"json",
                  data:{'id':idd},
                  success:function(arr){
                      var html =template('rightTpl',arr)
                      $(".right div").html(html)
                     
                      

                  }
    })
    }
    
})