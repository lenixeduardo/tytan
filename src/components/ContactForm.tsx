import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { sendLead } from '@/services/n8n';

const schema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, 'Telefone inválido — informe 10 ou 11 dígitos sem espaços'),
});

type FormData = z.infer<typeof schema>;

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus('loading');
    try {
      await sendLead(data);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center text-green-800">
        <p className="text-lg font-medium">Recebemos suas informações!</p>
        <p className="mt-1 text-sm">Em breve nossa equipe entrará em contato.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          placeholder="Seu nome completo"
          disabled={status === 'loading'}
          {...register('name')}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="seu@email.com"
          disabled={status === 'loading'}
          {...register('email')}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="phone">Telefone / WhatsApp</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="11999999999"
          disabled={status === 'loading'}
          {...register('phone')}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">
          Não foi possível enviar. Tente novamente em instantes.
        </p>
      )}

      <Button type="submit" disabled={status === 'loading'} className="w-full">
        {status === 'loading' ? 'Enviando...' : 'Quero ser contactado'}
      </Button>
    </form>
  );
}
