const PHONE_DISPLAY = "(62) 99681-0505";
const PHONE_TEL = "tel:+5562996810505";
const WHATSAPP_URL =
  "https://wa.me/5562996810505?text=" +
  encodeURIComponent("Olá! Gostaria de mais informações.");

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function HeadsetIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

const ctaBase =
  "group relative flex h-[76px] w-full items-center gap-3 rounded-[18px] px-4 text-left sm:gap-4 transition-all duration-[250ms] ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 sm:px-5";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-1 items-center justify-center overflow-hidden px-4 py-10">
      <div aria-hidden="true" className="scene" />
      <div aria-hidden="true" className="halo" />

      <section className="card-in relative w-full max-w-[448px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0b1530]/60 px-6 py-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-xl sm:px-10 sm:py-12 max-[380px]:px-5">
        {/* reflexo sutil na borda superior */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />

        <header className="flex flex-col items-center text-center">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#296BFF] to-[#1557E8] shadow-[0_10px_30px_-6px_rgba(41,107,255,0.55)] ring-1 ring-white/20 ring-inset">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-white/20 to-transparent opacity-60"
            />
            <HeadsetIcon className="relative h-7 w-7 text-white" />
          </div>

          <h1 className="mt-6 text-[28px] font-bold leading-tight tracking-tight text-white">
            Central SA
          </h1>
          <p className="mt-2 text-balance text-sm text-white/65 sm:text-[15px]">
            Atendimento rápido quando você precisa.
          </p>
        </header>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs sm:gap-x-3 sm:text-[12.5px]">
          <span className="text-white/45">Central de atendimento</span>
          <span aria-hidden="true" className="h-3 w-px bg-white/15 max-[340px]:hidden" />
          <span className="flex items-center gap-2 text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="status-pulse absolute inset-0 rounded-full bg-[#20B15A]" />
              <span className="relative h-2 w-2 rounded-full bg-[#20B15A]" />
            </span>
            Disponível agora
          </span>
        </div>

        <div className="mt-7 flex flex-col gap-3.5">
          <a
            href={PHONE_TEL}
            className={`${ctaBase} bg-gradient-to-b from-[#296BFF] to-[#1557E8] text-white shadow-[0_12px_32px_-10px_rgba(41,107,255,0.6),inset_0_1px_0_rgba(255,255,255,0.18)] hover:shadow-[0_16px_44px_-8px_rgba(41,107,255,0.8),inset_0_1px_0_rgba(255,255,255,0.22)] focus-visible:outline-[#296BFF]`}
          >
            <span className="flex h-10 w-10 shrink-0 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-base font-bold leading-tight sm:text-[17px]">
                Ligar agora
              </span>
              <span className="mt-0.5 text-sm font-medium text-white/70">
                {PHONE_DISPLAY}
              </span>
            </span>
            <ChevronIcon className="h-5 w-5 shrink-0 max-[380px]:hidden text-white/60 transition-transform duration-[250ms] group-hover:translate-x-0.5" />
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaBase} border border-[#20B15A]/30 bg-[#20B15A]/[0.10] text-white hover:border-[#20B15A]/50 hover:bg-[#20B15A]/[0.16] hover:shadow-[0_12px_32px_-12px_rgba(32,177,90,0.45)] focus-visible:outline-[#20B15A]`}
          >
            <span className="flex h-10 w-10 shrink-0 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#20B15A] shadow-[0_4px_14px_-4px_rgba(32,177,90,0.6)]">
              <WhatsAppIcon className="h-[22px] w-[22px]" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-base font-bold leading-tight sm:text-[17px]">
                Falar pelo WhatsApp
              </span>
              <span className="mt-0.5 text-sm font-medium text-white/55">
                Envie uma mensagem
              </span>
            </span>
            <ChevronIcon className="h-5 w-5 shrink-0 max-[380px]:hidden text-white/40 transition-transform duration-[250ms] group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </main>
  );
}
