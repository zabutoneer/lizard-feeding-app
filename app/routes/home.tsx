import type { Route } from './+types/home';
import { Welcome } from '../features/welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Reppi' },
    {
      name: 'description',
      content: 'トカゲの飼育をもっと簡単に！餌やりや健康管理を記録できるアプリです！',
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
