class Key {
  constructor(keyCode, ru, en, capsRu, capsEn, grow) {
    this.keyCode = keyCode;
    this.ru = ru;
    this.en = en;
    this.capsRu = capsRu;
    this.capsEn = capsEn;
    this.grow = grow;
  }
}

const row1 = [
  new Key('192', 'ё', '`', 'Ё', '~'),
  new Key('49', '1', '1', '!', '!'),
  new Key('50', '2', '2', '"', '@'),
  new Key('51', '3', '3', '№', '#'),
  new Key('52', '4', '4', ';', '$'),
  new Key('53', '5', '5', '%', '%'),
  new Key('54', '6', '6', ':', '^'),
  new Key('55', '7', '7', '?', '&'),
  new Key('56', '8', '8', '*', '*'),
  new Key('57', '9', '9', '(', '('),
  new Key('48', '0', '0', ')', ')'),
  new Key('189', '-', '-', '_', '_'),
  new Key('187', '=', '=', '+', '+'),
  new Key('8', 'Backspace', 'Backspace', 'Backspace', 'Backspace', '1'),
];

const row2 = [
  new Key('9', 'Tab', 'Tab', 'Tab', 'Tab', '1'),
  new Key('81', 'й', 'q', 'Й', 'Q'),
  new Key('87', 'ц', 'w', 'Ц', 'W'),
  new Key('69', 'у', 'e', 'У', 'E'),
  new Key('82', 'к', 'r', 'К', 'R'),
  new Key('84', 'е', 't', 'Е', 'T'),
  new Key('89', 'н', 'y', 'Н', 'Y'),
  new Key('85', 'г', 'u', 'Г', 'U'),
  new Key('73', 'ш', 'i', 'Ш', 'I'),
  new Key('79', 'щ', 'o', 'Щ', 'O'),
  new Key('80', 'з', 'p', 'З', 'P'),
  new Key('219', 'х', '[', 'Х', '{'),
  new Key('221', 'ъ', ']', 'Ъ', '}'),
  new Key('220', '\\', '\\', '/', '|'),
];

const row3 = [
  new Key('20', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', '1'),
  new Key('65', 'ф', 'a', 'Ф', 'A'),
  new Key('83', 'ы', 's', 'Ы', 'S'),
  new Key('68', 'в', 'd', 'В', 'D'),
  new Key('70', 'а', 'f', 'А', 'F'),
  new Key('71', 'п', 'g', 'П', 'G'),
  new Key('72', 'р', 'h', 'Р', 'H'),
  new Key('74', 'о', 'j', 'О', 'J'),
  new Key('75', 'л', 'k', 'Л', 'K'),
  new Key('76', 'д', 'l', 'Д', 'L'),
  new Key('186', 'ж', ';', 'Ж', ':'),
  new Key('222', 'э', '\'', 'Э', '"'),
  new Key('13', 'Enter', 'Enter', 'Enter', 'Enter', '1'),

];

const row4 = [
  new Key('16', 'Shift', 'Shift', 'Shift', 'Shift', '2'),
  new Key('90', 'я', 'z', 'Я', 'Z'),
  new Key('88', 'ч', 'x', 'Ч', 'X'),
  new Key('67', 'c', 'с', 'С', 'C'),
  new Key('86', 'м', 'v', 'М', 'V'),
  new Key('66', 'и', 'b', 'И', 'B'),
  new Key('78', 'т', 'n', 'Т', 'N'),
  new Key('77', 'ь', 'm', 'Ь', 'M'),
  new Key('188', 'б', ',', 'Б', '<'),
  new Key('190', 'ю', '.', 'Ю', '>'),
  new Key('191', '.', '/', ',', '?'),
  new Key('38', '▲', '▲', '▲', '▲'),
  new Key('161', 'Shift', 'Shift', 'Shift', 'Shift', '3'),
];

const row5 = [
  new Key('17', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', '1'),
  new Key('91', 'Win', 'Win', 'Win', 'Win'),
  new Key('18', 'Alt', 'Alt', 'Alt', 'Alt', '1'),
  new Key('32', ' ', ' ', ' ', ' ', '10.5'),
  new Key('181', 'Alt', 'Alt', 'Alt', 'Alt', '1'),
  new Key('37', '◀', '◀', '◀', '◀'),
  new Key('40', '▼', '▼', '▼', '▼'),
  new Key('39', '▶', '▶', '▶', '▶'),
  new Key('171', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', '1'),
];

const rows = [row1, row2, row3, row4, row5];
