# Integração n8n → Google Sheets

Arquivos de referência para adicionar captura de leads via n8n no projeto Lovable (`tytan-precision-sprayers`).

## Arquivos

| Arquivo | O que faz |
|---|---|
| `src/types/lead.ts` | Interface `Lead` |
| `src/services/n8n.ts` | `sendLead()` — envia dados ao webhook n8n |
| `src/components/ContactForm.tsx` | Formulário com validação (shadcn/ui + zod) |
| `.env.example` | Variável de ambiente com a URL do webhook |

## Como adicionar ao projeto Lovable

1. Copie os 3 arquivos de `src/` para o mesmo caminho no projeto Lovable.
2. No rodapé ou seção de contato, importe e use `<ContactForm />`.
3. Adicione `VITE_N8N_WEBHOOK_URL` nas variáveis de ambiente do Lovable.

## Configuração n8n

1. Crie um workflow com nó **Webhook** (método POST).
2. Copie a URL gerada → cole como `VITE_N8N_WEBHOOK_URL`.
3. Adicione nó **Google Sheets → Append Row**:
   - `nome` → `{{ $json.name }}`
   - `email` → `{{ $json.email }}`
   - `telefone` → `{{ $json.phone }}`
   - `data` → `{{ $json.timestamp }}`
4. Ative o workflow.
