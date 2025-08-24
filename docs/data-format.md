# クイズデータ形式（src/quizData.js）

このアプリは `src/quizData.js` から問題データを読み込みます。現行の実装は YES/NO の二択問題に対応しています。

## エクスポート形式
```
// src/quizData.js
const quizData = [
  {
    id: 1,
    question: "症例...\n...",   // 改行は \n で記述、表示は pre-wrap
    answer: "YES",                 // "YES" または "NO"
    explanation: "解説テキスト..." // 改行可
  },
  // ...
];

export default quizData;
```

## フィールド仕様
- `id`: 数値でユニークな問題ID。
- `question`: 表示する設問本文。複数行は `\n` を使用。UI側で `white-space: pre-wrap` により整形表示します。
- `answer`: 正解。`"YES"` または `"NO"` のいずれか。
- `explanation`: 回答後に表示する簡潔な解説。根拠や参考情報を含めても良いですが、要点を短く保つのが推奨です。

## 追加・変更の手順
1. `src/quizData.js` を編集して新しい問題オブジェクトを追加します。
2. `id` は既存と重複しない整数にしてください。
3. 文面の改行は `\n` を使用します。
4. 保存後、`npm start` でローカル確認をします。
5. 問題が表示・採点・解説表示まで正しく動作するか確認します。

## 拡張のヒント（将来）
将来的に多肢選択に拡張する場合は、以下のように `choices` と `correct` を追加し、UI側の対応が必要です。
```
{
  id: 101,
  type: "multi",           // 例: "binary" | "multi"
  question: "...",
  choices: [
    { id: "a", text: "選択肢A" },
    { id: "b", text: "選択肢B" }
  ],
  correct: ["a"],          // または単一文字列
  explanation: "..."
}
```

