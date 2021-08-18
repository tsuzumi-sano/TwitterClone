<?php
//////////////////////////////////
///サーチコントローラー
//////////////////////////////////

//設定を読み込み
include_once '../config.php';
//関数を読み込み
include_once '../util.php';

//ツイートデータ操作モデルを読み込む
include_once '../Models/tweets.php';

//ログインチェック
$user = getUserSession();
if (!$user) {
    //ログインしていない場合、ログイン画面に遷移
    header('Location:' . HOME_URL . 'Controllers/sign-in.php');
    exit;
}

//検索キーワードを取得
$keyword = null;
if(isset($_GET['keyword'])){
    $keyword = $_GET['keyword'];
}

//表示用の変数
$view_user = $user;
$view_keyword = $keyword;

//ツイート一覧
$view_tweets = findTweets($user, $keyword);

//画面表示
include_once '../Views/search.php';