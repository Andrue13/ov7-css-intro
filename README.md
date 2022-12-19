# HTML, CSS, JS, Git intro

## Git

1. Check version: 

```bash
$ git --version
$ ls -la
$ rm -rf .git/
```
2. Git init a new respository

`$ git init`

3. Index files

```bash
$ git status
$ git add . (все файлы)
$ git add index.html style.css README.md
```
4. Make a commit

```bash
$ git status
$ git commit -m "First commit"
```
5. Check commit

`$ git log`

6. Add remote rep. 

`$ git remote add origin https://github.com/Andrue13/ov7-css-intro.git`

7. Send changes to the central repository

`$ git push origin master`

8. Clon (Копируем проект  с GitHab)

`$ git clone https://github.com/Andrue13/ov7-css-intro.git`

9. Pull (Обновляем проект с GitHab)

`$ git pull` 