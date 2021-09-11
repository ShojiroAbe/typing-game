var p = document.getElementById('text');
var textLists = [
  "Hello World",
  "This is my App",
  "How are you",
  "Hello Hello"
];

var checkTexts = [];

createText();

function createText() {
  // Math.floor()が四捨五入の役割をしている
  var rnd = Math.floor(Math.random() * textLists.length);

  p.textContent = "";
  checkTexts = textLists[rnd].split("").map(function(value){
    var span = document.createElement("span");

    //span.textContentで作られたタグ内にvaluが入る
    span.textContent = value;
    p.appendChild(span);

    console.log(value);
    return span;
  });
}

// split()の引数に空文字を入れると一文字ずつ分割してくれる
//valueにsplit()された文字が一文字ずつ入ってくる


// キーボードから何が入力されたかを感知する
document.addEventListener("keydown",keyDown);

// eにイベントが入ってきて
// イベント内で入力された文字がkeyに入ってくる
function keyDown(e) {
  console.log(e.key);
  //ちなみにeだけを受け取ると
  // 入力したものが「a」だと出力されるのは
  // KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
  // が帰ってくる

  // checkTextとe.keyの比較しあっているかをみる
  // e.key === checkTexts[0]のままだとspanタグごと持ってきてしまうため、中のテキストだけを見る必要がある
  if(e.key === checkTexts[0].textContent){
    checkTexts[0].className = "add-blue";

    // shiftメソッドは0番目のインデックスの要素を削除してインデックスの連番の値をシフトし、 削除した値を返します。
    checkTexts.shift();

    if(!checkTexts.length) {
      createText();
    }
  }


};
