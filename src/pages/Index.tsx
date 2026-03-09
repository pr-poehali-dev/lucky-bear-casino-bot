import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_ICON = "https://cdn.poehali.dev/files/05dc96e7-6f42-4b93-a683-f77b6a59bb4c.png";
const LOGO_FULL = "https://cdn.poehali.dev/files/c66bf42c-fe14-44ed-8662-211f90c87bc8.png";
const GAMES_IMG = "https://cdn.poehali.dev/projects/8078f8df-4d93-472f-8f98-67ee08398191/files/047086ba-4612-4b4d-b172-4aa42586f529.jpg";

const CTA = "https://lbgame777.xyz/87VflB";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Игры", href: "#games" },
  { label: "Бонусы", href: "#bonuses" },
  { label: "Преимущества", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const GAMES = [
  { name: "TAPINATA", emoji: "🎯", desc: "Разбейте пиньяту одним касанием — каждое попадание открывает новые награды." },
  { name: "AVIATOR", emoji: "✈️", desc: "Следите за самолётом и фиксируйте выигрыш вовремя — чем дольше летит, тем выше множитель." },
  { name: "STAIRS", emoji: "🪜", desc: "Поднимайтесь по денежной лестнице, выбирая удачный маршрут к максимальному призу." },
  { name: "BOOSTER", emoji: "🚀", desc: "Раскачивайте множители и удерживайте кнопку — джекпот становится всё ближе." },
  { name: "MINES", emoji: "💎", desc: "Открывайте ячейки, собирайте драгоценные камни и не попадайте в ловушки." },
  { name: "OLYMPUS", emoji: "⚡", desc: "Войдите в чертоги Олимпа — Зевс и боги подготовили щедрые награды." },
];

const FEATURES = [
  { icon: "Zap", title: "Бонус 500%", desc: "Первый депозит вырастает в 5 раз — максимальный стартовый пакет на рынке" },
  { icon: "Timer", title: "Выплаты за минуту", desc: "Деньги приходят моментально без лишней бюрократии" },
  { icon: "Gamepad2", title: "100+ развлечений", desc: "Слоты, live казино, эксклюзивные автоматы с джекпотами" },
  { icon: "Shield", title: "Полная защита", desc: "Шифрование и лицензированная платформа — данные в безопасности" },
  { icon: "Crown", title: "VIP-уровень", desc: "Персональный менеджер, кешбэк 20%, закрытые предложения" },
  { icon: "Smartphone", title: "Игра везде", desc: "Telegram-бот работает на смартфоне, планшете и компьютере" },
];

const FAQS = [
  { q: "Как начать играть в Lucky Bear?", a: "Перейдите по ссылке на сайт Lucky Bear, нажмите «Регистрация» и создайте аккаунт за пару минут. Войти можно через Telegram ID, TonConnect, email или номер телефона." },
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
    <div className="card-casino rounded-2xl p-8">
      <div className="text-center mb-8">
        <div className="line-blue w-12 mx-auto mb-4" />
        <h3 className="font-display text-2xl text-blue mb-2">Калькулятор бонусов</h3>
        <p className="text-muted-foreground text-sm">Рассчитайте размер приветственного пакета</p>
      </div>

      <div className="mb-6">
        <label className="block font-body text-sm text-muted-foreground mb-3">
          Сумма первого депозита:{" "}
          <span className="text-blue font-semibold">{deposit.toLocaleString()} ₽</span>
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
            background: `linear-gradient(to right, hsl(214,100%,55%) 0%, hsl(214,100%,55%) ${((deposit - 500) / (50000 - 500)) * 100}%, hsl(222,28%,18%) ${((deposit - 500) / (50000 - 500)) * 100}%, hsl(222,28%,18%) 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>500 ₽</span>
          <span>50 000 ₽</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-background/60 rounded-xl p-4 text-center border border-border">
          <div className="text-xs text-muted-foreground mb-1">Ваш депозит</div>
          <div className="font-display text-xl text-foreground">{deposit.toLocaleString()} ₽</div>
        </div>
        <div className="bg-background/60 rounded-xl p-4 text-center border border-border">
          <div className="text-xs text-muted-foreground mb-1">Бонус +500%</div>
          <div className="font-display text-xl text-blue">+{bonusAmount.toLocaleString()} ₽</div>
        </div>
      </div>

      <div
        className="rounded-xl p-5 text-center mb-6 border glow-blue"
        style={{
          borderColor: "rgba(30,130,255,0.3)",
          background: "linear-gradient(135deg, rgba(30,130,255,0.1) 0%, rgba(30,130,255,0.04) 100%)"
        }}
      >
        <div className="text-sm text-muted-foreground mb-1">Итого на счёте</div>
        <div className="font-display text-4xl shimmer-blue">{totalBalance.toLocaleString()} ₽</div>
        <div className="text-sm text-green mt-2">+ {freeSpins} фриспинов в подарок 🎰</div>
      </div>

      <a href={CTA} target="_blank" rel="noopener noreferrer">
        <button className="btn-blue w-full py-4 rounded-xl text-lg pulse-ring-blue">
          Забрать бонус →
        </button>
      </a>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-casino rounded-xl overflow-hidden cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between p-5 gap-4">
        <span className="font-body font-semibold text-foreground">{q}</span>
        <span className={`text-blue transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}>
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
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50"
        style={{ background: "rgba(12,16,26,0.9)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href={CTA} target="_blank" rel="noopener noreferrer">
            <img src={LOGO_FULL} alt="Lucky Bear" className="h-9 object-contain" />
          </a>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-body text-sm text-muted-foreground hover:text-blue transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
          <a href={CTA} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <button className="btn-blue px-5 py-2 rounded-lg text-sm">
              Играть
            </button>
          </a>
          <button className="md:hidden text-blue" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="font-body text-sm text-muted-foreground hover:text-blue transition-colors text-left py-1"
              >
                {l.label}
              </button>
            ))}
            <a href={CTA} target="_blank" rel="noopener noreferrer">
              <button className="btn-blue w-full py-2 rounded-lg text-sm mt-2">
                Играть →
              </button>
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="hero-gradient grid-dots min-h-screen flex items-center pt-16 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(30,130,255,0.15) 0%, transparent 70%)"
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="fade-in-up">
            <div className="badge-blue inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue animate-pulse" style={{ backgroundColor: "hsl(214,100%,55%)" }} />
              Telegram-бот казино №1
            </div>
            <h1 className="font-display font-bold leading-tight mb-6">
              <span className="block text-foreground text-6xl sm:text-7xl lg:text-8xl">LUCKY</span>
              <span className="block shimmer-blue text-6xl sm:text-7xl lg:text-8xl">BEAR</span>
              <span className="block text-foreground text-3xl sm:text-4xl mt-2 font-normal tracking-wide opacity-70">CASINO</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-4 max-w-md leading-relaxed">
              Онлайн-казино прямо в браузере. Игровые автоматы, слоты и бонусы — стартуй за 2 минуты.
            </p>
            <div
              className="inline-flex items-center gap-4 px-5 py-3 rounded-xl mb-8 border"
              style={{
                background: "rgba(30,130,255,0.08)",
                borderColor: "rgba(30,130,255,0.2)"
              }}
            >
              <div className="text-center">
                <div className="font-display text-2xl text-blue">+500%</div>
                <div className="text-xs text-muted-foreground">к депозиту</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="font-display text-2xl text-green">200</div>
                <div className="text-xs text-muted-foreground">фриспинов</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="font-display text-2xl text-foreground">100+</div>
                <div className="text-xs text-muted-foreground">игр</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CTA} target="_blank" rel="noopener noreferrer">
                <button className="btn-blue px-8 py-4 rounded-xl text-lg pulse-ring-blue w-full sm:w-auto">
                  🎰 Начать играть
                </button>
              </a>
              <button
                onClick={() => scrollTo("#bonuses")}
                className="btn-outline-blue px-8 py-4 rounded-xl text-lg w-full sm:w-auto"
              >
                Рассчитать бонус
              </button>
            </div>
          </div>

          {/* Right — Logo hero */}
          <div className="flex justify-center lg:justify-end">
            <div className="floating relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: "hsl(214,100%,55%)" }}
              />
              <img
                src={LOGO_ICON}
                alt="Lucky Bear"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 40px rgba(30,130,255,0.4))" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="section-dark border-y border-border/40 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "500%", label: "Бонус на старт", color: "text-blue" },
            { val: "200", label: "Фриспинов", color: "text-green" },
            { val: "< 1 мин", label: "Вывод средств", color: "text-blue" },
            { val: "100+", label: "Игр в каталоге", color: "text-green" },
          ].map(s => (
            <div key={s.val}>
              <div className={`font-display text-3xl ${s.color}`}>{s.val}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GAMES */}
      <section id="games" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="text-blue text-sm font-body uppercase tracking-widest mb-3">Каталог</div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-3">
              ВЫБЕРИ <span className="shimmer-blue">ИГРУ</span>
            </h2>
            <div className="line-blue w-16 mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {GAMES.map((game) => (
              <div key={game.name} className="card-casino rounded-2xl p-6 group">
                <div className="text-4xl mb-4">{game.emoji}</div>
                <h3 className="font-display text-xl text-blue mb-2">{game.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{game.desc}</p>
                <a href={CTA} target="_blank" rel="noopener noreferrer">
                  <button className="text-blue text-sm font-body font-semibold hover:text-foreground transition-colors flex items-center gap-1">
                    Играть <Icon name="ArrowRight" size={14} />
                  </button>
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden relative">
            <img src={GAMES_IMG} alt="Игры Lucky Bear" className="w-full h-56 object-cover" />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "linear-gradient(to right, rgba(12,16,26,0.85) 0%, rgba(12,16,26,0.5) 100%)" }}
            >
              <div className="text-center">
                <h3 className="font-display text-3xl text-foreground mb-4">
                  ЕЩЁ <span className="text-blue">100+</span> ИГР ЖДУТ
                </h3>
                <a href={CTA} target="_blank" rel="noopener noreferrer">
                  <button className="btn-blue px-8 py-3 rounded-xl">Смотреть все</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section id="bonuses" className="section-dark py-24 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="text-blue text-sm font-body uppercase tracking-widest mb-3">Приветственный пакет</div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-3">
              РАССЧИТАЙ <span className="shimmer-blue">БОНУС</span>
            </h2>
            <div className="line-blue w-16 mx-auto mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <BonusCalculator />
            <div className="space-y-4">
              {[
                { emoji: "🎁", title: "Первый депозит +500%", desc: "Пополни счёт и получи в 5 раз больше — максимальный бонус на рынке" },
                { emoji: "🎰", title: "200 фриспинов", desc: "Бесплатные вращения на популярных слотах — начни выигрывать без риска" },
                { emoji: "💰", title: "Еженедельный кешбэк", desc: "Возврат до 20% от проигранных средств для VIP-игроков" },
                { emoji: "🏆", title: "Турниры и акции", desc: "Регулярные турниры с призовым фондом и эксклюзивные акции" },
              ].map(b => (
                <div key={b.title} className="flex gap-4 items-start card-casino rounded-xl p-5">
                  <span className="text-3xl flex-shrink-0">{b.emoji}</span>
                  <div>
                    <h4 className="font-display text-lg text-blue mb-1">{b.title}</h4>
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
          <div className="text-center mb-14">
            <div className="text-blue text-sm font-body uppercase tracking-widest mb-3">Почему Lucky Bear</div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-3">
              НАШИ <span className="shimmer-blue">ПРЕИМУЩЕСТВА</span>
            </h2>
            <div className="line-blue w-16 mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="card-casino rounded-2xl p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(30,130,255,0.1)",
                    border: "1px solid rgba(30,130,255,0.25)",
                    color: "hsl(214,100%,55%)"
                  }}
                >
                  <Icon name={f.icon} fallback="Star" size={22} />
                </div>
                <h3 className="font-display text-xl text-blue mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="registration" className="section-dark py-24 border-t border-border/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-blue text-sm font-body uppercase tracking-widest mb-3">Начни прямо сейчас</div>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6">
            РЕГИСТРАЦИЯ ЗА <span className="shimmer-blue">2 МИНУТЫ</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Никаких сложных форм — просто нажми кнопку и начни выигрывать.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12 relative">
            <div
              className="hidden sm:block absolute top-1/2 left-1/4 right-1/4 h-px -translate-y-1/2"
              style={{ background: "rgba(30,130,255,0.2)" }}
            />
            {[
              { step: "1", title: "Открой сайт", desc: "Нажми кнопку ниже и перейди на Lucky Bear" },
              { step: "2", title: "Зарегистрируйся", desc: "Авторизуйся через Telegram, email или телефон" },
              { step: "3", title: "Получи бонус", desc: "Сделай первый депозит и получи +500% на счёт" },
            ].map(s => (
              <div key={s.step} className="card-casino rounded-2xl p-6 relative z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-display font-bold text-sm"
                  style={{ background: "hsl(214,100%,55%)", color: "#fff" }}
                >
                  {s.step}
                </div>
                <h4 className="font-display text-lg text-blue mb-2">{s.title}</h4>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <a href={CTA} target="_blank" rel="noopener noreferrer">
            <button className="btn-blue px-12 py-5 rounded-2xl text-xl pulse-ring-blue">
              🐻 Открыть Lucky Bear Casino
            </button>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-border/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="text-blue text-sm font-body uppercase tracking-widest mb-3">Вопросы и ответы</div>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-3">
              ЧАСТЫЕ <span className="shimmer-blue">ВОПРОСЫ</span>
            </h2>
            <div className="line-blue w-16 mx-auto mt-4" />
          </div>
          <div className="space-y-3">
            {FAQS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="section-dark py-24 border-t border-border/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-blue text-sm font-body uppercase tracking-widest mb-3">Связь с нами</div>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6">
            <span className="shimmer-blue">КОНТАКТЫ</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Есть вопросы? Мы на связи 24/7 — напишите нам в Telegram или по почте.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { icon: "MessageCircle", label: "Telegram", val: "@luckybear_support", link: "https://t.me/luckybear_support" },
              { icon: "Mail", label: "Email", val: "support@luckybear.casino", link: "mailto:support@luckybear.casino" },
              { icon: "Globe", label: "Сайт", val: "lbgame777.xyz", link: CTA },
            ].map(c => (
              <a key={c.label} href={c.link} target="_blank" rel="noopener noreferrer">
                <div className="card-casino rounded-2xl p-6 hover:glow-blue transition-all">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 mx-auto"
                    style={{
                      background: "rgba(30,130,255,0.1)",
                      border: "1px solid rgba(30,130,255,0.25)",
                      color: "hsl(214,100%,55%)"
                    }}
                  >
                    <Icon name={c.icon} fallback="Star" size={20} />
                  </div>
                  <div className="font-display text-blue mb-1">{c.label}</div>
                  <div className="text-muted-foreground text-sm">{c.val}</div>
                </div>
              </a>
            ))}
          </div>

          <a href={CTA} target="_blank" rel="noopener noreferrer">
            <button className="btn-blue px-10 py-4 rounded-xl text-lg">
              Перейти в казино →
            </button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/30 py-10" style={{ background: "hsl(222,28%,5%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href={CTA} target="_blank" rel="noopener noreferrer">
              <img src={LOGO_FULL} alt="Lucky Bear" className="h-8 object-contain" />
            </a>
            <div className="flex flex-wrap justify-center gap-5">
              {NAV_LINKS.map(l => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-sm text-muted-foreground hover:text-blue transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">18+ | Играйте ответственно</div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground">
            © 2024 Lucky Bear Casino. Все права защищены. Азартные игры могут вызывать зависимость.
          </div>
        </div>
      </footer>
    </div>
  );
}
