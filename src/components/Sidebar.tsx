import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  return (
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
  );
};

export default Sidebar;