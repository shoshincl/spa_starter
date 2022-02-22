import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import ResetPasswordForm from '../ui/components/forms/users/ResetPassword';

function ResetPassword() {
  const { t } = useTranslation();
  const location = useLocation();
  const uuid: string = location.search
    .replace('?uuid=', '')
    .split('&token=')[0];
  const token: string = location.search
    .replace('?uuid=', '')
    .split('&token=')[1];
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          {t('routes.reset_password.HEADING')}
        </h3>
        <ResetPasswordForm uuid={uuid} token={token} />
      </div>
    </div>
  );
}

export default ResetPassword;
