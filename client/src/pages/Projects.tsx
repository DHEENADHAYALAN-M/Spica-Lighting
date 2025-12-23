import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useProjects } from "@/hooks/use-projects";
import { Loader2, MapPin } from "lucide-react";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Selected Works" subtitle="Portfolio" />

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (projects && projects.length > 0) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  index % 3 === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                }`}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-xs uppercase tracking-widest mb-2 block">{project.type}</span>
                    <h3 className="text-2xl text-white font-display mb-2">{project.title}</h3>
                    {project.location && (
                      <div className="flex items-center text-zinc-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Fallback static content for demo purposes if DB is empty */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            <motion.div className="group relative overflow-hidden rounded-xl cursor-pointer md:col-span-2 aspect-video">
              {/* Corporate headquarters */}
              <img 
                src="/assets/corporate_tech_park.png" 
                alt="Corporate Tech Park"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                <span className="text-primary text-xs uppercase tracking-widest mb-2 block">Corporate Lighting</span>
                <h3 className="text-3xl text-white font-display">Corporate Headquarters - Tech Park</h3>
              </div>
            </motion.div>
            
            <motion.div className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]">
              {/* Premium residential villa */}
              <img 
                src="/assets/premium_residential_villa.png" 
                alt="Premium Residential Villa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                <span className="text-primary text-xs uppercase tracking-widest mb-2 block">Residential</span>
                <h3 className="text-2xl text-white font-display">Premium Residential Villa</h3>
              </div>
            </motion.div>
            
            <motion.div className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]">
              {/* Apollo hospital */}
              <img 
                src="/assets/apollo_hospital_wing.png" 
                alt="Apollo Hospital Wing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                <span className="text-primary text-xs uppercase tracking-widest mb-2 block">Healthcare Lighting</span>
                <h3 className="text-2xl text-white font-display">Apollo Hospital Wing</h3>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
