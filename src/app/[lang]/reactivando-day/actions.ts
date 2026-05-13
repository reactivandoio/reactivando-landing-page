'use server';

import { supabase } from '@/lib/supabase/server';

export type WaitlistState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    phone?: string;
  };
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+\d\s()-]{8,}$/;

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const phone = String(formData.get('phone') ?? '').trim();

  const errors: WaitlistState['errors'] = {};
  if (name.length < 2) errors.name = 'Informe seu nome completo.';
  if (!emailRegex.test(email)) errors.email = 'E-mail inválido.';
  if (!phoneRegex.test(phone)) errors.phone = 'Telefone inválido.';

  if (Object.keys(errors).length > 0) {
    return { status: 'error', errors };
  }

  const { error } = await supabase
    .from('reactivando_day_waitlist')
    .insert({ name, email, phone, joined_whatsapp: false });

  if (error) {
    if (error.code === '23505') {
      return {
        status: 'error',
        message: 'Este e-mail já está na lista de espera.',
      };
    }
    return {
      status: 'error',
      message: 'Não foi possível salvar agora. Tente novamente em instantes.',
    };
  }

  return { status: 'success' };
}
