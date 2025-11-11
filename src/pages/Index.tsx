import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/projects/7e94d34d-5852-4673-8704-f96b59aa6351/files/5420bb53-999b-4239-87d5-83a3f364299c.jpg" alt="Logo" className="h-12 w-12 rounded-lg object-cover" />
            <span className="text-2xl font-bold gradient-text">DesignPro</span>
          </div>
          
          <div className="hidden lg:flex gap-6 items-center">
            {['home', 'services', 'design', 'renovation', 'about', 'portfolio', 'reviews', 'blog', 'contacts'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`story-link text-sm font-medium transition-colors ${activeSection === item ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}
              >
                {item === 'home' && 'Главная'}
                {item === 'services' && 'Услуги'}
                {item === 'design' && 'Дизайн'}
                {item === 'renovation' && 'Ремонт'}
                {item === 'about' && 'О нас'}
                {item === 'portfolio' && 'Портфолио'}
                {item === 'reviews' && 'Отзывы'}
                {item === 'blog' && 'Блог'}
                {item === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>

          <Button className="gradient-primary text-white font-semibold" onClick={() => scrollToSection('contacts')}>
            Заказать консультацию
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 gradient-primary text-white border-none">🏆 Лучшие проекты 2024</Badge>
              <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Дизайн и ремонт <span className="gradient-text">вашей мечты</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Создаём уникальные интерьеры и реализуем ремонт под ключ с гарантией качества. Более 500 успешных проектов по всей России.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="gradient-primary text-white font-semibold text-lg px-8 hover-scale">
                  <Icon name="Sparkles" className="mr-2" />
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary font-semibold text-lg px-8 hover:bg-primary hover:text-white">
                  <Icon name="PlayCircle" className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 gradient-primary blur-3xl opacity-20 rounded-full"></div>
              <img src="https://cdn.poehali.dev/projects/7e94d34d-5852-4673-8704-f96b59aa6351/files/3edc1f83-9c86-457a-852a-d4d6147b6866.jpg" alt="Interior" className="relative rounded-3xl shadow-2xl hover-scale" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4 gradient-primary text-white border-none">💼 Наши услуги</Badge>
            <h2 className="text-5xl font-black mb-4">Услуги и цены</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование и полный спектр услуг для вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'Palette', title: 'Дизайн-проект', price: 'от 2 500 ₽/м²', features: ['3D визуализация', 'Планировка', 'Подбор материалов', 'Авторский надзор'] },
              { icon: 'Hammer', title: 'Ремонт под ключ', price: 'от 15 000 ₽/м²', features: ['Черновая отделка', 'Чистовая отделка', 'Сантехника', 'Электрика'] },
              { icon: 'PenTool', title: 'Перепланировка', price: 'от 50 000 ₽', features: ['Согласование', 'Проект', 'Демонтаж', 'Новые конструкции'] },
              { icon: 'Lightbulb', title: 'Декорирование', price: 'от 1 500 ₽/м²', features: ['Подбор мебели', 'Текстиль', 'Освещение', 'Аксессуары'] },
              { icon: 'Building', title: 'Коммерческие объекты', price: 'от 3 000 ₽/м²', features: ['Офисы', 'Рестораны', 'Магазины', 'Отели'] },
              { icon: 'Zap', title: 'Экспресс-дизайн', price: 'от 1 000 ₽/м²', features: ['За 7 дней', '2D планировка', 'Коллажи', 'Смета'] }
            ].map((service, idx) => (
              <Card key={idx} className="hover-scale border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-3xl font-black gradient-text mb-6">{service.price}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Check" size={18} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="design" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 gradient-primary text-white border-none">🎨 Дизайн интерьера</Badge>
              <h2 className="text-5xl font-black mb-6">Создаём уникальные пространства</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наша команда профессиональных дизайнеров воплощает самые смелые идеи в реальность. Мы работаем в любых стилях: от классики до футуризма.
              </p>
              <div className="space-y-4">
                {['Минимализм', 'Скандинавский', 'Лофт', 'Неоклассика', 'Хай-тек', 'Эклектика'].map((style, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                      <Icon name="Sparkles" size={20} className="text-white" />
                    </div>
                    <span className="text-lg font-semibold">{style}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 gradient-primary text-white font-semibold hover-scale">
                Заказать дизайн-проект
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary blur-2xl opacity-20 rounded-3xl"></div>
              <img src="https://cdn.poehali.dev/projects/7e94d34d-5852-4673-8704-f96b59aa6351/files/49d7a1ec-04bc-4bd7-ab7d-4f6002eda455.jpg" alt="Kitchen" className="relative rounded-3xl shadow-2xl hover-scale" />
            </div>
          </div>
        </div>
      </section>

      <section id="renovation" className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 gradient-primary blur-2xl opacity-20 rounded-3xl"></div>
              <img src="https://cdn.poehali.dev/projects/7e94d34d-5852-4673-8704-f96b59aa6351/files/3edc1f83-9c86-457a-852a-d4d6147b6866.jpg" alt="Renovation" className="relative rounded-3xl shadow-2xl hover-scale" />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-up">
              <Badge className="mb-4 gradient-primary text-white border-none">🔨 Ремонт под ключ</Badge>
              <h2 className="text-5xl font-black mb-6">Комплексный ремонт с гарантией</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Берём на себя все этапы ремонта: от разработки проекта до финальной уборки. Работаем по договору с фиксированными сроками и ценой.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: 'Shield', label: 'Гарантия 5 лет' },
                  { icon: 'Clock', label: 'В срок' },
                  { icon: 'Award', label: 'Сертификаты' },
                  { icon: 'Users', label: 'Опыт 15+ лет' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <Icon name={item.icon as any} size={24} className="text-white" />
                    </div>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="gradient-primary text-white font-semibold hover-scale">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 gradient-primary text-white border-none">🏢 О компании</Badge>
          <h2 className="text-5xl font-black mb-6">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            15 лет на рынке, более 500 реализованных проектов и сотни довольных клиентов
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Проектов' },
              { number: '15', label: 'Лет опыта' },
              { number: '50+', label: 'Специалистов' },
              { number: '98%', label: 'Довольных клиентов' }
            ].map((stat, idx) => (
              <div key={idx} className="animate-scale-in">
                <div className="text-6xl font-black gradient-text mb-2">{stat.number}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-primary text-white border-none">📸 Наши работы</Badge>
            <h2 className="text-5xl font-black mb-4">Портфолио проектов</h2>
            <p className="text-xl text-muted-foreground">Смотрите примеры наших лучших работ</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover-scale border-none shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://cdn.poehali.dev/projects/7e94d34d-5852-4673-8704-f96b59aa6351/files/${item % 2 === 0 ? '3edc1f83-9c86-457a-852a-d4d6147b6866' : '49d7a1ec-04bc-4bd7-ab7d-4f6002eda455'}.jpg`}
                    alt={`Project ${item}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">Проект №{item}</h3>
                      <p className="text-white/80">Дизайн и ремонт</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-primary text-white border-none">⭐ Отзывы</Badge>
            <h2 className="text-5xl font-black mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground">Реальные отзывы наших заказчиков</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Анна Петрова', text: 'Невероятный результат! Дизайнеры учли все наши пожелания и создали квартиру мечты. Ремонт выполнен качественно и точно в срок.', rating: 5 },
              { name: 'Михаил Сидоров', text: 'Профессиональная команда! От первой встречи до сдачи объекта всё прошло гладко. Особенно порадовало внимание к деталям.', rating: 5 },
              { name: 'Елена Иванова', text: 'Обратились за дизайном кухни, получили целый проект преображения квартиры. Результат превзошёл все ожидания!', rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="hover-scale border-2 hover:border-primary transition-all">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">Клиент</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 gradient-primary text-white border-none">📝 Блог</Badge>
            <h2 className="text-5xl font-black mb-4">Статьи о дизайне и ремонте</h2>
            <p className="text-xl text-muted-foreground">Полезные советы и актуальные тренды</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Тренды дизайна интерьера 2024', date: '15 ноября 2024', category: 'Дизайн' },
              { title: 'Как выбрать подрядчика для ремонта', date: '10 ноября 2024', category: 'Ремонт' },
              { title: '10 ошибок при планировании кухни', date: '5 ноября 2024', category: 'Советы' }
            ].map((post, idx) => (
              <Card key={idx} className="hover-scale border-none shadow-lg overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://cdn.poehali.dev/projects/7e94d34d-5852-4673-8704-f96b59aa6351/files/${idx === 1 ? '49d7a1ec-04bc-4bd7-ab7d-4f6002eda455' : '3edc1f83-9c86-457a-852a-d4d6147b6866'}.jpg`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 gradient-primary text-white border-none">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
                  <Button variant="link" className="p-0 gradient-text font-semibold">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge className="mb-4 gradient-primary text-white border-none">📞 Контакты</Badge>
              <h2 className="text-5xl font-black mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-lg text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-lg text-muted-foreground">info@designpro.ru</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-lg text-muted-foreground">Москва, ул. Примерная, д. 1</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-2 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Заказать консультацию</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="h-12" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" className="h-12" />
                  </div>
                  <div>
                    <Input placeholder="Email" className="h-12" />
                  </div>
                  <div>
                    <Textarea placeholder="Расскажите о вашем проекте" className="min-h-32" />
                  </div>
                  <Button className="w-full h-12 gradient-primary text-white font-semibold text-lg hover-scale">
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://cdn.poehali.dev/projects/7e94d34d-5852-4673-8704-f96b59aa6351/files/5420bb53-999b-4239-87d5-83a3f364299c.jpg" alt="Logo" className="h-10 w-10 rounded-lg" />
                <span className="text-xl font-bold">DesignPro</span>
              </div>
              <p className="text-white/70">Дизайн и ремонт квартир под ключ</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Дизайн-проект</li>
                <li>Ремонт под ключ</li>
                <li>Перепланировка</li>
                <li>Декорирование</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Блог</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@designpro.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2024 DesignPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
