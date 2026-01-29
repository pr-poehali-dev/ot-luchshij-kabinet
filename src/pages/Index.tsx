import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Sidebar from '@/components/Sidebar';
import DashboardSection from '@/components/DashboardSection';
import NpaSection from '@/components/NpaSection';
import TrainingSection from '@/components/TrainingSection';
import DocumentsSection from '@/components/DocumentsSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        <main className="flex-1 p-8">
          {activeSection === 'dashboard' && <DashboardSection />}
          {activeSection === 'npa' && <NpaSection />}
          {activeSection === 'training' && <TrainingSection />}
          {activeSection === 'documents' && <DocumentsSection />}

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