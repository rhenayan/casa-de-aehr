new Glider(document.querySelector('.glider-eat'), {
    slidesToShow: 1,
    dots: '#dots',
    arrows: {
      prev: '.prev-eat',
      next: '.next-eat'
    }
  });

  new Glider(document.querySelector('.glider-drinks'), {
    slidesToShow: 1,
    dots: '#dots-2',
    arrows: {
      prev: '.prev-drink',
      next: '.next-drink'
    }
  });