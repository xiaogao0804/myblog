import Header from './components/header/header.js';
/*import Banner from './components/banner/banner.js';*/
import Recommend from './components/recommend/recommend.js';
import Footer from './components/footer/footer.js';
import Sidebar from './components/sidebar/sidebar.js';
import './css/common.css';

const App = function() {
    let dom=document.getElementById('header');
/*    let dom2=document.getElementById('banner');*/
    let dom3=document.getElementById('recommend');
    let dom4=document.getElementById('footer');
    let dom5=document.getElementById('sidebar');

    //index页面
    let header=new Header();
/*    let banner=new Banner();*/
    let recommend=new Recommend();
    let footer=new Footer();
    let sidebar=new Sidebar();

     dom.innerHTML=header.template;
/*    dom2.innerHTML=banner.template;*/
    dom3.innerHTML=recommend.template;
    dom4.innerHTML=footer.template;
    dom5.innerHTML=sidebar.template;
};
new App();
//header-nav
let navUl=document.getElementById('nav-ul');
let navLi=navUl.getElementsByTagName('li');
for (let i=0;i<navLi.length;i++){
    navLi[i].onclick=function(){
        for (let i=0;i<navLi.length;i++){
            if(this==navLi[i]){
                navLi[i].className='active';
            }
            else{
                navLi[i].className='';
            }
        }
    }
}
//表情
function expression(id){
    var td=document.getElementById(id);
    var img=td.querySelectorAll('img');
    for(var k=0;k<img.length;k++){
        img[k].onclick=function(){
            for(var j=0;j<img.length;j++){
                if(this==img[j]){
                    var img_this=new Image();
                    img_this.src=img[j].src;
                    console.log(img_this.width);
                    con.appendChild(img_this);
                    var img_old_scale=img_this.width/img_this.height;
                    img_this.height=25;
                    img_this.width=img_this.height*img_old_scale;
                }
            }
        }
    }
}
expression('qqLook');
expression('qqLook2');
//留言
let tit=document.getElementById('msg_name');
let con=document.getElementById('msg_con');
let txt=document.getElementById('msg_txt');
let num=document.getElementById('num');
let btn=document.getElementById('btn');
btn.onclick=function(){
    var conValue=con.innerHTML;
    if(con.innerText.length>200){
        con.innerText=con.innerText.substring(0,200);
    }
    console.log(con.innerText);
    let newli=document.createElement('li');
    newli.innerHTML=`<h3>${tit.value}</h3><p>${conValue}</p>`;
    if(tit.value==''||con.innerHTML==''){
        alert('亲，标题和内容不能为空');
    }else{
        if(list.children.length==0){
            list.appendChild(newli);
            tit.value='';
            conValue='';
        }else{
            list.insertBefore(newli,list.children[0]);
            tit.value='';
            conValue='';
        }
    }
    let as=list.getElementsByTagName('a');
    for(let i=0;i<as.length;i++){
        as[i].onclick=function(){
            list.removeChild(this.parentNode.parentNode);
        }
    };
}
let time=null;
con.onfocus=function(){
    time=setInterval(function(){
        let len=con.innerHTML.length;
        let lenmax=200;
        let shu=lenmax-len;
        if(shu<0){
            txt.style.color='red';
        }else{
            txt.style.color='green';
        };
        num.innerHTML=shu;
    },80)
}


//tab切换
function href(i,url){
    navLi[i].onclick=function(){
        window.location.href=url;
        for(var j=0;j<navLi.length;j++){
            navLi[j].style.class='';
        }
        navLi[i].style.class='active';
    }
}

href(0,'../../../../myBlog/dist/index.html');
href(1,'../../../../jsBlog/dist/js1.html');
href(2,'../../../../jqBlog/dist/jq1.html');
href(3,'../../../../vueBlog/dist/vue.html');
href(4,'../../../../webBlog/dist/web.html');
href(5,'../../../../esBlog/dist/es.html');
href(6,'../../../../nodeBlog/dist/node.html');
href(7,'../../../../wxBlog/dist/wx.html');

