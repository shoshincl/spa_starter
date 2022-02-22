import { useTranslation } from 'react-i18next';

import LoginForm from '../ui/components/forms/users/Login';

function Login() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          {t('routes.login.HEADING')}
        </h3>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
