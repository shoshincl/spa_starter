import { useTranslation } from 'react-i18next';

import SignupForm from '../ui/components/forms/users/Signup';

function Signup() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          {t('routes.signup.HEADING')}
        </h3>
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
