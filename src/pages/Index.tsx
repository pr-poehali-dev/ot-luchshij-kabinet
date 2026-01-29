import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const stats = [
    { title: 'Сотрудников', value: '247', change: '+12', icon: 'Users', color: 'text-blue-600' },
    { title: 'Обучено', value: '198', change: '80%', icon: 'GraduationCap', color: 'text-green-600' },
    { title: 'Документов', value: '1,543', change: '+34', icon: 'FileText', color: 'text-purple-600' },
    { title: 'Актов Н-1', value: '3', change: '-2', icon: 'AlertTriangle', color: 'text-orange-600' }
  ];

  const npaList = [
    { id: 1, title: 'Приказ Минтруда России от 29.10.2021 N 774н', category: 'Охрана труда', date: '29.10.2021', status: 'Актуален' },
    { id: 2, title: 'ТК РФ Статья 212', category: 'Трудовой кодекс', date: '01.01.2023', status: 'Актуален' },
    { id: 3, title: 'Постановление Правительства РФ от 24.12.2021 N 2464', category: 'Медосмотры', date: '24.12.2021', status: 'Актуален' },
    { id: 4, title: 'Приказ Минздрава России от 28.01.2021 N 29н', category: 'Медицина труда', date: '28.01.2021', status: 'Изменён' },
  ];

  const trainingPrograms = [
    { id: 1, name: 'Вводный инструктаж', trained: 247, total: 247, progress: 100 },
    { id: 2, name: 'Пожарно-технический минимум', trained: 198, total: 247, progress: 80 },
    { id: 3, name: 'Первая помощь', trained: 156, total: 247, progress: 63 },
    { id: 4, name: 'Работа на высоте', trained: 45, total: 67, progress: 67 },
  ];

  const upcomingTasks = [
    { id: 1, task: 'Медосмотр — Водители', date: '15.02.2026', priority: 'high' },
    { id: 2, task: 'Обучение — Новые сотрудники', date: '20.02.2026', priority: 'medium' },
    { id: 3, task: 'Проверка СИЗ', date: '28.02.2026', priority: 'low' },
    { id: 4, task: 'Аттестация рабочих мест', date: '10.03.2026', priority: 'high' },
  ];

  const documents = [
    { id: 1, type: 'Приказ', title: 'О назначении ответственного за ОТ', date: '15.01.2026', author: 'Иванов А.П.' },
    { id: 2, type: 'Акт Н-1', title: 'Несчастный случай — ушиб руки', date: '22.01.2026', author: 'Петрова М.С.' },
    { id: 3, type: 'Направление', title: 'На медосмотр — водители', date: '28.01.2026', author: 'Сидоров К.В.' },
    { id: 4, type: 'Протокол', title: 'Проверка знаний по ОТ', date: '29.01.2026', author: 'Иванов А.П.' },
  ];

  const getPriorityBadge = (priority: string) => {
    const styles = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-green-100 text-green-800 border-green-200'
    };
    const labels = { high: 'Высокий', medium: 'Средний', low: 'Низкий' };
    return <Badge variant="outline" className={styles[priority as keyof typeof styles]}>{labels[priority as keyof typeof labels]}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="ShieldCheck" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-sidebar-foreground font-bold text-lg">SafetyPro</h1>
                <p className="text-sidebar-foreground/60 text-xs">Охрана труда</p>
              </div>
            </div>

            <nav className="space-y-1">
              {[
                { id: 'dashboard', label: 'Панель управления', icon: 'LayoutDashboard' },
                { id: 'npa', label: 'База НПА', icon: 'BookOpen' },
                { id: 'training', label: 'Обучение', icon: 'GraduationCap' },
                { id: 'documents', label: 'Документы', icon: 'FileText' },
                { id: 'employees', label: 'Сотрудники', icon: 'Users' },
                { id: 'reports', label: 'Отчёты', icon: 'BarChart3' },
                { id: 'settings', label: 'Настройки', icon: 'Settings' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-sidebar-border bg-sidebar">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-sidebar-accent rounded-full flex items-center justify-center">
                <Icon name="User" className="text-sidebar-foreground" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sidebar-foreground text-sm font-medium truncate">Иванов А.П.</p>
                <p className="text-sidebar-foreground/60 text-xs truncate">Специалист по ОТ</p>
              </div>
              <Button variant="ghost" size="icon" className="text-sidebar-foreground">
                <Icon name="LogOut" size={18} />
              </Button>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8">
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-1">Панель управления</h2>
                <p className="text-muted-foreground">Обзор ключевых показателей охраны труда</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <Icon name={stat.icon} className={stat.color} size={20} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        <span className={stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : ''}>
                          {stat.change}
                        </span>
                        {' '}за месяц
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Calendar" size={20} />
                      Предстоящие задачи
                    </CardTitle>
                    <CardDescription>Важные мероприятия и дедлайны</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {upcomingTasks.map((task) => (
                        <div key={task.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{task.task}</p>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                              <Icon name="Clock" size={12} />
                              {task.date}
                            </p>
                          </div>
                          {getPriorityBadge(task.priority)}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} />
                      Прогресс обучения
                    </CardTitle>
                    <CardDescription>Статус обучения персонала</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trainingPrograms.map((program) => (
                        <div key={program.id}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{program.name}</span>
                            <span className="text-sm text-muted-foreground">{program.trained}/{program.total}</span>
                          </div>
                          <Progress value={program.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Bell" size={20} />
                    Уведомления системы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <Icon name="Info" className="text-blue-600 mt-0.5" size={18} />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Обновление НПА</p>
                        <p className="text-xs text-blue-700 mt-1">Внесены изменения в Приказ Минтруда N 774н от 29.01.2026</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <Icon name="AlertCircle" className="text-orange-600 mt-0.5" size={18} />
                      <div>
                        <p className="text-sm font-medium text-orange-900">Истекает срок обучения</p>
                        <p className="text-xs text-orange-700 mt-1">У 12 сотрудников заканчивается срок действия удостоверения ПТМ</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'npa' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-1">База нормативно-правовых актов</h2>
                <p className="text-muted-foreground">Актуальная база законодательства по охране труда</p>
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <Input placeholder="Поиск по названию, номеру или ключевым словам..." className="w-full" />
                </div>
                <Button>
                  <Icon name="Search" size={18} className="mr-2" />
                  Найти
                </Button>
                <Button variant="outline">
                  <Icon name="Filter" size={18} className="mr-2" />
                  Фильтры
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Документы</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">Всего: 1,543</Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Актуальных: 1,498</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Документ</TableHead>
                        <TableHead>Категория</TableHead>
                        <TableHead>Дата</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead className="text-right">Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {npaList.map((doc) => (
                        <TableRow key={doc.id}>
                          <TableCell className="font-medium">{doc.title}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{doc.category}</Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground">{doc.date}</TableCell>
                          <TableCell>
                            <Badge className={doc.status === 'Актуален' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                              {doc.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex gap-2 justify-end">
                              <Button variant="ghost" size="icon">
                                <Icon name="Eye" size={16} />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Icon name="Download" size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'training' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-1">Обучение персонала</h2>
                <p className="text-muted-foreground">Управление программами обучения и проверка знаний</p>
              </div>

              <div className="flex gap-3">
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Создать программу
                </Button>
                <Button variant="outline">
                  <Icon name="Users" size={18} className="mr-2" />
                  Назначить обучение
                </Button>
                <Button variant="outline">
                  <Icon name="FileQuestion" size={18} className="mr-2" />
                  Банк вопросов
                </Button>
              </div>

              <Tabs defaultValue="programs" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="programs">Программы</TabsTrigger>
                  <TabsTrigger value="testing">Тестирование</TabsTrigger>
                  <TabsTrigger value="results">Результаты</TabsTrigger>
                </TabsList>

                <TabsContent value="programs" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {trainingPrograms.map((program) => (
                      <Card key={program.id}>
                        <CardHeader>
                          <CardTitle className="text-lg">{program.name}</CardTitle>
                          <CardDescription>Прогресс: {program.progress}%</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <Progress value={program.progress} />
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Обучено: {program.trained}</span>
                            <span className="text-muted-foreground">Всего: {program.total}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1">
                              <Icon name="Edit" size={14} className="mr-1" />
                              Редактировать
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              <Icon name="Users" size={14} className="mr-1" />
                              Назначить
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="testing" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Активные тесты</CardTitle>
                      <CardDescription>Текущие проверки знаний</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-12 text-muted-foreground">
                        <Icon name="ClipboardList" size={48} className="mx-auto mb-4 opacity-50" />
                        <p>Нет активных тестов</p>
                        <Button className="mt-4">Создать тест</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="results" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Результаты тестирования</CardTitle>
                      <CardDescription>История проверок знаний за последние 30 дней</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Сотрудник</TableHead>
                            <TableHead>Программа</TableHead>
                            <TableHead>Дата</TableHead>
                            <TableHead>Результат</TableHead>
                            <TableHead>Статус</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Петров С.И.</TableCell>
                            <TableCell>Первая помощь</TableCell>
                            <TableCell>28.01.2026</TableCell>
                            <TableCell>85%</TableCell>
                            <TableCell><Badge className="bg-green-100 text-green-800">Сдал</Badge></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Сидорова К.В.</TableCell>
                            <TableCell>ПТМ</TableCell>
                            <TableCell>27.01.2026</TableCell>
                            <TableCell>92%</TableCell>
                            <TableCell><Badge className="bg-green-100 text-green-800">Сдал</Badge></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Кузнецов А.А.</TableCell>
                            <TableCell>Работа на высоте</TableCell>
                            <TableCell>26.01.2026</TableCell>
                            <TableCell>58%</TableCell>
                            <TableCell><Badge className="bg-red-100 text-red-800">Не сдал</Badge></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeSection === 'documents' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-1">Документы</h2>
                <p className="text-muted-foreground">Создание и управление документами по охране труда</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="FileText" className="text-blue-600" size={24} />
                    </div>
                    <CardTitle className="text-lg">Приказы</CardTitle>
                    <CardDescription>Создать приказ по ОТ</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="AlertTriangle" className="text-orange-600" size={24} />
                    </div>
                    <CardTitle className="text-lg">Акт Н-1</CardTitle>
                    <CardDescription>Оформить несчастный случай</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="Stethoscope" className="text-green-600" size={24} />
                    </div>
                    <CardTitle className="text-lg">Направления на МО</CardTitle>
                    <CardDescription>Медосмотры сотрудников</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Последние документы</CardTitle>
                    <Button variant="outline" size="sm">
                      <Icon name="Filter" size={16} className="mr-2" />
                      Фильтр
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Тип</TableHead>
                        <TableHead>Название</TableHead>
                        <TableHead>Дата создания</TableHead>
                        <TableHead>Автор</TableHead>
                        <TableHead className="text-right">Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {documents.map((doc) => (
                        <TableRow key={doc.id}>
                          <TableCell>
                            <Badge variant="outline">{doc.type}</Badge>
                          </TableCell>
                          <TableCell className="font-medium">{doc.title}</TableCell>
                          <TableCell className="text-muted-foreground">{doc.date}</TableCell>
                          <TableCell className="text-muted-foreground">{doc.author}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex gap-2 justify-end">
                              <Button variant="ghost" size="icon">
                                <Icon name="Eye" size={16} />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Icon name="Download" size={16} />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Icon name="Edit" size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {['employees', 'reports', 'settings'].includes(activeSection) && (
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-1">
                  {activeSection === 'employees' && 'Сотрудники'}
                  {activeSection === 'reports' && 'Отчёты'}
                  {activeSection === 'settings' && 'Настройки'}
                </h2>
                <p className="text-muted-foreground">Раздел в разработке</p>
              </div>
              <Card>
                <CardContent className="py-12">
                  <div className="text-center text-muted-foreground">
                    <Icon name="Construction" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Этот раздел находится в разработке</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;