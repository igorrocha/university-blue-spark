
import { GraduationCap } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';

const ChatHeader = () => {
  return (
    <div className="university-gradient text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-3 flex-1">
          <div className="bg-white/20 p-2 rounded-full">
            <GraduationCap size={24} className="text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Assistente IA da Universidade</h1>
            <p className="text-white/90 text-sm">Pergunte-me qualquer coisa sobre nossa universidade!</p>
          </div>
        </div>
        <div className="ml-4">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
