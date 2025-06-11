
import { GraduationCap } from 'lucide-react';

const ChatHeader = () => {
  return (
    <div className="university-gradient text-white p-4 shadow-lg">
      <div className="flex items-center justify-center space-x-3">
        <div className="bg-white/20 p-2 rounded-full">
          <GraduationCap size={24} className="text-white" />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold">Assistente IA da Universidade</h1>
          <p className="text-white/90 text-sm">Pergunte-me qualquer coisa sobre nossa universidade!</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
