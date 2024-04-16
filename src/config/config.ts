import dotenv from "dotenv";

dotenv.config();

export const testVersion = process.env.TESTNET;
export const OPENAPI_UNISAT_URL = testVersion
  ? "https://open-api-testnet.unisat.io"
  : "https://open-api.unisat.io";

export const OPENAPI_URL = testVersion
  ? "https://api-testnet.unisat.io/wallet-v4"
  : "https://api.unisat.io/wallet-v4";

export const BIS_HOLDER_URL =
  "https://api.bestinslot.xyz/v3/collection/holders";
export const BIS_INSCRIPTION_URL =
  "https://api.bestinslot.xyz/v3/collection/inscriptions";

export const OPENAPI_UNISAT_TOKEN = process.env.UNISAT_TOKEN;
export const SIGNATURE_SIZE = 126;
export const SERVICE_FEE_PERCENT = 3;
export const ADMIN_PAYMENT_ADDRESS: string = process.env
  .ADMIN_PAYMENT_ADDRESS as string;
export const BIS_KEY = process.env.BIS_KEY as string;

export const GOBLIN_COLLECTIONS = [
  "goblin-scientists",
  "bitcoin-goblins",
  "early-goblins",
];

export const ENABLE_COLLECTIONS = ["honey-badgers"];
// export const ENABLE_COLLECTIONS = ["goblin-scientists"];

export enum WalletTypes {
  UNISAT = "Unisat",
  XVERSE = "Xverse",
  HIRO = "Hiro",
  OKX = "Okx",
}

export enum RaffleStatus {
  PENDING = 0,
  START = 1,
  CANFINISH = 2,
  END = 3,
}

export const TOKEN_PRICE = 100;
