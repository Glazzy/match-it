import { NextPage } from "next"
import { ReactNode } from "react";

export interface authSettings {
  isAuthEnabled: boolean
}

export interface topNavigationSettings  {
    withBackButton: boolean;
    title: ReactNode;
    menuItems: ReactNode;
    customTopNavigation?: JSX.Element;
};

export type bottomNavigationTypes = 'default' | 'custom' | 'none'

export type topNavigationTypes =  'default' | 'mainpage' | 'subpage' | 'custom'| 'none' | null 

export interface navigationSettings {
    topNavigationType?: topNavigationTypes;
    customTopNavigation?: JSX.Element;
    bottomNavigationType?: bottomNavigationTypes;
    customBottomNavigation?: JSX.Element;
}

export interface pageSettings {
    pageName?: string;
}

export type NextPageWithPageSettings<P = {}, IP = P> = NextPage<P, IP> & {
    pageSettings?: pageSettings;
    authSettings?: authSettings
    navSettings?: navigationSettings
  };