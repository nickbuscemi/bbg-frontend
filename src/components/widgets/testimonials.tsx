import { useScript } from "@/hooks/useScript"

const Testimonials: React.FC = () => {
    
    const elfsightScriptUrl = "https://static.elfsight.com/platform/platform.js";
    
    useScript(elfsightScriptUrl);
    
  
    return (
        <div className="bg-dark-1 pt-12">
      <div className="elfsight-app-2dde7d77-02e2-4a3a-a045-5fda0cab8dfc" data-elfsight-app-lazy></div>
      </div>
      );
  };
  
  export default Testimonials;