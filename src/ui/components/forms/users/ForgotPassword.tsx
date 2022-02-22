import { FC } from 'react';
import Userfront from '@userfront/core';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Routes } from '../../../../routes/routes';

interface Credentials {
  email: string;
}

const ForgotPassword: FC = (props) => {
  const { t } = useTranslation();
  const initialValues: Credentials = {
    email: '',
  };
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    onSubmit: async ({ email }) => {
      await Userfront.sendResetLink(email)
        .then(({ result }) => {
          toast.success(
            t('ui.components.forms.users.forgot_password.toasts.EMAIL_SENT')
          );
          if (result?.url) {
            navigate(`${Routes.RESET_PASSWORD}?${result.url.split('?')[1]}`, {
              replace: true,
            });
          }
        })
        .catch(({ message }) => toast.error(message));
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
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg mt-4"
          >
            {t('ui.components.forms.users.forgot_password.actions.SUBMIT')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ForgotPassword;
