function encrypt() {
    const plaintext = document.getElementById('texto__mensagem__normal').value.toLowerCase();

    const ciphertext = plaintext
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.querySelector('.texto__mensagem__criptografada h2').textContent = 'Texto Criptografado:';
    document.querySelector('.texto__mensagem__criptografada p').textContent = ciphertext;
}

function decrypt() {
    const ciphertext = document.querySelector('.texto__mensagem__criptografada p').textContent.toLowerCase();

    const plaintext = ciphertext
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('texto__mensagem__normal').value = plaintext;
}

function copy() {
    const copyText = document.querySelector('.texto__mensagem__criptografada p');
    const textarea = document.createElement('textarea');
    textarea.textContent = copyText.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Texto copiado para a área de transferência.');
}
