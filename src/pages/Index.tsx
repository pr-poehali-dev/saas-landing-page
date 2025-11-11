import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activePlan, setActivePlan] = useState<string | null>(null);

  const features = [
    {
      icon: "Plug",
      title: "Интеграция API",
      description: "Подключайтесь к любым популярным сервисам через REST API и GraphQL"
    },
    {
      icon: "Zap",
      title: "Быстрое развертывание",
      description: "Запускайте интеграции за минуты, не за недели разработки"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Все данные шифруются, соответствие GDPR и стандартам безопасности"
    },
    {
      icon: "LineChart",
      title: "Аналитика",
      description: "Отслеживайте использование API и производительность в реальном времени"
    },
    {
      icon: "Code",
      title: "SDK для разработчиков",
      description: "Библиотеки для популярных языков программирования"
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Техническая поддержка всегда на связи"
    }
  ];

  const plans = [
    {
      name: "Стартовый",
      price: "Бесплатно",
      description: "Для небольших проектов",
      features: ["5 интеграций", "1,000 запросов/мес", "Email поддержка", "Базовая аналитика"],
      popular: false
    },
    {
      name: "Профессиональный",
      price: "2,990₽",
      period: "/мес",
      description: "Для растущего бизнеса",
      features: ["Неограниченные интеграции", "100,000 запросов/мес", "Приоритетная поддержка", "Расширенная аналитика", "Webhooks"],
      popular: true
    },
    {
      name: "Корпоративный",
      price: "По запросу",
      description: "Для крупных компаний",
      features: ["Всё из Professional", "Неограниченные запросы", "Выделенная поддержка", "SLA 99.9%", "Кастомные интеграции"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Алексей Иванов",
      role: "CTO, TechStart",
      avatar: "A",
      content: "Сократили время интеграции с недель до дней. Отличная платформа!",
      rating: 5
    },
    {
      name: "Мария Петрова",
      role: "Product Manager, DataFlow",
      avatar: "M",
      content: "Интуитивный интерфейс и мощный функционал. Именно то, что нужно.",
      rating: 5
    },
    {
      name: "Дмитрий Сидоров",
      role: "Founder, CloudApp",
      avatar: "Д",
      content: "Лучшее решение для API-интеграций на рынке.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Какие сервисы можно интегрировать?",
      answer: "Мы поддерживаем более 100 популярных сервисов: CRM системы, платёжные шлюзы, облачные хранилища, системы аналитики и многое другое. Также можно добавить любой кастомный API."
    },
    {
      question: "Как происходит оплата?",
      answer: "Мы принимаем оплату банковскими картами и безналичным переводом для юридических лиц. Оплата списывается ежемесячно, можно отменить подписку в любой момент."
    },
    {
      question: "Есть ли пробный период?",
      answer: "Да, тарифный план «Стартовый» полностью бесплатный. Для тарифа «Профессиональный» предоставляем 14 дней бесплатного использования."
    },
    {
      question: "Техническая поддержка включена?",
      answer: "Да, все тарифы включают техническую поддержку. Уровень поддержки зависит от выбранного тарифа."
    },
    {
      question: "Можно ли масштабировать тариф?",
      answer: "Конечно! Вы можете повысить или понизить тариф в любой момент. При повышении тарифа разница будет пропорционально учтена."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Rocket" className="text-primary" size={28} />
            <span className="text-xl font-bold">ConnectAPI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Начать</Button>
        </div>
      </header>

      <main className="pt-16">
        <section className="py-24 md:py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Более 1000 компаний доверяют нам
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Подключите любой API
                <br />
                <span className="text-primary">за минуты, не за месяцы</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Интегрируйте популярные сервисы без сложной разработки. Одна платформа для всех ваших интеграций.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-base px-8">
                  Попробовать бесплатно
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8">
                  <Icon name="Play" className="mr-2" size={18} />
                  Посмотреть демо
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>Без кредитной карты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>14 дней бесплатно</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  <span>Отмена в любой момент</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Всё для успешных интеграций 123</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мощные инструменты для подключения и управления API-интеграциями
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={feature.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Прозрачные тарифы</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выберите план, который подходит вашему бизнесу
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative hover:shadow-xl transition-all animate-scale-in ${plan.popular ? 'border-primary shadow-lg scale-105' : ''} ${activePlan === plan.name ? 'ring-2 ring-primary' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setActivePlan(plan.name)}
                  onMouseLeave={() => setActivePlan(null)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <Icon name="Check" className="text-primary flex-shrink-0" size={18} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                      {plan.price === "По запросу" ? "Связаться с нами" : "Выбрать план"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят клиенты</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Нам доверяют компании по всему миру
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на популярные вопросы о нашем сервисе
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <Card className="text-center p-12 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl mb-4">Готовы начать?</CardTitle>
                <CardDescription className="text-lg mb-8">
                  Попробуйте бесплатно в течение 14 дней. Без кредитной карты.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-base px-8">
                    Начать бесплатно
                    <Icon name="ArrowRight" className="ml-2" size={18} />
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8">
                    <Icon name="Mail" className="mr-2" size={18} />
                    Связаться с нами
                  </Button>
                </div>
                <div className="mt-8 text-sm text-muted-foreground">
                  Есть вопросы? Напишите нам на{" "}
                  <a href="mailto:hello@connectapi.com" className="text-primary hover:underline">
                    hello@connectapi.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Rocket" className="text-primary" size={24} />
                <span className="font-bold text-lg">ConnectAPI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для быстрой интеграции с популярными сервисами и API
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 ConnectAPI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;