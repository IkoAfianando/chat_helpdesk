import { ChatEngine } from "react-chat-engine";

// import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='
      a63ef475-dc25-49bc-b20c-ec5ddbb0144a'
      userName='ikoafianando'
      userSecret='123456'
      // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
