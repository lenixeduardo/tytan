# Contexto do Projeto — Tytan Agriculture

## Papel atual
Criação de landing pages diariamente usando o fluxo abaixo.

## 🚀 Fluxo diário (repetir todos os dias)

1. **Planejar** — definir seções, copy e objetivos da landing no Notion
2. **Claude Design** — gerar o design system e mockup HTML no Claude
3. **Baixar arquivo** — exportar o HTML/CSS com o design system gerado
4. **Aplicar ao Lovable** — copiar os arquivos para o projeto Lovable e ajustar

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
- Google Sheets referencias
- Links para Design System e cardápio
- Checklist de setup por novo projeto

**Guardar nessa página Notion (privada) — NUNCA commitar credenciais no GitHub.**

---

## 💻 Stack das landing pages

- **Frontend:** React + TypeScript + Vite (gerado pelo Lovable)
- **UI:** shadcn/ui (`Button`, `Input`, `Label`)
- **Formulários:** `react-hook-form` + `zod`
- **Captura de leads:** POST webhook → n8n → Google Sheets
- **Env var obrigatória:** `VITE_N8N_WEBHOOK_URL`

---

## 📦 Padrão de arquivos de integração (copiar para cada projeto Lovable)

```
src/
  types/
    lead.ts          → interface Lead { name, email, phone }
  services/
    n8n.ts           → sendLead(lead) faz POST para VITE_N8N_WEBHOOK_URL
  components/
    ContactForm.tsx  → formulário validado que chama sendLead()
```

**Referência canônica:** branch `claude/plan-n8n-integration-iqi2v` em `lenixeduardo/tytan`.

---

## 🔄 Fluxo de captura de leads

```
Usuário preenche form 
  ↓
ContactForm valida (zod) 
  ↓
sendLead() 
  ↓
POST /webhook/n8n 
  ↓
workflow n8n 
  ↓
Google Sheets (Append Row)
```

**Campos:** `name`, `email`, `phone` (10–11 dígitos), `timestamp` (ISO).

---

## ✅ Checklist de integração n8n (por projeto)

- [ ] Copiar `lead.ts`, `n8n.ts`, `ContactForm.tsx` para o Lovable
- [ ] Importar `<ContactForm />` na seção de contato / rodapé
- [ ] Adicionar `VITE_N8N_WEBHOOK_URL` nas Settings do Lovable
- [ ] Criar workflow n8n: Webhook POST → Google Sheets Append Row
- [ ] Testar ponta a ponta no preview do Lovable

---

## 🔧 Ferramentas conectadas

- **Notion** — planejamento, reuniões, tarefas diárias, **credenciais**
- **n8n** — automação: webhook → Google Sheets
- **Lovable.dev** — geração e edição do código React da landing page
- **GitHub (`tytan`)** — arquivos de referência e histórico de decisões
- **Google Sheets** — centraliza todos os leads capturados

---

## 📝 Referência rápida

- **Arquivo de integração:** `src/components/ContactForm.tsx`
- **Validação:** zod schema em `ContactForm.tsx`
- **Serviço:** `src/services/n8n.ts`
- **Tipos:** `src/types/lead.ts`
- **Env var:** `VITE_N8N_WEBHOOK_URL` (obter do n8n Webhook trigger)
