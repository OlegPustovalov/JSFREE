//��1
let username='my_name',bonusBalance=1000
console. log(`������������ ${username}`)
console. log(`������ ${bonusBalance}`)
//�� �������
let bonus=0, bal_plus=50, bal_minus=3
let days=7
bonus=Math.floor(days/2)*bal_plus-days*bal_minus+bonusBalance
console. log(`�� ${days} ����� ${bonus} �����`)
//�� ������� ��������
bonusBalance -= 3; // ���� 1 
bonusBalance -= 3; // ���� 2
bonusBalance += 50; 
bonusBalance -= 3; // ���� 3
bonusBalance -= 3; // ���� 4
bonusBalance += 50; 
bonusBalance -= 3; // ���� 5
bonusBalance -= 3; // ���� 6
bonusBalance += 50; 
bonusBalance -= 3; // ���� 7

console.log(`������ ����� 7 ����: ${bonusBalance}`);
//��2 ������ 1
let k = 0
let mas_messenger = ["������ ������ � ����?", "�������, ����� ����������. ����� ������ � ����!", "�����, ������� ��� ��� ����� ����� �����.", "����������� ����� ��� � ����������."] 
for(let i = 0; i < mas_messenger.length; i++) { 
  k = i % 2
  if (k === 0)  {
   console.log(`����: ${mas_messenger[i]}`) 
  } else{
   console.log(`��: ${mas_messenger[i]}`) 
  }
                                              }
//��2 ������ 2
let str_ = "����"
let mas_text = ["������ ������ � ����?", "�������, ����� ����������. ����� ������ � ����!", "�����, ������� ��� ��� ����� ����� �����.", "����������� ����� ��� � ����������."]
for(let i = 0; i < mas_messenger.length; i++) {
  if (mas_messenger[i].includes(str_))  {
   console.log(` !  ${mas_messenger[i]}`) 
  }
}