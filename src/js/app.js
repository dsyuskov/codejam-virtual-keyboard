import '../scss/main.scss';

const keys = [
  [
    ['Backquote', 'ё', 'Ё', '`', '~'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '"', '2', '@'],
    ['Digit3', '3', '№', '3', '#'],
    ['Digit4', '4', ';', '4', '$'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', ':', '6', '^'],
    ['Digit7', '7', '?', '7', '&'],
    ['Digit8', '8', '', '8', ''],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '', '-', ''],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'й', 'Й', 'q', 'Q'],
    ['KeyW', 'ц', 'Ц', 'w', 'W'],
    ['KeyE', 'у', 'У', 'e', 'E'],
    ['KeyR', '', '', '', ''],
    ['KeyT', '', '', '', ''],
    ['KeyY', '', '', '', ''],
    ['KeyU', '', '', '', ''],
    ['KeyI', '', '', '', ''],
    ['KeyO', '', '', '', ''],
    ['KeyP', '', '', '', ''],
    ['BracketLeft', '', '', '', ''],
    ['BracketRight', '', '', '', ''],
    ['Backslash', '\\', '/', '|', '\\'],
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', '', '', '', ''],
    ['KeyS', '', '', '', ''],
    ['KeyD', '', '', '', ''],
    ['KeyF', '', '', '', ''],
    ['KeyG', '', '', '', ''],
    ['KeyH', '', '', '', ''],
    ['KeyJ', '', '', '', ''],
    ['KeyK', '', '', '', ''],
    ['KeyL', '', '', '', ''],
    ['Semicolon', '', '', '', ''],
    ['Quote', '', '', '', ''],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', '', '', '', ''],
    ['KeyX', '', '', '', ''],
    ['KeyC', '', '', '', ''],
    ['KeyV', '', '', '', ''],
    ['KeyB', '', '', '', ''],
    ['KeyN', '', '', '', ''],
    ['KeyM', '', '', '', ''],
    ['Comma', '', '', '', ''],
    ['Period', '', '', '', ''],
    ['Slash', '', '', '', ''],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ControlLeft', 'Control', 'Control', 'Control', 'Control'],
    ['MetaLeft', 'Win', 'Win', '', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', '', '', '', ''],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['MetaRight', 'Win', 'Win', 'Win', 'Win'],
    ['ControlRight', 'Control', 'Control', 'Control', 'Control'],
  ],
];

const blocknote = document.createElement('textarea');
blocknote.className = 'blocknote';
document.body.append(blocknote);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard);

keys.forEach((line) => {
  const row = document.createElement('div');
  row.className = 'row';
  keyboard.append(row);
  line.forEach((item) => {
    const key = document.createElement('div');
    key.className = `key ${item[0].toLowerCase()}`;
    key.insertAdjacentText('afterbegin', `${item[1]}`);
    row.append(key);
  });
});
