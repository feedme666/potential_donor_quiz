# 臓器提供適応判断クイズ（potential-donor-quiz）

臓器提供の適応可否について、症例ベースのクイズで学べるシンプルな React アプリです。スマホでもサクッと解ける体験を目指しています。

- ランタイム: React 18 + Bootstrap 5（Create React App）
- ホスティング: GitHub Pages（Actions による自動デプロイ）

## 必要要件
- Node.js: 推奨 LTS 20（`.nvmrc` あり）
- npm: 9 以上推奨

## 始め方
```
npm install
npm start
```
ブラウザで `http://localhost:3000` を開きます。

## 主なスクリプト
- `npm start`: 開発サーバー起動
- `npm run build`: 本番ビルドを `build/` に出力
- `npm test`: テスト実行（未設定のためスキップされる場合あり）

## デプロイ（GitHub Pages）

このリポジトリには、GitHub Actions を使った Pages デプロイワークフローが同梱されています。

1) 必要ファイル/設定
- `package.json` の `homepage` は `https://feedme666.github.io/potential-donor-quiz` に設定済み
- `.github/workflows/deploy.yml` により、`main` へ push すると自動でビルド/デプロイ
- GitHub リポジトリ Settings > Pages で Source を「GitHub Actions」に設定

2) 手動デプロイ（代替）
- `gh-pages` を使うスクリプトも用意しています（任意）:
  - `npm run deploy`
- Settings > Pages を「Deploy from a branch」→ Branch: `gh-pages` に設定するとブランチ配信方式になります（Actions 方式とどちらか一方を使ってください）。

## 仕様・要件
詳細は `docs/requirements.md` を参照してください。

## クイズデータの編集
問題データは `src/quizData.js` に定義されています。フォーマットの詳細と記述例は `docs/data-format.md` を参照してください。PR での修正/追加を歓迎します。

## トラブルシューティング
- `react-scripts start: command not found` の場合
  - `npm i react-scripts@5.0.1 --save-exact`
  - その後 `rm -rf node_modules package-lock.json && npm cache verify && npm install`
- Node バージョンが新しすぎる場合
  - LTS（20）に切り替え（`nvm use`）

## ライセンス
- コード: MIT License（`LICENSE` を参照）
- コンテンツ（問題文/解説・教材等）: All Rights Reserved（`CONTENT_LICENSE` を参照）

注意: コンテンツの無断複製・再配布・改変はできません。公開サイトでの閲覧利用のみ許可されています。再利用をご希望の場合はリポジトリ所有者に事前にお問い合わせください。
