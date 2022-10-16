//дз1
let username='my_name',bonusBalance=1000
console. log(`Пользователь ${username}`)
console. log(`Баланс ${bonusBalance}`)
//моё решение
let bonus=0, bal_plus=50, bal_minus=3
let days=7
bonus=Math.floor(days/2)*bal_plus-days*bal_minus+bonusBalance
console. log(`За ${days} стало ${bonus} балов`)
//от Дмитрия Бронских
bonusBalance -= 3; // день 1 
bonusBalance -= 3; // день 2
bonusBalance += 50; 
bonusBalance -= 3; // день 3
bonusBalance -= 3; // день 4
bonusBalance += 50; 
bonusBalance -= 3; // день 5
bonusBalance -= 3; // день 6
bonusBalance += 50; 
bonusBalance -= 3; // день 7

console.log(`Баланс через 7 дней: ${bonusBalance}`);
//ДЗ2 задача 1
let k = 0
let mas_messenger = ["Пойдем гулять в парк?", "Кажется, дождь собирается. Лучше пойдем в кино!", "Давай, сегодня как раз вышел новый фильм.", "Встречаемся через час у кинотеатра."] 
for(let i = 0; i < mas_messenger.length; i++) { 
  k = i % 2
  if (k === 0)  {
   console.log(`Друг: ${mas_messenger[i]}`) 
  } else{
   console.log(`ВЫ: ${mas_messenger[i]}`) 
  }
                                              }
//ДЗ2 задача 2
let str_ = "кино"
let mas_text = ["Пойдем гулять в парк?", "Кажется, дождь собирается. Лучше пойдем в кино!", "Давай, сегодня как раз вышел новый фильм.", "Встречаемся через час у кинотеатра."]
for(let i = 0; i < mas_messenger.length; i++) {
  if (mas_messenger[i].includes(str_))  {
   console.log(` !  ${mas_messenger[i]}`) 
  }
}
