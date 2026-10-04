# Evidências para o currículo híbrido

Registro de continuidade atualizado em 2026-10-03. Carlos confirmou os
levantamentos e autorizou a atualização do portfólio e dos currículos para um
posicionamento híbrido, com peso equivalente para engenharia de software e
DevOps/engenharia de plataforma. Este documento reúne a experiência acumulada,
as fontes e os limites necessários para uma redação defensável.

## Decisões e estado do trabalho

- Branch de edição autorizada: `feat/hybrid-resume-portfolio`.
- A base registrada no levantamento inicial era `80643fc`, release `0.10.0`;
  esse registro histórico não define a versão de uma publicação futura.
- Após revisar a edição local, Carlos autorizou o incremento de versão,
  os commits, o push e a abertura de PR para `main`.
- O currículo visual e os ATS possuem versões pt-BR e en-US. Na edição,
  manter o posicionamento e as evidências consistentes nos dois idiomas.
- A confirmação do usuário valida as experiências e competências levantadas.
  Os textos sugeridos neste registro são insumos editoriais, não a redação final.
- Manter equilíbrio editorial aproximado de 50/50 entre software e plataforma,
  incluindo a seleção e a ordem das competências, sem transformar a divisão em
  uma contagem artificial de tecnologias.
- Os currículos ATS devem caber em duas páginas; o site pode desenvolver os
  exemplos e a trajetória com mais contexto.
- Os projetos profissionais são privados: publicar descrições e contribuições,
  sem URLs de repositórios privados, endereços de ambientes, credenciais, nomes
  de clientes, identidades de usuários ou amostras reais de dados.
- Os caminhos locais deste registro servem à rastreabilidade editorial; não
  devem ser copiados para as páginas públicas nem para os currículos ATS.
- Para Elastic/Logstash/BI, descrever a experiência acumulada entre projetos,
  conforme pedido explícito de Carlos. O estado atual de um experimento não
  resume sua experiência profissional na tecnologia.

## Fontes analisadas

| Fonte local                                                            | Uso no levantamento                                                               |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `/home/carlosrodrigues/wspace/my-resume-and-portfolio`                 | Narrativas anteriores de projetos e experiência profissional                      |
| `/home/carlosrodrigues/apps/standby/dguard-calc/dgcalc`                | Desenvolvimento de produto com backend Go e frontend Vue                          |
| `/home/carlosrodrigues/apps/seventh-ui/seventh-ui`                     | Design system, desenvolvimento orientado a especificações e contexto para agentes |
| `/home/carlosrodrigues/wspace/engineering-playbook`                    | Método pessoal de engenharia e desenvolvimento assistido por IA                   |
| `/home/carlosrodrigues/apps/fs_connector/fs_connector_mq`              | Integração FreeSWITCH/mensageria e laboratório Python de eventos e cenários       |
| `/home/carlosrodrigues/apps/fs_connector/fs_connector_ws`              | API de gravações e validação integrada ao laboratório                             |
| `/home/carlosrodrigues/apps/opensip_register_bot/opensip_register_bot` | Importação de ramais e automação de registro SIP em Go                            |
| `/home/carlosrodrigues/apps/quality-survey`                            | Aplicação Go, fluxo de pesquisa e tratamento de anexos de mídia                   |
| `/home/carlosrodrigues/apps/sip-state/sip-state`                       | Serviços Go de coleta, publicação e consulta de estado SIP                        |
| `/home/carlosrodrigues/apps/sip-state/sip-state-load-testing`          | Harness de carga, metodologia e resultados históricos do SIP State                |
| `/home/carlosrodrigues/apps/sib/sib-web`                               | BI multi-tenant, consultas Elasticsearch, sincronização e contratos analíticos    |
| `/home/carlosrodrigues/apps/standby/ca-pnn-bi-etl`                     | Pipelines Logstash/JDBC, transformação e operação de ETL                          |
| `/home/carlosrodrigues/apps/standby/pnn-bi/ca_pnn_bi_research`         | Pesquisa aplicada de ETL/BI, modelagem e automação Kibana/Elasticsearch           |

As análises foram feitas por leitura de código, documentação, artefatos e
histórico Git local quando disponível, complementadas por esclarecimentos de
Carlos. Não foram executados builds, testes, instalações ou consultas aos
serviços de produção durante o levantamento. Os repositórios de origem não foram
alterados. Resultados de testes e de carga citados abaixo são registros
históricos, não novas execuções. Metadados de autoria não provam execução
individual de todo o trabalho nem autoria original de componentes preexistentes.

## Material anterior do portfólio

A leitura inicial de `../my-resume-and-portfolio` identificou quatro narrativas
em `chapters/`, que complementam a análise direta dos projetos:

- `2026-ai-assisted-billing-platform.md`: plataforma de faturamento com regras
  de negócio, importações idempotentes, auditoria e integrações. O relato registra
  implementação inicial em Go e posterior migração para PHP/Symfony por
  alinhamento com o time. Não apresentar a versão final como aplicação Go.
- `2026-seventh-ui-css-design-system-platform.md`: design system como entrega
  de software reutilizável e padronização de frontend, agora complementada pela
  inspeção direta do Seventh UI.
- `2026-modernizacao-aplicacoes-php-legadas-containers.md`: modernização de
  aplicações PHP e conexão entre código, runtime, containers e operação.
- `2026-docker-swarm-platform-devops-sre.md`: plataforma e operação como a outra
  metade do posicionamento híbrido.

Essas fontes são narrativas documentais, complementadas pelas inspeções diretas
abaixo. A lacuna inicial de evidências de Python foi resolvida pela análise dos
conectores e do laboratório MQ. O laboratório `demo-dslab` continua sendo um
exercício declarado sem implementação e não deve ser apresentado como entrega
profissional. Não confundi-lo com o LAB MQ efetivamente implementado.

## D-Guard Calculator

Fonte: `/home/carlosrodrigues/apps/standby/dguard-calc/dgcalc`, analisada em
`c89c58a`, merge do PR 23. O histórico registra em nome de Carlos a implementação
inicial da API e das interfaces, além de evoluções posteriores.

O produto dimensiona projetos de videomonitoramento da Seventh. A modernização
extraiu regras do frontend legado para uma API Go e acrescentou uma interface
interna para calibrar os fatores utilizados nos cálculos. O problema e a intenção
estão documentados em `docs/briefing.md`.

Evidências aceitas para o currículo:

- Backend Go com regras de bitrate, banda de gravação e visualização,
  armazenamento, servidores, estações de visualização, hardware e licenciamento.
  O domínio modela câmeras, DVRs/NVRs, canais, streams, retenção, codecs, LPR e
  recursos analíticos de vídeo.
- API REST versionada com `net/http`, separação entre domínio e HTTP, contrato
  OpenAPI, validações e mensagens localizadas em português, inglês e espanhol.
- Fatores de cálculo ajustáveis em execução, persistidos em JSON, com endpoints
  de consulta, substituição e atualização parcial. Há explicações de cálculo.
- Calculadora pública em Vue 3/Quasar, com configuração de dispositivos por
  etapas, validações, integração com a API, resultados por dispositivo e
  consolidados, recomendações de licenças/hardware e relatórios imprimíveis.
- Compatibilidade com arquivos de projetos legados, exportação de projetos,
  rascunhos em sessão, internacionalização da SPA em três idiomas e adaptação à
  execução incorporada por iframe.
- Componentes Vue sobre o Seventh UI, incluindo cuidados explícitos com foco e
  semântica. Ferramenta interna de calibração em uma segunda aplicação Quasar.
- Testes de domínio e HTTP em Go; testes de importação e analytics na SPA.
  Instrumentação da jornada com GA4 implementada.
- Integração com a experiência de plataforma: containers, publicação de imagens
  versionadas via Bitbucket Pipelines e operação documentada em Docker Swarm,
  Traefik e WAF. O pipeline inspecionado publica imagens; não comprova deploy
  automático nem execução de testes no CI.

Referências principais, relativas à raiz do projeto:

- `dguard-calculator/api/internal/domain/legacycalc/calc.go`
- `dguard-calculator/api/docs/old-calc-rule-mapping.md`
- `dguard-calculator/api/internal/http/router/router.go`
- `dguard-calculator/api/internal/calibration/store.go`
- `dguard-calculator/api/docs/openapi.yaml`
- `dguard-calculator/spa/src/services/projectCalculator.js`
- `dguard-calculator/spa/src/services/projectImport.js`
- `dguard-calculator/spa/src/services/analytics.js`
- `dguard-calculator/calibrator/src/components/CalibrationDrawer.vue`
- `bitbucket-pipelines.yml`

Limites importantes: o JSON e o mutex não demonstram persistência transacional
ou coordenação distribuída; a proteção de acesso é delegada ao proxy. Não há
base levantada para afirmar escala, ganho percentual de precisão ou redução de
latência. A telemetria persistente da `specs/018-durable-api-usage-telemetry` é
proposta, separada do GA4 implementado. Pinia instalado não comprova uso de stores
de domínio. Não prometer tradução integral do calibrator ou auditoria WCAG.

## Seventh UI

Fonte: `/home/carlosrodrigues/apps/seventh-ui/seventh-ui`, analisada em `ca207f3`,
merge do PR 19, com tag local `v1.0.6`.

O projeto implementa o design system corporativo como pacote CSS independente
de framework, com tokens, componentes, layout, ícones, ilustrações e documentação.
Seu uso na calculadora D-Guard foi confirmado no código; a dependência ali era
`1.0.5`, anterior à referência para agentes introduzida na `1.0.6`.

Evidências aceitas para o currículo:

- Aplicação de desenvolvimento orientado a especificações, com 49 diretórios
  numerados contendo `spec.md`, `plan.md` e `tasks.md`. Os exemplos examinados
  conectam intenção, escopo, critérios de aceitação, referências Figma, decisões
  e tarefas à implementação, documentação e histórico Git.
- Definição de contratos para componentes: estados visuais, dependências,
  markup semântico e responsabilidades de interação e acessibilidade. O pacote
  fornece CSS; os consumidores implementam o comportamento de runtime.
- Correções derivadas da integração com produtos: contrato de largura da tabela
  na spec 038 e precedência do estado inválido sobre foco na spec 042.
- Evolução compatível da paleta na spec 045, preservando 21 tokens antigos e
  implementando validações dos valores, cobertura e contraste das amostras.
- Referência para desenvolvedores e agentes distribuída no pacote npm:
  `reference/AGENTS.md`, catálogo com 34 entradas, schema e exemplos HTML,
  alinhados à versão instalada.
- Geração dessa referência a partir de documentação e metadados canônicos, com
  validadores de versão, caminhos, exports, dependências, cobertura e conteúdo
  esperado no pacote.

Referências principais, relativas à raiz do projeto:

- `.specs/README.md`
- `.specs/038-component-data-table-width-contract/`
- `.specs/042-component-input-invalid-state-precedence/`
- `.specs/045-primitives-color-palette-revision/`
- `.specs/047-component-combobox/`
- `.specs/048-package-ai-consumer-reference/`
- `.specs/design-system-feedback-report.md`
- `src/contracts/runtime-integration.json`
- `scripts/tokens/validate-colors.mjs`
- `scripts/reference/generate.mjs`
- `scripts/reference/validate.mjs`
- `scripts/reference/validate-pack.mjs`
- `reference/AGENTS.md`, `reference/index.json`
- `docs/ai-assisted-development.html`

Limites importantes: a contagem de specs não significa que todas foram auditadas
e encerradas. Há auditorias históricas e tarefas pendentes; o reteste da spec 038
no produto estava pendente. Critérios Given/When/Then não comprovam uma suíte BDD
executável. Os validadores são verificações de contratos, não avaliações de
respostas de modelos. A publicação remota do pacote não foi consultada.

## Método com Codex e Figma confirmado por Carlos

Carlos informou diretamente que utilizou Codex e integração com Figma por MCP.
Ele escrevia rascunhos da intenção e solicitava uma especificação conforme seu
playbook pessoal. A IA propunha os artefatos; Carlos revisava e aprovava spec,
plan e tasks antes de avançar. Também solicitava mudanças até chegar ao resultado
desejado. Essa divisão de responsabilidades é informação confirmada pelo autor,
complementar às evidências de código e documentação.

O método está formalizado em
`/home/carlosrodrigues/wspace/engineering-playbook/architecture/spec-driven-development.md`:

`Intent -> Spec -> Clarify -> Check -> Plan -> Tasks -> Implement -> Verify`

O playbook define critérios observáveis, contratos de interface, decisões
arquiteturais, tarefas com validação, revisão humana e controle de divergências
entre especificação e implementação. A seção de desenvolvimento assistido por
IA trata a especificação como contexto principal do agente e preserva os padrões
de qualidade e a responsabilidade de engenharia.

Competências sustentadas: Spec-Driven Development, engenharia de software
assistida por IA, engenharia de contexto, condução de agentes com aprovação
humana por etapa, Codex e integração de ferramentas via MCP. O playbook adota
referências como Spec Kit; não foi confirmado uso da ferramenta Spec Kit em si.
Não foram medidos ganhos percentuais de produtividade ou proporção de código
gerado por IA.

## Conectores FreeSWITCH e laboratório MQ em Python

Fontes: `/home/carlosrodrigues/apps/fs_connector/fs_connector_mq` e
`/home/carlosrodrigues/apps/fs_connector/fs_connector_ws`.

A experiência reúne integração de telefonia, mensageria, APIs e infraestrutura
de testes. O histórico contém uma base anterior de outros autores e contribuições
de Carlos; não apresentar os dois conectores como criação integral individual.
No MQ, os commits `307260a` e `94e2f82`, de julho de 2026, documentam contribuições
de Carlos ao laboratório. No WS, a análise encontrou a versão `0.3`, HEAD
`d6bc9ec`, com evolução de Carlos na API v2 e nas verificações do laboratório.

Evidências aceitas:

- Integração de eventos de FreeSWITCH com mensageria e consumidores, complementada
  por um emulador de aplicação em Python/FastAPI em `lab/apps/pnn_emulator/`.
- Publicação e consumo RabbitMQ com Pika, confirmações de publicação, mensagens
  persistentes, roteamento obrigatório e reconexão do consumidor com espera
  progressiva. A implementação não autoriza prometer entrega exatamente uma vez.
- API de controle de cenários, atualização da interface por SSE e armazenamento
  em memória com trava e limites, acompanhando duplicidade, ordem dos eventos e
  divergências de metadados. O store do laboratório não é persistência durável.
- Simulação de uma chamada e suas transições, recebimento e inspeção de eventos,
  recuperação de gravações e validações de contratos entre componentes.
- API FastAPI de gravações WAV com autenticação HTTP Basic na v2; verificações
  do laboratório comparam bytes/checksums e usam sinais sintéticos de áudio.
- Infraestrutura de integração com componentes SIP/RTP em Python, cenários
  sintéticos, smoke de navegador por CDP/Chrome e artefatos verificáveis. Esses
  recursos apoiam diagnóstico e reprodução dos fluxos de telefonia.
- Testes com broker falso para lógica da aplicação e cenários de integração
  documentados separadamente. Relatos históricos da LAB012 incluem verificações
  do laboratório e backend; não foram repetidas nesta análise.

Referências: diretório `lab/apps/pnn_emulator/`, testes e documentação LAB no
repositório MQ; código e documentação da API v2 no repositório WS. Os arquivos
do emulador inspecionados incluem o ponto de entrada FastAPI e módulos de broker,
store e gravações. A LAB016 registra evolução proposta e não deve ser tomada
automaticamente como comportamento já entregue.

Limites: a inspeção de testes com doubles não confirma operação de um broker
real; validação de MIME não equivale à validação integral do conteúdo de áudio.
Não inferir escala de produção, ausência de perda de eventos ou melhoria
percentual a partir do laboratório. A contribuição curricular mais forte é a
construção e evolução de uma aplicação de laboratório e de testes de integração,
além da manutenção dos conectores existentes.

## OpenSIP Register Bot em Go

Fonte: `/home/carlosrodrigues/apps/opensip_register_bot/opensip_register_bot`,
analisada no HEAD `8094240`, versão `2.1.1`, módulo Go 1.23.1. O histórico
registra autoria de Carlos desde setembro de 2024.

O projeto implementa dois fluxos concretos: importação de ramais de uma API e
registro SIP. A importação filtra por hostname, elimina duplicatas e sincroniza
os registros em MariaDB com `database/sql`, upsert em lotes e marcação `sync_at`.
O registrador implementa SIP REGISTER sobre TCP, desafio 401/Digest, manutenção
de Call-ID/CSeq, retentativas, timeouts e keepalive.

Referências principais: README e implementação na raiz do projeto; `worker.go`
contém um pool que não representa o caminho de agendamento ativo inspecionado.
O fluxo ativo é sequencial: não descrevê-lo como registrador concorrente ou
atribuir capacidade de milhares de registros simultâneos sem medição. A evidência
sustenta implementação de protocolo, sincronização com banco e automação em Go,
sem converter código de retentativa em garantia de disponibilidade.

## Quality Survey em Go

Fonte: `/home/carlosrodrigues/apps/quality-survey`. O diretório analisado não
continha `.git`; a vinculação profissional vem do contexto fornecido por Carlos.
Não afirmar que autoria individual ou cronologia foram verificadas por Git.

Evidências aceitas:

- Aplicação Go com fluxo de pesquisa e anexos, persistência transacional e
  controles de acesso na disponibilização de mídia.
- Validação estrutural própria de MP4/WebM, com limites de navegação dos
  contêineres, além de limites de tamanho, quantidade de anexos e pixels.
  Não é conversão de vídeo, transcodificação ou decodificação de codecs; não usa
  FFmpeg para essas funções.
- Atendimento de mídia com HEAD/Range, `http.ServeContent` e leitura do conteúdo
  persistido por partes, usando um `ReadSeeker` e consultas de blocos de 1 MiB.
- Proteção de recursos no upload, incluindo limite de requisição e controle de
  concorrência; resposta 503 com `Retry-After` quando a vaga está ocupada.
- Interface com melhoria progressiva: pré-visualização de mídia, colagem e
  descarte dos object URLs, complementando o fluxo HTML do formulário.
- Testes de contêineres de vídeo, fuzzing e casos de upload, autorização,
  rollback e requisições parciais. A existência dos testes foi inspecionada;
  seus resultados não foram executados nesta análise.

Referências, relativas à raiz: `video.go:11` e `video.go:264` (validadores e
limites), `uploads.go:20` (política de anexos), `uploads.go:113` (entrega HTTP),
`uploads.go:147` (leitura por partes), `video_test.go:243` (fuzzing),
`uploads_test.go:151` e `uploads_test.go:304` (HTTP e Range); interface em
`assets/` e `templates/`.

Limites: não afirmar que validação estrutural torna qualquer arquivo seguro,
que há antivírus ou que toda combinação de codec/navegador é suportada. Os limites
de upload e de concorrência são políticas implementadas, não capacidade medida.

## SIP State e engenharia de carga

Fontes: `/home/carlosrodrigues/apps/sip-state/sip-state` e o repositório irmão
`/home/carlosrodrigues/apps/sip-state/sip-state-load-testing`.

O serviço em Go 1.25 separa sampler, collector e API, com integração ao OpenSIPS
MI, repositório PostgreSQL e contrato explícito de atualidade dos dados. As
referências centrais são `internal/opensipsmi/client.go`,
`internal/collector/publisher.go`, `internal/repository/postgres/repository.go`
e `internal/contract/staleness.go`.

O harness k6 acrescenta evidência de engenharia de desempenho: cenários por
taxa de chegada, separação entre inicialização, aquecimento e medição, critérios
de erro e iterações descartadas, dados compartilhados com `SharedArray` e
diagnóstico do custo de inicialização do gerador. Referências no repositório de
carga: `scripts/k6/scenarios/capacity.js` e `scripts/k6/helpers/data.js`,
`metrics.js` e `requests.js`.

Resultado histórico aceito, conforme
`docs/prd-individual-capacity-campaign-2026-08-23.md`: uma campanha de consulta
individual, aquecida, registrou **750 requisições/s durante cinco minutos**, com
**225 mil requisições**, **p95 de 184,10 ms**, **p99 de 252,75 ms**, **zero erros
HTTP e zero iterações descartadas**. O cenário usou uma réplica da API com limite
de **0,5 CPU e 256 MiB**. O relatório descreve condições adicionais, incluindo
Traefik sem teto próprio de CPU em um host de dois núcleos e ausência de
consumidores concorrentes no recorte de pré-release.

Limites editoriais obrigatórios:

- Os percentis correspondem à métrica nativa `http_req_duration`, filtrada para
  operação individual e fase de medição; não representam duração total da
  iteração, do aquecimento nem de toda a jornada.
- Os checks chamados de contrato verificam HTTP 200, com corpos descartados;
  não comprovam correção semântica de cada resposta sob carga.
- A classificação configurada de status e a métrica customizada de falha devem
  ser consideradas em conjunto; não usar isoladamente `http_req_failed` como
  prova de sucesso de negócio.
- Cinco minutos de consulta individual aquecida não comprovam carga mista,
  resistência prolongada, comportamento a frio, escalabilidade linear ou uma
  capacidade garantida de produção. Tratar 750 req/s como resultado daquele
  ensaio e como referência para dimensionamento, não como SLA.
- Não extrapolar o limite de recursos da API para o custo de toda a plataforma.
- O guia de produção de 02/10/2026 não foi seguido por verificação remota nesta
  análise. Um procedimento documentado não comprova sua execução no cluster.

## Elasticsearch, Logstash e BI: experiência acumulada

As evidências dos projetos abaixo devem compor uma competência contínua de
engenharia de dados e BI: extração, transformação, indexação, consultas,
autorização, visualização e operação. Carlos pediu explicitamente esse foco,
sem reduzir sua experiência ao estado atual de um repositório de pesquisa.

### SIB: produto e contratos analíticos

Fonte: `/home/carlosrodrigues/apps/sib/sib-web`. O SIB é uma aplicação existente,
com histórico de múltiplas contribuições. A refatoração Analytics consta no
commit `38f645aa`, atribuído a Carlos, integrado no HEAD `5daf5b35`; permanece
nas notas `Unreleased`. Não atribuir a Carlos a criação integral do SIB nem
afirmar implantação dessa nova camada em produção.

Evidências aceitas:

- Consultas e agregações Elasticsearch para indicadores de atendimento,
  duração, acessos, agendamentos, rankings e dimensões de conta/localização.
- Critérios e resultados tipados, separando domínio, aplicação, compilação da
  consulta, transporte, decodificação e apresentação. Guardas arquiteturais
  verificam dependências entre camadas.
- Autorização por tenant e conta: combinação do usuário autenticado, política
  do tenant, contas ativas e restrições, com filtros independentes da seleção
  solicitada pelo cliente. Routing não substitui autorização.
- Classificação de falhas e rejeição de respostas inválidas, timeout ou shards
  parciais, evitando converter falhas em indicadores aparentemente válidos.
- Caracterização do legado e testes de paridade, além de integração isolada
  com Elasticsearch, HTTP/kernel e consumidores frontend.
- Evolução da sincronização de eventos com paginação, fila, locks,
  retentativas, acompanhamento de progresso e reutilização de clientes. As
  notas 3.16.7–3.16.10 documentam essa evolução anterior à nova camada Analytics.

Referências: `app/Analytics/Infrastructure/Elasticsearch/AttendanceByDayQueryCompiler.php:19`,
`AttendanceDurationAverageQueryCompiler.php:19`, `AttendanceFilterQueryCompiler.php:20`
e `ElasticsearchSearchEnvelopeDecoder.php:14` no mesmo diretório;
`app/Analytics/Infrastructure/Laravel/LaravelAttendanceScopeResolver.php:40`;
`tests/Unit/Analytics/AttendanceCountLegacyParityTest.php:33`;
`specs/007-analytics-data-contracts/runtime-retirement-audit.md:15` e
`implementation-log.md:3901` no mesmo diretório da spec.

O registro histórico final da refatoração informa 6.459 testes e 151.477
assertions offline, além de verificações físicas e de integração documentadas
separadamente. Não somar contagens sobrepostas nem usar duração de testes como
benchmark. O smoke documenta 50 caminhos GET analíticos e 23 cards renderizados;
isso não prova renderização de todos os gráficos ou o fluxo completo de PDF.
Carga/memória, evolução do PDF e preparação da publicação permanecem gates
próprios. Os heatmaps da spec009 estavam em desenvolvimento local, com arquivos
não rastreados: não apresentá-los como entrega publicada.

As observações históricas de tráfego das rotas comprovam uso da aplicação no
recorte observado, não taxa de ingestão de dados nem capacidade máxima. O código
de exclusão de dados não comprova expurgo agendado ativo; não afirmar automação
de retenção apenas pela presença da query ou do comando.

### CA PNN BI ETL: pipelines e operação

Fonte: `/home/carlosrodrigues/apps/standby/ca-pnn-bi-etl`, com contribuições de
Carlos no histórico desde abril de 2025.

Os pipelines Logstash/JDBC extraem de múltiplas bases, transformam eventos e
durações e aplicam regras de cobrança. O fluxo de billing utiliza identidade por
dia/ambiente e upsert; outros fluxos usam checkpoint temporal e extração
incremental. Há uso de routing e índices mensais no Elasticsearch. Essa
combinação sustenta experiência em ETL e modelagem de índices para consulta e
reprocessamento, sem prometer processamento exatamente uma vez.

A operação é acompanhada por automação de deploy no Docker Swarm, cópia de
segurança, validação de configuração e verificação de saúde. Referências
principais: `pipelines/pipeline_billing.conf`, `pipelines/pipeline_event.conf`
e `deploy/deploy.sh`. A leitura desses artefatos comprova implementação dos
procedimentos, não sua execução atual nem um volume de produção específico.

### Pesquisa CA PNN BI: modelagem, Kibana e prototipação

Fonte: `/home/carlosrodrigues/apps/standby/pnn-bi/ca_pnn_bi_research`, com
contribuições de Carlos em 2024–2025. Separar estudos e notas conceituais dos
scripts e configurações implementados; parte das estimativas e recomendações
registra apoio de modelos de IA e não descreve infraestrutura implantada.

Evidências aceitas:

- Pesquisa aplicada de modelagem de eventos e dimensões, transformação para
  consulta no Elasticsearch e aspectos temporais e de capacidade do ETL.
- Experimentos de DLS em índice compartilhado: role restringindo `company_id`
  e combinação com lista de `condo_id`, relacionando acesso aos dashboards e
  regras de licenciamento por condomínio.
- Scripts Shell/cURL para criar Spaces, configurar opções, cadastrar roles e
  usuários e remover esses recursos pelas APIs do Kibana/Elasticsearch.
- Organização de dashboards compartilhados e espaços internos, distinguindo
  permissões sobre objetos Kibana dos filtros sobre documentos Elasticsearch.
- Investigação de dashboards incorporados por iframe, incluindo alternativas
  inviáveis, resultados manuais e limites de autenticação e integração.

Referências: `run/kibana/scripts/pnn_dev/pnn_dev_create_space.sh:10`,
`pnn_dev_create_profile_limited_condo.sh:20` e `pnn_dev_delete_profile.sh:7` no
mesmo diretório; documentos de resultados em `_TODO/kibana/`; modelagem em
`concepts/` e `diagrams/`; pipelines em `run/logstash/`.

Os relatos de isolamento são experimentos manuais históricos, não auditoria
adversarial completa. Os scripts presentes não comprovam um orquestrador remoto
de provisionamento nem integração automática ao cadastro do produto. A pesquisa
de distribuição de pipelines conclui uso de arquivos locais; não transformar
alternativas avaliadas em implementação de download/orquestração por API Kibana.
A experiência de gestão centralizada de Kibana pode ser descrita com apoio do
relato de Carlos e do SIB, sem atribuí-la indevidamente a essa proposta.

O ensaio de aproximadamente um milhão de documentos e 360 MiB é um resultado
documental de teste de armazenamento. As referências de aproximadamente 25
milhões de eventos e 800 mil por dia são insumos/premissas de dimensionamento,
não throughput medido da solução nem resultado individual. Não reutilizar esses
números como escala alcançada no currículo.

## Formulações para a edição autorizada

Estes textos preservam as contribuições levantadas e podem ser condensados na
experiência da Seventh e nas competências, respeitando o equilíbrio com plataforma:

- Desenvolvi uma solução de dimensionamento de projetos de videomonitoramento
  com backend Go e interfaces Vue 3/Quasar, migrando regras legadas de capacidade
  e licenciamento para uma API REST.
- Implementei uma ferramenta interna de calibração, com ajuste de fatores em
  tempo de execução e explicações dos cálculos para apoiar a validação das
  regras de negócio.
- Evoluí a calculadora pública com compatibilidade com arquivos legados,
  internacionalização em três idiomas, integração ao design system corporativo
  e relatórios imprimíveis.
- Conduzi o desenvolvimento do Seventh UI com Codex e integração ao Figma via
  MCP, transformando intenções de produto em especificações, planos técnicos e
  tarefas, com revisão e aprovação em cada etapa.
- Consolidei e apliquei um playbook de engenharia para desenvolvimento orientado
  a especificações, com critérios de aceitação, decisões arquiteturais e
  validações de contratos.
- Desenvolvi referências versionadas para agentes de programação, distribuídas
  no pacote npm, com descoberta de componentes, exemplos e responsabilidades
  de integração.
- Desenvolvi aplicações e integrações em Go para regras de negócio, registro
  SIP, sincronização com banco de dados e consulta de estado de telefonia.
- Evoluí conectores de telefonia e construí um laboratório em Python/FastAPI e
  RabbitMQ para reproduzir fluxos, validar eventos e verificar gravações e
  integrações entre componentes.
- Implementei tratamento de anexos de mídia em Go, com validação estrutural de
  MP4/WebM, limites de recursos e entrega HTTP com suporte a requisições parciais.
- Desenvolvi harness de carga com k6 e conduzi a análise de aquecimento,
  percentis e falhas de uma API Go, delimitando o resultado medido às condições
  do ensaio.
- Desenvolvi e evoluí pipelines ETL com Logstash/JDBC e Elasticsearch,
  combinando extração incremental, transformação de eventos e regras de
  cobrança com automação de implantação e operação.
- Refatorei consultas de BI em PHP/Laravel e Elasticsearch com contratos
  tipados, controles de acesso por tenant/conta e testes de paridade com o legado.
- Prototipei BI multiempresa com Kibana e Elasticsearch, aplicando segurança por
  documento e automatizando o provisionamento de Spaces, roles e usuários.

Essas formulações são opções, não uma lista a ser copiada integralmente. No ATS,
priorizar contribuições representativas e sua conexão com o impacto no produto.
No site, desenvolver os casos com contexto e limites; equilibrá-los com a
experiência já registrada de containers, Swarm, CI/CD, redes, observabilidade e
operação. A experiência com IA deve evidenciar especificação, revisão, contratos
e validação, sem apagar a responsabilidade de engenharia nem inventar ganhos.

## Continuidade

O levantamento de Go, Python, frontend, engenharia assistida por IA e
Elastic/Logstash/BI está aceito como base para a redação autorizada do portfólio
e dos ATS pt-BR/en-US. Não há pendência geral de inspeção de Python que impeça
essa edição.

Consolidar o posicionamento híbrido nas apresentações, competências e experiência
profissional, mantendo o site mais desenvolvido e os ATS em duas páginas.
Preservar a diferença entre contribuição própria, evolução de bases existentes,
resultado histórico documentado, observação de código e informação confirmada
por Carlos. Não acrescentar URLs privadas ou métricas sem origem verificável.

A edição híbrida foi concluída nos dois idiomas, incluindo os PDFs ATS com o
nome `carlos-moraes-rodrigues-ats-resume` e sufixo `-en-us` para inglês. Carlos
autorizou o versionamento e o envio dessas alterações em uma PR para `main`.
