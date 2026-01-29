import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const DashboardSection = () => {
  const stats = [
    { title: 'Сотрудников', value: '247', change: '+12', icon: 'Users', color: 'text-blue-600' },
    { title: 'Обучено', value: '198', change: '80%', icon: 'GraduationCap', color: 'text-green-600' },
    { title: 'Документов', value: '1,543', change: '+34', icon: 'FileText', color: 'text-purple-600' },
    { title: 'Актов Н-1', value: '3', change: '-2', icon: 'AlertTriangle', color: 'text-orange-600' }
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
  );
};

export default DashboardSection;