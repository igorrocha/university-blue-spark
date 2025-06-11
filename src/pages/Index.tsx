
import ChatHeader from '@/components/ChatHeader';
import ChatContainer from '@/components/ChatContainer';

const Index = () => {
  return (
    <div className="min-h-screen bg-muted flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto w-full bg-card shadow-xl flex flex-col">
        <ChatHeader />
        <ChatContainer />
      </div>
    </div>
  );
};

export default Index;
