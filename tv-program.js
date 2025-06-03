// 課題3-2 のプログラムはこの関数の中に記述すること
// function print(data) {
//   for (let i = 0; i < data.length; i++) {
//     console.log("番組開始時刻 : " + data.list.g1[i].start_time);
//     console.log("番組終了時刻 : " + data.list.g1[i].end_time);
//     console.log("チャンネル : " + data.list.g1[i].service.name);
//     console.log("番組名 : " + data.list.g1[i].title);
//     console.log("番組サブタイトル : " + data.list.g1[i].subtitle);
//     console.log("番組説明文 : " + data.list.g1[i].content);
//     console.log("出演者 : " + data.list.g1[i].act);
//   }
// }

// function consoleLog() {
//   let start = document.querySelector("input#start");
//   let st = start.value;
//   let end = document.querySelector("input#end");
//   let ed = end.value;
//   console.log("放送期間 : " + st + "〜" + ed);

//   console.log("選択されたチャンネル : ");
//   let cbs = document.querySelectorAll('input[name="channel"]');
//   for (let cb of cbs) {
//     if (cb.checked) {
//       console.log(cb.value);
//     }
//   }

//   let keyword = document.querySelector("input#kw");
//   let kw = keyword.value;
//   console.log("検索キーワード : " + kw);
// }

// 課題5-1 の関数 printDom() はここに記述すること
// 関数formatTime()はstart_timeとend_timeをDate関数を使って、yy月mm月dd日 h時m分~h時m分の形に加工する。
function formatTime(start, end) {
  let startDate = new Date(start);
  let endDate = new Date(end);

  let startDateString =
    startDate.getFullYear() +
    "年" +
    (startDate.getMonth() + 1) +
    "月" +
    startDate.getDate() +
    "日";

  let startHours =
    startDate.getHours() < 10
      ? "0" + startDate.getHours()
      : startDate.getHours();
  let startMinutes =
    startDate.getMinutes() < 10
      ? "0" + startDate.getMinutes()
      : startDate.getMinutes();
  let endHours =
    endDate.getHours() < 10 ? "0" + endDate.getHours() : endDate.getHours();
  let endMinutes =
    endDate.getMinutes() < 10
      ? "0" + endDate.getMinutes()
      : endDate.getMinutes();

  let startTime = startHours + ":" + startMinutes;
  let endTime = endHours + ":" + endMinutes;

  return startDateString + "\n" + startTime + "~" + endTime;
}

function printDomG(data) {
  let div = document.createElement("div");
  div.setAttribute("id", "result"); //div#resultの作成

  let body = document.querySelector("body");
  body.insertAdjacentElement("beforeend", div); //div要素をbodyの中の最後に配置

  let table = document.createElement("table");
  div.insertAdjacentElement("beforeend", table); //table要素をdiv＃resultに追加

  if (data.list != null) {
    let tr = document.createElement("tr");
    table.insertAdjacentElement("beforeend", tr); //tr要素をtable要素に追加

    let th = document.createElement("th");
    th.textContent = "日付・時間";
    tr.insertAdjacentElement("beforeend", th); //th要素をtr要素に追加

    th = document.createElement("th");
    th.textContent = "チャンネル";
    tr.insertAdjacentElement("beforeend", th);

    th = document.createElement("th");
    th.textContent = "番組名";
    tr.insertAdjacentElement("beforeend", th);

    th = document.createElement("th");
    th.textContent = "内容";
    tr.insertAdjacentElement("beforeend", th);

    for (let i = 0; i < data.list.g1.length; i++) {
      if (i % 2 == 0) {
        tr = document.createElement("tr");
        tr.setAttribute("id", "even");
        table.insertAdjacentElement("beforeend", tr);
      } else {
        tr = document.createElement("tr");
        tr.setAttribute("id", "odd");
        table.insertAdjacentElement("beforeend", tr);
      }

      let td = document.createElement("td");
      td.textContent = formatTime(
        data.list.g1[i].start_time,
        data.list.g1[i].end_time
      );
      tr.insertAdjacentElement("beforeend", td);

      td = document.createElement("td");
      td.textContent = data.list.g1[i].service.name;
      tr.insertAdjacentElement("beforeend", td);

      td = document.createElement("td");
      td.textContent = data.list.g1[i].title;
      tr.insertAdjacentElement("beforeend", td);

      td = document.createElement("td");
      if (data.list.g1[i].content != "") {
        td.textContent = data.list.g1[i].content;
        tr.insertAdjacentElement("beforeend", td);
      } else {
        td.textContent = "記載なし";
        tr.insertAdjacentElement("beforeend", td);
      }
    }
  } else {
    p = document.createElement("p");
    p.textContent = "⚠︎該当する番組はありません";
    div.insertAdjacentElement("beforeend", p);
  }
}

function printDomE(data) {
  let div = document.createElement("div");
  div.setAttribute("id", "result"); //div#resultの作成

  let body = document.querySelector("body");
  body.insertAdjacentElement("beforeend", div); //div要素をbodyの中の最後に配置

  let table = document.createElement("table");
  div.insertAdjacentElement("beforeend", table); //table要素をdiv＃resultに追加

  if (data.list != null) {
    let tr = document.createElement("tr");
    table.insertAdjacentElement("beforeend", tr); //tr要素をtable要素に追加

    let th = document.createElement("th");
    th.textContent = "日付・時間";
    tr.insertAdjacentElement("beforeend", th); //th要素をtr要素に追加

    th = document.createElement("th");
    th.textContent = "チャンネル";
    tr.insertAdjacentElement("beforeend", th);

    th = document.createElement("th");
    th.textContent = "番組名";
    tr.insertAdjacentElement("beforeend", th);

    th = document.createElement("th");
    th.textContent = "内容";
    tr.insertAdjacentElement("beforeend", th);

    for (let i = 0; i < data.list.e1.length; i++) {
      if (i % 2 == 0) {
        tr = document.createElement("tr");
        tr.setAttribute("id", "even");
        table.insertAdjacentElement("beforeend", tr);
      } else {
        tr = document.createElement("tr");
        tr.setAttribute("id", "odd");
        table.insertAdjacentElement("beforeend", tr);
      }

      let td = document.createElement("td");
      td.textContent = formatTime(
        data.list.e1[i].start_time,
        data.list.e1[i].end_time
      );
      tr.insertAdjacentElement("beforeend", td);

      td = document.createElement("td");
      td.textContent = data.list.e1[i].service.name;
      tr.insertAdjacentElement("beforeend", td);

      td = document.createElement("td");
      td.textContent = data.list.e1[i].title;
      tr.insertAdjacentElement("beforeend", td);

      td = document.createElement("td");
      if (data.list.e1[i].content != "") {
        td.textContent = data.list.e1[i].content;
        tr.insertAdjacentElement("beforeend", td);
      } else {
        td.textContent = "記載なし";
        tr.insertAdjacentElement("beforeend", td);
      }
    }
  } else {
    p = document.createElement("p");
    p.textContent = "⚠︎該当する番組はありません";
    div.insertAdjacentElement("beforeend", p);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let searchButton = document.querySelector("button#search");
searchButton.addEventListener("click", sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
let service;

function sendRequest() {
  let select = document.querySelector("select#genre");
  let optionIndex = select.selectedIndex;
  let optionAll = select.querySelectorAll("option");
  let result = optionAll.item(optionIndex);
  let genre = result.getAttribute("value");

  let radioSelect = document.querySelectorAll('input[name = "channel"]');
  for (let tmp of radioSelect) {
    if (tmp.checked) {
      service = tmp.value;
    }
  }

  let url =
    "https://www.nishita-lab.org/web-contents/jsons/nhk/" +
    service +
    "-" +
    genre +
    "-j.json";
  let div = document.querySelector("div#result");
  if (div != null) {
    div.remove();
  }

  axios.get(url).then(showResult).catch(showError).then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data === "String") {
    data = JSON.parse(data);
  }

  if (service == "g1") {
    printDomG(data);
  } else {
    printDomE(data);
  }
  console.log(data);
  console.log(service);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log("Ajax 通信が終わりました");
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
// let data = {
//   list: {
//     g1: [
//       {
//         id: "2022030428673",
//         event_id: "28673",
//         start_time: "2022-03-04T04:35:00+09:00",
//         end_time: "2022-03-04T04:40:00+09:00",
//         area: {
//           id: "130",
//           name: "東京",
//         },
//         service: {
//           id: "g1",
//           name: "ＮＨＫ総合１",
//           logo_s: {
//             url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
//             width: "100",
//             height: "50",
//           },
//           logo_m: {
//             url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
//             width: "200",
//             height: "100",
//           },
//           logo_l: {
//             url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
//             width: "200",
//             height: "200",
//           },
//         },
//         title: "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
//         subtitle:
//           "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
//         content:
//           "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
//         act: "",
//         genres: ["0409", "0700", "0504"],
//       },
//       {
//         id: "2022030427069",
//         event_id: "27069",
//         start_time: "2022-03-04T23:05:00+09:00",
//         end_time: "2022-03-04T23:10:00+09:00",
//         area: {
//           id: "130",
//           name: "東京",
//         },
//         service: {
//           id: "g1",
//           name: "ＮＨＫ総合１",
//           logo_s: {
//             url: "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
//             width: "100",
//             height: "50",
//           },
//           logo_m: {
//             url: "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
//             width: "200",
//             height: "100",
//           },
//           logo_l: {
//             url: "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
//             width: "200",
//             height: "200",
//           },
//         },
//         title:
//           "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
//         subtitle:
//           "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
//         content:
//           "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
//         act: "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
//         genres: ["0700"],
//       },
//     ],
//   },
// };
