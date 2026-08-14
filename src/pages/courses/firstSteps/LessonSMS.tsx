import React, { useState, useEffect } from 'react';
import { useRouter } from '../../lib/router';
import { ArrowLeft, Mail, MoreVertical, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function LessonSMS() {
  const { navigate } = useRouter();
  
  const [phase, setPhase] = useState<number>(0);
  const [quizResult, setQuizResult] = useState<'none' | 'wrong' | 'right'>('none');
  const [optAText, setOptAText] = useState("Pay 1.99€ quickly, it's a small amount of money anyway.");

  useEffect(() => {
    if (phase === 0) {
      const timer = setTimeout(() => {
        setPhase(1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (phase === 1 || phase === 0) {
      setPhase(2);
    }
  };

  const handleNextClick = () => {
    setPhase(3);
  };

  const handleQuizA = () => {
    setOptAText("Let's look at that together: Scammers don't want the 1.99€; they want you to type your credit card into their fake website.");
    setQuizResult('wrong');
  };

  const handleQuizB = () => {
    setQuizResult('right');
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4">
      {/* Tooltip (Phase 1) */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-primary-container text-on-primary-container p-4 rounded-xl shadow-lg max-w-sm font-body-md text-body-md transition-opacity"
          >
            <p className="mb-2">Notice the pressure here? Scammers want you to feel stressed so you act fast and don't think clearly.</p>
            <button 
              onClick={() => setPhase(2)}
              className="w-full py-2 bg-on-primary-container text-primary-container rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phone Container */}
      <main className="w-full max-w-[400px] h-[800px] bg-surface-container-lowest rounded-[40px] border-[14px] border-border-subtle shadow-xl flex flex-col relative overflow-hidden">
        
        {/* Safe Zone Tooltip (Phase 2) */}
        <AnimatePresence>
          {phase === 2 && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-50 bg-surface-container-lowest p-5 rounded-[20px] shadow-lg border border-border-subtle w-11/12 max-w-sm transition-opacity text-on-surface font-body-md"
             >
               <h3 className="font-bold text-xl mb-2">Safe Zone 🛡️</h3>
               <p className="text-[18px] leading-relaxed mb-4">Look at the address. Official companies use simple addresses (like correos.es). Scammers use long, messy addresses with extra words like 'secure' or random numbers.</p>
               <button 
                 onClick={handleNextClick}
                 className="w-full py-3 bg-primary-container text-on-surface rounded-full font-bold hover:opacity-90 transition-opacity text-lg"
               >
                 Next
               </button>
             </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 3: Quiz Modal Overlay */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/70 z-[60] flex items-center justify-center p-4 transition-opacity"
            >
              <div className="bg-surface-container-lowest rounded-[20px] p-6 w-full max-w-sm shadow-2xl flex flex-col gap-6">
                <p className="text-[18px] font-body-md font-bold text-on-surface leading-relaxed">
                  What is the safest way to handle this text message?
                </p>
                
                {quizResult !== 'right' && (
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={handleQuizA}
                      className={`w-full min-h-[56px] ${quizResult === 'wrong' ? 'bg-primary-container text-on-primary' : 'bg-surface-container hover:bg-surface-dim text-on-surface'} rounded-[50px] px-6 py-3 text-left font-body-md text-[16px] leading-snug transition-colors`}
                    >
                      {optAText}
                    </button>
                    <button 
                      onClick={handleQuizB}
                      className="w-full min-h-[56px] bg-surface-container hover:bg-surface-dim text-on-surface rounded-[50px] px-6 py-3 text-left font-body-md text-[16px] leading-snug transition-colors"
                    >
                      Delete the text and check the official delivery app or website yourself.
                    </button>
                  </div>
                )}
                
                {quizResult === 'right' && (
                  <div className="p-4 rounded-2xl bg-[#E8F3ED] border border-success">
                    <p className="text-success font-body-md font-medium text-[16px] leading-relaxed">
                      Excellent! Scammers don't want the 1.99€; they want you to type your credit card into their fake website. Never click links in unexpected text messages. Always go through the official app.
                    </p>
                    <button 
                      onClick={() => navigate('module-1')}
                      className="mt-4 w-full bg-success hover:opacity-90 text-on-primary font-bold py-3 rounded-full transition-colors text-sm"
                    >
                      Complete Lesson
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TopAppBar */}
        <header className="bg-surface border-b border-border-subtle flex justify-between items-center px-gutter h-touch-target-min w-full docked full-width top-0 z-10">
          <div className="flex items-center gap-2 cursor-pointer active:opacity-80 transition-colors hover:bg-surface-container-low rounded-full p-2 -ml-2" onClick={() => navigate('module-1')}>
            <ArrowLeft className="w-6 h-6 text-on-surface-variant" />
            <Mail className="w-6 h-6 text-on-surface-variant" />
            <h1 className="text-headline-md font-headline-md text-on-surface tracking-tight">Correos/Post</h1>
          </div>
          <div className="flex gap-2">
            <button className="h-12 w-12 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80">
              <MoreVertical className="w-6 h-6 text-primary" />
            </button>
          </div>
        </header>

        {/* Chat Canvas */}
        <div className="flex-grow p-gutter flex flex-col justify-end overflow-y-auto bg-surface-bright">
          {/* Received Bubble */}
          <div className="self-start max-w-[85%] mb-2">
            <div className="bg-surface-container text-on-surface p-4 rounded-[16px] rounded-tl-sm shadow-sm border border-border-subtle font-body-md text-body-md">
              <span className={`font-bold transition-colors duration-300 text-[#d93025]`}>URGENT:</span> Your package delivery has been suspended due to an unpaid customs fee of 1.99€. If not paid in <span className="transition-colors duration-300">12 hours</span>, the package will be returned. Click here immediately to resolve: 
              <a href="#" onClick={handleLinkClick} className="text-tertiary underline break-words hover:opacity-80 transition-opacity ml-1">
                https://correos-pay-secure-293.com
              </a>
            </div>
          </div>
          {/* Timestamp */}
          <div className="text-center w-full mb-6 mt-1">
            <span className="text-on-surface-variant text-sm font-medium">Today 10:42 AM</span>
          </div>
        </div>

        {/* Bottom Input Area */}
        <div className="bg-surface border-t border-border-subtle p-gutter w-full z-10">
          <div className="flex items-center gap-3">
            <div className="flex-grow h-touch-target-min bg-surface-container rounded-full px-6 flex items-center border border-border-subtle hover:border-outline-variant transition-colors cursor-text">
              <span className="text-on-surface-variant font-body-md text-body-md select-none">Text Message</span>
            </div>
            <button className="h-touch-target-min w-[56px] flex-shrink-0 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:opacity-90 transition-transform active:scale-95 shadow-sm">
              <ArrowUp className="w-6 h-6 font-bold" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
