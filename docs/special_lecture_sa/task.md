# タスク：神山先生の教員コラム作成

神山先生が提供してくれた「総合科目SA」の文章と画像を基に、新着情報からリンクされるコラムページを作成する。

## ステップ

1. **リサーチと準備**
    - [x] `docs/総合科目SA.docx` からテキストを抽出
    - [x] docxから画像を抽出
    - [x] 画像を `src/assets/kamiyama-sa/` に配置
    - [x] 既存の `News.jsx` と `App.jsx` の構造を確認

2. **ドキュメント作成**
    - [x] `task.md` の作成
    - [x] `implementation_plan.md` の作成

3. **コンポーネント実装**
    - [x] `src/components/LabKamiyamaReport.jsx` の新規作成
        - 神山先生の文章を流し込む
        - 画像を配置
        - レイアウトを「いい感じ」にデザインする
    - [x] `src/App.jsx` の修正
        - ルーティング `/lab-kamiyama-report` を追加
        - メタデータ（タイトル、説明）を追加

4. **新着情報への反映**
    - [x] `src/components/News.jsx` に新しいコラムへのリンクを追加

5. **仕上げと確認**
    - [x] 全体の動作確認
    - [x] `walkthrough.md` の作成
    - [x] 一時ファイルの削除（`extract_docx.py`, `docs/総合科目SA_extracted.txt` など）
