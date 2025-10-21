export type ActivityType = 'online-class' | 'assignment' | 'quiz' | 'discussion';
export type ActivityStatus = 'not-started' | 'in-progress' | 'completed' | 'overdue';
export type ActivityDifficulty = 'beginner' | 'intermediate' | 'advanced';
export type ClassType = 'live' | 'recorded';

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: ActivityType;
  status: ActivityStatus;
  difficulty: ActivityDifficulty;
  tags: string[];
  classType?: ClassType;
  isLive?: boolean;
  instructor?: string;
  duration?: number;
  points?: number;
  startTime?: string;
  dueDate?: string;
  progress?: number;
  score?: string;
}

export interface FilterOptions {
  type?: ActivityType[];
  status?: ActivityStatus[];
}
