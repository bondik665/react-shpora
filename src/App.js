import TimerUseRef from "./hoocks_test/useRef";
import CounterUseState from "./hoocks_test/useState";
import CalcUseMEmo from "./hoocks_test/useMemo";
import ParentComponentUseCallback from "./hoocks_test/useCallback";
import CounterUseReducer from "./hoocks_test/useReducer";
import TaskList from "./hoocks_test/useReducer2";
import ChatComponent from "./hoocks_test/ollama";
import Time from "./components/Time";
import Button from "./components/Button";
import { typeTab } from "./data";

import { useState } from "react";

import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import Header from "./components/Header";
import EffectsSection from "./components/EffectsSection";

function App() {
  const [tab, setTab] = useState("main");
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
    console.log("click", type);
  }

  return (
    <>
      <main>
     <Header/>
        <TabsSection active={tab} onChange={(current)=> setTab(current)}/>

        

        {tab ===
          "main" &&(
            <>
               <TimerUseRef />
              <CounterUseState />
              <CalcUseMEmo />
              <ParentComponentUseCallback />
              <CounterUseReducer />
              <TaskList />
              <ChatComponent />
              <Time />

              <Button
                isActive={contentType === "way"}
                onClick={() => handleClick("way")}
              >
                Подход
              </Button>
              <Button
                isActive={contentType === "easy"}
                onClick={() => handleClick("easy")}
              >
                name 2
              </Button>
              <Button
                isActive={contentType === "program"}
                onClick={() => handleClick("program")}
              >
                name 3
              </Button>

              {contentType ? (
                <p>{typeTab[contentType]}</p>
              ) : (
                <p>Нажми на кнопку</p>
              )}
            </>
            
          )}

          {tab === "feedback" && <FeedbackSection />}

          {tab === "effect" && <EffectsSection />}
      </main>
    </>
  );
}

export default App;
