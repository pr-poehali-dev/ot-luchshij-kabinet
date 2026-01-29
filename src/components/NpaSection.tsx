import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const NpaSection = () => {
  const npaList = [
    { id: 1, title: 'Приказ Минтруда России от 29.10.2021 N 774н', category: 'Охрана труда', date: '29.10.2021', status: 'Актуален' },
    { id: 2, title: 'ТК РФ Статья 212', category: 'Трудовой кодекс', date: '01.01.2023', status: 'Актуален' },
    { id: 3, title: 'Постановление Правительства РФ от 24.12.2021 N 2464', category: 'Медосмотры', date: '24.12.2021', status: 'Актуален' },
    { id: 4, title: 'Приказ Минздрава России от 28.01.2021 N 29н', category: 'Медицина труда', date: '28.01.2021', status: 'Изменён' },
  ];

  return (
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
  );
};

export default NpaSection;