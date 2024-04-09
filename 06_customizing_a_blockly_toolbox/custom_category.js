class CustomCategory extends Blockly.ToolboxCategory {
   /**
    * Constructor for a custom category.
    * @override
    */
   /**
    * 為了要自訂義類別，就要先創立自訂義類別，並繼承於Blockly.ToolboxCategory
    */
   constructor(categoryDef, toolbox, opt_parent) {
      super(categoryDef, toolbox, opt_parent);
   }

   /** @override */
   /**重寫addColourBorder，以讓他接受colur這顏色變數
    * 用於變化方塊背景顏色
    * Colour是根據類別定義上的categorystyle或屬性定義上的Colour來決定
    */
   addColourBorder_(colour) {
      this.rowDiv_.style.backgroundColor = colour;
   }

   /**
 * Sets the style for the category when it is selected or deselected.
 * @param {boolean} isSelected True if the category has been selected,
 *     false otherwise.
 * @override
 */
   setSelected(isSelected) {
      // We do not store the label span on the category, so use getElementsByClassName.
      // 使用getElementsByClassName選中對應的span元素
      const labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
      if (isSelected) {
         // Change the background color of the div to white.
         // isSelected == true，這選項被選中後，將標籤背景改為白色
         this.rowDiv_.style.backgroundColor = 'white';
         // Set the colour of the text to the colour of the category.
         // 將標籤文字顏色設定為此類別的顏色
         labelDom.style.color = this.colour_;
         // 讓圖標變成此類別的顏色
         this.iconDom_.style.color = this.colour_;
      } else {
         // Set the background back to the original colour.
         this.rowDiv_.style.backgroundColor = this.colour_;
         // Set the text back to white.
         labelDom.style.color = 'white';
         // 讓圖標變成白色
         this.iconDom_.style.color = 'white';
      }
      // This is used for accessibility purposes.
      Blockly.utils.aria.setState(
     /** @type {!Element} */(this.htmlDiv_),
         Blockly.utils.aria.State.SELECTED,
         isSelected,
      );
   }

   /** @override */
   createIconDom_() {
      const img = document.createElement('img');
      img.src = './logo_only.svg';
      img.alt = 'Lamp';
      img.width = '25';
      img.height = '25';
      return img;
   }
}


/**
 * 新建的自訂義類別要向Blockly註冊，
 * 不然會無法識別新建的類
 */
Blockly.registry.register(
   Blockly.registry.Type.TOOLBOX_ITEM,
   Blockly.ToolboxCategory.registrationName,
   CustomCategory, true);