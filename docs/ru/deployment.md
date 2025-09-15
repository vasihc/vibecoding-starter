# Развертывание

## Развертывание на Vercel

Самый простой способ развернуть ваше приложение Next.js - использовать [платформу Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) от создателей Next.js.

Ознакомьтесь с [документацией по развертыванию Next.js](https://nextjs.org/docs/deployment) для получения дополнительной информации.

## Развертывание с Firebase

Для развертывания вашего приложения Next.js с Firebase следуйте инструкциям по развертыванию Firebase, специфичным для вашего варианта хостинга:

- Firebase Hosting
- Cloud Functions
- Cloud Run

### Важные замечания

- Убедитесь, что настроили соответствующие переменные окружения для вашей продакшн-среды
- Настройте правила безопасности Firebase для продакшн
- Включите соответствующие методы аутентификации
- Настройте правильные индексы базы данных для производительности

## Переменные окружения для продакшн

Убедитесь, что все переменные конфигурации Firebase правильно установлены на вашей платформе развертывания:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```