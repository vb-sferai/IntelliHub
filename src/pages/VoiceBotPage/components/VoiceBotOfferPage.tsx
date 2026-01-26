/**
 * VoiceBotOfferPage - Страница публичной оферты для VoiceBot
 */
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LEGAL, CONTACTS } from '../data';

export const VoiceBotOfferPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
                    <Link
                        to="/products/voice-bot"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Назад</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 py-12">
                <article className="prose prose-gray max-w-none">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Публичная оферта
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        на оказание услуг по расшифровке голосовых сообщений
                    </p>
                    <p className="text-sm text-gray-500 mb-12">
                        Дата публикации: 26 января 2026 г.
                    </p>

                    {/* 1. Общие положения */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            1. Общие положения
                        </h2>
                        <p className="text-gray-700 mb-3">
                            1.1. Настоящий документ является официальным предложением (публичной офертой) {LEGAL.companyName} (далее - «Исполнитель») и содержит все существенные условия договора на оказание услуг по расшифровке голосовых сообщений (далее - «Услуги»).
                        </p>
                        <p className="text-gray-700 mb-3">
                            1.2. В соответствии со статьёй 437 Гражданского кодекса РФ данный документ является публичной офертой, адресованной неопределённому кругу лиц.
                        </p>
                        <p className="text-gray-700 mb-3">
                            1.3. Акцептом (принятием) настоящей оферты является:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-3">
                            <li>оплата Услуг любым доступным способом;</li>
                            <li>начало использования бота после оплаты подписки.</li>
                        </ul>
                        <p className="text-gray-700">
                            1.4. Акцепт оферты означает полное и безоговорочное принятие всех условий настоящего договора.
                        </p>
                    </section>

                    {/* 2. Предмет договора */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            2. Предмет договора
                        </h2>
                        <p className="text-gray-700 mb-3">
                            2.1. Исполнитель обязуется оказать Заказчику услуги по автоматической расшифровке голосовых сообщений и видеокружков в мессенджере Telegram посредством Telegram-бота (далее - «Бот»), а Заказчик обязуется оплатить эти услуги.
                        </p>
                        <p className="text-gray-700 mb-3">
                            2.2. Услуги включают:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-3">
                            <li>расшифровку голосовых сообщений в текст;</li>
                            <li>расшифровку видеокружков в текст;</li>
                            <li>автоматическую расшифровку при подключении Telegram Business;</li>
                            <li>форматирование текста с использованием технологий искусственного интеллекта.</li>
                        </ul>
                        <p className="text-gray-700">
                            2.3. Перечень доступных тарифов, их стоимость и условия размещены на сайте https://ru.sfer.ai/products/voice-bot (далее - «Сайт»).
                        </p>
                    </section>

                    {/* 3. Порядок оказания услуг */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            3. Порядок оказания услуг
                        </h2>
                        <p className="text-gray-700 mb-3">
                            3.1. Для получения Услуг Заказчик должен:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-3">
                            <li>найти Бота в Telegram;</li>
                            <li>выбрать и оплатить подходящий тариф;</li>
                            <li>следовать инструкциям Бота.</li>
                        </ul>
                        <p className="text-gray-700 mb-3">
                            3.2. Доступ к Услугам предоставляется в течение 5 (пяти) минут после подтверждения оплаты.
                        </p>
                        <p className="text-gray-700 mb-3">
                            3.3. Услуги считаются оказанными надлежащим образом в момент отправки расшифрованного текста Заказчику.
                        </p>
                        <p className="text-gray-700">
                            3.4. Исполнитель вправе вносить изменения в функциональность Бота без предварительного уведомления Заказчика, при условии сохранения основного функционала.
                        </p>
                    </section>

                    {/* 4. Стоимость услуг и порядок оплаты */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            4. Стоимость услуг и порядок оплаты
                        </h2>
                        <p className="text-gray-700 mb-3">
                            4.1. Стоимость Услуг определяется в соответствии с выбранным тарифом и указана на Сайте.
                        </p>
                        <p className="text-gray-700 mb-3">
                            4.2. Оплата производится в российских рублях одним из следующих способов:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-3">
                            <li>банковской картой (Visa, MasterCard, МИР);</li>
                            <li>через систему быстрых платежей (СБП);</li>
                            <li>иными способами, доступными на Сайте.</li>
                        </ul>
                        <p className="text-gray-700 mb-3">
                            4.3. Услуги предоставляются на условиях 100% предоплаты.
                        </p>
                        <p className="text-gray-700">
                            4.4. Датой оплаты считается дата поступления денежных средств на расчётный счёт Исполнителя или подтверждение платежа от платёжной системы.
                        </p>
                    </section>

                    {/* 5. Возврат денежных средств */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            5. Возврат денежных средств
                        </h2>
                        <p className="text-gray-700 mb-3">
                            5.1. Заказчик вправе отказаться от Услуг и потребовать возврата денежных средств в течение 14 (четырнадцати) календарных дней с момента оплаты, если Услуги не были использованы.
                        </p>
                        <p className="text-gray-700 mb-3">
                            5.2. Для оформления возврата Заказчик направляет заявление на электронную почту {CONTACTS.email} с указанием:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-3">
                            <li>ФИО;</li>
                            <li>контактного телефона;</li>
                            <li>причины возврата;</li>
                            <li>реквизитов для возврата средств.</li>
                        </ul>
                        <p className="text-gray-700 mb-3">
                            5.3. Возврат осуществляется в течение 10 (десяти) рабочих дней с момента получения заявления тем же способом, которым была произведена оплата.
                        </p>
                        <p className="text-gray-700">
                            5.4. Если Заказчик воспользовался Услугами (произвёл хотя бы одну расшифровку), возврат производится за вычетом стоимости фактически оказанных услуг.
                        </p>
                    </section>

                    {/* 6. Права и обязанности сторон */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            6. Права и обязанности сторон
                        </h2>

                        <h3 className="text-lg font-medium text-gray-900 mb-3">
                            6.1. Исполнитель обязуется:
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>обеспечить доступ к Услугам в соответствии с оплаченным тарифом;</li>
                            <li>обеспечить работоспособность Бота не менее 95% времени в месяц;</li>
                            <li>не хранить голосовые сообщения Заказчика после обработки;</li>
                            <li>уведомлять Заказчика о существенных изменениях в работе Бота.</li>
                        </ul>

                        <h3 className="text-lg font-medium text-gray-900 mb-3">
                            6.2. Исполнитель вправе:
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>приостановить оказание Услуг при нарушении Заказчиком условий настоящей оферты;</li>
                            <li>изменять тарифы с уведомлением за 7 дней (для активных подписок изменения вступают в силу со следующего периода);</li>
                            <li>проводить технические работы с временным ограничением доступа.</li>
                        </ul>

                        <h3 className="text-lg font-medium text-gray-900 mb-3">
                            6.3. Заказчик обязуется:
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>своевременно оплачивать Услуги;</li>
                            <li>не использовать Бота для незаконных целей;</li>
                            <li>не передавать доступ к оплаченной подписке третьим лицам;</li>
                            <li>соблюдать правила использования мессенджера Telegram.</li>
                        </ul>

                        <h3 className="text-lg font-medium text-gray-900 mb-3">
                            6.4. Заказчик вправе:
                        </h3>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>использовать Услуги в рамках оплаченного тарифа;</li>
                            <li>обращаться в службу поддержки по вопросам работы Бота;</li>
                            <li>отказаться от Услуг в порядке, предусмотренном разделом 5.</li>
                        </ul>
                    </section>

                    {/* 7. Ответственность сторон */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            7. Ответственность сторон
                        </h2>
                        <p className="text-gray-700 mb-3">
                            7.1. Исполнитель не несёт ответственности за:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-3">
                            <li>качество интернет-соединения Заказчика;</li>
                            <li>сбои в работе мессенджера Telegram;</li>
                            <li>невозможность использования Услуг по причинам, не зависящим от Исполнителя;</li>
                            <li>ошибки в расшифровке, вызванные низким качеством аудио.</li>
                        </ul>
                        <p className="text-gray-700 mb-3">
                            7.2. Ответственность Исполнителя ограничена суммой, уплаченной Заказчиком за текущий период подписки.
                        </p>
                        <p className="text-gray-700">
                            7.3. Исполнитель гарантирует точность расшифровки не менее 95% при условии качественной аудиозаписи.
                        </p>
                    </section>

                    {/* 8. Конфиденциальность */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            8. Конфиденциальность и обработка данных
                        </h2>
                        <p className="text-gray-700 mb-3">
                            8.1. Исполнитель обрабатывает персональные данные Заказчика в соответствии с Политикой конфиденциальности, размещённой на Сайте.
                        </p>
                        <p className="text-gray-700 mb-3">
                            8.2. Голосовые сообщения обрабатываются в режиме реального времени и не сохраняются на серверах Исполнителя после отправки расшифровки.
                        </p>
                        <p className="text-gray-700">
                            8.3. Исполнитель не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ.
                        </p>
                    </section>

                    {/* 9. Срок действия */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            9. Срок действия и изменение условий
                        </h2>
                        <p className="text-gray-700 mb-3">
                            9.1. Настоящая оферта вступает в силу с момента её публикации на Сайте и действует бессрочно.
                        </p>
                        <p className="text-gray-700 mb-3">
                            9.2. Исполнитель вправе в одностороннем порядке изменять условия оферты с публикацией новой редакции на Сайте.
                        </p>
                        <p className="text-gray-700">
                            9.3. Продолжение использования Услуг после изменения условий означает согласие Заказчика с новой редакцией оферты.
                        </p>
                    </section>

                    {/* 10. Разрешение споров */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            10. Разрешение споров
                        </h2>
                        <p className="text-gray-700 mb-3">
                            10.1. Все споры и разногласия разрешаются путём переговоров.
                        </p>
                        <p className="text-gray-700 mb-3">
                            10.2. При невозможности достижения согласия спор передаётся на рассмотрение в суд по месту нахождения Исполнителя в соответствии с законодательством РФ.
                        </p>
                        <p className="text-gray-700">
                            10.3. Претензионный порядок обязателен. Срок рассмотрения претензии - 10 (десять) рабочих дней.
                        </p>
                    </section>

                    {/* 11. Реквизиты */}
                    <section className="mb-10 p-6 bg-gray-50 rounded-xl">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            11. Реквизиты Исполнителя
                        </h2>
                        <p className="text-gray-700 font-medium mb-4">
                            {LEGAL.companyName}
                        </p>
                        <div className="text-gray-700 space-y-1">
                            <p>ИНН: {LEGAL.inn}</p>
                            <p>ОГРНИП: {LEGAL.ogrnip}</p>
                            <p>Адрес: {LEGAL.address}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-gray-700 font-medium mb-2">Банковские реквизиты:</p>
                            <div className="text-gray-700 space-y-1">
                                <p>Расчётный счёт: {LEGAL.checkingAccount}</p>
                                <p>Банк: {LEGAL.bank}</p>
                                <p>БИК: {LEGAL.bik}</p>
                                <p>Корр. счёт: {LEGAL.corrAccount}</p>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-gray-700 font-medium mb-2">Контакты:</p>
                            <p className="text-gray-700">Email: {CONTACTS.email}</p>
                            <p className="text-gray-700">Telegram: {CONTACTS.telegram}</p>
                        </div>
                    </section>
                </article>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-8">
                <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} SFER.AI. Все права защищены.
                </div>
            </footer>
        </div>
    );
};
