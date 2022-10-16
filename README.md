# JSFREE интенсив
Задача 1
Вы с другом обменивается сообщениями в чате. Первое сообщение отправляет Друг, второе — Вы и так далее. Выведите беседу в хронологическом порядке.

Пример переписки:

Вы: Привет!
Друг: Здорово, коль не шутишь!

Шаги по решению задачи:
Инициализируйте массив сообщений.
Заполните его следующими данными:
"Пойдем гулять в парк?",
"Кажется, дождь собирается. Лучше пойдем в кино!",
"Давай, сегодня как раз вышел новый фильм.",
"Встречаемся через час у кинотеатра."
Напишите цикл для вывода сообщений.
В зависимости от номера сообщения нужно подставлять в начало сообщения либо “Друг”, либо “Вы”.
Задача 2
Нужно добавить функцию поиска по тексту сообщений в нашем мессенджере.

Например, пользователь ищет слово “кино”, и ему отображаются все сообщения с таким текстом.

Шаги по решению задачи:
Инициализируйте переменную, в которой будет храниться искомый текст. Например, слово “кино”.
Для поиска воспользуйтесь методом includes для строки.
Пример использования метода для поиска слова “зелёный” в строке “чёрный чай”:

"Чёрный чай".includes("зелёный"); // вернёт false
Метод возвращает true, если слово есть в строке, и false, если нет.

Напечатайте списком все сообщения, в которых есть искомая строка.
