import { useEffect } from 'react';
import Userfront from '@userfront/core';

function ValidateAccount() {
  useEffect(() => {
    const validateAccount = async () =>
      await fetch(process.env.REACT_APP_UF_VERIFICATION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: Userfront.user.email,
          userId: Userfront.user.userId,
          tenantId: process.env.REACT_APP_UF_TENANT_ID,
        }),
      }).then((response) => response.json());
    validateAccount();
    // TODO: TEST IN PRODUCTION TO COMPLETE WORKFLOW
  });
  return <h1>Validate Account</h1>;
}

export default ValidateAccount;
