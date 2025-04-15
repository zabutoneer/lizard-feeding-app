import logoDark from "./reppi_logo_dark.svg";
import logoLight from "./reppi_logo_light.svg";
import { useNavigate } from 'react-router';

export function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-10 p-8 w-full max-w-md">
        {/* ロゴ表示 */}
        <div className="w-[400px] max-w-full">
          <img
            src={logoLight}
            alt="Lizard Feeding App"
            className="block w-full dark:hidden"
          />
          <img
            src={logoDark}
            alt="Lizard Feeding App"
            className="hidden w-full dark:block"
          />
        </div>

        {/* ログインフォーム */}
        <form className="w-full space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/lizards');
          }}
        >
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              パスワード
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              placeholder="********"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            ログイン
          </button>
        </form>

        {/* 新規登録リンク */}
        <div className="text-sm text-gray-600 dark:text-gray-300">
          アカウントをお持ちでない方は{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            新規登録
          </a>
        </div>
      </div>
    </main>
  );
}
