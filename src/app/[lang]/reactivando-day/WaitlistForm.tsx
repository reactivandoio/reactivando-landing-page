'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { joinWaitlist, type WaitlistState } from './actions';

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/FxONSVhd2QcDrdSwbPCDYE';

const initialState: WaitlistState = { status: 'idle' };

type Copy = {
  name_label: string;
  name_placeholder: string;
  email_label: string;
  email_placeholder: string;
  phone_label: string;
  phone_placeholder: string;
  submit: string;
  submitting: string;
  success_title: string;
  success_desc: string;
  whatsapp_cta: string;
  disclaimer: string;
};

function SubmitButton({ copy }: { copy: Copy }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-primary text-on_primary font-display font-bold py-4 rounded-xl transition-transform active:scale-95 shadow-ambient disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? copy.submitting : copy.submit}
    </button>
  );
}

export default function WaitlistForm({ copy }: { copy: Copy }) {
  const [state, formAction] = useActionState(joinWaitlist, initialState);

  if (state.status === 'success') {
    return (
      <div className="bg-surface_container_low/60 backdrop-blur-md border border-primary/30 rounded-3xl p-8 md:p-10 shadow-ambient text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 text-primary">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-display font-extrabold text-on_surface">
            {copy.success_title}
          </h3>
          <p className="text-on_surface_variant leading-relaxed">{copy.success_desc}</p>
        </div>
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-on_primary rounded-full font-bold shadow-ambient hover:-translate-y-1 transition-transform"
        >
          <span className="material-symbols-outlined">chat</span>
          {copy.whatsapp_cta}
        </a>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="bg-surface_container_low/60 backdrop-blur-md border border-primary/15 rounded-3xl p-8 md:p-10 shadow-ambient space-y-5"
    >
      <div className="space-y-1">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-on_surface_variant font-sans"
        >
          {copy.name_label}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={copy.name_placeholder}
          className="w-full bg-surface_container_lowest border-none ring-1 ring-outline_variant/20 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 text-on_surface placeholder:text-outline_variant transition-all outline-none"
        />
        {state.errors?.name && (
          <p className="text-error text-xs mt-1">{state.errors.name}</p>
        )}
      </div>
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-on_surface_variant font-sans"
        >
          {copy.email_label}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={copy.email_placeholder}
          className="w-full bg-surface_container_lowest border-none ring-1 ring-outline_variant/20 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 text-on_surface placeholder:text-outline_variant transition-all outline-none"
        />
        {state.errors?.email && (
          <p className="text-error text-xs mt-1">{state.errors.email}</p>
        )}
      </div>
      <div className="space-y-1">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-on_surface_variant font-sans"
        >
          {copy.phone_label}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder={copy.phone_placeholder}
          className="w-full bg-surface_container_lowest border-none ring-1 ring-outline_variant/20 focus:ring-2 focus:ring-primary rounded-xl py-3 px-4 text-on_surface placeholder:text-outline_variant transition-all outline-none"
        />
        {state.errors?.phone && (
          <p className="text-error text-xs mt-1">{state.errors.phone}</p>
        )}
      </div>

      {state.status === 'error' && state.message && (
        <div className="bg-error_container/30 border border-error/40 rounded-xl p-4 text-sm text-error">
          {state.message}
        </div>
      )}

      <SubmitButton copy={copy} />

      <p className="text-xs text-on_surface_variant text-center leading-relaxed">
        {copy.disclaimer}
      </p>
    </form>
  );
}
