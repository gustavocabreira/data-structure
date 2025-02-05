# BIG O 

Quão bem ou mal o algoritmo escala com o tamanho do input (não necessariamente com a performance).

## Pode ser usado para medir:


### COMPLEXIDADE TEMPORAL

#### O que é?

É o tempo de execução em relação ao tamanho da entrada do dado.

#### Exemplos de complexidades

- O(1) - Complexidade constante: O tempo de execução não depende do tamanho da entrada. Por exemplo: acessar um elemento de um array.

- O(log n) - Complexidade logarítmica: O tempo de execução cresce lentamente à medida que a entrada aumenta.
-- Exemplo para fixar: quando dobrar a entrada de um input, não necessariamente estará dobrando o tempo de execução. Irá aumentar em uma busca.
-- Exemplo prático: Binary Search.

- O(n) - Complexidade linear: O tempo de execução cresce de forma proporcional ao tamanho da entrada.
-- Exemplo para fixar: se eu dobrar o meu input, eu dobrarei meu tempo de execução.
-- Exemplo prático: percorrer todos os elementos de um array uma única vez.

- O(n²) - Complexidade quadrática: O tempo de execução cresce de forma quadrática em relação ao tamanho da entidade.
-- Exemplo para fixar: loop dentro de loop.
-- Exemplo: algoritmos de ordenação simples como Bubble Sort.

- O(2^n) - Complexidade exponencial: O tempo de execução dobra a cada incremento no tamanho de entrada. Exemplo: algumas abordagens de problemas de força bruta, como o cálculo de todas as permutações possíveis.

- O(n log n) - Complexidade linear-logarítmica: O tempo de execução cresce mais rápido que O(n) (linear), mas mais devagar que O(n²) (quadrático).
-- Exemplo para fixar: O algoritmo percorre todos os elementos (como O(n)), mas, a cada passo, faz mais comparações ou divisões de forma eficiente (isso é o log n).
-- Exemplo prático: Algoritmos de ordenação eficientes como MergeSort, QuickSort ou HeapSort, que dividem a entrada em partes menores e depois processam essas 
partes de forma eficiente.


### COMPLEXIDADE ESPACIAL

#### O que é?

Se refere a quantidade de memória ou espaço adicional que um algoritmo precisa para processar uma entidade, em função do tamanho dessa entrada.
É importante para entender o quanto de memória um algoritmo irá consumir a medida que o tamanho da entrada cresce.

#### Exemplos de complexidades

- O(1): Complexidade espacial constante: O algoritmo usa uma quantidade fixa de memória, independentemente do tamanho da entrada. Exemplo: usar apenas algumas variáveis para armazenar resultados intermediários, como em um algorítmo de soma simples.

- O(n): Complexidade espacial linear: O espaço utilizado pelo algoritmo cresce de forma proporcional ao tamanho da entrada. Exemplo: armazenar todos os elementos de um array ou lista.

- O(n²): Complexidade espacial quadrática: O espaço utilizado pelo algoritmo cresce quadraticamente com o tamanho da entrada. Exemplo: criar uma matriz 2D para representar uma estrutura de dados.

- O(log n): Complexidade especial logarítmica: O espaço utilizado pelo algoritmo cresce de forma logarítmica com o tamanho da entrada. Exemplo: algoritmos que usam a recursão de forma eficiente, como a busca binária (que não precisa de espaço adicional significativo além da pilha de chamadas).