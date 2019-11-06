// create wrapper elements

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

const textarea = document.createElement('textarea');
textarea.rows = '10';
textarea.cols = '50';
textarea.id = 'result';
textarea.readOnly = true;
wrapper.append(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
wrapper.append(keyboard);

const keys = {};
for (let i = 0; i < rows.length; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    keyboard.append(row);

    for (let j = 0; j < rows[i].length; j++) {
        const key = document.createElement('div');
        key.className = 'key';
        key.textContent = rows[i][j].ru;

        key.addEventListener('click', () => {
            if (key.textContent !== 'Shift' && key.textContent !== 'Alt'
                && key.textContent !== 'Enter' && key.textContent !== 'Ctrl'
                && key.textContent !== 'CapsLock' && key.textContent !== 'Tab'
                && key.textContent !== 'Win' && key.textContent !== 'Backspace'
                && key.textContent !== '◀' && key.textContent !== '▼'
                && key.textContent !== '▲' && key.textContent !== '▶') {
                textarea.textContent += key.textContent;
            }
        });

        key.addEventListener('mousedown', () => {
            key.classList.add('active');
        });

        key.addEventListener('mouseup', () => {
            key.classList.remove('active');
        });

        if (rows[i][j].grow !== undefined) {
            key.style.flexGrow = rows[i][j].grow;
        }

        row.append(key);
        keys[rows[i][j].keyCode] = key;
    }
}

// add values to textarea ​​by pressing on the keyboard

document.addEventListener('keydown', (e) => {
    if (keys[e.keyCode].textContent !== 'Shift' && keys[e.keyCode].textContent !== 'Alt'
        && keys[e.keyCode].textContent !== 'Enter' && keys[e.keyCode].textContent !== 'Ctrl'
        && keys[e.keyCode].textContent !== 'CapsLock' && keys[e.keyCode].textContent !== 'Tab'
        && keys[e.keyCode].textContent !== 'Win' && keys[e.keyCode].textContent !== 'Backspace'
        && keys[e.keyCode].textContent !== '◀' && keys[e.keyCode].textContent !== '▼'
        && keys[e.keyCode].textContent !== '▲' && keys[e.keyCode].textContent !== '▶') {
            textarea.focus();
            textarea.textContent += keys[e.keyCode].textContent;
         }
    if (keys[e.keyCode].textContent === 'Enter') {
        textarea.textContent += '\n';
    }

    keys[e.keyCode].classList.add('active');
});

document.addEventListener('keyup', (e) => {
    keys[e.keyCode].classList.remove('active');
});
