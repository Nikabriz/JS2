function replace_text(node) {
    node = node || document.getElementById('text');  

    var children = node.childNodes;
    var i = 0;

    while (node = children[i]) { 

        if (node.nodeType == 3) { 
            if (node.textContent) { 
                node.textContent = node.textContent.replace(/'/g, '\"', '&quot;');
            }
            else { 
                node.nodeValue = node.nodeValue.replace(/'/g, '&quot;');
            }
        } else { 
            replace_text(node);
        }
        i++;
    }

} 



replace_text();