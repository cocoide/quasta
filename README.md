Quoraと呼ばれる質問共有サービスのクローンアプリになります。

以下工夫した点。
１.Nextjs13を使用。
2.ビューとロジックの分離を心がけて、コードの再利用性や可読性の向上を意識しました。
3.レスポンシブ対応
4.トップページは、SWRを利用したCSRによって表示させることで、リアルタイムな表示と読み込み時間の減少を両立させました。
5.ローディング中のアニメーションや非活性状態を作り出しました。
6.共通ロジックやコード量の多いロジックは、Hooks化しました。
