import type { Route } from "./+types/home";
import { Lizards } from "~/features/lizards/lizards";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reppi" },
    { name: "description", content: "トカゲの飼育をもっと簡単に！餌やりや健康管理を記録できるアプリです！" },
  ];
}

export default function Home() {
  return <Lizards />;
}
