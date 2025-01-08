const bannedWords = {
  'larp': ['larp', 'larping', 'larper', 'roleplay', 'pretend'],
  'doesnt work': ['doesnt work', "doesn't work", 'not working', 'broken', 'non-functional', 'inoperable'],
  'bad': ['bad', 'terrible', 'awful', 'poor', 'horrible', 'garbage', 'trash'],
  'buggy': ['buggy', 'glitchy', 'bugged', 'glitch', 'broken', 'malfunctioning'],
  'fake': ['fake', 'phony', 'false', 'counterfeit', 'fraudulent', 'bogus', 'sham'],
  'scam': ['scam', 'fraud', 'con', 'swindle', 'hoax', 'deception', 'scheme'],
  'rug': ['rug', 'rugpull', 'rug pull', 'exit scam'],
  'dev sold': ['dev sold', 'developer sold', 'team sold', 'creator sold'],
  'rugger': ['rugger', 'scammer', 'fraudster', 'con artist'],
  'already done': ['already done', 'already exists', 'already made', 'been done', 'nothing new'],
  'already made': ['already made', 'copy', 'duplicate', 'clone', 'replica'],
  'duplicate': ['duplicate', 'copy', 'clone', 'knockoff', 'imitation', 'copycat']
};

export function containsBannedWords(message: string): boolean {
  const lowerMessage = message.toLowerCase();
  
  // Check for exact matches and variations
  for (const [_, synonyms] of Object.entries(bannedWords)) {
    for (const word of synonyms) {
      if (lowerMessage.includes(word)) {
        return true;
      }
      
      // Check for variations with spaces and special characters
      const wordRegex = new RegExp(
        word.replace(/\s+/g, '[\\s-_.]*'),
        'i'
      );
      if (wordRegex.test(lowerMessage)) {
        return true;
      }
    }
  }
  
  return false;
}

export function sanitizeMessage(message: string): string {
  let sanitized = message;
  const lowerMessage = message.toLowerCase();
  
  for (const [_, synonyms] of Object.entries(bannedWords)) {
    for (const word of synonyms) {
      // Create a regex that matches the word with potential spaces/special chars
      const wordRegex = new RegExp(
        word.replace(/\s+/g, '[\\s-_.]*'),
        'gi'
      );
      
      // Replace banned words with asterisks
      if (wordRegex.test(lowerMessage)) {
        sanitized = sanitized.replace(wordRegex, '*'.repeat(word.length));
      }
    }
  }
  
  return sanitized;
} 