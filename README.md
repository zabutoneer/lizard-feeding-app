# 🦎 Lizard Feeding App

トカゲの餌やり管理を行うアプリケーションです。
飼育記録を簡単に管理し、健康的な飼育をサポートします。

## 📌 概要

このアプリケーションは、トカゲの餌やりスケジュールや履歴を管理するためのツールです。
飼育者が個々のトカゲに合わせた給餌計画を立て、記録を残すことができます。

## 🚀 使用技術

- フロントエンド: React, React Router v7
- バックエンド: Node.js, Express
- インフラ: Docker

## 🧰 主な機能

- 飼育しているトカゲの登録、編集、削除
- 餌やりの記録と履歴表示
- 餌やりスケジュールの管理
- 飼育情報の可視化

## 🛠 インストール方法

1. リポジトリをクローンします。

   ```bash
    git clone https://github.com/zabutoneer/lizard-feeding-app.git
    cd lizard-feeding-app

   ```

2. 依存関係をインストールします。

   ```bash
    npm install

   ```

3. アプリケーションを起動します。

   ```bash
    npm start
   ```

## 🗂 ディレクトリ構成

```
lizard-feeding-app/
├── public/
├── app/
│   ├── components/
│   ├── features/
│   ├── routes/
│   ├── store/
│   └── ...
├── package.json
└── README.md
```

## 🌿 ブランチ運用ルール

本プロジェクトでは、以下のブランチで運用しています。

- `main`: 本番環境にデプロイされる安定版ブランチ。
- `develop`: 日々の開発作業を統合するブランチ。
- 作業ブランチ: `develop` から以下のようなブランチを切って作業を行います。
  - `feature/機能名`: 新機能の開発
  - `fix/バグ名`: バグ修正
  - `doc/変更内容`: ドキュメントの更新
  - `refactor/変更内容`: リファクタリング

## 📄 ライセンス

このプロジェクトは MIT License の下でライセンスされています。

## 👤 作者

- 名前: zabutoneer
- GitHub: @zabutoneer
