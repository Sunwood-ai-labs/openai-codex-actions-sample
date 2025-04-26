# OpenAI Codex GitHub Actions 使用方法

このドキュメントでは、OpenAI CodexをGitHub Actionsで使用する方法を説明します。

## OpenAI Codexとは

OpenAI Codexは、自然言語で指示を与えるだけでコード生成やファイル操作を行うCLIツールです。GitHub Actions内でヘッドレスモードで実行することで、CIパイプラインを自動化できます。

## セットアップ

### 1. OpenAI APIキーの設定

1. GitHubリポジトリの設定ページに移動
2. `Settings` → `Secrets and variables` → `Actions`
3. `New repository secret`をクリック
4. 以下を設定：
   - Name: `OPENAI_API_KEY`
   - Value: あなたのOpenAI APIキー

### 2. GitHub Actionsの有効化

リポジトリの`Actions`タブからGitHub Actionsを有効にします。

## ワークフロー

### 1. Update CHANGELOG (`update-changelog.yml`)

自動でCHANGELOGを更新するワークフロー。

#### 手動実行

1. `Actions`タブに移動
2. `Update CHANGELOG`を選択
3. `Run workflow`をクリック
4. バージョンを入力（例：v1.0.0）

#### 自動実行

mainブランチへのプッシュ時に自動実行されます。

### 2. Auto Code Refactor (`auto-refactor.yml`)

コードのリファクタリングを自動化するワークフロー。

#### 使用方法

1. `Actions`タブで`Auto Code Refactor`を選択
2. 以下を入力：
   - **target_path**: リファクタリング対象のパス
   - **refactor_type**: performance, readability, security, modernizeから選択
   - **description**: （オプション）追加の指示

### 3. Generate Documentation (`generate-docs.yml`)

コードから自動でドキュメントを生成するワークフロー。

#### 自動実行

`src/`ディレクトリのファイル変更時に自動実行。

#### 生成されるドキュメント

- APIドキュメント
- 使用例
- アーキテクチャ概要
- 設定オプション

### 4. Test Generation (`test-generation.yml`)

テストコードを自動生成するワークフロー。

#### 使用方法

1. 手動実行：
   - `Actions`タブで`Test Generation`を選択
   - ファイルパスとテストタイプを指定

2. 自動実行：
   - src配下のコード変更時にユニットテストを自動生成

## ベストプラクティス

### 1. ヘッドレスモード

```bash
export CODEX_QUIET_MODE=1
```

この環境変数を設定することで、インタラクティブUIのノイズを抑制します。

### 2. 自動承認モード

```bash
codex -a auto-edit --quiet "タスクの説明"
```

`-a auto-edit`オプションで、Codexの提案を自動承認します。

### 3. コミットメッセージ

Codexが生成した変更には、わかりやすいコミットメッセージを付けましょう：
- `docs:` - ドキュメント関連
- `test:` - テスト関連
- `refactor:` - リファクタリング

### 4. レビュー

Codexが生成したコードは、必ず人間がレビューしてください。特に：
- セキュリティの問題
- パフォーマンスの影響
- コードスタイルの一貫性

## トラブルシューティング

### APIキーエラー

```
Error: OpenAI API key not found
```

解決方法：
1. シークレットが正しく設定されているか確認
2. `OPENAI_API_KEY`環境変数が正しくエクスポートされているか確認

### Codexインストールエラー

```
Error: Cannot find module '@openai/codex'
```

解決方法：
1. Node.jsバージョンを確認（20以上推奨）
2. `npm install -g @openai/codex`を再実行

### タイムアウト

Codexのタスクが長すぎる場合：
1. タスクを小さく分割
2. タイムアウト設定を調整

## リソース

- [OpenAI Codex GitHub](https://github.com/openai/codex)
- [OpenAI Documentation](https://platform.openai.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## サポート

問題が発生した場合は、GitHubのIssueを作成してください。
