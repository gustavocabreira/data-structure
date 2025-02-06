// Exemplo de uma tabela hash simples com colisões

// Função hash simulada
function hashFunction(key) {
  return key.length % 5; // Simplificação para criar colisões
}

// Tabela hash com colisões
const hashTable = {};

// Inserindo chaves com valores como cores
const keys = ['red', 'blue', 'green', 'yellow', 'purple'];
const colors = ['#FF0000', '#0000FF', '#008000', '#FFFF00', '#800080'];

// Inserindo as chaves na tabela hash
keys.forEach((key, index) => {
  const hashIndex = hashFunction(key);
  console.log(hashIndex, key)
  if (!hashTable[hashIndex]) {
    hashTable[hashIndex] = [];
  }
  hashTable[hashIndex].push({ key, color: colors[index] });
});

console.log(hashTable);