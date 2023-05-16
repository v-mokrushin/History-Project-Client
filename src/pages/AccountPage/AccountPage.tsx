import React from "react";
import ContentWrapper from "components/Structure/ContentWrapper/ContentWrapper";
import Container from "components/Structure/Container/Container";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import actualSectionStore from "stores/mobx/actualSectionStore";
import { DocumentTitle } from "utils/document-title";
import { accountStore } from "stores/mobx/authorizationStore";
import { alertsStore } from "stores/mobx/alertsStore";
import AdminPanel from "components/Account/AdminPanel/AdminPanel";
import UserAccount from "components/Account/UserAccount/UserAccount";

interface IAccountPageProps {
  className?: string;
}

const AccountPage: React.FC<IAccountPageProps> = observer(({ className }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (accountStore.isUserAuthorized) {
      actualSectionStore.throw();
      DocumentTitle.set("Личный кабинет");
    } else {
      navigate("/");
    }

    return () => {};
  }, [accountStore.isUserAuthorized]);

  if (!accountStore.user) return <></>;

  return (
    <ContentWrapper>
      <Container>
        {accountStore.isAdmin ? <AdminPanel /> : <UserAccount />}
      </Container>
    </ContentWrapper>
  );
});

export default AccountPage;
