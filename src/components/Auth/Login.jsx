import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const validationSchema = yup.object().shape({
  email: yup.string().required('Email boş geçilemez!').email(),
  password: yup
    .string()
    .required('Password boş geçilemez!')
    .min(6, 'Şifre en az 6 karakterli olmalıdır!'),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  async function onSubmit(user) {
    try {
      const res = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'mor_2314', password: '83r5^_' }),
      });

      if (res.ok) {
        const data = await res.json();
        toast.success('Giriş başarılı! Ana Sayfaya Yönlendiriliyorsunuz!');
        setTimeout(() => {
          setUser({
            email: user.email,
            username: 'eminbasbayan',
            ...data,
            role: 'user',
          });
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  /* console.log(watch('password')); */

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        {/* Logo ve Başlık */}
        <div className="text-center">
          <div className="inline-flex h-12 w-12 rounded-xl bg-indigo-600 items-center justify-center text-white font-bold text-2xl shadow-lg shadow-indigo-200 mb-4">
            S
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Hesabınıza giriş yapın
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Veya{' '}
            <a
              href="#signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              yeni bir hesap oluşturun
            </a>
          </p>
        </div>

        {/* Form Alanı */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* E-posta Alanı */}
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-semibold text-slate-700 mb-1"
              >
                E-posta Adresi
              </label>
              <input
                type="email"
                className="appearance-none relative block w-full px-3 py-3 border border-slate-200 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all"
                placeholder="ornek@domain.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Şifre Alanı */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-700 mb-1"
              >
                Şifre
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="appearance-none relative block w-full px-3 py-3 pr-10 border border-slate-200 placeholder-slate-400 text-slate-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all"
                  placeholder="••••••••"
                  {...register('password')}
                />
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Giriş Yap Butonu */}
          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-lg hover:shadow-xl shadow-indigo-100`}
            >
              Giriş Yap
            </button>
          </div>
        </form>

        {/* Sosyal Medya ile Giriş */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">
                Veya şununla devam edin
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {/* Google */}
            <button
              type="button"
              className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.247-3.13C18.423 1.921 15.6 1 12.24 1 5.48 1 0 6.48 0 13.2s5.48 12.2 12.24 12.2c7.055 0 11.75-4.96 11.75-11.96 0-.807-.087-1.424-.195-1.955H12.24z"
                />
              </svg>
              <span>Google</span>
            </button>

            {/* GitHub */}
            <button
              type="button"
              className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-200 rounded-xl bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
