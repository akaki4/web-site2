'use strict'

{
  // 変数宣言
  // 開閉されるコンテンツ
  const menuContents = document.querySelectorAll(".menu-content");

  // 下矢印マークの要素
  const downArrows = document.querySelectorAll(".fa-angle-down");

  // 上矢印マークの要素
  const upArrows = document.querySelectorAll(".fa-angle-up");


  // アコーディオンを開く処理
  function openContents() {
    let index = 0;
    menuContents[index].classList.remove('close-accordion');
    upArrows[index].classList.remove('close-accordion');
    downArrows[index].classList.add('close-accordion');
    index++
  }

  // アコーディオンを閉じる処理
  function closeContents() {
    let index = 0;
    menuContents[index].classList.add('close-accordion');
    upArrows[index].classList.add('close-accordion');
    downArrows[index].classList.remove('close-accordion');
    index++
  }

  // 下矢印をクリックした時の処理
  downArrows.forEach(downArrow => downArrow.addEventListener('click', openContents));

  // 上矢印をクリックした時の処理
  upArrows.forEach(downArrow => downArrow.addEventListener('click', closeContents));

}
