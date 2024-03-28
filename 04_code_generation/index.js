// javascriptGenerator is a code generator that makes JavaScript strings.
//import { javascriptGenerator } from 'blockly/javascript';

//const code = javascriptGenerator.workspaceToCode(myWorkspace);



/*javascript.javascriptGenerator.forBlock['my_custom_block'] = function (block) {
   let steps = '\'' + block.getFieldValue('FIELD_NAME') + '\'';
   // moveForward is a function you would have to define yourself and provide
   // within your execution context.
   return 'moveForward('+steps+');\n';
}*/


const toolbox = {
   // There are two kinds of toolboxes. The simpler one is a flyout toolbox.
   kind: 'flyoutToolbox',
   // The contents is the blocks and other items that exist in your toolbox.
   contents: [
      {
         kind: 'block',
         type: 'controls_if'
      },
      {
         kind: 'block',
         type: 'controls_whileUntil'
      },
      // You can add more blocks to this array.
      {
         kind: 'block',
         type: 'my_custom_block'
      },
      {
         kind: 'block',
         type: 'my_custom_block2'
      },
   ]
};

// The toolbox gets passed to the configuration struct during injection.
const workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox });