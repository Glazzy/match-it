import { pageSettings } from "../generics/layout/shared/types";

interface defaultPageSettings extends pageSettings {
  // add default settings here if needed
}

const defaultPageSettings: defaultPageSettings = {
  // add default settings here if needed
};

export default function PageSettings({
  pageSettings,
  children,
}: {
  pageSettings?: pageSettings;
  children: JSX.Element;
}): JSX.Element {
  const mergedPageSettings = { ...defaultPageSettings, ...pageSettings };

  // shud be doing things to the page size ex.

  return (
    <>
      {/* Page content */}
      {children}
    </>
  );
}
