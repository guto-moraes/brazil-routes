Explicação do arquivo utils.ts
Este arquivo é um módulo utilitário que exporta quatro funções auxiliares frequentemente usadas em aplicações React com Tailwind CSS e manipulação de HTML. Vamos explorar cada uma:

Importações
O arquivo começa importando três dependências externas: clsx para gerenciar classes condicionais, twMerge do pacote tailwind-merge para resolver conflitos de classes Tailwind, e DOMPurify para sanitizar conteúdo HTML de forma segura.

Função cn()
A função cn() combina as capacidades de clsx e twMerge para mesclar classes Tailwind CSS de maneira inteligente. Ela aceita múltiplas entradas de classes (strings, objetos, arrays) e retorna uma string única com classes otimizadas. Isso é particularmente útil para evitar conflitos entre classes Tailwind que possuem especificidade igual, como p-4 e p-6 — a função garante que apenas a mais relevante seja aplicada.

Função sanitizedData()
Esta função recebe uma string HTML e a sanitiza usando DOMPurify, mas preserva tags específicas como iframe, video e source, além de atributos como src, allowfullscreen, frameborder e controls. O retorno é um objeto com propriedade __html, um padrão seguro do React para renderizar HTML sanitizado usando dangerouslySetInnerHTML. Essa abordagem permite exibir conteúdo HTML rico enquanto protege contra ataques XSS.

Função stripHtml()
Esta função remove todas as tags HTML de uma string, retornando apenas o texto plano. Ela cria um elemento div temporário, atribui o HTML a ele e extrai o conteúdo textual usando textContent ou innerText como fallback. É útil para exibir préviasde texto ou limpar dados para processamento.

Função calendarDateFormat()
Esta função formata uma data para o padrão brasileiro, retornando dia e mês separadamente. Ela utiliza Intl.DateTimeFormat com localização pt-BR para gerar uma string no formato "DD de MMM", depois a divide e padroniza o dia com zero à esquerda se necessário. O resultado é um objeto com propriedades day e month, ideal para componentes de calendário.

