import type { Activity } from '../types/activity';

export const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Introduction to Neural Networks',
    description:
      'Learn the fundamentals of neural networks, including perceptrons, activation functions, and backpropagation. This interactive session includes live coding examples.',
    type: 'online-class',
    status: 'not-started',
    difficulty: 'beginner',
    isLive: true,
    instructor: 'Dr. Sarah Johnson',
    duration: 90,
    startTime: '2025-10-21T14:00:00Z',
    tags: ['AI', 'Neural Networks', 'Beginner'],
  },
  {
    id: '2',
    title: 'Build a CNN for Image Classification',
    description:
      'Implement a convolutional neural network using TensorFlow to classify images from the CIFAR-10 dataset. Submit your Jupyter notebook.',
    type: 'assignment',
    status: 'in-progress',
    difficulty: 'intermediate',
    dueDate: 'Oct 23, 2025',
    points: 100,
    progress: 45,
    tags: ['Deep Learning', 'CNN', 'TensorFlow'],
  },
  {
    id: '3',
    title: 'Deep Learning Fundamentals Quiz',
    description:
      'Assessment covering neural network architectures, optimization algorithms, and regularization techniques.',
    type: 'quiz',
    status: 'completed',
    difficulty: 'intermediate',
    duration: 30,
    score: '85/100 (Pass)',
    tags: ['Quiz', 'Deep Learning'],
  },
  {
    id: '4',
    title: 'Ethics in AI: Bias and Fairness',
    description:
      'Share your thoughts on how to identify and mitigate bias in machine learning models. What are the ethical implications?',
    type: 'discussion',
    status: 'in-progress',
    difficulty: 'beginner',
    dueDate: 'Oct 25, 2025',
    tags: ['AI Ethics', 'Discussion'],
  },
  {
    id: '5',
    title: 'Advanced RNNs and LSTMs',
    description:
      'Dive deep into Recurrent Neural Networks and Long Short-Term Memory networks for sequence data processing.',
    type: 'online-class',
    status: 'not-started',
    difficulty: 'advanced',
    instructor: 'Dr. David Lee',
    duration: 120,
    startTime: '2025-10-28T16:00:00Z',
    tags: ['RNN', 'LSTM', 'Advanced'],
  },
  {
    id: '6',
    title: 'Final Project: AI Model Deployment',
    description:
      'Deploy a trained machine learning model to a cloud service. This assignment tests your end-to-end skills.',
    type: 'assignment',
    status: 'overdue',
    difficulty: 'advanced',
    dueDate: 'Oct 18, 2025',
    points: 250,
    tags: ['Deployment', 'Cloud', 'Final Project'],
  },
];
