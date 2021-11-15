import {setAttr,inViewport} from './utils'


const install = (Vue,options) =>{
    const promise = []

    const update = (el,binding,vnode) => {
        const src = binding.value.src

        const img = new Image()
        return new Promise(resolve=>{
            img.onload = () =>{
                setAttr(el,img.src,vnode.tag)
                resolve()
            }
            img.src = src
        })
    }
    Vue.directive('img',{
        bind(el,binding,vnode){
            const defer = binding.value.defer
            if(!defer){
                promise.push(update(el,binding,vnode))
            }
        },
        inserted(el,binding,vnode){
            const {defer} = binding.value
            if(!defer) return
            if(inViewport(el)){
                promise.push(update(el,binding,vnode))
            }else{
                Vue.nextTick(()=>{
                    Promise.all(promise)
                    .then(()=>{
                        promise.length = 0
                        update(el,binding,vnode)
                    })
                    .catch(()=>{})
                })
            }
        },
        update
    })
}


export default install