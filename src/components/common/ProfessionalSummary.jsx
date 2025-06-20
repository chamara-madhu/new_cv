const ProfessionalSummary = () => {
  return (
    <section id="summary" className="py-16 bg-purple-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Professional Summary</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            I am a highly skilled software engineer with 6 years of experience specializing in full-stack development,
            end-to-end software solutions, and research & development. Proficient in modern technologies such as 
            <span className="font-medium text-black"> React, Node.js, Next.js,</span> and <span className="font-medium text-black">NestJS</span>, 
            with expertise in cloud platforms like <span className="font-medium text-black">AWS</span>. 
            Adept at managing global clients and delivering innovative, scalable applications tailored to meet complex business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
