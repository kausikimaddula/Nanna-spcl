/**
 * ============================================================
 * BACKGROUND MUSIC CONFIGURATION FOR NANNA'S SPECIAL DAY ❤️
 * ============================================================
 * 
 * How to add your song:
 * 1. Place your audio file inside the `public/audio/` folder.
 * 2. Rename it to `song.mp3` (or update the filename below).
 * 3. Supported formats: .mp3, .m4a, .wav, .aac, .ogg
 */

export const AUDIO_CONFIG = {
  // Path to your song file in public/audio/
  src: '/audio/song.mp3',
  title: "Nanna Nuvvu Na Pranam ❤️",
  
  // Settings
  autoplayOnInteraction: true, // Automatically starts playing when Nanna interacts with the screen
  loop: true,                 // Loops continuously
  volume: 0.75,               // Default volume (0.0 to 1.0)
};
