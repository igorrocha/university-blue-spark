
// Mock API endpoint for chat functionality
// This will be replaced with actual AI integration

export interface ChatRequest {
  prompt: string;
}

export interface ChatResponse {
  response: string;
  timestamp: string;
}

// Mock function to simulate AI response
export const mockChatResponse = async (prompt: string): Promise<ChatResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

  // Mock responses based on keywords
  let response = "I'm here to help you with university information! ";

  if (prompt.toLowerCase().includes('admission')) {
    response += "Our admissions process is designed to be straightforward. You can apply online through our portal, and we review applications holistically.";
  } else if (prompt.toLowerCase().includes('course') || prompt.toLowerCase().includes('program')) {
    response += "We offer a wide range of undergraduate and graduate programs across various disciplines. Each program is designed with industry relevance in mind.";
  } else if (prompt.toLowerCase().includes('campus') || prompt.toLowerCase().includes('facilities')) {
    response += "Our campus features modern facilities including state-of-the-art labs, libraries, recreational centers, and comfortable dormitories.";
  } else if (prompt.toLowerCase().includes('fee') || prompt.toLowerCase().includes('cost') || prompt.toLowerCase().includes('tuition')) {
    response += "We offer competitive tuition rates and various financial aid options including scholarships, grants, and work-study programs.";
  } else {
    response += "I can provide information about admissions, academic programs, campus life, fees, and much more. What specific area would you like to know about?";
  }

  return {
    response,
    timestamp: new Date().toISOString()
  };
};

// Actual API call function for when backend is ready
export const sendChatMessage = async (prompt: string): Promise<ChatResponse> => {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
