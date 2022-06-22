# breader
Minimal "bionic" reader, could be used as a bookmarklet.

# How to use

1. Copy and add the following URL to your bookmarks of your browser:
```
javascript:var BOLD_RATE=.5,BOLD_MIN_CHARS=3;function doBionic(){for(var e=document.getElementsByTagName("p"),t=0;t<e.length;t++){var n=e[t];if(!n.__bionic_processed){n.__bionic_processed=!0;for(var l=n.childNodes,a=0;a<l.length;a++){var i=l[a];if(3==i.nodeType){for(var r=document.createElement("span"),o=i.nodeValue.split(" "),d=0;d<o.length;d++){var s=o[d],c="",h=s;if(s.trim().length>0)if(s.length<=BOLD_MIN_CHARS)c=s,h="";else{var g=Math.floor(s.length*BOLD_RATE);g>=s.length&&(g=s.length),c=s.substring(0,g),h=s.substring(g)}if(d<o.length-1&&(h+=" "),c.length>0){var p=document.createElement("b");p.innerText=c,r.appendChild(p)}if(h.length>0){var m=document.createTextNode(h);r.appendChild(m)}}n.replaceChild(r,i)}}}}}var style=document.createElement("style");style.type="text/css",style.innerHTML="p b { font-weight: 700; !important; }",document.getElementsByTagName("head")[0].appendChild(style),doBionic();
```

2. When you click this bookmark, the page you are reading will be applied with "bionic" reading style.
