import { useState } from "react";
import Icon from "@/components/ui/icon";

const BEAR_IMG = "https://cdn.poehali.dev/projects/8078f8df-4d93-472f-8f98-67ee08398191/files/7b0da643-98a2-46e9-86ee-f4fffdc14d1f.jpg";
const GAMES_IMG = "https://cdn.poehali.dev/projects/8078f8df-4d93-472f-8f98-67ee08398191/files/047086ba-4612-4b4d-b172-4aa42586f529.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Игры", href: "#games" },
  { label: "Бонусы", href: "#bonuses" },
  { label: "Преимущества", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const GAMES = [
  { name: "TAPINATA", emoji: "🎯", desc: "Разбейте пиньяту — выиграйте приз. Динамично, ярко, прибыльно." },
  { name: "AVIATOR", emoji: "✈️", desc: "Следите за самолётом и фиксируйте выигрыш вовремя." },
  { name: "STAIRS", emoji: "🪜", desc: "Поднимайтесь по денежной лестнице — каждый шаг увеличивает банк." },
  { name: "BOOSTER", emoji: "🚀", desc: "Раскачивайте множители до максимума." },
  { name: "MINES", emoji: "💎", desc: "Открывайте ячейки, собирайте камни, избегайте мин." },
  { name: "OLYMPUS", emoji: "⚡", desc: "Войдите в чертоги Олимпа — боги подготовили щедрые награды." },
];

const FEATURES = [
  { icon: "Zap", title: "Бонус 500%", desc: "Первый депозит вырастает в 5 раз — отличный старт для игры" },
  { icon: "Timer", title: "Выплаты за минуту", desc: "Деньги приходят моментально без лишней бюрократии" },
  { icon: "Gamepad2", title: "100+ развлечений", desc: "Слоты, live казино, эксклюзивные автоматы с джекпотами" },
  { icon: "Shield", title: "Полная защита", desc: "Шифрование и лицензированная платформа — данные в безопасности" },
  { icon: "Crown", title: "VIP-уровень", desc: "Персональный менеджер, кешбэк 20%, закрытые предложения" },
  { icon: "Smartphone", title: "Игра везде", desc: "Telegram-бот работает на смартфоне, планшете и компьютере" },
];

const FAQS = [
  { q: "Как начать играть в Lucky Bear?", a: "Откройте Telegram-бот Lucky Bear, нажмите Start и зарегистрируйтесь за пару минут. Войти можно через Telegram ID, TonConnect, email или номер телефона." },
  { q: "Как получить бонус 500%?", a: "Бонус начисляется автоматически на первый депозит. Пополните счёт — и ваш баланс вырастет в 5 раз. Плюс 200 фриспинов в подарок." },
  { q: "Сколько ждать вывода средств?", a: "Выплаты обрабатываются за минуту. Современная платёжная система позволяет выводить деньги практически моментально." },
  { q: "Нужна ли верификация?", a: "Для полного доступа к платформе потребуется стандартная KYC-проверка: документ, удостоверяющий личность. Проверка занимает до 48 часов." },
  { q: "Что такое VIP-программа?", a: "VIP-уровень открывается для активных игроков. Вы получаете персонального менеджера, кешбэк до 20% и доступ к закрытым акциям." },
];

function BonusCalculator() {
  const [deposit, setDeposit] = useState(1000);

  const bonusPercent = 500;
  const freeSpins = 200;
  const totalBalance = deposit + (deposit * bonusPercent) / 100;
  const bonusAmount = (deposit * bonusPercent) / 100;

  return (
    <div className="card-casino rounded-2xl p-8 max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl text-gold mb-2">Калькулятор бонусов</h3>
        <p className="text-muted-foreground text-sm">Рассчитайте размер приветственного пакета</p>
      </div>

      <div className="mb-6">
        <label className="block font-body text-sm text-muted-foreground mb-3">
          Сумма первого депозита: <span className="text-gold font-semibold">{deposit.toLocaleString()} ₽</span>
        </label>
        <input
          type="range"
          min="500"
          max="50000"
          step="500"
          value={deposit}
          onChange={(e) => setDeposit(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, hsl(43,95%,52%) 0%, hsl(43,95%,52%) ${((deposit - 500) / (50000 - 500)) * 100}%, hsl(220,20%,18%) ${((deposit - 500) / (50000 - 500)) * 100}%, hsl(220,20%,18%) 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>500 ₽</span>
          <span>50 000 ₽</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-background/50 rounded-xl p-4 text-center border border-border">
          <div className="text-xs text-muted-foreground mb-1">Ваш депозит</div>
          <div className="font-display text-xl text-foreground">{deposit.toLocaleString()} ₽</div>
        </div>
        <div className="bg-background/50 rounded-xl p-4 text-center border border-border">
          <div className="text-xs text-muted-foreground mb-1">Бонус +500%</div>
          <div className="font-display text-xl text-gold">+{bonusAmount.toLocaleString()} ₽</div>
        </div>
      </div>

      <div className="rounded-xl p-5 text-center mb-6 border border-gold/30 glow-gold"
        style={{ background: 'linear-gradient(135deg, rgba(215,160,30,0.1) 0%, rgba(215,160,30,0.05) 100%)' }}>
        <div className="text-sm text-muted-foreground mb-1">Итого на счёте</div>
        <div className="font-display text-4xl text-gold shimmer">{totalBalance.toLocaleString()} ₽</div>
        <div className="text-sm text-fire mt-2">+ {freeSpins} фриспинов в подарок 🎰</div>
      </div>

      <a href="https://t.me/luckybearbot" target="_blank" rel="noopener noreferrer">
        <button className="btn-gold w-full py-4 rounded-xl text-lg pulse-ring">
          Забрать бонус в Telegram
        </button>
      </a>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="card-casino rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5 gap-4">
        <span className="font-body font-semibold text-foreground">{q}</span>
        <span className={`text-gold transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}>
          <Icon name="Plus" size={20} />
        </span>
      </div>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50"
        style={{ background: 'rgba(10,13,20,0.85)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐻</span>
            <span className="font-display text-xl text-gold tracking-wider">LUCKY BEAR</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-body text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href="https://t.me/luckybearbot" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <button className="btn-gold px-5 py-2 rounded-lg text-sm">
              Играть
            </button>
          </a>
          <button
            className="md:hidden text-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-body text-sm text-muted-foreground hover:text-gold transition-colors text-left py-1"
              >
                {l.label}
              </button>
            ))}
            <a href="https://t.me/luckybearbot" target="_blank" rel="noopener noreferrer">
              <button className="btn-gold w-full py-2 rounded-lg text-sm mt-2">
                Играть в Telegram
              </button>
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="hero-gradient stars-bg min-h-screen flex items-center pt-16 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, hsl(43,95%,52%) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, hsl(22,100%,55%) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Telegram-бот казино
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">LUCKY</span>
              <br />
              <span className="shimmer">BEAR</span>
              <br />
              <span className="text-foreground text-3xl sm:text-4xl lg:text-5xl">CASINO</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-4 max-w-md">
              Онлайн-казино прямо в Telegram. Игровые автоматы, слоты и бонусы в одном месте.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-fire font-display text-3xl font-bold">+500%</span>
              <span className="text-muted-foreground">к первому депозиту</span>
              <span className="text-muted-foreground">+</span>
              <span className="text-gold font-display text-2xl font-bold">200</span>
              <span className="text-muted-foreground">фриспинов</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://t.me/luckybearbot" target="_blank" rel="noopener noreferrer">
                <button className="btn-gold px-8 py-4 rounded-xl text-lg pulse-ring w-full sm:w-auto">
                  🎰 Играть в Telegram
                </button>
              </a>
              <button
                onClick={() => scrollTo('#bonuses')}
                className="btn-fire px-8 py-4 rounded-xl text-lg w-full sm:w-auto"
              >
                Рассчитать бонус
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="floating relative">
              <div className="absolute inset-0 rounded-3xl glow-gold opacity-60 blur-xl" />
              <img
                src={BEAR_IMG}
                alt="Lucky Bear Casino"
                className="relative rounded-3xl w-full max-w-md object-cover shadow-2xl"
                style={{ border: '2px solid rgba(215,160,30,0.3)' }}
              />
              <div className="absolute -bottom-4 -left-4 bg-background border border-gold/30 rounded-2xl px-4 py-3 glow-gold">
                <div className="font-display text-2xl text-gold">100+</div>
                <div className="text-xs text-muted-foreground">игр</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-background border border-fire/30 rounded-2xl px-4 py-3 glow-fire">
                <div className="font-display text-xl text-fire">24/7</div>
                <div className="text-xs text-muted-foreground">онлайн</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-y border-border/50 py-6"
        style={{ background: 'linear-gradient(90deg, rgba(215,160,30,0.05) 0%, rgba(230,100,20,0.05) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "500%", label: "Бонус на старт" },
            { val: "200", label: "Фриспинов" },
            { val: "1 мин", label: "Вывод средств" },
            { val: "100+", label: "Игр в каталоге" },
          ].map(s => (
            <div key={s.val}>
              <div className="font-display text-3xl text-gold">{s.val}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GAMES */}
      <section id="games" className="section-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-fire text-sm font-body uppercase tracking-widest mb-3">Каталог игр</div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
              ВЫБЕРИ <span className="text-gold">ИГРУ</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Более 100 игр на любой вкус — от классических слотов до эксклюзивных аттракционов
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {GAMES.map((game) => (
              <div key={game.name} className="card-casino rounded-2xl p-6 group">
                <div className="text-4xl mb-4">{game.emoji}</div>
                <h3 className="font-display text-xl text-gold mb-2 group-hover:text-gold-light transition-colors">
                  {game.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{game.desc}</p>
                <a href="https://t.me/luckybearbot" target="_blank" rel="noopener noreferrer">
                  <button className="text-gold text-sm font-body font-semibold hover:text-fire transition-colors flex items-center gap-1">
                    Играть <Icon name="ArrowRight" size={14} />
                  </button>
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden relative">
            <img
              src={GAMES_IMG}
              alt="Игры казино Lucky Bear"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(to right, rgba(10,13,20,0.8) 0%, rgba(10,13,20,0.4) 100%)' }}>
              <div className="text-center">
                <h3 className="font-display text-3xl text-gold mb-4">ЕЩЁ 100+ ИГР ЖДУТ</h3>
                <a href="https://t.me/luckybearbot" target="_blank" rel="noopener noreferrer">
                  <button className="btn-gold px-8 py-3 rounded-xl">
                    Смотреть все игры
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section id="bonuses" className="py-24 relative"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(215,160,30,0.08) 0%, transparent 70%), hsl(220,20%,6%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-fire text-sm font-body uppercase tracking-widest mb-3">Приветственный пакет</div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
              РАССЧИТАЙ <span className="text-gold">БОНУС</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Узнай, сколько получишь на счёт при первом депозите
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <BonusCalculator />
            </div>
            <div className="space-y-6">
              {[
                { emoji: "🎁", title: "Первый депозит +500%", desc: "Пополни счёт и получи в 5 раз больше — максимальный бонус на рынке" },
                { emoji: "🎰", title: "200 фриспинов", desc: "Бесплатные вращения на популярных слотах — начни выигрывать без риска" },
                { emoji: "💰", title: "Еженедельный кешбэк", desc: "Возврат до 20% от проигранных средств для VIP-игроков" },
                { emoji: "🏆", title: "Турниры и акции", desc: "Регулярные турниры с призовым фондом и эксклюзивные акции для участников" },
              ].map(b => (
                <div key={b.title} className="flex gap-4 items-start card-casino rounded-xl p-5">
                  <span className="text-3xl flex-shrink-0">{b.emoji}</span>
                  <div>
                    <h4 className="font-display text-lg text-gold mb-1">{b.title}</h4>
                    <p className="text-muted-foreground text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-fire text-sm font-body uppercase tracking-widest mb-3">Почему Lucky Bear</div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
              НАШИ <span className="text-gold">ПРЕИМУЩЕСТВА</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="card-casino rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 text-gold">
                  <Icon name={f.icon} fallback="Star" size={22} />
                </div>
                <h3 className="font-display text-xl text-gold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="registration" className="py-24"
        style={{ background: 'linear-gradient(135deg, rgba(215,160,30,0.08) 0%, rgba(230,100,20,0.06) 50%, rgba(215,160,30,0.08) 100%), hsl(220,20%,6%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-fire text-sm font-body uppercase tracking-widest mb-3">Начни прямо сейчас</div>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6">
            РЕГИСТРАЦИЯ ЗА <span className="text-gold">2 МИНУТЫ</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Войди через Telegram — никаких сложных форм. Просто нажми кнопку и начни выигрывать.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { step: "1", title: "Открой бот", desc: "Нажми кнопку ниже и открой Lucky Bear в Telegram" },
              { step: "2", title: "Войди", desc: "Авторизуйся через Telegram ID, email или номер телефона" },
              { step: "3", title: "Получи бонус", desc: "Сделай первый депозит и получи +500% на счёт" },
            ].map(s => (
              <div key={s.step} className="card-casino rounded-2xl p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold text-background font-display font-bold text-sm flex items-center justify-center">
                  {s.step}
                </div>
                <h4 className="font-display text-lg text-gold mt-2 mb-2">{s.title}</h4>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <a href="https://t.me/luckybearbot" target="_blank" rel="noopener noreferrer">
            <button className="btn-gold px-12 py-5 rounded-2xl text-xl pulse-ring">
              🐻 Открыть Lucky Bear Casino
            </button>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-border/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="text-fire text-sm font-body uppercase tracking-widest mb-3">Вопросы и ответы</div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
              ЧАСТЫЕ <span className="text-gold">ВОПРОСЫ</span>
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 border-t border-border/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-fire text-sm font-body uppercase tracking-widest mb-3">Связь с нами</div>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6">
            <span className="text-gold">КОНТАКТЫ</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Есть вопросы? Мы на связи 24/7 — напишите нам в Telegram или по почте
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "MessageCircle", label: "Telegram", val: "@luckybear_support", link: "https://t.me/luckybear_support" },
              { icon: "Mail", label: "Email", val: "support@luckybear.casino", link: "mailto:support@luckybear.casino" },
              { icon: "Send", label: "Telegram-бот", val: "@luckybearbot", link: "https://t.me/luckybearbot" },
            ].map(c => (
              <a key={c.label} href={c.link} target="_blank" rel="noopener noreferrer">
                <div className="card-casino rounded-2xl p-6 hover:border-gold/40 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-3 mx-auto text-gold">
                    <Icon name={c.icon} fallback="Star" size={20} />
                  </div>
                  <div className="font-display text-gold mb-1">{c.label}</div>
                  <div className="text-muted-foreground text-sm">{c.val}</div>
                </div>
              </a>
            ))}
          </div>

          <a href="https://t.me/luckybearbot" target="_blank" rel="noopener noreferrer">
            <button className="btn-gold px-10 py-4 rounded-xl text-lg">
              Перейти в казино
            </button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/30 py-10"
        style={{ background: 'hsl(220,20%,4%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐻</span>
              <span className="font-display text-xl text-gold tracking-wider">LUCKY BEAR</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map(l => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="text-xs text-muted-foreground text-center">
              18+ | Играйте ответственно
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground">
            © 2024 Lucky Bear Casino. Все права защищены. Азартные игры могут вызывать зависимость.
          </div>
        </div>
      </footer>
    </div>
  );
}