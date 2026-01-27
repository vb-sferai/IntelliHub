// Tool logos
import LogoMake from '../assets/logo-make.svg';
import LogoCursor from '../assets/logo-cursor.svg';
import LogoChatGPT from '../assets/logo-chatgpt.svg';
import LogoClaude from '../assets/logo-claude.svg';
import LogoClaudeCode from '../assets/logo-claudecode.svg';
import LogoHiggsfield from '../assets/logo-higgsfield.svg';
import LogoGamma from '../assets/logo-gamma.svg';
import LogoGemini from '../assets/logo-gemini.svg';
import LogoGithub from '../assets/logo-github.svg';
import LogoN8n from '../assets/logo-n8n.svg';
import LogoSupabase from '../assets/logo-supabase.svg';

export const ToolsLogosSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-20 lg:mt-28 mb-8 lg:mb-16 w-full items-center">
      <p className="text-sm text-[#858585]">Будем изучать и использовать</p>

      {/* Desktop Layout (lg+) - 2 rows: 6 logos + 5 logos */}
      <div className="hidden lg:flex flex-col gap-8 w-full max-w-[1274px] h-[256px] items-center justify-center">
        {/* First Row - 6 logos */}
        <div className="flex justify-center items-center gap-10 w-full">
          <img src={LogoMake} alt="Make" className="h-[72px]" />
          <img src={LogoCursor} alt="Cursor" className="h-[60px]" />
          <img src={LogoChatGPT} alt="ChatGPT" className="h-[72px]" />
          <img src={LogoClaude} alt="Claude" className="h-[60px]" />
          <img src={LogoClaudeCode} alt="Claude Code" className="h-[60px]" />
          <img src={LogoHiggsfield} alt="Higgsfield" className="h-[60px]" />
        </div>
        {/* Second Row - 5 logos */}
        <div className="flex justify-center items-center gap-10 w-full">
          <img src={LogoGamma} alt="Gamma" className="h-[60px]" />
          <img src={LogoGemini} alt="Gemini" className="h-[60px]" />
          <img src={LogoGithub} alt="GitHub" className="h-[60px]" />
          <img src={LogoN8n} alt="n8n" className="h-[60px]" />
          <img src={LogoSupabase} alt="Supabase" className="h-[60px]" />
        </div>
      </div>

      {/* Mobile Layout (до lg) - 4 rows: 3-3-3-2 arrangement */}
      <div className="flex lg:hidden flex-col gap-5 w-full items-center">
        {/* Row 1: Make, Cursor, ChatGPT */}
        <div className="flex flex-wrap justify-center items-center gap-5">
          <img src={LogoMake} alt="Make" className="h-10" />
          <img src={LogoCursor} alt="Cursor" className="h-9" />
          <img src={LogoChatGPT} alt="ChatGPT" className="h-10" />
        </div>
        {/* Row 2: Claude, Claude Code, Higgsfield */}
        <div className="flex flex-wrap justify-center items-center gap-5">
          <img src={LogoClaude} alt="Claude" className="h-9" />
          <img src={LogoClaudeCode} alt="Claude Code" className="h-9" />
          <img src={LogoHiggsfield} alt="Higgsfield" className="h-9" />
        </div>
        {/* Row 3: Gamma, Gemini, GitHub */}
        <div className="flex flex-wrap justify-center items-center gap-5">
          <img src={LogoGamma} alt="Gamma" className="h-9" />
          <img src={LogoGemini} alt="Gemini" className="h-9" />
          <img src={LogoGithub} alt="GitHub" className="h-9" />
        </div>
        {/* Row 4: n8n, Supabase */}
        <div className="flex flex-wrap justify-center items-center gap-5">
          <img src={LogoN8n} alt="n8n" className="h-9" />
          <img src={LogoSupabase} alt="Supabase" className="h-9" />
        </div>
      </div>
    </div>
  );
};
