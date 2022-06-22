/*
Bionic reading, a userscript that make first letter of each word in a text bold.
*/

var BOLD_RATE = 0.5;
var BOLD_MIN_CHARS = 3;

function doBionic() {
    // Find all p elements
    var pList = document.getElementsByTagName("p");
    for (var i = 0; i < pList.length; i++) {
        var p = pList[i];
        if (p.__bionic_processed) {
            continue;
        }
        p.__bionic_processed = true;
        // Find all text nodes
        var nodes = p.childNodes;
        for (var j = 0; j < nodes.length; j++) {
            var node = nodes[j];
            if (node.nodeType == 3) {
                var span = document.createElement("span");
                // Text node
                var text = node.nodeValue;
                var html = "";
                var words = text.split(" ");
                for (var k = 0; k < words.length; k++) {
                    var word = words[k];
                    var boldStr = "";
                    var normalStr = word;
                    if (word.trim().length > 0) {
                        if (word.length <= BOLD_MIN_CHARS) {
                            boldStr = word; 
                            normalStr = "";
                        } else {
                            var boldLen = Math.floor(word.length * BOLD_RATE);
                            if (boldLen >= word.length) {
                                boldLen = word.length;
                            }
                            boldStr = word.substring(0, boldLen);
                            normalStr = word.substring(boldLen);
                        }
                    }
                    if (k < words.length - 1) {
                        normalStr += " ";
                    }
                    if (boldStr.length > 0) {
                        var b = document.createElement("b");
                        b.innerText = boldStr;
                        span.appendChild(b);
                    }
                    if (normalStr.length > 0) {
                        var textNode = document.createTextNode(normalStr);
                        span.appendChild(textNode);
                    }
                }
                p.replaceChild(span, node);
            }
        }
    }

}

doBionic();

// Add style
var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = "p b { font-weight: 700; !important; }";
document.getElementsByTagName("head")[0].appendChild(style);