var obj0=document.getElementById(&quot;post1<data:post.id/>&quot;);
var obj1=document.getElementById(&quot;post2<data:post.id/>&quot;);
var s=obj1.innerHTML;
var t=s.substr(0,s.length/2);
var r=t.lastIndexOf(&quot;&lt;br&gt;&quot;);
if(r&gt;0) {obj0.innerHTML=s.substr(0,r);obj1.innerHTML=s.substr(r+4);}
