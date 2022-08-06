# HelloC_Student

## 概要

HelloC の学習者側のフロントエンドシステムです。

## 開発者向け

### ディレクトリ構成
```
src
├── components （コンポーネントを定義したファイル群）
├── pages （各ページを定義したディレクトリ）
│   
├── stories （コンポーネントのstoriesファイル群）
└── styles
    └── globals.css （グローバルスタイル定義）
```

### 本リポジトリの運用
- タスクの起票（新規コンポーネント開発、発覚したバグなど）には「issues」を使ってください。
- （余裕があればでいいですが）作成したissueには、優先度などを表すラベルを記載してください。
<img width="1115" alt="スクリーンショット 2022-08-06 19 57 05" src="https://user-images.githubusercontent.com/65604109/183246039-c8475c1c-8dcd-4544-9866-ebe839efcc90.png">

- 実装の際には、mainブランチに直接コミットするのではなく、開発用にブランチを作成してください。
- ブランチ名については、特に指定しないものとしますが、基本的にはmainブランチを起点にしてください。

##### ブランチの作成
```
git checkout -b ブランチ名
```

##### ブランチをpush
```
git push origin ブランチ名
```

##### ブランチをpull（レビューの際に使ってください）
```
git pull origin ブランチ名
```

### コーディングルール

- 変数名にはローワーキャメルケースを使ってください。
```
const camelCase = 0
```
- 関数名・タイプ名にはアッパーキャメルケースを使ってください。
```
type CamelCase

const CamenCaseFunc = () => {}
```
- グローバルに利用するような定数には、コンスタントケースを使ってください。
```
const CAMEL_CASE = 0
```

### 開発環境の導入
- リポジトリのクローン
```
git clone https://github.com/HIT-matsumotolab/HelloC_Student.git
```

- パッケージのインストール（本リポジトリはyarnを利用します）
```
yarn install
```

- 環境変数の設定（.env-sampleをコピーして、.envファイルを作成し、その中に記述してください。）
```
# バックエンド側に合わせて記述してください
API_URL="localhost:3000"
```

- Next.jsの実行
```
yarn dev
```
