import React from 'react';
import { useRouter } from '../../lib/router';
import { ArrowLeft, Stethoscope, Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function LessonMedical() {
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
        My Medical Appointment <Stethoscope className="w-8 h-8 ml-3 text-teal-600" />
      </h1>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <p className="text-lg text-slate-700 mb-6">
          Booking a medical appointment online is faster and more convenient. Let's practice how to do it safely.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-slate-900 mb-4 text-center">Interactive Practice</h3>
          
          <div className="space-y-4 max-w-sm mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer hover:border-teal-300 transition-colors">
               <div className="flex items-center text-slate-700">
                 <Calendar className="w-5 h-5 mr-3 text-teal-600" />
                 <span className="font-medium">Select Date</span>
               </div>
               <span className="text-sm text-slate-400">Oct 12</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center justify-between cursor-pointer hover:border-teal-300 transition-colors">
               <div className="flex items-center text-slate-700">
                 <Clock className="w-5 h-5 mr-3 text-teal-600" />
                 <span className="font-medium">Select Time</span>
               </div>
               <span className="text-sm text-slate-400">10:30 AM</span>
            </div>
            
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg mt-4 transition-colors">
              Confirm Appointment
            </button>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl text-blue-800 text-sm">
          <strong>Remember:</strong> Only share your medical information on official hospital or clinic websites. Look for the padlock icon in the browser address bar.
        </div>
      </div>
    </motion.div>
  );
}
