let kotae = Math.floor(Math.random() * 10) + 1;
console.log("答え（デバッグ用）: " + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let ans = false;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name = "1to10"]')
  let yoso = Number(i.value);

  let sp = document.querySelector('span#kaisu');
  sp.textContent = Number(kaisu + 1);

  let spans = document.querySelector('span#answer');
  spans.textContent = yoso;

  let result = document.querySelector('p#result');

  kaisu++;

  if (ans || kaisu > 3) {
    result.textContent = "答えは" + kotae + "でした。すでに問題は終了しています。";
  } else {
    if (kotae === yoso) {
      result.textContent = "正解!";
      ans = true;
    } else if (kotae > yoso) {
      result.textContent = "惜しい! 答えはもう少し上です。";
    } else {
      result.textContent = "惜しい! 答えはもう少し下です。";
    }
  }

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}

let b = document.querySelector('button#kaito')
b.addEventListener('click', hantei)
