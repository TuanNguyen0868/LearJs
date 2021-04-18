// var fullName = 'Nguyen Anh Tuan';
// var age = '26';
// var adDress = 'Thanh Hoa';
// Thông báo alert
// alert(fullName);
// alert(age);
// alert(adDress);

//thông báo có ok và cancel
// confirm('may du tuoi chua ma vao xem phim !');

//Thông báo có textbox nhập kí tự
// prompt('alolol');

// setTimeout(function() {
// alert('thong bao')
// }, 4000)
// setInterval(function() {
//     confirm('khong tat duoc dau leeu  leu !! Xem cai cuc cut cho leu leu')
// }, 2000);
// var a = 239;
// var b = 372;
// if(a > b){
//     console.log('Meo meo');
// }    
// else {
// console.log('gau gau');
// }
// var a = 1;
// var b = 2;
// var isSuccess = a > b;
// console.log(isSuccess)
// var myfuntion = function() {
//     alert('hi em yeu');
// };
// myfuntion();


// var myObject = {
//     name: 'Tuan dep trai ',
//     age: 17,
//     adDress: 'Thanh hoa',
//     //yourfuntion(),
// }
// var  yourfuntion = function() {
//     var age = 17
//     if(age > 18){
//     console.log('du tuoi vao tu');
//     }else{
//         console.log('chua du tuoi vao tu');
//     }
// }
// yourfuntion();
// console.log(myObject)

//Lấy index phần tử cuối cùng trùng nhau
// var myString = 'Nguyen anh tuan dep trai vo doi doi doi doi doi';
// console.log(myString.lastIndexOf('tuan'));

//Cắt chuỗi theo chỉ số index
// console.log(myString.slice(11,15));

//Thay thế tất cả các phần tử giống nhau thành một phân tử khác
// console.log(myString.replace(/doi/g,'tuan'));

//Chuyển đổi sang chữ hoa
// console.log(myString.toLocaleUpperCase());

//Chuyển đổi thành chữ thường
// console.log(myString.toLocaleLowerCase());

//Tách mảng thành một object
// var subject = 'toan , ly , hoa';
// console.log(subject.split(', '));

//Lấy kí tự theo chỉ số index
// const meomeoeo = '      Nguyen Anh Tuan';
// console.log(meomeoeo[11])

//Xóa khoảng trăng không cần thiết
// // console.log(meomeoeo.trim())

//Convert từ số sang string
// var number1 = 8;
// console.log(number1.toString())

//Kiểm Tra number1 có phải là số NaN không
// console.log(isNaN(number1))

//Chuyển đổi số thập phân 
// var number2 = 4353.234235;
// console.log(number2.toFixed(2))

//Khai báo Mảng
// var mang = [
//     'toan',
//     'ly',
//     'hoa',
//     'sinh',
//     'van',
//     'su', 
// ]
// console.log(mang)

// //kiểm tra mảng có phải là là mảng hay không khi truyền vao là object
// console.log(Array.isArray({}));

// //Kiểm tra mảng có phải là mảng hay không khi truiyenf vao là mảng
// console.log(Array.isArray(mang));

// // Lấy phân tử theo index
// console.log(mang[2])
// var fullMyName = 'Nguyen dinh truong anh tuan';
// alert(fullMyName)

//hàm
// function ShowDialog(){
//     alert('Hello');
// };
// ShowDialog();

// //Tham số trong hàm
// function writelog(mess){
//     console.log(mess);
// };
// writelog('alo')

// //Nhiều tham số trong hamf
// function writelogg(mes1 ,  mes2){
//     console.log(mes1);
//     console.log(mes2);
// };
// writelogg('Alo', 'chao anh em');

//Vòng lặp for
// function ahihi(){
//     for(var param of arguments){
//         console.log(param)
//     }
// }
// ahihi('anh', 'oi' , 'meo', 'meo');

// //vong lap for chèn thêm ký tự
// function ahoho(){
//     var myString = '';
//     for(var param1 of arguments){
//         myString += `${param1} - `
//     }
//     console.log(myString);
// }
// ahoho('meo', 'meoo', 'meooooo', 'meooooooo')

// //Return trả về giá trị ntn thjif kết quả sẽ là giá trị ntd
// function ahuhu(a, b){
//     return [a,b];
// }
// var result = ahuhu(2,8);
// console.log(result)

//Funtion trong funtion. tinh private
// function funtest() {
//     function funtest2() {
//         console.log('Hello kity')
//     }
//     funtest2();
// }
// funtest();

//3 loai funtion

//declaration funtion
// Declaration có thể goi được trước khi đinh nghĩa funtion
// funtionde();
// function funtionde(){
//     console.log('Day la declaration funtion')
// }
//  //Expression Funtion 
//  var funtionexp = function(){
//      console.log('day là Expression funtion');
//  }
//  funtionexp();

//  setTimeout(function(){

//  });

//  var Object = {
//      myfunction : function(){

//      }
//  };

 // Arow function : Hàm rút gọn
//  hello1 = function() {
//     return "Hello World!";
//   };
//  console.log(hello1());
  
//   // sau khi rút gọn
//   hello2 = () => {
//     return "Hello World!";
//   };
//   console.log(hello2());


//
//Object
//
// var emailKey = 'email';
// var myInfo = {
//     name: 'Nguyen Anh Tuan',
//     age: 26,
//     adDress: 'Thanh Hóa',
//     [emailKey]: 'bububbo@gmail.com',
//     //Phương thức / method
//     getName: function() {
//         return this.name;
//     },
//     //những loại còn lại là thuộc tính / property
// }
// //xoa một cặp key
// delete myInfo.age;
// console.log(myInfo);
// console.log(myInfo.getName());

//
//Object Contructor / Xây dựng đối tượng
//
function User(firstName, lastName, avatar){

    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    //Thêm phương thức / method
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
};
var author = new User('Tuấn','nguyễn', 'avatar');
var author2 = new User('Tuấn1','nguyễn1', 'avatar1');

//Thêm thuộc tính riêng lẻ cho đối tượng
author.title = 'meo meo meom  ';
author2.comment = 'hi hihi hi hih hihi'
//showw
console.log(author);
console.log(author2);

console.log(author.getName());
console.log(author2.getName());