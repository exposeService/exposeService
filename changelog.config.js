module.exports = {
  // Emojiを非表示にするか
  disableEmoji: false,

  // types一覧
  // typesが設定されているのに、listに登録されてないとgit-czの実行時にエラーを吐く
  // 入れる値は、typesのvalueプロパティで指定した値
  list: [
    'test',
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
    'config',
    'package',
    'todo'
  ],

  // コミットメッセージの最大文字数
  maxMessageLength: 64,

  // コミットメッセージの最小文字数
  minMessageLength: 3,

  // 質問の種類
  questions: ['type', 'subject'],

  // scopesの種類
  // 一つも指定されてない場合、scopeの質問は行われなくなる
  scopes: ['無し', 'API', '機能', '環境構築', '型ファイル'],

  // typesの種類を設定する
  types: {
    chore: {
      description: 'ビルドプロセスまたは補助ツールの変更',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI関連の変更',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'ドキュメントの変更のみ',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '新機能の追加や更新',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'バグ修正',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'パフォーマンスを向上させるコード変更',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'リファクタリング',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'リリースコミット',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: 'マークアップ、ホワイトスペース、フォーマット、セミコロンなどの修正',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'テストの追加・修正',
      emoji: '💍',
      value: 'test',
    },

    // 以下、独自で追加したtypes
    config: {
      description: '設定ファイルの追加・修正',
      emoji: '⚙️',
      value: 'config',
    },
    package: {
      description: 'パッケージの追加・更新・削除',
      emoji: '📦',
      value: 'package',
    },
    todo: {
      description: 'タスクの追加・更新・削除',
      emoji: '✔️',
      value: 'todo'
    }
  },
};
