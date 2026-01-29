import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const TrainingSection = () => {
  const trainingPrograms = [
    { id: 1, name: 'Вводный инструктаж', trained: 247, total: 247, progress: 100 },
    { id: 2, name: 'Пожарно-технический минимум', trained: 198, total: 247, progress: 80 },
    { id: 3, name: 'Первая помощь', trained: 156, total: 247, progress: 63 },
    { id: 4, name: 'Работа на высоте', trained: 45, total: 67, progress: 67 },
  ];

  return (
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
  );
};

export default TrainingSection;