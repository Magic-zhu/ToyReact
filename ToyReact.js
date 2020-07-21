export let ToyReact = {
    createElement(type,attrs,...children){
        let element = document.createElement(type)
        for(let name in attrs){
            element.setAttribute(name,attrs[name])
        }
        children.forEach(ele=>{
            if(typeof ele === 'string'){
                ele = document.createTextNode(ele)
            }            
            element.appendChild(ele)
        })
        return element
    }
}