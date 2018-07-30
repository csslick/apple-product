// 제품 정보
var product = [
  {
    title: '12.9형 iPad Pro용 Smart Keyboard - 중국어',
    price: '￦200,000',
    rank: '★★★☆☆☆'
  },
  {
    title: '12.9형 iPad Pro용 Smart Keyboard - 일본어',
    price: '￦190,000',
    rank: '★★★★☆'
  },
  {
    title: '12.9형 iPad Pro용 Smart Keyboard - 한국어',
    price: '￦229,000',
    rank: '★★★★★'
  },
  {
    title: '12.9형 iPad Pro용 Smart Keyboard - 미국 영어',
    price: '￦200,000',
    rank: '★★★☆☆'
  }
];

$(function(){
  var i = $('#lang option:selected').index();

  $('#lang').change(function(){
    i = $(':selected', this).index();
    console.log(i);
    $('.info > h2').html(product[i].title);
    $('.info > .price').html(product[i].price);
    $('.info > .rank').html(product[i].rank);
  });

  // 사진 썹네일 버튼 + fade효과
  $('.photo > .items a').on('click', function(){
    var img_url = $(this).attr('href');

    $('.photo > .items a').removeClass('on');
    $(this).addClass('on');
    console.log(img_url);
    $('.large-img').fadeOut(200, function(){
      $(this).attr('src', img_url).fadeIn(200);
    });
    return false;
  });

});
