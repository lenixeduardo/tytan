# Referência de Credenciais — Tytan

**⚠️ Credenciais nunca devem ser commitadas no GitHub.**

## Local central: Notion (privado)

**→ [🔐 Credenciais — Tytan](https://www.notion.so/35aabc957ced817d8ccfeb7df163ac26)**

Todas as credenciais, chaves de API e links privados estão nessa página Notion com acesso restrito. Consulte lá para:

- Logins (Lovable, n8n)
- API keys e webhook URLs
- Google Sheets IDs
- Links para Drive (designs, cardápio)
- Status dos workflows

---

## ✅ Checklist: antes de iniciar novo projeto

1. Abra a página de credenciais no Notion
2. Copie `VITE_N8N_WEBHOOK_URL` → adicione às Settings do Lovable
3. Copie os 3 arquivos (`lead.ts`, `n8n.ts`, `ContactForm.tsx`) → Lovable
4. Importe `<ContactForm />` no footer/contato
5. Teste o webhook no preview

---

## 🔐 O que NÃO fazer

- ❌ Não colocar credenciais em arquivos `.md` ou `.ts` commitados
- ❌ Não compartilhar URLs de webhooks em Slack público
- ❌ Não fazer push de `.env` com valores reais
- ❌ Não commitar arquivos com senhas

---

## ✅ O que FAZER

- ✅ Usar `.env.local` (gitignored) para desenvolvimento local
- ✅ Guardar tudo na página Notion privada
- ✅ Usar `VITE_N8N_WEBHOOK_URL` como env var no Lovable (Settings)
- ✅ Revisar permissões de acesso ao Notion regularmente
