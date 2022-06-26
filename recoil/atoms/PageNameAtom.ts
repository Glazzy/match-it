import { nullable, string } from "@recoiljs/refine";
import { atom } from "recoil";
import { syncEffect } from "recoil-sync";

export const pageNameState = atom({
    key: 'PageNameState',
    default: null,
    effects: [syncEffect({ refine: nullable(string()) })],
  });