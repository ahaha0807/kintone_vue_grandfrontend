# 作品名
グループ向けホテル議論アプリ
# 概要
Grand Frontend Osaka 2016 のハッカソンで作った、ホテル検索＆ホテル候補決めアプリ。リンク先では宿の検索までが可能。
グループで旅行するときに、宿泊するホテルについて話し合いやすくするためにこのアプリを作った。

## このアプリがない場合の問題点
- グループチャット（例えばLINEなど）では１つのタイムラインしかないため、どの宿に対して話しているのか、さらにはなんの話に返事したのかわかりづらくなってしまう。
- 「候補を調べる→共有する」の流れが一度中断されてしまう。
- 誰の提案なのかが議論をしている間に流れていってしまうため、質問がしにくい。

## このアプリが解決する部分
- 提案した宿ごとにコミュニケーションを行う場所が用意されるので、切り分けて話すことが可能になる。
- 「候補を調べる→共有する」までが少ないステップで可能になる。
- 誰が提案したのかがひと目で分かるので、その人に対してどこがいいと思ったのかなどを質問しやすくなる。

# URL 
https://ahaha0807.github.io/grandfrontend_2016/main.html

# 利用手順
== 宿の候補を調べる ==
1. 上記URLにアクセスする
2. 検索ワードを入力する

・任意で都道府県の選択・検索結果の表示順を変更する

3. 検索ボタンをクリックする
4. 検索結果が表示される

・表示されている「ホテル詳細」をクリックすると楽天のページに遷移し、ホテルの詳細情報を確認することができる
![](https://github.com/ahaha0807/kintone_vue_grandfrontend/blob/master/etc/readme_images/search.png)

== 宿の候補を登録する ==

1. 右上にある「提案者名」に提案者の名前を入力する
2. 上記の「候補を調べる」を実行する
3. 表示されている「候補登録」ボタンをクリックする
4. kintone 側にレコードとして宿の情報・提案者の名前が登録される
![](https://github.com/ahaha0807/kintone_vue_grandfrontend/blob/master/etc/readme_images/regist.png)

== 宿について話し合う ==
1. 登録先の kintone にアクセスし、情報を登録しているアプリにアクセスする
2. 候補のレコードを選択し、コメント部分を開く
3. コメントを書き込む
![](https://github.com/ahaha0807/kintone_vue_grandfrontend/blob/master/etc/readme_images/list.png)
![](https://github.com/ahaha0807/kintone_vue_grandfrontend/blob/master/etc/readme_images/comunication.png)

## 実装したい機能

- ホテル詳細ページの内装化
- kintoneアカウントを持っていなくてもコミュニケーションを取ることが出来るページ
