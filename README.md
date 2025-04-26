# OpenAI Codex GitHub Actions サンプルリポジトリ

このリポジトリは、OpenAI CodexをGitHub Actions内で使用して、コード生成やリポジトリの自動更新を行うサンプルです。

## OpenAI Codexとは

OpenAI Codexは、ターミナルで動作する軽量なコーディングエージェントです。自然言語でタスクを指示すると、コードの生成、ファイルの操作、依存関係のインストールなどを自動で実行します。

## セットアップ

1. OpenAI APIキーをGitHubシークレットに設定
   - `OPENAI_API_KEY`をリポジトリのシークレットに追加

2. GitHub Actionsを有効化

## ワークフロー例

### 1. 自動コード更新

`update-code.yml` - READMEやCHANGELOGの自動更新、バージョンバンプなど

### 2. CI/CDパイプライン

`ci-pipeline.yml` - テストの自動生成、コードの最適化など

### 3. ドキュメント生成

`docs-generator.yml` - コードからドキュメントの自動生成

## 使用方法

1. ワークフローをトリガー
2. Codexが自動でタスクを実行
3. 変更をコミット・プッシュ

## 注意事項

- Codexはヘッドレスモードで動作します
- `CODEX_QUIET_MODE=1`でインタラクティブなUIのノイズを抑制します
- `-a auto-edit`オプションで自動承認モードを有効化します

## ライセンス

MIT License
