class ToolboxLabel extends Blockly.ToolboxItem {
   constructor(toolboxItemDef, parentToolbox) {
      super(toolboxItemDef, parentToolbox);
   }

   /** @override */
   init(){
      // Create the label
      // 創建label元素
      this.lable = document.createElement('label');
      // 設置label元素文本內容
      this.lable.textContent = this.toolboxItemDef_['name'];
      // Set the name.
      // 設置style顏色屬性
      this.lable.style.color = this.toolboxItemDef_['colour'];
      // Any attributes that begin with css-will get added to a cssconfig object.
      // 任何css- 開頭的屬性都會添加到cssconfig對象
      const cssConfig = this.toolboxItemDef_['cssconfig'];
      // Add the class.
      // 添加class屬性
      if(cssConfig){
         this.lable.classList.add(cssConfig['label']);
      }
   }

   /** @override */
   getDiv(){
      return this.lable;
   }
}

Blockly.registry.register(
   Blockly.registry.Type.TOOLBOX_ITEM,
   'toolboxlabel',
   ToolboxLabel);