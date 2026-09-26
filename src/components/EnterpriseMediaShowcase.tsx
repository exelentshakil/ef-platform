'use client';

import React, { useState, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Award,
  Video,
  FileText,
  Clock,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { mediaConfig } from '@/config/media';
import { siteConfig } from '@/config/site';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  posterUrl: string;
  workbookQuestion: string;
  defaultResponse: string;
  locked: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

const MODULES_DATA: Module[] = [
  {
    id: 'mod-1',
    title: 'Module 1: The Marriage Charter',
    lessons: [
      {
        id: 'l-1.1',
        title: '1.1 Foundations of Marital Intent',
        duration: '12:45',
        videoUrl: 'https://videos.pexels.com/video-files/18419649/18419649-hd_1280_720_30fps.mp4',
        posterUrl: 'https://images.pexels.com/photos/373272/pexels-photo-373272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        workbookQuestion: 'What are the three core principles you want to write into your marriage charter today?',
        defaultResponse: 'We want our marriage charter to prioritize open communication, active listening, and a joint weekly financial planning session to keep our goals aligned.',
        locked: false,
      },
      {
        id: 'l-1.2',
        title: '1.2 Aligning Family Boundaries',
        duration: '18:20',
        videoUrl: 'https://videos.pexels.com/video-files/18419649/18419649-hd_1280_720_30fps.mp4',
        posterUrl: 'https://images.pexels.com/photos/793428/pexels-photo-793428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        workbookQuestion: 'How will you structure holiday schedules and family visits with both sets of parents?',
        defaultResponse: 'We will establish clear agreements where we alternate major national holidays each year, allowing us to spend balanced time with both of our families without feeling rushed.',
        locked: false,
      },
    ],
  },
  {
    id: 'mod-2',
    title: 'Module 2: Communication Rules',
    lessons: [
      {
        id: 'l-2.1',
        title: '2.1 The Three-Hour Cool-Off Agreement',
        duration: '15:10',
        videoUrl: 'https://videos.pexels.com/video-files/18419649/18419649-hd_1280_720_30fps.mp4',
        posterUrl: 'https://images.pexels.com/photos/36342227/pexels-photo-36342227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        workbookQuestion: 'Describe how you will handle a high-intensity argument when one partner requests space.',
        defaultResponse: 'We will implement a mutual cool-off rule where either partner can request up to 3 hours to process thoughts calmly before returning to find a compromise together.',
        locked: true,
      },
      {
        id: 'l-2.2',
        title: '2.2 Establishing Conflict Boundaries',
        duration: '14:05',
        videoUrl: 'https://videos.pexels.com/video-files/18419649/18419649-hd_1280_720_30fps.mp4',
        posterUrl: 'https://images.pexels.com/photos/2793473/pexels-photo-2793473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        workbookQuestion: 'What are the specific language triggers or topics that are strictly prohibited during conflict?',
        defaultResponse: 'We agree never to bring up past resolved disagreements or use absolute generalizations during moments of emotional stress.',
        locked: true,
      },
    ],
  },
];

export function EnterpriseMediaShowcase() {
  const [modules, setModules] = useState<Module[]>(MODULES_DATA);
  const [activeLessonId, setActiveLessonId] = useState<string>('l-1.1');
  const [completedLessons, setCompletedLessons] = useState<string[]>(['l-1.1']);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Workbook text input state
  const [workbookInputs, setWorkbookInputs] = useState<Record<string, string>>({
    'l-1.1': MODULES_DATA[0].lessons[0].defaultResponse,
    'l-1.2': MODULES_DATA[0].lessons[1].defaultResponse,
    'l-2.1': MODULES_DATA[1].lessons[0].defaultResponse,
    'l-2.2': MODULES_DATA[1].lessons[1].defaultResponse,
  });

  const [syncStatus, setSyncStatus] = useState<Record<string, 'saved' | 'saving' | 'dirty'>>({
    'l-1.1': 'saved',
    'l-1.2': 'saved',
    'l-2.1': 'saved',
    'l-2.2': 'saved',
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  // Get active lesson object
  let activeLesson = modules[0].lessons[0];
  for (const m of modules) {
    const found = m.lessons.find((l) => l.id === activeLessonId);
    if (found) {
      activeLesson = found;
      break;
    }
  }

  const handleLessonSelect = (lesson: Lesson) => {
    if (lesson.locked && !completedLessons.includes(lesson.id)) {
      // Prevent selecting locked lessons unless unlocked
      return;
    }
    setActiveLessonId(lesson.id);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback if play is blocked
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTextChange = (text: string) => {
    setWorkbookInputs((prev) => ({ ...prev, [activeLessonId]: text }));
    setSyncStatus((prev) => ({ ...prev, [activeLessonId]: 'dirty' }));
  };

  const handleSyncWorkbook = () => {
    setSyncStatus((prev) => ({ ...prev, [activeLessonId]: 'saving' }));

    setTimeout(() => {
      setSyncStatus((prev) => ({ ...prev, [activeLessonId]: 'saved' }));

      // Auto-unlock next lesson if current one is saved and not already completed
      if (!completedLessons.includes(activeLessonId)) {
        const nextCompleted = [...completedLessons, activeLessonId];
        setCompletedLessons(nextCompleted);

        // Unlock logic: If we completed Module 1, let's unlock Module 2 lessons statefully
        const updatedModules = modules.map((m) => {
          if (m.id === 'mod-2') {
            return {
              ...m,
              lessons: m.lessons.map((l) => ({
                ...l,
                locked: false, // Unlock all lessons in Module 2 statefully!
              })),
            };
          }
          return m;
        });
        setModules(updatedModules);
      }
    }, 800);
  };

  // Compute stats
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedCount = completedLessons.length;
  const completionPercentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header: Two-tone title & Stripe eyebrow */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-1 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Member Portal Workspace</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
            Curriculum &amp; Interactive Learning.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              A seamless student-facing video dashboard paired with structured module progression and interactive workbook reflections.
            </span>
          </h2>
        </div>

        {/* Unified Member Portal Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg overflow-hidden">

          {/* Left Column: Lesson Navigation Sidebar (Cols: 4) */}
          <div className="lg:col-span-4 border-r border-[var(--color-border)] bg-[var(--color-panel-subtle)] flex flex-col justify-between h-[600px] lg:h-[680px]">
            {/* Sidebar Top: User Badge & Overall Progress */}
            <div className="p-5 border-b border-[var(--color-border)] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[var(--color-text-primary)]">John Doe (Member)</div>
                  <div className="text-[10px] font-mono text-[var(--color-text-muted)]">TIER: ELITE MEMBERSHIP</div>
                </div>
                <span className="px-2 py-0.5 rounded-[4px] bg-[#533AFD]/8 border border-[#533AFD]/20 text-[#533AFD] text-[10px] font-mono font-bold">
                  Active Course
                </span>
              </div>

              {/* Progress Bar Widget */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-[var(--color-text-muted)] font-semibold">PROGRAM COMPLETED</span>
                  <span className="text-[var(--color-text-primary)] font-bold">{completionPercentage}%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
                <div className="text-[9px] font-mono text-[var(--color-text-muted)] text-right">
                  {completedCount} of {totalLessons} Lessons Verified
                </div>
              </div>
            </div>

            {/* Sidebar Middle: Scrollable Lessons List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {modules.map((m) => (
                <div key={m.id} className="space-y-2">
                  <div className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider font-semibold px-1">
                    {m.title}
                  </div>

                  <div className="space-y-1">
                    {m.lessons.map((l) => {
                      const isSelected = l.id === activeLessonId;
                      const isCompleted = completedLessons.includes(l.id);
                      const isLocked = l.locked && !isCompleted;

                      return (
                        <button
                          key={l.id}
                          type="button"
                          onClick={() => handleLessonSelect(l)}
                          className={`w-full flex items-center justify-between p-2.5 rounded text-left border transition-all ${
                            isSelected
                              ? 'bg-[var(--color-surface)] border-[#533AFD] text-[#533AFD] shadow-2xs font-medium'
                              : isLocked
                              ? 'bg-slate-100/50 dark:bg-slate-900/50 border-transparent text-[var(--color-text-muted)] opacity-60 cursor-not-allowed'
                              : 'bg-transparent border-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:border-[var(--color-border)]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {isLocked ? (
                              <Lock className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                            ) : isCompleted ? (
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                            ) : (
                              <span className="w-2.5 h-2.5 shrink-0 rounded-full border border-slate-400" />
                            )}
                            <div className="truncate text-xs leading-tight">
                              {l.title}
                            </div>
                          </div>

                          <span className="text-[10px] font-mono opacity-60 shrink-0 pl-1.5">
                            {l.duration}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Bottom: Locked State Status Message */}
            <div className="p-4 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="rounded-lg bg-[#533AFD]/5 border border-[#533AFD]/10 p-3 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#533AFD] shrink-0 mt-0.5" />
                <div className="text-[10px] font-mono text-slate-600 dark:text-slate-300 leading-normal">
                  Our sequential path protects proprietary intellectual property. Complete and save current worksheets to automatically unlock advanced modules.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Content & Workbook Area (Cols: 8) */}
          <div className="lg:col-span-8 flex flex-col justify-between h-[600px] lg:h-[680px]">

            {/* Top Workspace Area: Video player and text */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">

              {/* Custom Video Player Wrapper */}
              <div className="relative rounded-xl overflow-hidden bg-black aspect-video border border-[var(--color-border)] group">
                <video
                  ref={videoRef}
                  src={activeLesson.videoUrl}
                  poster={activeLesson.posterUrl}
                  playsInline
                  className="w-full h-full object-cover opacity-90 transition-opacity"
                />

                {/* Video Play Gradient Overlay Screen */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-3xs flex items-center justify-center">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="p-4 rounded-full bg-[#533AFD] text-white hover:bg-[#432ecf] hover:scale-105 transition-all shadow-lg cursor-pointer"
                    >
                      <Play className="w-6 h-6 fill-white" />
                    </button>
                  </div>
                )}

                {/* Floating Bottom Control Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="text-white hover:text-[#533AFD] transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <span className="text-[10px] font-mono text-white/80">
                      {activeLesson.duration} walk-through video lesson
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="text-white hover:text-[#533AFD] transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Active Lesson Text and Prerequisite Summary */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                    {activeLesson.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--color-text-muted)]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Duration: {activeLesson.duration}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  This lesson walks through structural relationship planning rules designed to establish balanced boundaries. Ensure both partners are present during video walk-through and collaborate on the workbook response below.
                </p>
              </div>

            </div>

            {/* Bottom Workspace Area: Workbook Reflection Sheet */}
            <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-4">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 space-y-3 shadow-2xs">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#533AFD]">
                    <FileText className="w-4 h-4" />
                    <span>WORKBOOK REFLECTION SHEET</span>
                  </div>
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full font-mono ${
                      syncStatus[activeLesson.id] === 'saved'
                        ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40'
                        : syncStatus[activeLesson.id] === 'saving'
                        ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 animate-pulse'
                        : 'text-rose-500 bg-rose-50 dark:bg-rose-950/40'
                    }`}
                  >
                    {syncStatus[activeLesson.id] === 'saved'
                      ? 'Saved & Authenticated'
                      : syncStatus[activeLesson.id] === 'saving'
                      ? 'Syncing to DB...'
                      : 'Unsaved Changes'}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[var(--color-text-primary)] leading-normal">
                  {activeLesson.workbookQuestion}
                </div>

                <textarea
                  value={workbookInputs[activeLesson.id] || ''}
                  onChange={(e) => handleTextChange(e.target.value)}
                  rows={3}
                  placeholder="Type your personal relationship workbook details here..."
                  className="w-full text-xs p-3 bg-[var(--color-panel-subtle)] border border-[var(--color-border)] rounded-lg resize-none text-[var(--color-text-primary)] focus:outline-none focus:border-[#533AFD] focus:ring-1 focus:ring-[#533AFD]/20 leading-relaxed font-sans"
                />

                <div className="flex items-center justify-between pt-1">
                  <div className="text-[10px] font-mono text-[var(--color-text-muted)]">
                    Characters: <span className="font-bold text-[var(--color-text-primary)]">{(workbookInputs[activeLesson.id] || '').length}</span> (Requires 15+ to save)
                  </div>

                  <button
                    type="button"
                    disabled={
                      (workbookInputs[activeLesson.id] || '').trim().length < 15 ||
                      syncStatus[activeLesson.id] !== 'dirty'
                    }
                    onClick={handleSyncWorkbook}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#533AFD] hover:bg-[#432ecf] disabled:opacity-40 text-white rounded text-xs font-semibold font-mono tracking-wide transition-all cursor-pointer"
                  >
                    <span>{syncStatus[activeLesson.id] === 'saving' ? 'Syncing...' : 'Sync Response & Unlock'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
