import React from 'react';
import { useRouter } from '../../lib/router';
import { ArrowLeft, Flame, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function LessonOutrage() {
  const { navigate } = useRouter();

  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-4">
        <button onClick={() => navigate('dashboard')} className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-slate-700" />
        </button>
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Lesson Player</span>
      </div>

      <h1 className="text-3xl font-bold text-slate-900 flex items-center">
        The Outrage Loop <Flame className="w-8 h-8 ml-3 text-orange-500" />
      </h1>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-6">
            Social media algorithms are designed to keep you engaged. One of the easiest ways to do that is by showing you content that makes you angry.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-6">
            <h3 className="font-bold text-orange-900 flex items-center mb-2">
              <AlertCircle className="w-5 h-5 mr-2" />
              How it works
            </h3>
            <p className="text-orange-800 text-sm">
              When you react angrily to a post, the platform learns that this type of content keeps you on the app longer. It then feeds you more of it, creating a loop of outrage.
            </p>
          </div>

          <h3 className="font-bold text-slate-900 text-xl mb-4">Break the loop</h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mr-3 mt-0.5">1</div>
              <span>Pause before commenting or sharing when you feel angry.</span>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mr-3 mt-0.5">2</div>
              <span>Use the "Not interested" button on enraging content.</span>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mr-3 mt-0.5">3</div>
              <span>Follow accounts that bring you joy or teach you something new.</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
