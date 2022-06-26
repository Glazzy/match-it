import React from "react";
import { useRecoilValue } from "recoil";
import { pageNameState } from "../../../recoil/atoms/PageNameAtom";

export default function usePageTitle() {
  return useRecoilValue(pageNameState);
}
