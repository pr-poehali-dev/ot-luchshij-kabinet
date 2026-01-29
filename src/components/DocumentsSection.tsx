import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const DocumentsSection = () => {
  const documents = [
    { id: 1, type: 'Приказ', title: 'О назначении ответственного за ОТ', date: '15.01.2026', author: 'Иванов А.П.' },
    { id: 2, type: 'Акт Н-1', title: 'Несчастный случай — ушиб руки', date: '22.01.2026', author: 'Петрова М.С.' },
    { id: 3, type: 'Направление', title: 'На медосмотр — водители', date: '28.01.2026', author: 'Сидоров К.В.' },
    { id: 4, type: 'Протокол', title: 'Проверка знаний по ОТ', date: '29.01.2026', author: 'Иванов А.П.' },
  ];

  return (
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
  );
};

export default DocumentsSection;