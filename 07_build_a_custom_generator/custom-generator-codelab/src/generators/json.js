import * as Blockly from 'blockly';
export const javascriptGenerator = new Blockly.Generator('JSON');

const Order = {
   ATOMIC: 0,
};

jsonGenerator.forBlock['logic_null'] = function(block) {
   return ['null' , Order.ATOMIC];
};

jsonGenerator.forBlock['text'] = function(block) {
   const textValue = block.getFieldValue('TEXT');
   const code = `"${textValue}"`;
   return [code, Order.ATOMIC];
}

jsonGenerator.forBlock['math_number'] = function(block) {
   const code = String(block.getFieldValue('NUM'));
   return [code, Order.ATOMIC];
}

jsonGenerator.forBlock['logic_boolean'] = function(block) {
   const code = (block.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
   return [code, Order.ATOMIC];
}