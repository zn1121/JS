/**
 * Created by qile on 2017/8/14.
 */
//JavaScript字符串的编码方式，Unicode字符集和UTF-16编码方式，参考链接：
//http://www.ruanyifeng.com/blog/2014/12/unicode.html

//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
// str.split("_");			//(5) ["abc", "def", "ghi", "jkl", "mn"]
// str.split("_",2);		//(2) ["abc", "def"]
// str.concat("_opq");		//str.concat("_",opq");
//////////////////////// str.substr(4,7);			//def_ghi
// str.substring(4,7);   	//def
// str.slice(2);			//c_def_ghi_jkl_mn
// str.slice(2,5);			//c_d
// str.slice(-2);			//mn
// str.slice(2,-2);			//c_def_ghi_jkl_
// 更多内容参见下一章节

// str.bold();				//<b>abc_def_ghi_jkl_mn</b>
// str.link();				//<a href="undefined">abc_def_ghi_jkl_mn</a>
// str.fontcolor("red");	//<font color="undefined">abc_def_ghi_jkl_mn</font>
// str.fontsize(50);		//<font size="undefined">abc_def_ghi_jkl_mn</font>


//模式匹配，参加后续正则表达式章节
