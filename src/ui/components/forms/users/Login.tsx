import Userfront from '@userfront/core';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

interface Credentials {
  email: string;
  password: string;
}

const Login = () => {
  const { t } = useTranslation();
  const initialValues: Credentials = {
    email: '',
    password: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async ({ email, password }: Credentials) => {
      await Userfront.login({
        method: 'password',
        email,
        password,
      }).catch((error) => toast.error(error.message));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mt-4">
        <div>
          <label className="block" htmlFor="email">
            {t('ui.components.forms.users.login.fields.EMAIL_LBL')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t('ui.components.forms.users.login.fields.EMAIL_PH')}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block" htmlFor="password">
            {t('ui.components.forms.users.login.fields.PASSWORD_LBL')}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder={t(
              'ui.components.forms.users.login.fields.PASSWORD_PH'
            )}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
        </div>
        <div className="flex items-baseline justify-between">
          <Link
            replace
            className="text-sm text-blue-600 hover:underline"
            to="/forgot-password"
          >
            {t('ui.components.forms.users.login.actions.FORGOT_PASSWORD')}
          </Link>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg mt-4"
          >
            {t('ui.components.forms.users.login.actions.SUBMIT')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
