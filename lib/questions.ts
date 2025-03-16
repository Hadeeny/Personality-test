
export const questions = [
  {
    question: "How do you typically handle conflict?",
    options: [
      { text: "Face it head-on and solve it quickly.", color: "red" },
      {
        text: "Try to talk your way out and lighten the mood.",
        color: "yellow",
      },
      { text: "Avoid it and keep the peace.", color: "green" },
      { text: "Analyze the situation before deciding.", color: "blue" },
    ],
  },
  {
    question: "When working in a team, what role do you naturally take?",
    options: [
      {text: "The leader who drives results.", color: 'red'},
      {text: "The energetic motivator.", color: 'yellow'},
      {text:"The supportive and cooperative member.", color: 'green'},
      {text:"The detail-oriented planner.", color: 'blue'},
    ],
  },
  {
    question: "What motivates you the most?",
    options: [
      {text: "Winning and achieving goals.", color: 'red'},
      {text: "Having fun and being around people.", color: 'yellow' },
      {text: "Feeling secure and maintaining good relationships.", color: 'green' },
      {text: "Accuracy, logic, and understanding details.", color: 'blue' },
    ],
  },
  {
    question: "How do you prefer to receive feedback?",
    options: [
      {text:"Direct and to the point.", color: 'red'},
      {text:"Positive and encouraging", color: 'yellow'},
      {text:"Gently, without criticism", color: 'green'},
      {text:"Detailed with specific points for improvement", color:'blue' },
    ],
  },
  {
    question: "What best describes your decision-making style?",
    options: [
      {text: "Fast and decisive.", color: 'red'},
      {text: "Spontaneous and creative.", color: 'yellow'},
      {text: "Thoughtful and people-focused.", color: 'green'},
      {text: "Logical and data-driven.", color: 'blue'},
    ],
  },
  {
    question: "If you have a tight deadline, how do you respond?",
    options: [
      {text: "Push through and get it done, no excuses.", color: 'red'},
      {text: "Look for a fun way to tackle it.", color: 'yellow'},
      {text: "Try to manage it without stressing out.", color: 'green'},
      {text: "Plan carefully and focus on precision.", color: 'blue'},
    ],
  },
  {
    question: "What’s your communication style?",
    options: [
      {text:"Clear, direct, and goal-oriented.",  color: 'red'},
      {text:"Expressive, enthusiastic, and engaging.",  color: 'yellow'},
      {text:"Friendly, calm, and considerate.",  color: 'green'},
      {text:"Formal, structured, and factual.",  color: 'blue'},
    ],
  },
  {
    question: "How do you approach new challenges?",
    options: [
      {text: "With confidence and determination.", color: 'red'},
      {text: "With excitement and curiosity.", color: 'yellow'},
      {text: "With caution and a steady pace.", color: 'green'},
      {text: "With careful research and planning.", color: 'blue'},
    ],
  },
  {
    question: "What type of work environment suits you best?",
    options: [
      {text: "Fast-paced, competitive, and goal-driven.", color: 'red'},
      {text: "Creative, dynamic, and social.", color: 'yellow'},
      {text: "Stable, supportive, and predictable.", color: 'green'},
      {text: "Structured, organized, and detail-focused.", color: 'blue'},
    ],
    
  },
  {
    question: "How do you handle stress?",
    options: [
      {text: "Power through it and push harder.", color: 'red'},
      {text: "Distract yourself with something fun.", color: 'yellow'},
      {text: "Seek comfort and reassurance from others.", color: 'green'},
      {text: "Retreat, reflect, and analyze the situation.", color: 'blue'},
    ]
  },
] as const;

export const personalty = {
  blue: ["Conscientious", "systematic", "Distant", "Correct", "Conventional", "Seems insecure", "Objective", "Structural", "Analytical", "perfectionist", "Needs time", "Reflecting"],
  red: ['Aggressive', 'Ambitious', 'Strong willed', 'Goal oriented', 'Pushing', 'Problem solver', 'Pioneer', 'Decisive', 'Innovator', 'Impatient', 'Controlling', 'Convincing', 'Performance-oriented', 'Powerful', 'Result-oriented', 'initiator', 'speed', 'Timekeeper', 'Intense'],
  yellow: ['Talkative', 'Enthusiastic', 'Persuasive', 'Creative', 'Optimistic', 'Social', 'Spontaneous', 'Expressive', 'Charming', 'Full of vitality', 'Sensitive', 'Adaptable', 'Inspiring', 'Needs attentioin', 'Encouraging', 'Communicative', 'Flexible', 'Open', 'Social', 'Imaginative', 'Easygoing'],
  green: ['Patient', 'Relaxed', 'Self-controlled', 'Reliable', 'Composed', 'Loyal', 'Modest', 'Understanding', 'Lengthy', 'Stable', 'Prudent', 'Discreet', 'Supportive', 'Good listener', 'Helpful', 'Producer', 'Persistent', 'Reluctant to change', 'Thoughtful', 'Conceals feelings', 'Considerate', 'Kind']
}
