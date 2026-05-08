# Contexto do Projeto — Tytan Agriculture

## Papel atual
Criação de landing pages diariamente usando o fluxo abaixo.

## 🚀 Fluxo diário (repetir todos os dias)

1. **Planejar** — definir seções, copy e objetivos da landing no Notion
2. **Claude Design** — gerar o design system e mockup HTML no Claude
3. **Baixar arquivo** — exportar o HTML/CSS com o design system gerado
4. **Aplicar ao Lovable** — copiar os arquivos para o projeto Lovable e ajustar
5. **Meta Pixel** — rodar `setup-meta` para conectar rastreamento de leads

---

## 📚 Estrutura dos repositórios

| Repo | Finalidade |
|------|-----------|
| `lenixeduardo/tytan` | Planejamento, mockups HTML, arquivos de referência |
| `lenixeduardo/teste-dev` | Projeto de jogo (PixiJS) — não relacionado às landing pages |

**Importante:** o código React das landing pages vive no **Lovable.dev** (plataforma), não em nenhum dos repos acima. O repo `tytan` é de documentação/referência.

---

## 🔐 Credenciais e Acessos

**→ [🔐 Credenciais — Tytan (Notion)](https://www.notion.so/35aabc957ced817d8ccfeb7df163ac26)**

Página centralizada com:
- Acessos ao Lovable e n8n
- API keys e webhook URLs
- Google Sheets referências
- Meta Pixel ID
- Links para Design System e cardápio
- Checklist de setup por novo projeto

**Guardar nessa página Notion (privada) — NUNCA commitar credenciais no GitHub.**

---

## 💻 Stack das landing pages

- **Frontend:** React + TypeScript + Vite (gerado pelo Lovable)
- **UI:** shadcn/ui (`Button`, `Input`, `Label`)
- **Formulários:** `react-hook-form` + `zod`
- **Captura de leads:** POST webhook → n8n → Google Sheets
- **Rastreamento de campanha:** Meta Pixel (`fbq('track', 'Lead')`)
- **Env var obrigatória:** `VITE_N8N_WEBHOOK_URL`

---

## 📦 Padrão de arquivos de integração (copiar para cada projeto Lovable)

```
src/
  types/
    lead.ts              → interface Lead { name, email, phone }
  services/
    n8n.ts               → sendLead(lead) faz POST para VITE_N8N_WEBHOOK_URL
  components/
    ContactForm.tsx      → formulário validado que chama sendLead() + trackLead()
  config/
    metaPixel.ts         → initMetaPixel() e trackLead() — gerado pelo setup-meta
```

**Referência canônica:** branch `claude/plan-n8n-integration-iqi2v` em `lenixeduardo/tytan`.

---

## 🔄 Fluxo completo (lead + rastreamento)

```
[Anúncio Meta Ads]
  ↓ (clique)
[Landing Page + Meta Pixel]
  ↓ (usuário preenche form)
[ContactForm valida (zod)]
  ↓ (submit)
[sendLead()]  +  [trackLead()]
  ↓                  ↓
[n8n Webhook]   [fbq('track','Lead')]
  ↓                  ↓
[Google Sheets]  [Meta Ads otimiza campanha]
```

**Campos do lead:** `name`, `email`, `phone` (10–11 dígitos), `timestamp` (ISO).

---

## ✅ Checklist completo por projeto novo

### Integração n8n
- [ ] Copiar `lead.ts`, `n8n.ts`, `ContactForm.tsx` para o Lovable
- [ ] Importar `<ContactForm />` na seção de contato / rodapé
- [ ] Adicionar `VITE_N8N_WEBHOOK_URL` nas Settings do Lovable
- [ ] Criar workflow n8n: Webhook POST → Google Sheets Append Row
- [ ] Testar ponta a ponta no preview do Lovable

### Meta Pixel
- [ ] Rodar `setup-meta` na raiz do projeto
- [ ] Colar snippet gerado em Lovable → Settings → Custom Code
- [ ] Verificar PageView no Meta Events Manager
- [ ] Preencher form → verificar evento Lead no Meta Events Manager
- [ ] Criar campanha no Meta Ads com objetivo "Leads"

---

## 🛠️ Scripts globais disponíveis

| Comando | O que faz |
|---------|-----------|
| `setup-meta` | Cria `metaPixel.ts`, atualiza `ContactForm.tsx`, gera snippet HTML para o Lovable |

**Script salvo em:** `~/.claude/scripts/setup-meta-pixel.js`

---

## 🔧 Ferramentas conectadas

- **Notion** — planejamento, reuniões, tarefas diárias, credenciais
- **n8n** — automação: webhook → Google Sheets
- **Meta Pixel** — rastreamento de conversões para campanhas no Meta Ads
- **Lovable.dev** — geração e edição do código React da landing page
- **GitHub (`tytan`)** — arquivos de referência e histórico de decisões
- **Google Sheets** — centraliza todos os leads capturados

---

## 📝 Referência rápida

- **Form:** `src/components/ContactForm.tsx`
- **Validação:** zod schema em `ContactForm.tsx`
- **Serviço n8n:** `src/services/n8n.ts`
- **Tipos:** `src/types/lead.ts`
- **Meta Pixel config:** `src/config/metaPixel.ts`
- **Env var:** `VITE_N8N_WEBHOOK_URL` (obter do n8n Webhook trigger)
- **Pixel ID:** guardar no Notion (credenciais)
