// create document Dom
function createDocumentFragment(txt,curClass){
        // var div= document.createElementNS('http://www.w3.org/1999/xhtml', 'div');  
        // div.className += curClass
        // div.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg">${txt}</svg>`;  
        // console.log(div);
        
        // return div; 
        const flag = document.createRange().createContextualFragment(txt)
        return flag
}

//remove Document Dom
function removeDocument(dom,curClass){
    dom.children.forEach((item)=>{
        const cls = item.className.split(' ')
        if(cls.indexOf(curClass) !== -1){
            dom.removeChild(item)
        }
    })
}

export default {
    bind(el,binding,vnode){
        if(!binding.value.start){
            return
        }
    },

    inserted(el,binding,vnode){
    },
    update(el,binding,vnode){
        
        const _ops = binding.value,
            _c = el.getElementsByClassName(_ops.className),
            _oldC = _c[_ops.position]
            
        if(_ops.start){
            _c[_ops.position].appendChild(createDocumentFragment(_ops.template,_ops.curClass))
        }else{
            removeDocument(_oldC,_ops.curClass)
        }
    }
}