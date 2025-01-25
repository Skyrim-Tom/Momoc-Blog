# 在JavaScript中将String与XML相互转换

将字符串换成 XML 对象

```javascript
function convert_string_to_xml(strXML)  

{  

    if (window.ActiveXObject) {  

        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");  

        xmlDoc.async="false";  

        xmlDoc.loadXML(strXML);  

        return xmlDoc;  

    } else {  

        parser=new DOMParser();  

        xmlDoc=parser.parseFromString(strXML,"text/xml");  

        return xmlDoc;  

    }  

}  
```

将 XML 对象转换成字符串

```javascript
function convert_xml_to_string(xmlObject)  

{  

    if (window.ActiveXObject) { // for IE  

        return xmlObject.xml;  

    } else {  

        return (new XMLSerializer()).serializeToString(xmlObject);  

    }  

}  
```
