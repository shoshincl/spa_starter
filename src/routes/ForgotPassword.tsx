import { useTranslation } from 'react-i18next';

import ForgotPasswordForm from '../ui/components/forms/users/ForgotPassword';

function ForgotPassword() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          {t('routes.forgot_password.HEADING')}
        </h3>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

export default ForgotPassword;
