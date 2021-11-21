
import {setAttr,inViewport} from './utils';




const install = (Vue,opt={})=>{

    const callback = (el)=>{
        el.forEach(element => {
            if(element.isIntersecting)  {
                
                const image = element.target
                const data_src = image.getAttribute('data-img')
                
                image.setAttribute('src',data_src)
                Observer.unobserve(element.target)
            }
        });
    }
    const Observer = new IntersectionObserver(callback)
    

    Vue.directive('img',{
        bind(el,binding,vnode){
            // console.log(binding);
        },
        inserted(el,binding,vnode){

            Observer.observe(el)

            

        },
        update(el,binding,vnode){
            Observer.observe(el)
        }
        
    })

}


export default install