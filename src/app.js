//TODO: Open & close Modal
$('.section__button').on('click', function () {
    let checkSubmit = $('.section__lists li');
    for (let i = 0; i < checkSubmit.length; i++) {
        var checkBgc = $(checkSubmit[i]).css("backgroundColor");
        if (checkBgc != 'rgb(56, 62, 70)') {
            $('.modal').css('display', 'block');
            $('.modal__result').text('You selected ' + textReview + ' out of 5');
            break;
        }
        // else {
        //     console.log(checkBgc);
        // }
    }
});

$('.modal__close').on('click', function () {
    $('.modal').css('display', 'none');
});


//TODO: Select li into list(ul)
var itemCurrent
var textReview;

$('.section__lists li').on('click', function () {
    if (itemCurrent == undefined) {
        itemCurrent = $(this);
        itemCurrent.css('backgroundColor', 'grey');
        textReview = $(this).text();
        console.log($(itemCurrent).css('backgroundColor'));
    }
    else {
        itemCurrent.css('backgroundColor', 'rgb(56, 62, 70)');
        itemCurrent = $(this);
        itemCurrent.css('backgroundColor', 'grey');
        textReview = $(this).text();
        console.log($(itemCurrent).css('backgroundColor'));
    }
});

//TODO: Vì khi click item(li) lần đầu nó ko nhận hover nữa nên ta phải tạo event hover bằng jquery cho nó
$(".section__lists li").hover(function () {
    $(this).css("backgroundColor", "rgb(251, 117, 17)");
}, function () {
    let checkBgc = $(this).css("backgroundColor");
    if (checkBgc != 'rgb(128, 128, 128)') {
        $(this).css("backgroundColor", "rgb(56, 62, 70)");
    }
});
