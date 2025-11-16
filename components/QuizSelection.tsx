import React, { useState, useEffect } from 'react';
import type { Quiz, Section } from '../types';
import { subjects } from '../data';
import { QuizCard } from './QuizCard';
import { SectionCard } from './SectionCard';

interface QuizSelectionProps {
  onStartQuiz: (quiz: Quiz) => void;
}

export const QuizSelection: React.FC<QuizSelectionProps> = ({ onStartQuiz }) => {
  const [activeTab, setActiveTab] = useState<string>(subjects[0].id);
  const [path, setPath] = useState<string[]>([]);

  // Reset path when subject tab changes
  useEffect(() => {
    setPath([]);
  }, [activeTab]);

  const activeSubject = subjects.find(s => s.id === activeTab);

  const getBreadcrumbsAndContent = () => {
    if (!activeSubject) {
      return { breadcrumbs: [], content: [] };
    }

    const breadcrumbs: { name: string; newPath: string[] }[] = [
      { name: activeSubject.name, newPath: [] }
    ];
    let currentContent: (Quiz | Section)[] = activeSubject.content;
    let currentPathSlice: string[] = [];
    
    for (const sectionId of path) {
      currentPathSlice.push(sectionId);
      const nextSection = currentContent.find(item => item.type === 'section' && item.id === sectionId) as Section;
      if (nextSection) {
        breadcrumbs.push({ name: nextSection.name, newPath: [...currentPathSlice] });
        currentContent = nextSection.content;
      } else {
        // Path is invalid, break and show empty content
        currentContent = [];
        break;
      }
    }
    return { breadcrumbs, content: currentContent };
  };

  const { breadcrumbs, content } = getBreadcrumbsAndContent();

  const handleSectionEnter = (sectionId: string) => {
    setPath([...path, sectionId]);
  };

  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap bg-white rounded-2xl p-2.5 mb-8 shadow-md">
        {subjects.map(subject => (
          <button
            key={subject.id}
            onClick={() => setActiveTab(subject.id)}
            className={`flex-grow text-center py-4 px-2.5 border-none cursor-pointer text-base font-bold rounded-xl transition-all duration-300 min-w-[150px] ${
              activeTab === subject.id
                ? 'bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-[0_5px_15px_rgba(59,130,246,0.3)]'
                : 'bg-transparent text-gray-600 hover:bg-gray-100'
            }`}
          >
            {subject.name}
          </button>
        ))}
      </div>
      
      {activeSubject && (
        <div className="flex items-center flex-wrap gap-2 text-lg font-semibold text-gray-600 mb-6 bg-white p-4 rounded-2xl shadow-sm">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <button 
                onClick={() => setPath(crumb.newPath)}
                disabled={index === breadcrumbs.length - 1}
                className={`hover:text-blue-600 transition-colors disabled:cursor-default ${index === breadcrumbs.length - 1 ? 'text-blue-700 font-bold' : ''}`}
              >
                {crumb.name}
              </button>
              {index < breadcrumbs.length - 1 && <span className="text-gray-400">/</span>}
            </React.Fragment>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content && content.length > 0 ? (
          content.map(item => {
            if (item.type === 'section') {
              return <SectionCard key={item.id} section={item} onEnter={() => handleSectionEnter(item.id)} />
            }
            if (item.type === 'quiz') {
              return <QuizCard key={item.id} quiz={item} onStart={() => onStartQuiz(item)} />
            }
            return null;
          })
        ) : (
          <div className="col-span-full text-center text-2xl font-bold text-blue-900 bg-white p-12 rounded-2xl">
            <p>{path.length > 0 ? 'هذا القسم فارغ حالياً.' : 'الأسئلة قادمة قريباً...'}</p>
          </div>
        )}
      </div>
    </div>
  );
};
