import { FC } from 'react';
import Userfront from '@userfront/core';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

interface Credentials {
  newpassword: string;
}

interface Props {
  uuid: string;
  token: string;
}

const ResetPasswordForm: FC<Props> = ({ uuid, token }) => {
  const { t } = useTranslation();
  const initialValues: Credentials = {
    newpassword: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async ({ newpassword }) => {
      await Userfront.resetPassword({ password: newpassword, token, uuid })
        .then((res) => {
          toast.success(
            t(
              'ui.components.forms.users.reset_password.toasts.PASSWORD_RESTORED'
            )
          );
        })
        .catch(({ message }) => toast.error(message));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mt-4">
        <div>
          <label className="block" htmlFor="email">
            {t(
              'ui.components.forms.users.reset_password.fields.NEW_PASSWORD_LBL'
            )}
          </label>
          <input
            id="newpassword"
            name="newpassword"
            type="password"
            placeholder={t(
              'ui.components.forms.users.reset_password.fields.NEW_PASSWORD_PH'
            )}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            onChange={formik.handleChange}
            value={formik.values.newpassword}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg mt-4"
          >
            {t('ui.components.forms.users.reset_password.actions.SUBMIT')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
