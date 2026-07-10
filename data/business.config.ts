import { exampleBusiness } from "./business.example";
import type { BusinessConfig } from "./types";

/**
 * Config do cliente ativo.
 * Em entrega real: substitua pelo objeto populado via skill onboard-client.
 * Em desenvolvimento: reexporta o exemplo Gold Coast.
 */
export const business: BusinessConfig = exampleBusiness;
