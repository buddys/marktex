﻿/*
* paginator in Bootstrap style
* @requires jQuery, bootstrap 3
* Usage: $('.pagination').paginator({current_page: 1, page_count: 15, button_number:5, pager_click: callback });
*
* Where current_page is the visible page number
*       page_count is the total number of pages to display
*		button_number is the number of visible page buttons
*       pager_click is the method to fire when a pager button is clicked, accepts an argument which indicates the target page number.
*/
(function ($) {

    $.fn.paginator = function (options) {
        var options = $.extend({}, $.fn.paginator.defaults, options);
        return this.each(function () {

            // empty out the destination element and then render out the pager with the supplied options
            $(this).empty().append(renderpager(parseInt(options.current_page), parseInt(options.page_count), parseInt(options.button_number), options.pager_click).children());
          
            // append quick jump
            $(this).append(quickjump(parseInt(options.current_page), parseInt(options.page_count), parseInt(options.button_number), options.pager_click));

            // add bootstrap pagination class
            $(this).addClass('pagination');
        });
    };

    // render and return the pager with the supplied options
    function renderpager(current_page, page_count, button_number, pager_click) {

        var $pager = $('<ul></ul>');

        // add first & prev
        $pager.append(renderButton('first', current_page, page_count, pager_click)).append(renderButton('prev', current_page, page_count, pager_click));
        
        //获取页码范围
        var page_min = Math.max( current_page-(button_number-1)/2|0, 1)
        var page_max = Math.min( page_min+button_number-1, page_count)

        //如果左边或右边超出，会导致总页数减少
        if( page_max + 1 - page_min < button_number)
            page_min = Math.max( page_max - button_number + 1, 1)
            
        //添加页码
        for (var page = page_min; page <= page_max; page++) {
            $pager.append(renderButton(page , current_page, page_count, pager_click));
        }

        // add last & next
        $pager.append(renderButton('next', current_page, page_count, pager_click)).append(renderButton('last', current_page, page_count, pager_click));

        return $pager;
    }

    // add quick jump
    function quickjump(current_page, page_count, button_number, pager_click){
      var jump = $('<div style="display:inline-block;"></div>');
        var select = $('<select style="display:inline-block;width:auto;" class="form-control"/>');
        for (var i = 1; i <= page_count; i++) {
            if( i == current_page) var attr = "selected";
            else var attr = "";
            select.append('<option '+attr+' value="' + i + '">' + i + '</option>');
        }
        select.change(function () {
            pager_click(this.value);
        });
        return jump.append('<span style="margin-left:15px;vertical-align: middle;">跳转至 </span').append(select);
    }
  
    // 构造一个指向link_page的按钮，link_page可以为数字、next、prev、first、last
    function renderButton(link_page, current_page, page_count, pager_click) {
        var link_title, link_content, class_li=""; //按钮提示、按钮内容

        switch (link_page) {
            case 'first':
                link_title = "首页";
                link_content = '首页';
                link_page = 1;
                if(current_page<=1)    class_li = "disabled";
                break;
            case 'last':
                link_title = "尾页";
                link_content = '尾页';
                link_page = page_count;
                if(current_page>=page_count)    class_li = "disabled";
                break;
            case 'prev':
                link_title = "上一页";
                link_content = '&laquo;';
                link_page = current_page - 1;
                if(current_page<=1)    class_li = "disabled";
                break;
            case 'next':
                link_title = "下一页";
                link_content = '&raquo;';
                link_page = current_page + 1;
                if(current_page>=page_count)    class_li = "disabled";
                break;
            default:
                link_title = "第" + link_page + "页 / 共" + page_count + "页";
                link_content = link_page;
                if(current_page == link_page)    class_li = "active";
                break;
        }

        var title = '';
        var callback = function(){};
        //此时按钮可以点击，显示提示
        if( class_li == ''){
            title = 'data-original-title="' + link_title +'"';
            callback = function(){pager_click(link_page);};
        }

        return btn = $('<li class="' + class_li + '"><a data-toggle="tooltip" ' + title + ' href="#">' + link_content + '</a></li>').click(callback);
    }

    // pager defaults.
    $.fn.paginator.defaults = {
        current_page: 1,
        page_count: 1,
        button_number: 5,
    };

})(jQuery);





