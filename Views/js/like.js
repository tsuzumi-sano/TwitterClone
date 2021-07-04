
///////////////////////////////////////
// いいね！用のJavaScript
///////////////////////////////////////

// $(function{})•••jqueryの書式。HTMLの解析が終わってから処理を実行する。

$(function () {
    //いいね！がクリックされた時
    $('.js-like').click(function() {
        const this_obj = $(this);
        const like_id = $(this).data('like-id');
        const like_count_obj = $(this).parent().find('.js-like-count');
        let like_count = Number(like_count_obj.html());

        if (like_id) {
            //いいね！取り消し
            //いいね！カウントを減らす
            like_count --;
            like_count_obj.html(like_count);
            this_obj.data('like-id', null);
            
            //いいね！ボタンをグレーにする
            $(this).find('img').attr('src', '../Views/img/icon-heart.svg');
        } else {
            //いいね！付与
            //いいね！カウントを増やす
            like_count++;
            like_count_obj.html(like_count);
            this_obj.data('like-id', true);

            //いいね！ボタンを青色にする
            $(this).find('img').attr('src', '../Views/img/icon-heart-twitterblue.svg');
        }
    })
})
