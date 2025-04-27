<div align="center">

![Image](https://github.com/user-attachments/assets/301c0690-958e-4800-aaae-25f0ee26f3df)

# 🤖 OpenAI Codex GitHub Actions サンプルリポジトリ

<p align="center">
  <img src="https://img.shields.io/badge/OpenAI-Codex-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Codex">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
</p>

<p align="center">
  OpenAI CodexをGitHub Actions内で使用して、コード生成やリポジトリの自動更新を行うサンプルです。
</p>

</div>

## 🌟 概要

OpenAI Codexは、ターミナルで動作する軽量なコーディングエージェントです。自然言語でタスクを指示すると、コードの生成、ファイルの操作、依存関係のインストールなどを自動で実行します。

## 🚀 セットアップ

1. **OpenAI APIキーをGitHubシークレットに設定**
   - `OPENAI_API_KEY`をリポジトリのシークレットに追加

2. **GitHub Actionsを有効化**

## 🔄 ワークフロー例

### 1. 📝 自動コード更新

`update-changelog.yml` - READMEやCHANGELOGの自動更新、バージョンバンプなど

### 2. 🔧 リファクタリング

`auto-refactor.yml` - コードのリファクタリングを自動化

### 3. 📚 ドキュメント生成

`generate-docs.yml` - コードからドキュメントの自動生成

### 4. 🧪 テスト生成

`test-generation.yml` - テストコードの自動生成

## 📖 使用方法

1. ワークフローをトリガー
2. Codexが自動でタスクを実行
3. 変更をコミット・プッシュ

詳細な手順は[使用方法ドキュメント](docs/USAGE.md)をご覧ください。

## 📚 ドキュメンテーション

- [ドキュメント概要](docs/README.md)
- [API ドキュメント](docs/api.md)
- [アーキテクチャ概要](docs/architecture.md)
- [設定オプション](docs/configuration.md)

## ⚠️ 注意事項

- Codexはヘッドレスモードで動作します
- `CODEX_QUIET_MODE=1`でインタラクティブなUIのノイズを抑制します
- `-a auto-edit`オプションで自動承認モードを有効化します

## 🔗 リソース

- [GitHub Actions ワークフロー一覧](.github/workflows/README.md)
- [詳細な使用方法](docs/USAGE.md)
- [ドキュメント概要](docs/README.md)
- [API ドキュメント](docs/api.md)
- [アーキテクチャ概要](docs/architecture.md)
- [設定オプション](docs/configuration.md)
- [サンプルコード](src/README.md)
- [OpenAI 公式ドキュメント](https://platform.openai.com/docs)
- [GitHub Actions ドキュメント](https://docs.github.com/en/actions)

## 📄 ライセンス

MIT License
