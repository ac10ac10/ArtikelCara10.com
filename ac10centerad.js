var obj0=document.getElementById("post1<data:post.id/>");
var obj1=document.getElementById("post2<data:post.id/>");
var s=obj1.innerHTML;
var t=s.substr(0,s.length/2);
var r=t.lastIndexOf("<br>");
if(r>0) {obj0.innerHTML=s.substr(0,r);obj1.innerHTML=s.substr(r+4);}
