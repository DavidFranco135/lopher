// ============================================================
// src/features.ts — Feature Flags da Barbearia Novo Jeito
// ============================================================
// Controla quais funcionalidades estão habilitadas no build.
//
// ✅ COMO USAR:
//   - Copie o arquivo .env.basico ou .env.completo para .env
//   - Rode `npm run build` — a versão é definida em tempo de build
//   - NENHUMA alteração de código necessária entre versões
//
// VERSÃO BÁSICA  → .env.basico  → sem WhatsApp API, sem Asaas
// VERSÃO COMPLETA → .env.completo → tudo habilitado
// ============================================================

export const FEATURES = {
  /**
   * Automação via WhatsApp Cloud API (Meta)
   * Quando false: disparo de mensagens é silenciosamente ignorado.
   * Aba "Automações" é ocultada do menu lateral.
   */
  whatsapp: import.meta.env.VITE_FEATURE_WHATSAPP === 'true',

  /**
   * Integração com Asaas (cobrança PIX / Link de pagamento)
   * Quando false: método de pagamento LINK é ocultado.
   * Seção "Integrações Asaas" é ocultada em Configurações.
   */
  asaas: import.meta.env.VITE_FEATURE_ASAAS === 'true',

  /**
   * Clube de Benefícios com parceiros e QR Code
   * Quando false: aba "Parceiros" e "Clube de Benefícios" são ocultadas.
   */
  clubeBeneficios: import.meta.env.VITE_FEATURE_CLUBE === 'true',

  /**
   * Fila de Espera pública (página /fila)
   * Quando false: rota não é renderizada.
   */
  filaEspera: import.meta.env.VITE_FEATURE_FILA === 'true',
} as const;

// ── Helper para log em dev ────────────────────────────────────
if (import.meta.env.DEV) {
  console.log('[FEATURES]', FEATURES);
}
