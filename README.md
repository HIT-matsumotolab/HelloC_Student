# HelloC_Student

## 概要

HelloC の学習者側のフロントエンドシステムです。

## 開発者向け

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
