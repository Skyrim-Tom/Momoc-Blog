# JavaScript通用脱敏方法

***

title: JavaScript通用脱敏方法
date: 2020-01-05 01:28:21
tags: JavaScript
categories: 技术干货
----------------

针对业务需求中经常会用到的手机号，或者银行卡等等较为隐私的信息，以" \*"号的形式渲染出来，这个时候就需要用到脱敏处理。因此封装了一个JS下的通用脱敏方法，方便批量处理。代码如下：

```javascript
/**
* 
* @param str 需要转换的字符串
* @param beginLen 从字符串下标的第几位开始
* @param endLen 从字符串下标的第几位结束
* @returns {string|*} 返回转换好的字符串
*/
function desensitization(str, beginLen, endLen){
    var len = str.length;
    var firstStr = str.substr(0, beginLen);
    var lastStr = str.substr(endLen);
    var middleStr = str.substring(beginLen, len-Math.abs(endLen)).replace(/[\s\S]/ig, '*');

    tempStr = firstStr+middleStr+lastStr;

    return tempStr;
}
desensitization('12345678901234',4, -4); //调用函数
```

原文出处：[JS通用脱敏方法](https://blog.csdn.net/yfds2008/article/details/86511593 "JS通用脱敏方法")
