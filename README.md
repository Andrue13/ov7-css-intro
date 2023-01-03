# HTML, CSS, JS, Git intro

## Git

1. Check version: 

```bash
$ git --version
```
2. Проверка была ли инициализации Git, если была удаляем, что бы начать с нуля

```bash
$ ls -la
$ rm -rf .git/
```
3. Git init a new repository

```bash
$ git init
```

4. Index files (выбор файлов для синхронизации с Git)

```bash
$ git status
$ git add . (все файлы)
$ git add index.html style.css README.md (выбор отдельных файлов )
```
5. Make a commit

```bash
$ git status
$ git commit -m "First commit"
```
6. Check commit (Проверка истории проекта в репозитории)

```bash
$ git log
```

7. Add remote rep. (Делаем один раз. Подключаемся к удаленному проекту с помощю ссылки) 

```bash
$ git remote add origin https://github.com/Andrue13/ov7-css-intro.gitё
```

8. Send changes to the central repository

```bash
$ git push origin master
```

9. Clon (Копируем проект  с GitHab)

```bash
$ git clone https://github.com/Andrue13/ov7-css-intro.git
```

10. Pull (Обновляем проект с GitHab. Если работали на рабочом компютере а тепер хотим пороботать например с домашнего - синхронизуем проект.)

```bash
$ git pull
```