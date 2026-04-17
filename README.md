# RankingTeen

## Cronograma das features
Cronograma iniciado no dia 16 de abril de 2026 (algumas features já foram adicionadas).
| Dia | Features |
|---|---|
| 16 | <ul><li>Calcular o score<li>Exibição para avaliação do professor<li>Exibição já avaliado</ul>|

## Como será o main?
Data

Tabela dos adolescentes

Botão -> copiar mensagem whats

## Pontuação

Pontualidade: 3pts
levar bíblia (não vale digital): 2pts
Participação com comentários: 5 pts
Orar: 2 pts
Ler: 2 pts
Estudar lição: 2 pts
Levar visitante: 10 pts
Conversas paralelas excessivas na lição e no culto: -5pts
Mexer no celular na hora da lição para ver algo que não é a lição ou Bíblia, e no culto: -5pts

## DB structure

{
    "date": "11 de abril",
    "ranking": {
        1: {
            "name": "Pessoa",
            "points": "10"
        },
        2: {
            "name": "Pessoa 2",
            "points": "5"
        }
    }
}

## Aprendizados
- Quando eu crio várias funções eu vou criando uma necessidade na minha mente de fazê-las, o que me dá produtividade
- o set() (firebase) sobescreve os dados do path onde foi configurado para atuar
- Operadores ternários não devem ser aninhados, pois dificulta a compreensão
- dbRequest.js -> na function getLastDBObject() o limitToLast() do query() pega uma quantidade limitada de objetos (definida por mim), por isso retirei esse parâmetro, pois estou armazenando "date" e "ranking" direto no DB
