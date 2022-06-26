import { useSession } from "next-auth/react";
import Page from "../../components/generics/layout/Page";
import { NextPageWithPageSettings } from "../../components/generics/layout/shared/types";

export const Main: NextPageWithPageSettings = () => {
  const { data: session } = useSession();
  // session is always non-null inside this page, all the way down the React tree.
  return <Page>test dashboard</Page>;
};

Main.pageSettings = {
  pageName: "lameo",
};

Main.navSettings = {
  topNavigationType: "default",
};

export default Main;
