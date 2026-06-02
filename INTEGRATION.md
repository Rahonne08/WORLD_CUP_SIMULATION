# Documentação de Integração da API Football-Data.org (v4)

Este documento descreve a arquitetura de integração desenvolvida para unificar e dinamizar o portal da Copa do Mundo 2026 com dados reais e automáticos da API **Football-Data.org**.

---

## 1. Arquitetura Centralizada (Segurança e Proxy)

Para respeitar as melhores práticas de **segurança cibernética** e **ocultação de segredos**, todas as chamadas externas para o domínio de produção `api.football-data.org` são redirecionadas e processadas **exclusivamente sob o servidor** (Server-Side) no seguinte manipulador de rotas de API:

- **Endpoint de Proxy:** `/api/football-data`

Fórmula de autenticação utilizada:
- Cabeçalho: `X-Auth-Token`
- Variável Privada: `process.env.FOOTBALL_DATA_API_KEY` (nunca exposta ao JavaScript do navegador)

---

## 2. Sistema de Caching e Rate-Limit (Grátis Tier Safeguard)

Para evitar vazões acidentais no plano gratuito (restrito a apenas **10 requisições por minuto**), foi implementado um mecanismo de dupla camada de cache (Ficheiro + Memória RAM):

1. **TTL de Cache de 5 Minutos:** Sucessivas recargas de páginas por usuários consumirão localmente os pacotes já consolidados em `/tmp/football_data_cache_v4.json`.
2. **Substituição Resiliente (Fallbacks):** Caso chamadas falhem por limitações do plano ou o servidor externo esteja indisponível, o proxy serve o último cache capturado e impede falhas de carregamento em tela.
3. **Mocks de Alta Fidelidade Offline:** Se nenhuma variável de ambiente estiver definida no painel de segredos do AI Studio, o proxy fabrica automaticamente coleções de standings e confrontos simulados idênticos ao formato estruturado da Copa do Mundo, garantindo um portal 100% decorado instantaneamente para novos desenvolvedores.

---

## 3. Páginas Criadas e Modificadas

### 📊 Classificação Dinâmica (`/app/groups/page.tsx`)
- Traz tabelas consolidadas com estatísticas de **Pontos, Jogos, Vitórias, Empates, Derrotas, Gols Pró (GP), Gols Contra (GC) e Saldo de Gols (SG)**.
- Adiciona um **botão de alternância dinâmico** permitindo que o usuário navegue entre os dados oficiais online e seus palpites locais salvos na área de simulação.
- Temporizador interno com puxadas automatizadas de 60 segundos para atualização silenciosa.

### 🗓️ Tabela de Confrontos (`/app/matches/page.tsx`)
- Exibe os confrontos oficiais em cards responsivos com bandeiras de seleções, localizações de estádios americanos/mexicanos/canadenses, placares, estádios detalhados e datas localizadas em português.
- Filtros dinâmicos indexados para pesquisar por nome de equipes ou fases (Fase de Grupos vs Eliminatórias).

### 🛠️ Painel do Desenvolvedor (`/app/admin/page.tsx`)
Um ambiente oculto para depuração que permite:
- Checar status em tempo real do barramento (Ativo, Limite Excedido, Desconectado).
- Visualizar quantidades exatas de requisições de API realizadas no ciclo atual.
- Analisar limites restantes por minuto.
- Forçar atualizações diretas furando cache em ambiente de testes.
- Inspecionar pacotes JSON puros vindos do servidor.

---

## 4. Guia de Configuração e Uso de Chaves de Produção

1. Acesse sua conta e obtenha a chave em [football-data.org](https://www.football-data.org/client/register).
2. No painel lateral ou guia de segredos (Secrets Explorer) do **AI Studio**, declare o seguinte par chave/valor:
   - **Chave:** `FOOTBALL_DATA_API_KEY`
   - **Valor:** `<Sua Chave Adquirida>`
3. O barramento de dados migrará automaticamente de "Modo Simulado" para "Tempo Real Ativo Online".
