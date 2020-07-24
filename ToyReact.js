class Node {
    constructor(tag){
        this.root = document.createElement(tag)
    }
    setAttribute(name,value){
        if(name.match(/^on[\S\s+]$/)){
            console.log(RegExp.$1.toLowerCase())
            this.root.addEventListener(RegExp.$1.toLowerCase(),value)
        }
        this.root.setAttribute(name,value)
    }
    appendChild(vchild){
        vchild.$mount(this.root)
    }
    $mount(parent){
        parent.appendChild(this.root)
    }
}
class TextNode{
    constructor(content){
        this.root = document.createTextNode(content)
    }
    $mount(parent){
        parent.appendChild(this.root)
    }
}
export class Component{
    constructor(){
        this.children = [];
        this.props = Object.create(null);
    }
    $mount(parent){
        let dom = this.render()
        dom.$mount(parent)
    }
    setAttribute(name, value) {
        this.props[name] = value;
        this[name] = value;
    }
    appendChild(vchild){
        this.children.push(vchild)
    }
}

export let ToyReact = {
    createElement(type,attrs,...children){
        let element ;
        if(typeof type ==='string')
            element = new Node(type);
        else
            element = new type;

        for(let name in attrs){
            element.setAttribute(name,attrs[name])
        }
        let insertChildren = (children) =>{
            children.forEach(ele=>{
                if(typeof ele==='object' && ele instanceof Array){
                    insertChildren(ele)
                }else{
                    if(
                        !(ele instanceof Component) &&
                        !(ele instanceof Node) &&
                        !(ele instanceof TextNode)
                    )
                        ele = String(ele);
                    if(typeof ele === 'string'){
                        ele = new TextNode(ele)
                    }
                    element.appendChild(ele)
                }           
            })
        }
        insertChildren(children)
        return element
    },
    render(vdom,element){
        vdom.$mount(element)
    }
}