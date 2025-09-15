# Настройка Firebase

## Начальная конфигурация

Посетите [Консоль Firebase](https://console.firebase.google.com/)

1. Войдите с вашей учетной записью Google.
2. Нажмите кнопку `Go to console`.
3. Нажмите карточку `Add Project`.
4. Дайте вашему проекту имя.
5. Нажмите кнопку `Continue`.
6. Отключите `Google Analytics for this project` (если вы не хотите его использовать).
7. Нажмите кнопку `Create project`.

## Настройка веб-приложения

1. Нажмите на иконку веб-приложения для создания вашего веб-приложения. Появится всплывающее окно `Web`.
2. Зарегистрируйте приложение, дав ему имя, и нажмите кнопку `Register app`.
3. В директории с package.json введите в командной строке `npm i firebase`.
4. Скопируйте файл конфигурации. Создайте новый файл в `src` с именем `firebase.js`.

## Переменные окружения

1. В корне проекта создайте файл с именем `.env`.
2. Убедитесь, что вы добавили `.env.local` в ваш `.gitignore`, чтобы не раскрывать ваши переменные в git-репозитории.
3. Следуйте [инструкциям здесь](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#loading-environment-variables), чтобы добавить ваши переменные из firebase.js в этот файл.

Пример `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Включение аутентификации

1. Нажмите кнопку `Continue to console`
2. На главной странице вашего проекта выберите продукт для добавления в ваше приложение. Сначала нажмите на `Authentication`.
3. В разделе `Get started with Firebase Auth by adding your first sign-in method` выберите `Email/Password`.

Теперь вы должны быть готовы к использованию Firebase.

## Реализация аутентификации

В директории `src/firebase` находится директория `auth`, содержащая логику для `signin` и `signup`.