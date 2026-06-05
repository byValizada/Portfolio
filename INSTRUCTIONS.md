# Project Instructions / Təlimat / Инструкция

This document provides instructions on how to use, edit, and deploy the project in Azerbaijani, English, and Russian.

---

## 🇦🇿 AZƏRBAYCANCA: Layihə Təlimatı

### 1. Layihəni İşə Salmaq
- Terminalda (və ya VS Code terminalında) layihənin qovluğuna daxil olun.
- Paketləri yükləmək üçün: `npm install`
- Layihəni test rejimində başlatmaq üçün: `npm run dev`
- Sayt `http://localhost:5173` ünvanında açılacaq.

### 2. Məzmunu (Blog) Necə Dəyişmək Olar?
- Blog yazılarını dəyişmək üçün `src/data/blogData.ts` faylını açın.
- Bu fayldakı `blogPosts` array-inin içinə yeni yazılar əlavə edə, mövcud yazıları silə və ya redaktə edə bilərsiniz. Şəkillər üçün internetdəki (məsələn, Unsplash) hər hansı şəkilin URL-ni istifadə edə bilərsiniz.

### 3. Backend (Firebase) İnteqrasiyası
- Əlaqə və Abunəlik (Newsletter) formaları hal-hazırda **Mock** (Simulyasiya) olaraq çalışır. 
- Əsl bazaya bağlamaq üçün `src/lib/firebase.ts` faylına daxil olub `firebaseConfig` obyektinin içini öz Firebase layihənizin məlumatları ilə əvəz etməlisiniz. Firebase paketini quraşdırmaq üçün terminalda `npm install firebase` yazın.

### 4. Animasiyalar və Üslublar
- Animasiyalar **Framer Motion** istifadə edilərək yazılıb. Onları dəyişmək üçün uyğun səhifədəki `<motion.div>` teqlərinin `initial`, `animate`, və `whileInView` dəyərlərini dəyişə bilərsiniz.
- Dizayn **Tailwind CSS v4** ilə hazırlanıb. Yeni rənglər əlavə etmək istəsəniz, birbaşa `src/index.css` içərisində `#root` və `.dark` daxilindəki CSS dəyişənlərini (variables) redaktə edə bilərsiniz.

### 5. Production (Canlıya Çıxarma)
- Bütün işlər bitdikdən sonra saytı hostinqə (Vercel, Netlify, CPanel) yükləmək üçün kodları *build* etmək lazımdır: `npm run build`.
- Bu əmr nəticəsində yaranan `dist/` qovluğunu hostinqinizə yükləyə bilərsiniz.

---

## 🇬🇧 ENGLISH: Project Instructions

### 1. Running the Project
- Open the terminal in the project directory.
- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- The site will be available at `http://localhost:5173`.

### 2. How to Edit Content (Blog)
- To edit blog posts, open the `src/data/blogData.ts` file.
- You can add, remove, or modify objects inside the `blogPosts` array. For images, you can provide any direct image URL (e.g., from Unsplash).

### 3. Backend (Firebase) Integration
- Contact and Newsletter forms are currently functioning as **Mocks** (Simulations).
- To connect to a real database, open `src/lib/firebase.ts` and replace the `firebaseConfig` placeholder values with your actual Firebase project credentials. To install the real Firebase SDK, run `npm install firebase`.

### 4. Animations and Styling
- Animations are powered by **Framer Motion**. To tweak them, modify the `initial`, `animate`, and `whileInView` props on the `<motion.div>` tags in the respective components.
- The design is built using **Tailwind CSS v4**. If you want to change the core theme colors, you can directly edit the CSS variables inside `:root` and `.dark` in `src/index.css`.

### 5. Production Build
- Once you are ready to deploy the site to a hosting provider (like Vercel, Netlify, or CPanel), you need to build the project: `npm run build`.
- Upload the generated `dist/` folder to your hosting provider.

---

## 🇷🇺 РУССКИЙ: Инструкция к проекту

### 1. Запуск проекта
- Откройте терминал в папке проекта.
- Установите зависимости: `npm install`
- Запустите сервер разработки: `npm run dev`
- Сайт будет доступен по адресу `http://localhost:5173`.

### 2. Как редактировать контент (Блог)
- Чтобы изменить посты в блоге, откройте файл `src/data/blogData.ts`.
- Вы можете добавлять, удалять или изменять объекты внутри массива `blogPosts`. Для изображений можно использовать любой прямой URL-адрес картинки (например, из Unsplash).

### 3. Интеграция с Backend (Firebase)
- Формы обратной связи и подписки на новости в данный момент работают как **Моки** (симуляция).
- Чтобы подключить настоящую базу данных, откройте `src/lib/firebase.ts` и замените значения в `firebaseConfig` на данные вашего проекта Firebase. Для установки самого Firebase SDK выполните: `npm install firebase`.

### 4. Анимации и Стили
- Анимации созданы с использованием **Framer Motion**. Чтобы изменить их, отредактируйте параметры `initial`, `animate` и `whileInView` у тегов `<motion.div>` в нужных компонентах.
- Дизайн построен на **Tailwind CSS v4**. Если вы хотите изменить основные цвета темы, отредактируйте CSS-переменные в `:root` и `.dark` в файле `src/index.css`.

### 5. Подготовка к Production (Развертывание)
- Когда вы будете готовы загрузить сайт на хостинг (Vercel, Netlify, CPanel и т.д.), выполните сборку: `npm run build`.
- Загрузите созданную папку `dist/` на ваш хостинг.
