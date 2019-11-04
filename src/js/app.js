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
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'й', 'Й', 'q', 'Q'],
    ['KeyW', 'ц', 'Ц', 'w', 'W'],
    ['KeyE', 'у', 'У', 'e', 'E'],
    ['KeyR', 'к', 'К', 'r', 'R'],
    ['KeyT', 'е', 'Е', 't', 'T'],
    ['KeyY', 'н', 'Н', 'y', 'Y'],
    ['KeyU', 'г', 'Г', 'u', 'U'],
    ['KeyI', 'ш', 'Ш', 'i', 'I'],
    ['KeyO', 'щ', 'Щ', 'o', 'O'],
    ['KeyP', 'з', 'З', 'p', 'P'],
    ['BracketLeft', 'х', 'Х', '[', '{'],
    ['BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['Backslash', '\\', '/', '|', '\\'],
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'ф', 'Ф', 'a', 'A'],
    ['KeyS', 'ы', 'Ы', 's', 'S'],
    ['KeyD', 'в', 'В', 'd', 'D'],
    ['KeyF', 'а', 'А', 'f', 'F'],
    ['KeyG', 'п', 'П', 'g', 'G'],
    ['KeyH', 'р', 'Р', 'h', 'H'],
    ['KeyJ', 'о', 'О', 'j', 'J'],
    ['KeyK', 'л', 'Л', 'k', 'K'],
    ['KeyL', 'д', 'Д', 'l', 'L'],
    ['Semicolon', 'ж', 'Ж', ';', ':'],
    ['Quote', 'э', 'Э', '\'', '"'],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'я', 'Я', 'z', 'Z'],
    ['KeyX', 'ч', 'Ч', 'x', 'X'],
    ['KeyC', 'с', 'С', 'c', 'C'],
    ['KeyV', 'м', 'М', 'v', 'V'],
    ['KeyB', 'и', 'И', 'b', 'B'],
    ['KeyN', 'т', 'Т', 'n', 'N'],
    ['KeyM', 'ь', 'Ь', 'm', 'M'],
    ['Comma', 'б', 'Б', ',', '<'],
    ['Period', 'ю', 'Ю', '.', '>'],
    ['Slash', '.', ',', '/', '?'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ControlLeft', 'Control', 'Control', 'Control', 'Control'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', '', '', '', ''],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['MetaRight', 'Win', 'Win', 'Win', 'Win'],
    ['ControlRight', 'Control', 'Control', 'Control', 'Control'],
  ],
];

let isShift = false;
let isCapsLock = false;
let prevKey;
let keyboard;
let lang = localStorage.getItem('lang') !== 'false';

const blocknote = document.createElement('textarea');
blocknote.className = 'blocknote';
document.body.append(blocknote);

function addSymbol(keyCode) {
  const functionalKey = ['CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'MetaRight', 'ControlRight'];
  if (!functionalKey.includes(keyCode)) {
    let symbol;
    switch (keyCode) {
      case 'Space': {
        symbol = ' ';
        break;
      }
      case 'Enter': {
        symbol = '\n';
        break;
      }
      case 'Tab': {
        symbol = '\t';
        break;
      }
      case 'Backspace': {
        symbol = '';
        blocknote.value = blocknote.value.slice(0, blocknote.value.length - 1);
        break;
      }
      default: {
        symbol = document.querySelector(`.${keyCode.toLowerCase()}`).textContent;
      }
    }
    blocknote.value += symbol;
  }
}

function keyDown(keyCode) {
  switch (keyCode) {
    case 'ShiftLeft':
    case 'ShiftRight': {
      if (prevKey === 'AltLeft') {
        lang = !lang;
      }
      if (!prevKey) {
        isShift = true;
        keyboard.remove();
        keyboard = drawKeyboard();
      }
      break;
    }
    case 'AltLeft': {
      if (prevKey === 'ShiftLeft') {
        lang = !lang;
      }
      break;
    }
    case 'CapsLock': {
      isCapsLock = !isCapsLock;
      keyboard.remove();
      keyboard = drawKeyboard();
      break;
    }
    default:
  }
  const key = document.querySelector(`.${keyCode.toLowerCase()}`);
  if (key) {
    key.classList.add('pressed');
    addSymbol(keyCode);
  }
  prevKey = keyCode;
  localStorage.setItem('lang', lang);
  console.log(lang);
}

function keyUp(keyCode) {
  if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
    isShift = false;
    keyboard.remove();
    keyboard = drawKeyboard();
  }

  const key = document.querySelector(`.${keyCode.toLowerCase()}`);
  if (key && key.classList.contains('pressed')) {
    if (keyCode !== 'CapsLock' || (keyCode === 'CapsLock' && !isCapsLock)) {
      key.classList.remove('pressed');
    }
  }
  prevKey = undefined;
}


function drawKeyboard() {
  let indexOfArray = 1;
  if (isShift || isCapsLock) {
    indexOfArray = 2;
  }

  if (isShift && isCapsLock) {
    indexOfArray = 1;
  }

  if (lang) indexOfArray += 2;

  const keyBoard = document.createElement('div');
  keyBoard.className = 'keyboard';
  document.body.append(keyBoard);

  keys.forEach((line) => {
    const row = document.createElement('div');
    row.className = 'row';
    keyBoard.append(row);
    line.forEach((item) => {
      const key = document.createElement('div');
      key.className = `key ${item[0].toLowerCase()}`;
      if (item[0] === 'CapsLock' && isCapsLock) {
        key.classList.add('pressed');
      }
      key.insertAdjacentText('afterbegin', `${item[indexOfArray]}`);
      key.addEventListener('mousedown', () => { keyDown(item[0]); });
      key.addEventListener('mouseup', () => { keyUp(item[0]); });
      row.append(key);
    });
  });
  return keyBoard;
}

keyboard = drawKeyboard();

document.addEventListener('keydown', (event) => {
  keyDown(event.code);
  event.preventDefault();
});

document.addEventListener('keyup', (event) => {
  keyUp(event.code);
  event.preventDefault();
});
