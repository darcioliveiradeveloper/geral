// Questão 5 — Verificar Anagrama
// Dadas duas strings, verifique se são anagramas (mesmas letras em ordens diferentes).

const string1 = "amor";
const string2 = "roma";

function verificarAnagrama(str1, str2) {
    // Remove espaços e deixa tudo minúsculo
    const formatada1 = str1.replace(/\s/g, '').toLowerCase();
    const formatada2 = str2.replace(/\s/g, '').toLowerCase();

    // Se os tamanhos forem diferentes, não são anagramas
    if (formatada1.length !== formatada2.length) {
        return false;
    }

    // Separa as letras, ordena e junta de novo
    const ordenada1 = formatada1.split('').sort().join('');
    const ordenada2 = formatada2.split('').sort().join('');

    // Se as palavras ordenadas forem iguais, são anagramas
    return ordenada1 === ordenada2;
}

// Mostra as palavras e o resultado
console.log("String 1: " + string1);
console.log("String 2: " + string2);
console.log("São anagramas? " + verificarAnagrama(string1, string2));
