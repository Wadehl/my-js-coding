class vNode {
  constructor(tag, attrs, children, text, elm, context) {
    /*
        @param {String} tag 节点标签
        @param {VNodeData} attrs 节点数据: props, attrs, key, class, directives ...
        @param {Array<VNode>} children 子节点
        @param {String} text 文本
        @param {Node} elm 对应的真实DOM节点
        @param {VueComponent} context 组件实例
    */
    this.tag = tag;  
    this.attrs = attrs;  
    this.children = children; 
    this.text = text;
    this.elm = elm;
    this.context = context;
    this.key = data && this.data.key; // diff的唯一标识符
  }
}


